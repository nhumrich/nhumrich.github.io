---
title: "REST is dead"
date: 2024-08-04
tags: [api, rest, graphql, rpc]
draft: false
---

Nothing feels so ubiquitous as REST. With how widely adopted REST is, its surprising how little of a standard there actually is. Everyone seems to have their own understanding of what REST is, and they pick and choose principles from it, ignoring the rest. This frustration of REST has led a lot to wonder what out there is better. A lot of people have started to look into GraphQL as a potential replacement.

Hopefully in this article I can help you know when to choose REST, when to choose GraphQL, and when to choose neither.

## Why did REST win?

Sometimes in order to understand the nature of a thing, you have to understand the mindset of the person who made the thing. Or, in other words: history matters. REST became king in a world where two things were happening:

- The age of API's. Lots of services started to offer API's for people. Weather data, geological data, etc. It become a standard way for programmers to share complex information.
- SOAP was currently king.

The main premise of REST is in the name: State Transfer. REST was designed for applications where the API (or backend) was primarily a facade into a database. The API was a cacheable way for lots of clients to access said database. The beauty of REST is that each individual object has its own URL (e.g. books/1234), so its very easy to cache objects to take load off your server. This is why REST encourages ID's in the URL.

If you have a public API, REST is still probably a great pattern for you. By public I mean the data is the same no matter the user. For example: weather data, cat pictures, or even star wars information.

REST also won because it wasn't SOAP. SOAP is an older RPC standard. The main problem with SOAP is that it tied itself to XML. XML was complex, and as such, became a huge security vector. As security concerns of XML rose, javascript also gained popularity. These two things led people to prefer JSON based API's to XML ones. REST wrongfully became synonymous with "JSON based API", or more accurately "Not-XML".

## What about GraphQL

With the realization that REST doesn't actually mean anything, facebook decided to go back to the drawing board and invent their own standards from the ground-up. The result? GraphQL. The main advantage that draws people to GraphQL is that it is actually a standard. There is only one way to do GraphQL. You cannot "reinvent" GraphQL, as all the existing clients would break. There are a bunch of other "reasons" people claim to like GraphQL, but those *actually* are all part of REST.

![REST vs GraphQL vs RPC](/media/devto/r88anztxob0dgu2dkdw5.png)

For example:

- "GraphQL allows you to take 10 requests, and make it a single request. Less data fetching": *Actually* there are some REST standards that allow you to include sub-data or related data to objects such as HAL, but most implementations would allow you to set an "expanded" field in the query params. REST certainly allows you to do this if you wanted to implement it, way easier than migrating to GraphQL

- "GraphQL allows you to make a single request smaller by only sending the fields I am interested in": *Actually,* many implementations of REST allow you to pass which fields you want back in the query param in order to shorten the request size. Also, this isn't nearly as big of a deal in an http/2+ world.

- "GraphQL allows you to specific how many objects you want back" (for example `first: 2`): *Actually* almost all mature implementations of REST allow you to set page sizes for pagination and give custom sort parameters.

- "GraphQL allows devs to discover api and object contracts": *Actually* REST is supposed to have this with both HATEOAS and the "OPTIONS" method. However, I will give props to GraphQL on this one because most people don't implement this in REST. However, with the recent popularity of OpenAPI (swagger), it feels like this one is becoming less of a concern.

- "GraphQL has better tooling": Wait... hold up... installing a client and having to "discover" an API is better than clicking on a link in a browser? Sorry, its hard to beat the ease of REST.

I looked up a bunch of other benefits that people claim for GraphQL and honestly, I can't find a single PRO to graphQL that can't be true for REST.

That is however, except for one thing:

**GraphQL is actually a standard**

This is one thing GraphQL has going for it.

That being said, GraphQL does feel like a good fit for basic applications where you want the API to act like an ORM so you can keep 90% of your business logic in frontend.

## Cons of GraphQL

Everything comes with tradeoffs. That includes GraphQL. The exception with GraphQL however, is it comes with cons, but with only one pro: standards.

So, here are some things about GraphQL you have to consider before adopting it:

- **A single endpoint**: GraphQL makes all requests through a single endpoint. This makes it hard to track metrics/logs on a "per request" level. Datadog/graphana/etc all expect different "endpoints" to have different URL's. Pretty much no tool will work out of the gate for tracking usage/metrics. There are so many other cons to sharing a single endpoint. But the main point is: {tool} does not support it out of the gate, so suddenly you find yourself reimplementing things that would otherwise be 5 minutes of effort.

- **Performance**: Similar to above, there is no easy way to know the performance of a single "endpoint" because a single request is a custom "query" by the client.

- **Throttling**: If you expose your API to 3rd parties, some might abuse it. With a REST api you can add throttling, either globally, or per endpoint. With graphql, a single request could be a massive hit to performance, whereas another client could have 100's of simple fast requests. So there is no easy way to throttle clients.

- **Only a read standard**: More on this below, but graphql has no say/standards around how writes should work, only reads.

- **Security**: Because every field can be requested, you have to check permissions on every single field instead of just at an endpoint level.

- **N+1 problem**: GraphQL is essentially an ORM for the frontend. It allows clients to ask for queries that otherwise might not be very performant.

But lets talk about something else. In all my years writing RESTful API's and doing contract negotiation, there have been a lot of debates on how to do various things in the API. Having standards would have been nice, they would have resolved a lot of discussions quickly. There are three very common, unresolved, debates in the REST world:

1. Where do you put IDs? What about nested Objects? Is it `owners/12442/dogs/89203` or `dogs/89203`? What goes in the URL versus the body on PUT's (updates)

2. How do you update nested objects? For example, say you have a person with an "addresses" attribute. How do you update it? Does a PATCH replace the list whole-sale with the one I provided? How do you "add" to a child list without idempotency/race-condition issues?

3. How do you deal with non-CRUD business logic? Say for example you want an API for "trigger upload". This doesn't actually return an object. Its not "state transfer" its "create side effects", which breaks out of the model of REST.

GraphQL certainly resolves #1 because the standard says that all objects live in a global namespace, and ID's go on each object, with child objects below. However #2 isn't resolved at all by GraphQL, you still have to have this discussion. And #3 is only resolved by GraphQL in a weird way. See, we have been talking about the advantage to GraphQL being "standards", but GraphQL is only a Query Language. It only standardizes the reads (GET's in REST land). There is actually no standard at all for how to deal with updates/creates/deletes. The lack of standards actually makes GraphQL more palatable. A lot of REST people get too caught up in adhering to REST principles, and end up overcomplicating it. So, GraphQL's benefit here is actually not standards, but the lack thereof. By removing standards, all philosophic debate ceases to exist, and most devs just fallback to RPC.

## So what's ideal?

Most API's these days are "private" APIs. Private meaning, the API returns data unique to the current logged in user. If you get "books" and I get "books", we will get a different list because its our own data.

REST was not built for private API's, and GraphQL introduces some concerns.

If we were take the ideas together and try to build the "perfect" system for a private API, what would that look like?

1. We would need a clear way to get the schema of an endpoint, and discover its shape: Discoverable, Strongly Typed contract
2. We need an endpoint for each action
3. No ID's in the URL at all. A url represents an "endpoint". 1:1 mapping between handler/URL.
4. A standard way to handle updates, not just reads
5. A way to handle actions beyond CRUD
6. Uses serialization native to the browser/javascript
7. Is useable in any language/cross-platform

I only know of one existing standard that checks all these boxes: SOAP

Okay, okay, I am only partially joking. SOAP is in fact the only standard I know of that checks these boxes, but we probably should add one more requirement:

8. Doesn't use XML

There are a couple modern tools that come close but don't quite check all the boxes:

**TRPC**: Is only useable in typescript, and doesn't provide any standards around updates

**GRPC**: Is not browser native, and doesn't provide any standard around updates

## Lets Over-Engineer

Since there isn't really a good off the shelf product that checks all the boxes, let's do what engineers do: Invent our own! But hold up, if we are going to go through the effort of inventing our own, let's look at some other things.

So far, we have discussed REST and GraphQL. REST is very good at state transfer, and GraphQL is good for relationship data modeling. However, most of the applications I write these days only have one client: the frontend.

Also, the "backends for frontends" design pattern would encourage the frontend, and an external API, to be different anyways. So, I would like to design a standard to use, specifically for front-end consumption.

When using an API on the frontend, state transfer based API's can lead to problems where too much business logic is on the frontend. For example, if you want to add a new "song" and assign it to a "composer" and a "producer", you would have to create the song, then add the relationships after. If one of those things fails, the Frontend now has to handle it. Or, you can let the business logic be on the backend, and build a "remote function" specifically for that thing, `createSong()` which maybe optionally takes a composer ID and a producer ID. This pattern would be RPC. This encourages us to create functions specific to user behavior, rather than making the frontend control business logic and modifying state itself.

When writing a front-end application, the one main concern that all frontends deal with is state. What needs to happen and be updated when a user clicks a button? Or what happens when a user deletes a thing?

If we were to use graphQL or REST, the frontend would be responsible for knowing what things to even look for. For example, lets say you delete an author. When the author is deleted, all of their books are deleted as well. In order for the frontend to know that the books are deleted, it would have to specifically ask for the new list of books. The thing about deleted things is there is no way to get a list of deleted things, so instead you have to get a list of all books, and do a diff, and update the diff.

It might not be too hard to know that books are deleted when an author is. But now imagine a couple months later, we add an audiobook feature. In order for the frontend to correctly update state for audiobooks, they now have to go back and modify the original query for delete author, and also check for audiobooks. What the frontend ultimately wants to know in this situation is, "what are the side effects of this action."

This means there are two use-cases for frontend API's.

1. **Gathering initial state.** When a frontend component initially loads, it needs to go to the backend to gather all the data.

2. **Update state.** When a user takes an action, the frontend needs to potentially update multiple components.

We can design our API's around this.

1. RPC calls for gathering initial state are able to provide additional information and relationships. Essentially the equivalent of "GET" in rest.

2. RPC calls for taking action. Unlike in REST, these return nothing by default. Instead of them returning a specific object, they return a list of "events". The backend generates a single event for every side effect that happens due to the action. This way, the backend is responsible for telling the frontend what needs to change.

Here is an example of a response with events:

```
POST /authors.delete
{"id": "12345"}
```

Response:
```json
{"_events": [
   {"author.deleted": {"id": "12345", "name": "bob"}},
   {"book.deleted": {"id": "1111", "title": "Musings of a software engineer"}},
   {"audiobook.deleted": {"id": "1000", "title": "Hills to die on"}}
]}
```

As for the GETS (or `list`), here is an example of how you can get child relationships:

```
POST /authors.list
{"_include": ["books", "audiobooks"]}
```

Response:
```json
{"authors": [
    {"id": "12345", "name": "bob"},
    {"id": "22341", "name": "sally"}
],
"_includes": {
    "books": [
        {"id": "1111", "title": "Musings of a software engineer"},
        {"id": "1010", "title": "Things on my shelf"}
    ],
    "audiobooks": [
        {"id": "1000", "title": "Hills to die on"}
    ]
}}
```

---

*Originally published on [Dev.to](https://dev.to/nhumrich/rest-is-dead-1p4f)*
