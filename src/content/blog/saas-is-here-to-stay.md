---
title: "SaaS is not dead. Calm Down."
date: 2026-08-18
tags: [saas, ai, open-source, fud]
draft: false
---

One of the largest tropes I have heard recently is that "SaaS is dead." I thought this would only last a couple of months, so I decided to say nothing, and let it play out. But I keep hearing it still. Those who have read my blog before probably know that I hate when people spread unwarranted fear, uncertainty, and doubt. So here is yet-another, defend-the-old-guard post. I will attempt to prove to you that SaaS is here to stay. 

## The elephant in the room

However, in order to properly address my comment of, "SaaS here to stay", I have to first explain that SaaS is, well a very very broad category. When I say SaaS is here to stay, I mean, the business model as a whole, is still solid, and will continue to be solid. There _is_ a small subset of SaaS companies that are dieing right now. Companies that are now almost entirely unviable in the age of AI. So first, before I tell you why SaaS is solid, let me first tell you that subset of SaaS, that is in fact, toast.

I am sure there are more, but right now, the main three categories are:
1. Companies that sell a very simple solution to a problem that requires zero collaboration. Micro-saas type things. 
2. Companies that sell "convenience as a service" on top of a free product. (Boilerplate type stuff)

I don't want to spend too much time on these, but #1 is "ai will ultimately replace it, just talk to it for this thing". On number two, we can watch tailwind as a company fall down this. The product itself is free, but they made money selling you "pre-built" solutions, which you still had to tweak. And now, no one is paying for boilerplate stuff, because AI is very good at boilerplate and doesn't need to be tweaked as much. I am sure there are other broad categories, but the point of this section is to say, "Yes, there are lots of SaaS COMPANIES that are now dead", but that doesn't mean SaaS in general is. 

## Open Source

My entire argument is to take a look at history, and see how it played out. By studying the open source model, we can watch consumer behavior, and extrapolate. 
The open source model: give everything away FOR FREE! Well, not everything. But mostly everything. At least, give away what most consider to be, the "expensive" part.
Lets take a look at a crowd favorite: hashicorp. Hashicorp is a well known dev company. It sold for 6.4 billion. Thats the equivalent of 6 "unicorn" saas companies. Every single one of hashicorp products, was free. All of them. Not a single paid product. How did they make money then? Two things: "hosted" versions of their already free product, and "support". Both of those are very interesting, so we will drill into each. But for now, the most important part is this:

* You want a product
* There is a top-tier product already on the market
* It is free. 
* You can take it. 
* You can host it.
* And you pay NOTHING

And yet, people still paid. Now, dont get me wrong, there are significantly more hashicorp users that pay nothing than there are those who don't. So free-only users certainly exist. But hashicorp STILL managed to have happy paying customers despite giving away everything for free. Turns out, the two things they charged for, are actually pretty important. I would say, there are actually 3 levers of open source that convince someone to pay for it, they charged for all 3 of the three. But one (patching) is sort of on the fence whether it was a paid service or not. 

## Hosting

When using open source software, you have two choices: 
1. Run it on your own infrastructure
2. Pay someone else to run it (cloud)

With #2, the cost was often cheaper than running yourself, because the company that hosts it wins the economies of scale, and pays near $0 to add a low-usage customer. 
Even if paying someone else is _more expensive_ than running it yourself, there are many hidden costs to running yourself. The obvious one is the human time needed to get it up and running. But also the time for maintaining. What is maintaining? mostly problem three, which I will get to: patching. Hosting is also almost never as easy as "put it on a server." It requires _other_ things as well. For example, you need a database. And you need a message queue, and a ... etc. Making one of these open source products highly available for your company often requires your own dedicated person to understand it. Granted, said person is not full time working on this one thing, so its not quite the cost of their salary. But it is a portion.

## Support

Once you start using a product your company depends on, you often have a need to reach out for questions. Some of those questions become fairly urgent. Say you use a source code repo, and there is a bug, and your devs need to get a hotfix out RIGHT NOW. But the bug is preventing it. After that happens once, and you loose a lot of money, you decide to pay someone to be available for help if it ever happens again. This is effectively "insurance" for a product. Paying for support lets you sleep at night, knowing that if anything goes wrong, someone will be there to help you specifically. This is the opposite of shouting into a giant box hoping someone replies (most of the internet).

## Patching

Patching is the idea that software has bugs. Some of those bugs are security bugs. Bugs so bad, it allows people outside the company to do things they shouldn't. Patching allows this software to be updated such that these bugs go away over time, and once a vulnerability (security bug) is found, its fixed. In the open source model, the developers will patch the code for you. But, if you are hosting yourself, you ALSO have to download/update/deploy the new version. So every patch they fix for you, is still time YOU have to spend keeping the server up-to-date. This is the main concern when people talk about "maintaining". (Though, it includes other things too)


# Now, lets vibe code

Now, lets assume you don't want to use some SaaS product because you can "vibe" a replacement overnight. Here is the math:
* Building: free (well, not free, but you already pay $100/month for ai anyways, so its sunken cost really)
* Your time to build: free (well, not free, but its fun, so you discount it as free)
* Hosting cost: unknown
* support: there is none
* patching: say what now?

You have now built an inferior product, that you have to host, that you get no support for, and you have to personally patch if anything happens. This is _worse_ than the open source model where you literally pay nothing if you want. At least on the open source model, there is a) a company dedicated to solving the problem is a structured way. b) someone actually fixing bugs c) support available if you need it, even if you dont pay for it _yet_.

# Why SaaS?

The reason why SaaS was attractive to buyers in the first place is the last three letters: as-a-service. Having a portion of your business, effectively "outsourced" (via a software solution) is very attractive. Business-to-business SaaS is often referred to as "partners" instead of "customers" because communication is wide, the customers get support. They get a solution to a problem. They get all updates, and they have someone to complain to. The reason pay for SaaS is because they want to focus on their own business, and not the side-quests. the "as-a-service" part allows one to "outsouce" those side-quests. AI generated code will absolutely not replace that. We might think SaaS is valuable because of the "code". But its actually because of the human connection, and peace-of-mind it offers. 

Why do people continue to pay for evernote/notion/etc? "Its just a notes app". Because the thought of _loosing your data_ is too scary. Paying for the solution, you know a company has your back. Free self-hosted versions of things have always existed. If you want to "pay nothing", you don't need to vibe. A great free solution already exists. You just dont reach for it, because at the end of the day, you want someone else to worry about it.

