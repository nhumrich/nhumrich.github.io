---
title: "The Colors of the Async Rainbow"
date: 2023-03-28
tags: [async, programming]
draft: false
---

Asynchronous programming has become increasingly re-popular in recent years. It allows a different mental model on concurrency. The syntax most commonly used to implement asynchronous programming the `async`/`await` syntax. This refers to the use of keywords such as "async" and "await" to denote asynchronous functions.

Some have argued that `async` and `await` adds a complexity, often referred to as "colored functions". The main argument being that you can't call async functions from sync ones. This makes it frustrating when you have a function which is labeled as `async`, and you are currently writing a non-async function. That async function essentially becomes "off limits". This is a legitimate argument, but is what I will consider "acceptable trade-off" for adapting async/await.

While the arguments against colored functions are sound, I actually still think colored arguments are good. That is to say, the benefits outweigh the costs: colored functions are actually a useful tool for developers, particularly when it comes to remote calls and input/output (I/O) operations.

There is a famous blog post (which I have linked to several times before) which compares the cost of different computation primitives. The post is called "The Infinite Space between worlds" by Jeff Atwood. The main premise is just turning CPU time into human time, so it's easier to compare time differences. For example, let's say that we have to load data from memory which takes 120ns, but for our human scale, let's say that takes 6 minutes. Now, we need to get the same data from a database. Assuming the database in the same datacenter, and is relatively fast, that would be about 3 ms. In our human scale, that is 3 months!

I work remotely, and sometimes I ask my coworker Gwen a question via slack/email/whatever. She usually responds in 6 minutes, and I think that is a great response time! Normally, when I ask Gwen a question, I just work synchronously on tasks, since her average response time is low. I have another coworker, Skyler, who averages a 3-month response time. If you were me, and knew that was his average response time, you would not work synchronously. That is to say, you wouldn't wait until he responds before continuing to do any work at all. Instead, you would move on to some other task and pick up the current task once you get a response (if you even wait at all).

I could follow the same pattern of asynchronously working with my 6-minute coworker, but at some point, constantly switching between tasks, only to pick it back up 6 minutes later gets exhausting. There is a cost to constant context switching, so instead, I opt for just waiting for those 6 minutes of my time.

If we crank it up a notch, my boss needs me to complete a specific task. My boss works similar to me, and needs to know if the task will be complete in 10 minutes, or 3 months. The problem is, it depends on which co-worker I will be coordinating with. And that difference changes how I think about the workload entirely. In fact, the difference between working with my 3-month coworker, and working with *both* of my coworkers is essentially meaningless. As soon as you add in my 3-month coworker, he is my bottleneck, and all other factors aren't going to contribute to total time in any meaningful way.

---

The analogy here is important when it comes to asynchronous programming. When we make an external call, to another service or a database, we are impacting our overall time for that function. So much so, that it is often necessary to know when a function will do something remotely.

Say we have the following function:

```
get_users_name(user)
```

This function gives us the `name` of a user object. Does it do this by using the existing object? Or does it do this by reaching out to a database/service somewhere? It's impossible to know without just *knowing*. However, if the function is `async`, then we would have a pretty good idea that it is going remotely somewhere. And that difference changes how we model our code, and how we think about this function call.

If we use threads or even green threads instead, then this function still has a color. It's still making a remote call. That color is just invisible to us until we inspect it. Async is an explicit color, whereas green threads are an implicit color. Non-async is like invisible ink. It's still there, you just can't see it until you look with a black light. Another way to think about `async` is as a "type" for a remote function.

Yes, remote functions have a color. They are viral. Any function that calls them inherits that color. I believe that the color being explicit is a useful tool that helps you reason about your programs' behavior. By denoting remote calls and I/O operations with colored functions, developers can quickly identify the most time-consuming parts of their code and optimize them accordingly. So the next time you see a colored function in your code, don't be afraid of it – embrace it as a useful tool for optimizing your program's performance.

---

*Originally published on [Dev.to](https://dev.to/nhumrich/the-colors-of-the-async-rainbow-5anf)*
