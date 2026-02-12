---
title: "Async Through the Looking Glass"
description: "Adventures in Python Land"
date: 2016-11-18
tags: [python, async, asyncio, performance]
heroImage: /media/medium/1_hnPc2XhCZkKwBmzSx-pKEQ.png
draft: false
---

A lot of talk has been happening in the python community about *asyncio.* Asynchronous programming is the new hot thing in python. In my last post I talked about how to do asynchronous programming and what it is, but in this post we will cover whether or not it's worth even bothering with this whole async thing. Let's talk about some common use cases in python, and decide whether asyncio will serve you well.

*Disclaimer: every point in this article assumes Python as the programming language. If you are using another language, some of these points might not be completely accurate.*

## The Pool of Tears

The first thing you need to understand is that python has a Global Interpreter Lock. This basically means that the python interpreter uses a lock to make sure only one thread is executing code at any given time. In other words, python multi-threaded applications still only use one CPU core, and are not any faster than standard single-threaded applications. In fact, in cpu-bound cases, a multi-threaded application can take longer than a single threaded one because of thread-contention.

![Pool of tears](/media/medium/1_n6HDlUnR5FgOvnFsY4IDqg.jpg)

This means that a single asynchronous thread will inherently have the same performance as a multi-threaded app, except for the fact that the async version won't have any thread contention.

In order to do true parallelism in python you need to use multiple processes. Each process in python has its own GIL and they do not share resources at all. If you want to maximize your CPU cores, typically the rule is to have the number of processes equal the number of cores you have plus one. This rule applies to both threads and async programming.

## The Mock Turtle's Story

There is no silver bullet in programming, and asynchronous programming is no exception. There are certain cases where asynchronous programming might benefit you, and several others where it won't. There are even some areas where async could hurt you. In order to know if async will provide benefits, we have to consider the use cases. The most common use case would be a web-application backend (web server). This is one of the most common types of programming I come across in python, so I will try to cover it in depth. If you don't deal with web programming, feel free to skip to the **Queens Croquet Ground** section.

### The Bank vs Fast Food Analogy

![Bank vs Fast Food](/media/medium/1_ubf94Yan62jHGxmQFJCnmg.png)

Remember the days before online banking, when we would actually go to a bank, stand in line, and wait for them to accept our money? You walk into the bank and see a line of people standing in a single queue. You notice that there are several tellers helping customers. You wait in line, getting antsy. When you finally get up to the teller, you hand them your check, and get the cash equivalent. How long you waited in line was dependent on how long it took the bankers to handle the people in front of you.

The fast-food industry, however, has learned the art of maximizing throughput. After all, a synonym for speed is in the name. When you go to a fast-food place, there is usually only one person taking orders. The person takes the order, you complete your transaction, then you wait for your food to arrive. The difference here is that while you are waiting for your food, the same teller that took your order is now taking the order of everyone else in line. Because you only wait to order, you go through the line a lot quicker.

## Lobster Quadrille

The bank example is a synchronous web server. A typical python web server works by having thousands of threads (the tellers) ready to handle requests. The teller completes the entire transaction himself. If the teller has to wait on a manager or someone to come over, he will wait with you rather than moving to another customer. Just like the bank, your webserver cannot handle more requests (customers) at a time than threads (tellers) you have in your pool (bank). However, because python can only have one thread running at a time, imagine that it's more like the bank has only one cash box, and it can only accommodate one teller at a time. No two tellers can actually be counting cash (their main task) in parallel.

![Fast food async](/media/medium/1_EHAeapgl1DUAjOWV8VvX-g.jpg)

The fast-food example is the asynchronous example. In this example there is only one clerk who is accepting incoming requests as fast as possible. Since you are limited to a single cash-register, it makes sense to only have a single person (thread) handling requests. This way you don't waste time "waiting for the cash register" (cpu scheduling). The fast-food place instead has waiting points; waiting for another person to complete their part of the order. When a wait happens, the employee can help another customer while waiting.

The astute reader might realize that the overall time waiting "to be finished" is still the same in both scenarios, the only difference is that in the fast-food example, you are waiting twice instead of all at once. This is true in the naive example, but your average wait times decrease as your tasks become denormalized. Imagine every person ordered the same meal at the restaurant. If this was the case, the bank style and the fast-food style of getting your food would yield the same results. The reason why fast-food chains prefer an asynchronous flow is because it yields better results with varying sizes of orders. Imagine it's dinner time, and everyone is ordering with their families, but all you want to do is order a shake. In a synchronous example, you have to wait for a family's meal to be ready before you can even place your order. But in the asynchronous example, you get to place your order right away, and because it doesn't require the food assemblers (database), you can get your shake right away, rather than waiting on others. This increases your overall throughput and lowers average response times. It also means that large tasks don't make other non-large tasks more latent.

One thing I didn't discuss is the cost of context switching with threads. Needless to say, asynchronous web servers are theoretically faster than threaded web servers even in the naive case, because you have no wasted context switches. A very simple asynchronous web server **will** be faster than a simple threaded version. However, this does not mean **yours** will be faster simply by moving to async. It depends greatly on what your web server is doing and to whether you are actually using asynchronous paradigms.

## Who Stole the Tarts?

The main contingency with whether or not async will work for you, is if you have a bottleneck of some sort. I am going to make a huge generalization and say that almost every web server has a bottleneck and simply switching to an asynchronous framework will not buy much, if anything. And as we learn from *The Goal*:

> Any improvements made anywhere besides the bottleneck are an illusion.

In other words, if you have a large bottleneck, you will only see nano improvements by tweaking any other part of the system. Most servers have a hard dependency on a database. That database could be a bottleneck or perhaps the code that abstracts the database is the bottleneck. Async can still provide benefits despite a bottleneck if 1) the bottleneck is a remote service (i.e. database, downstream service, redis, etc.), and 2) you can do other things for that same request while waiting on a database/service.

1. Async programming switches context on I/O. That means that your process will be doing other things while its waiting on your database. If we assume you are using a connection pool for your database, this means that when your connection pool is 100% in use, your server is sitting there waiting because the threads are blocked on the connection. In async, your server will keep working even if your connection pool is completely utilized.

2. Number 1 can have varying results, but what will really help is if you can do work for a specific request while waiting on the database for the same request. This is the async paradigm, and it's where improvements really come from. Let's say you are caching your large database queries with a redis cluster, and you also need to call a 3rd party service. Typically you would have three synchronous operations; calling the service, then redis to see if the data is cached, then finally call the database. Returning after all three are done. This means your response time can not be any faster then the response times of all three (*a + b + c*). In other words, you have three bottlenecks. With asyncio you can call all three at the same time, then process the results. For example, you would start the call on all three, but only wait for the service and redis. If the response from redis comes back and you don't have the query cached, then you continue to wait for the database. Your response time is now just *max(a, b, c)* because you handled *a* and *b* while waiting on *c.* You've made improvements by making your main bottleneck the only bottleneck. You've completely removed 2 other bottlenecks!

![CPU bound considerations](/media/medium/1_wqSQQKBLkLVE2m1eUolO1Q.jpg)

The next contingency is whether your web server is CPU bound. If your web server has only a couple processes that do CPU-bound tasks, async will slow you down. However, if you have a standard web server (lots of threads) and your app is mostly doing calculations (not much I/O), then threads will actually slow you down more than async. Async doesn't really lend itself to CPU bound programs well, and it would be complicated to write, but if done correctly, would be faster than many threads due to lack of thread contention.

The last contingency is long running connections. One fairly hot technology these days is websockets. Websockets allows a server to maintain a long-running connection to a client, and send them information without the need to poll the server. Websockets are also often used to improve performance since the client can use a single, already established connection. The problem with websockets, however, is that they must remain open. In a thread based server this means that every client is holding a thread open. Every thread held open is a potential hit to your throughput, since throughput is directly correlated to number of available threads. Async, however, can use a single process to handle all these open connections, which means the number of long running opened connections it can handle is essentially unlimited (OS socket limits are typically in the millions). If you are doing anything with long running open connections, async **will** benefit you regardless of performance, because you won't need to worry about resource exhaustion. This also means that async servers are far less susceptible to slow-client DoS attacks.

## The Queen's Croquet Ground

For those writing non web server applications in python, it's a little easier to reason about whether or not async will help you. It all comes down to some simple questions.

1. **Is your program CPU-Bound?** Are you primarily doing calculations such as data science and machine learning data fitting? Async only switches contexts at defined points, which is typically I/O type things, so async will buy you nothing. That being said, you are even worse off using threads and thread contention on CPU bound things is fairly problematic. I would shy away from threads and async in this case and only use a process pool.

2. **Does your program require doing things concurrently?** A typical use case for doing things concurrently is having a GUI and a controller portion of the app. A simple way is for each to be on its own thread. If you only have a couple threads and you don't spawn any, then threading isn't too bad here, async won't really buy you anything unless you just don't like dealing with threads. Async could, however, help you prevent common threading issues such as deadlocks. But, if you very often spin up new, short lived, threads — or your thread pool is very large — async will most likely give you speed and resource benefits.

3. **Does your program work in a single process?** A lot of scripts and CLI's are intended for scripting simple user actions, and any "waiting" they do is to be expected. These programs typically run on a single process, and never spin up any threads. Don't use async for these. Not only is async slower than a single thread, but it's also not as easy to reason about.

4. **Are you working with anyone fairly new to programming/python (including yourself)?** I am just going to be honest — async code is much harder to reason about than synchronous code. Python's new *async* and *await* makes it a lot easier to reason about, but it's still a lot more confusing than standard code. If you have anyone newer to programming, or you dont want to spend time learning how async paradigms work, you should probably shy away from asynchronous programming for now.

5. **Are you doing a lot of network calls?** If you do a lot of network calls (maybe uploading/downloading files for example) and you think you could make your program faster by doing some of them at the same time (or using *AWS S3* multipart upload for example), than asyncio can benefit you. You will probably have the same performance as doing things threaded, but you won't have to deal with those pesky threads and the race conditions they bring with them.

## Down the Rabbit Hole

![Down the rabbit hole](/media/medium/1_yibkymQkSA2X_-7BuWxM0w.jpg)

I have mostly been comparing async against sync as if the two can not coexist. They can, however, coexist. Making them coexist might or might not be the right choice though. If you have an application that is currently synchronous, or even threaded, and you want to do one or two things asynchronously, you can. All you need to do is start an event loop for that one given thing. However, if you are also using threads you need to be careful as not everything asyncio does is thread safe.

If you have an asynchronous module, you need to be careful. The basic rule of thumb is, once you go full async, **everything** has to go async. If you accidentally write or use one non-async function that takes too long, or does some waiting, you have just blocked your entire event loop. In the case of a web-server, that means you are not accepting any requests while your event loop is blocked. The most common mistake is using the standard *time.sleep(10)* instead of the asynchronous version *await asyncio.sleep(10).* The former will make your entire event loop sleep for 10 seconds. That sounds fun, right?

## A Mad Tea-Party

Since everything an asynchronous library does needs to be asynchronous, this leads to an interesting problem. That problem is 3rd party libraries. If you decide to go asynchronous, say goodbye to all the libraries you have learned to love. Libraries such as *requests, sqlalchemy, and boto3* are all off-limits. They use blocking IO and will therefore halt your event loop. You need to instead find a similar asynchronous version of the library. For example there is *aiohttp, asyncpgsa,* and *aiobotocore* respectively. Their libraries are typically newer, and do not have as many features. This also leads to a division in the python community. Almost everything that is popular in the python community is now being re-done for async support. Rather than a single library supporting both paradigms, you end up with a separate library for each paradigm.

## Advice from a Caterpillar

My recommendation is that you try the asyncio library for a simple task and see what you think. It takes a while to get used to and understand how everything works.

I really think async is fun, and can help you if you truly switch to an async paradigm, but it might not be worth giving up certain libraries to do it. I have already experienced much frustration when I can't find an asynchronous library doesn't do things the way the synchronous version does, and it leaves me confused. Also, halting your event loop can be disastrous, but unfortunately all too easy to do.

That being said, asyncio is stable enough for production, and a good number of libraries exist. Try it out and see what you think!

## Alice's Evidence

That's pretty much the end, but I know you're sitting here thinking, "what about some benchmarks to show how blazing fast this thing is?" Pretty much any benchmark you get online is useless because it's usually some arbitrary test that has nothing to do with your current application. The test is normally designed to show something faster in a specific way. Which either means mileage will vary, or you will have something else as a bottleneck, and the difference won't matter. However, I know you are all going to ask for some benchmarks, so here you go:

**1. What happens if we call google.com a bunch of times in a row?**

In this example we call them all one after the other (normal) as a control group. We then call them all concurrently using asyncio and threaded paradigms and compare the total time to complete the entire task (in seconds).

- **normal**: 18.08
- **asyncio**: 1.734
- **threaded**: 2.55

To be honest, in this example we are splitting hairs. I am sure if you ran the test enough times you would see the threaded example win over asyncio a good amount as well. This really boils down to what the application code itself is doing.

**2. What happens if we do something really stupid and use asyncio/threads for a CPU-bound task?**

We see exactly why you shouldn't do that, that's what. In this example we calculate the Fibonacci sequence where every step is a new thread/co-routine.

- **Normal**: 0.01143600800060085
- **Asyncio**: 1.130632936998154
- **Threaded**: 2.099454802002583

As you can see, there is a lot of overhead when creating new threads and dealing with context switching. The async version is 100 times as slow, and the threaded version is 200 times as slow.

So what if we instead calculate the Fibonacci sequence a couple times, and instead of breaking up per calculation, we just calculate it 10 times, concurrently?

- **Normal**: 0.09980539800017141
- **Asyncio**: 0.12089022299915086
- **Threaded**: 0.12662064500182169

So asyncio is about 1.2 times slower than normal, and threaded is about 1.25 times slower. In this example, all threads already existed, so you are only seeing the overhead of context switching on only 10 threads. Shows the effect of context switching.

---

*Originally published on [Medium](https://medium.com/@nhumrich/async-through-the-looking-glass-d69a0a88b661)*
