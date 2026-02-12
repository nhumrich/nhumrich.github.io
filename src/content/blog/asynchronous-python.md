---
title: "Asynchronous Python"
description: "Await the Future"
date: 2016-09-23
tags: [python, async, asyncio]
heroImage: /media/medium/1_GxBAT5c05pNm4PvawsLA-w.png
draft: false
---

Asynchronous programming in python has become more and more popular lately. There are many different libraries in python for doing asynchronous programming. One of these libraries is *asyncio*, which is a python standard library added in Python 3.4. *Asyncio* is part of the reason asynchronous programming is becoming more popular in Python. This article will explain what asynchronous programming is and compare some of these libraries. Let's take a walk through history and see how asynchronous programming has evolved in python.

## One at a time

Programs have an inherent attribute that each line executes in order. For example, if you have a line of code that goes to a remote server to get a resource, that means your program is doing nothing while its waiting. It is sitting waiting for the response in order to continue. In some cases this is acceptable, but in many, it is not. The standard fix for this of course is threading. A program can spin up multiple threads; each thread doing one thing at a time.

![You; caught in your many threads](/media/medium/1_BYjVCrJUfb_8BlXMl4esuA.jpg)

Together these threads allow your program do multiple things at a time. Threading of course has many caveats that come with it. Multi-threaded programs are more complicated, and typically more error prone, they include common troublesome issues: race-conditions, dead-locks, live-locks, and resource-starvation.

### Context Switching

While async programming can prevent all these issues, it was actually designed for an entirely different problem: CPU context switching. When you have multiple threads running, each CPU core can still only run one thread at a time. In order to allow all threads/processes to share resources, the CPU very often context switches. To over simplify things, the CPU, at a random interval, saves all the context info of a thread and switches to another thread. The CPU is constantly switching between your threads in non-deterministic intervals. Threads are also resources, they are not free.

Asynchronous programming is essentially software/userspace threading, where the application manages the threads and context switching rather than the CPU. Basically, in an asynchronous world, context is switched only at defined switch points rather than in non-deterministic intervals.

### The Incredibly Efficient Secretary

Now lets compare these concepts with a non-computer example. Imagine we had a secretary that was incredibly efficient, and didn't waste any time at all — was always getting things done, trying to maximize every second. This secretary — let's call him Bob — would have to multitask like crazy to achieve this. Bob has 5 tasks he's doing at a single time: Answering phone calls, being a receptionist (directing guests), trying to book a flight, handling meeting schedules, and filing papers. Now lets imagine this is a low traffic environment, so the phone calls, visitors, and meeting requests are few and far between. Most of Bob's time would be spent on the phone with an airline while filing papers. This is all pretty standard and easy to imagine. When a phone call comes in, Bob would put the airline on hold, answer the phone, direct the call, then return to the airline. Anytime any task came to Bob's attention, filing papers would be put on the back-burner because it doesn't need immediate attention. This is one person doing many tasks at the same time, context switching in appropriate places. Bob is asynchronous.

![Bob the async secretary](/media/medium/1_Aoh4uRp_czdN6dyQk-ehdg.jpg)

The threading version of this would look like 5 Bob's, each one having only one task, but only one being allowed to work at any given time. There would be a device that controls which Bob can work, which understands nothing about the tasks themselves. Because the device doesn't understand the event nature of the tasks, it would constantly switch between the 5 Bob's even if 3 of them are sitting there doing nothing. For example, Paper-Filing-Bob gets interrupted so that Phone-Call-Bob can do some work, but Phone-Call-Bob has nothing to do, so he just goes back to sleep. There is time wasted in switching between all the Bob's just to find out 3 of them aren't even doing anything. About 57% (Slightly less than 3/5) of your context switching would be for nought. And while yes, CPU context switching is incredibly fast, nothing is free.

---

![Green threads](/media/medium/1_Ye9GppDlHp21l5tzdFayQQ.jpg)

### Green Threads

Green threads are a primitive level of asynchronous programming. A green thread looks and feels exactly like a normal thread, except that the threads are scheduled by application code rather than by hardware. *Gevent* is a well known python library for using green threads. *Gevent* is basically green threads + eventlet, a non-blocking I/O networking library. Gevent monkey patches common python libraries to have non-blocking I/O. Here is an example using *gevents* to make requests to multiple urls at once:

```python
import gevent.monkey
from urllib.request import urlopen
gevent.monkey.patch_all()
urls = ['http://www.google.com', 'http://www.yandex.ru', 'http://www.python.org']

def print_head(url):
    print('Starting {}'.format(url))
    data = urlopen(url).read()
    print('{}: {} bytes: {}'.format(url, len(data), data))

jobs = [gevent.spawn(print_head, _url) for _url in urls]

gevent.wait(jobs)
```

As you can see, the gevent API looks and feels just like threading. However under the hood, it's using coroutine's rather than actual threads, and running them on an event loop for scheduling. This means you get the benefits of light-weight threading without needing to understand coroutines, but you still have all the other issues that threading brings. Gevent is a good library for those who already understand threading and want lighter weight threads.

### Event Loop? Coroutines? Woah, slow down, I'm lost…

Lets clear up some things about how asynchronous programming works. One way to do asynchronous programming is with an event loop. The event loop is exactly what it sounds like, there is a queue of events/jobs and a loop that just constantly pulls jobs off the queue and runs them. These jobs are called coroutines. They are a small set of instructions, including which events to put back on to the queue, if any.

## Callback Style Async

While many asynchronous libraries exist in Python, the most popular ones are probably *Tornado* and *gevent*. As we have already talked about *gevent*, lets focus a little on how Tornado works. Tornado is an asynchronous web framework that uses the callback style to do asynchronous network I/O. A callback is a function, and it means "Once this is done, execute this function". It's basically a "when done" hook for your code. In other words a callback is like when you call a customer service line, and immediately leave your number and hang up, so they can call you back when they are available, rather than having to wait on hold forever.

Let's take a look at how to do the same thing as above using tornado:

```python
import tornado.ioloop
from tornado.httpclient import AsyncHTTPClient
urls = ['http://www.google.com', 'http://www.yandex.ru', 'http://www.python.org']

def handle_response(response):
    if response.error:
        print("Error:", response.error)
    else:
        url = response.request.url
        data = response.body
        print('{}: {} bytes: {}'.format(url, len(data), data))

http_client = AsyncHTTPClient()
for url in urls:
    http_client.fetch(url, handle_response)

tornado.ioloop.IOLoop.instance().start()
```

To explain the code a little, the very last line is calling a tornado method called *AsyncHTTPClient.fetch* which fetches a url in a non-blocking way. This method essentially executes and returns immediately allowing the program to do other things, while waiting on the network call. Because the next line is reached before the url has been hit, it is not possible to get a return object from the method. The solution to this problem is that instead of the *fetch* method returning an object, it calls a function with the result, or a *callback*. The callback in this example is *handle_response*.

## Callback Hell

In the previous example, you will notice that the very first line is checking for an error. This is required because it is not possible to raise an exception. If an exception was raised, it would not be handled by the proper section of code, due to the event loop. When *fetch* is executed, it starts the http call, then puts handling the response on the event loop. By the time we notice our error, the call stack would only be the event loop and this function, with none of our code to handle the exception. So any exceptions thrown in the callback will break the event loop and the program. Therefore all errors have to be passed as objects rather than raised. This means if you forget to check for errors, your errors will be swallowed. Anyone familiar with golang will recognize this style, as the language enforces it everywhere. This is the most complained about aspect of golang.

![Callback hell](/media/medium/1_cS467MRjN5awIWqFeD27XQ.jpg)

The other problem with callbacks is that in an asynchronous world, the only way to not block things is with a callback. This can lead to a very long chain of callback after callback after callback. Since you lose access to the stack and variables, you end up shoving large objects into all your callbacks, but if your using 3rd party APIs, you can't pass anything into the callback that's not expected. This also becomes a problem because every callback acts like a thread, but there is no way to "gather" the tasks. Lets say for example you wanted to call three APIs, then wait till the three are done, and return the aggregated results. In the *gevent* world, you could do this, but with callbacks you cannot. You would have to hack around it by saving results to some global state variables, and in the callback you would have to check if it's the last result or not.

## Comparisons

Let's compare so far. If we want to prevent I/O from blocking, we have to use either threads or async. Threads come with issues such as resource starvation, dead-locks, and race conditions. It also creates context switching overhead for the CPU. Async programming can solve the context switching error, but comes with its own problems. In python our options are *green threads* or *callback* style of async programming.

### Green Threads Style
- Threads are controlled at the application level, rather than hardware
- Feel like threads; Good for those who understand threading
- Includes all the problems of normal thread-based programming other than CPU context switching

### Callback Style
- Not like threaded programs at all
- Threads/coroutines are invisible to the programmer
- Callbacks swallow exceptions
- Callbacks are not gather-able
- Callback after callback gets confusing and hard to debug.

---

## How can we improve?

Up until python 3.3 this really was the best you could do. In order to do better you need more language support. In order to do better, Python would need some way to execute a method partially, halting execution, and maintain stack objects and exceptions throughout. If you're familiar with Python concepts, you might realize I am hinting at Generators. Generators allow a functions to return a list, one item at a time, halting execution until the next item is needed. The problem with generators is that they must be completely consumed by the function calling it. In other words, a generator can not call a generator, halting execution of both. That is however until PEP 380 added the *yield from* syntax that allows a generator to yield the result of another generator. While async isn't really the intention of generators, it provides all the features needed to make async great. Generators maintain a stack and can raise exceptions. If you were to write an event loop that ran generators, you could have a great async library. And thus, the *asyncio* library was born. All you have to do is add a *@coroutine* decorator and *asyncio* will patch your generator into a coroutine. Here is an example of us calling the same three urls as before:

```python
import asyncio
import aiohttp

urls = ['http://www.google.com', 'http://www.yandex.ru', 'http://www.python.org']

@asyncio.coroutine
def call_url(url):
    print('Starting {}'.format(url))
    response = yield from aiohttp.ClientSession().get(url)
    data = yield from response.text()
    print('{}: {} bytes: {}'.format(url, len(data), data))
    return data

futures = [call_url(url) for url in urls]

asyncio.run(asyncio.wait(futures))
```

A couple things to note here:

1. We are not looking for errors, because errors get passed up the stack correctly.
2. We can return an object if we want.
3. We can start all coroutines, and gather them later.
4. No callbacks
5. Line 10 doesn't execute until line 9 is completely done. (feels synchronous/familiar)

Life is great! The only problem is the *yield from* looks way too much like a generator, and it could cause problems if it actually was a generator.

### Async and Await

The *asyncio* library was gaining a lot of traction, so Python decided to make it a core library. With the introduction of the core library, they also added the keywords *async and await* in Python 3.5. The keywords are designed to make it more clear your code is asynchronous; so your methods are not confused with generators. The *async* keyword goes before *def* to show that a method is asynchronous. The *await* keyword replaces *yield from* and makes it more clear that you are waiting for a coroutine to finish. Here is our example again but with the async/await keywords:

```python
import asyncio
import aiohttp

urls = ['http://www.google.com', 'http://www.yandex.ru', 'http://www.python.org']

async def call_url(url):
    print('Starting {}'.format(url))
    response = await aiohttp.ClientSession().get(url)
    data = await response.text()
    print('{}: {} bytes: {}'.format(url, len(data), data))
    return data

futures = [call_url(url) for url in urls]

asyncio.run(asyncio.wait(futures))
```

Basically what is happening here is an async method, when executed, returns a coroutine which can then be awaited.

## We Have Arrived

![We have arrived](/media/medium/1_IWznKuaqd7P2j19qIlMGMw.jpg)

Python finally has an excellent asynchronous framework, *asyncio*. Lets take a look at all the problems of threading and see if we have solved them.

- **CPU Context switching**: *asyncio* is asynchronous and uses an event loop; it allows you to have application controlled context switches while waiting for I/O. No CPU switching found here!
- **Race Conditions**: Because *asyncio* only runs a single coroutine at a time and switches only at points you define, your code is safe from race conditions.
- **Dead-Locks/Live-Locks**: Since you don't have to worry about race conditions, you don't have to use locks at all. This makes you pretty safe from dead-locks. You could still get into a dead-lock situation if you require two coroutines to wake each other, but that is so rare you would almost have to try to make it happen.
- **Resource Starvation**: Because coroutines are all run on a single thread, and dont require extra sockets or memory, it would be a lot harder to run out of resources. *Asyncio* however does have an "executor pool" which is essentially a thread pool. If you were to run too many things in an executor pool, you could still run out of resources. However, using too many executors is an anti-pattern, and not something you would probably do very often.

To be fair, while *asyncio* is pretty great, it does come with its own problems. First, *asyncio* is new to python. There are some weird edge cases that will leave you wanting for more. Second, when you go fully asynchronous, it means your entire codebase has to be asynchronous. **Every**. **Single**. **Piece**. This is because synchronous functions might take up too much time, thereby blocking your event loop. The libraries for asyncio are still young and maturing, so it is sometimes hard to find an asynchronous version for part of your stack.

## That's all Folks

Here lies the journey of asynchronous python. There are several options for you to do asynchronous programming in python. You can use green threads, callbacks, or true coroutines. While the options are plentiful, the best one of them all is asyncio. If you are able to use Python 3.5, you really should be using the one built into the python core. I encourage you to try out asyncio instead of threading for your next project.

---

*Originally published on [Medium](https://medium.com/@nhumrich/asynchronous-python-45df84b82434)*
