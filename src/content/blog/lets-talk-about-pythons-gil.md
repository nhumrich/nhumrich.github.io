---
title: "Let's Talk about Python's GIL"
date: 2019-02-28
tags: [python, concurrency]
heroImage: /media/medium/1_biIUtnyO6vVDAlv7gzm8vA.jpg
draft: false
---

A lot of people talk about the Python Global Interpreter Lock (GIL for short) and how it is "hindering" to python, or their application, or some other thing. Some people talk about how its silly, or unneeded, behind the times, or really ruins things. There are projects trying to write implementations of Python without a GIL, and even some seeing if they can get the GIL to be removed from CPython (the default implementation). I want to set the record straight as to what the GIL really is, and why it's actually quite awesome.

## What is the GIL?

The GIL is essentially one big lock, on threads, for the python interpreter. It forces Python to only interpret one thread of Python at a time, essentially making it so only one thread can have CPU scheduling at a time. Because of the GIL, threads will never run at the exact same time. For most intents and purposes, that is really all you need to understand about the GIL, essentially, it means only one thread, can use a CPU at a time. This also means that Python is inherently locked to a single core, it will not use more than one CPU (without multi-processing).

## The GIL Predates Multi-core

As mentioned, Python will not run on more than one core. That may shock a lot of people, but bear with me, because history matters. Although Python might feel and sound like a new language (it's just recently become popular), it's actually a very old language, older than Java in fact. 29 years old as of this writing. Python 2 will be deprecated when python is 30 years old.

Computers, having more than one CPU/core, however, is a fairly new concept. For a long time, computer manufacturers only tried making CPU's faster and smaller. Shoving more than one CPU in a standard computer was unheard of. The creation of multi-core processors was entirely sales motivated, as CPU manufacturers were having a harder time making CPU's significantly fast enough to encourage new sales. In order to counter this, they starting shipping multi-core CPU's, which is essentially two CPU's that work together (embedded on the same chip). This way they could "double" the speed of the CPU, because they gave you two of them. The first ever multi-core processor was in the early 2000's, more than 10 years after Python was originally designed. AMD released the first more-than-2-core processor in 2009, 19 years after Python was created, only 10 years ago.

Now, imagine a world with only one core. Threading still existed, but not for the purposes of computing power. It existed as a way to split applications, so that you could do many things at once without I/O blocking each-other. Every language and program that existed, only ran on one core. Threads only got to run one thread at a time on the CPU. There was only one CPU, and it had to be shared for everything on the computer. Essentially, the CPU itself, was its own form of GIL, it enforced only one thread to run at a time, because there was only one CPU.

![Threading history](/media/medium/1_JzNyNzJDMrUEnGbDkWNdgg.jpg)

## The Invention of the GIL

Multi-threaded applications have many inherit issues such as race conditions and locking, once you introduce threads into your application, you have to start dealing with these issues. Because threads can access the same memory locations, and you don't control the order of execution (the CPU does), the threads can often "step on each others toes," figuratively speaking.

Now, I am not sure which language or person invented the GIL. Maybe it was Python, maybe it wasn't. Lots of languages did similar things such as Python's GIL. Ruby and Javascript are two languages I know of that still have some form of GIL, even though they don't call it that. Anyways, it doesn't really matter where it came from, who thought of it first, the point is: Python decided to have a GIL.

Python is a language designed to make prototyping and scripting easy and readable. "Readability First" has always been a design decision in Python. It was decided that it was easier to simply have one massive lock, on everything, than to force you to manage your own threads memory. If you do multi-threading on Python, you will likely not encounter race conditions or deadlocks in your code, and you don't even have to think about locks. Python does it all for you, by locking everything with one big massive lock. Rather than lots of tiny locks, it just picks one thread to run at a time, switching at points chosen to be safe. This means that Python code is much easier to read, write, and get correct, for multi-threaded applications. This is quite fascinating. At the time, Python was considered to have done it right. Python developers loved this.

## Along comes the 2-core

Once the 2-core CPU came out, people realized that threads could actually run at the exact same time. True parallelism, not just concurrency. While threads were not intended for this purpose, they played the part beautifully, and no new concepts even needed to be introduced. The very core concepts (pun intended) that protected memory in a threaded world, worked the same in a multi-core world. There were some programs that would have bugs in multi-core world, because they were never written to run in parallel, but mostly, as long as you were already using locks correctly, everything would just work. Python, and other languages that decided to do locking at a global level however, had the downside of now being locked to a single core, because it was never anticipated that you could, or would even ever want, to run more than one thread at the same time.

## The GIL is Still Great

There are a lot of benefits of the GIL. As mentioned, you don't have to think as much about your threads. Things in Python will for the most part, be thread safe. Also, because there is no small, individual locking, this means that single threaded applications will run faster than without a GIL. They do not have to waste time locking things for no reason. It also allows Python's garbage collection algorithm, of reference counting, to work well. Reference counting is a very effective garbage collection algorithm, which has a very low memory overhead, and doesn't require any "stop the world" pauses on your application. The biggest con to this algorithm, is that it doesn't work in multi-threaded applications, but it works fine as long as you have a global lock (or **lots** of little locks) around everything. This trade-off, is excellent, when all you want is one core anyways.

![GIL benefits](/media/medium/1_9H-eItQpLgtHJZtYHVQ3Ug.jpg)

## It's Time to Move On?

We have established that the GIL is amazing when it comes to single core applications. But now its 2019, and multicore is everywhere. Why hasn't Python adapted to the times? My first argument is going to be, "I want to see you change your 20 year old legacy application to have a fundamentally different architecture, but still be 100% backwards compatible." But in reality, the GIL is actually fine, for most applications.

Do you want to use every core, but don't need to share memory (such as a web application)? Great, then multiprocessing in Python works great. Each process gets it's own GIL, and it can utilize all cores. Any application that will be eventually scaled beyond a single server, has to handle not sharing memory anyways. This means that there is a very small subset of applications, that actually need multi-threading across all cores. That subset is applications that want to use many cores, while sharing memory, and have no plans to scale beyond a single host. Common examples are: games, developer tools, compilers, data processing. Or even, simple machine learning applications.

Basically, that means that Python has decided that the trade-offs of getting rid of the GIL, aren't quite worth the gains, given it would only impact a small set of use cases, of which, python mostly isn't being used for anyways. There is a project of Python where they have tried to remove the GIL, but they found that for anything less than 5 threads or so, its significantly faster to just have the GIL. Seeing as how the GIL is only a performance optimization, it would be silly to remove it, and get worse performance. In current experiments, you only see a performance gain when you have a high number of cores and threads.

## Alternatives

But, not to worry, there are still a **lot** of alternatives to get multithreading to work across cores in Python. First, the GIL itself can be controlled with c-extensions in Python. This means that you could write a c or rust library that does true multi-processing, and use it in your Python code, to give your code true multiprocessing. This is what common data science libraries such as numpy do. Another option is to use multiprocesssing, and pass the data you need shared around with some type of message passing, such as a file, a socket, or ZeroMQ. In Python 3.8, you will be able to have a shared memory object. Also, if you prefer, you can use a different implementation of Python altogether, such as Jython and Stackless Python, that don't have a GIL.

## Now You Know

Hopefully, you now fully understand the GIL, why it exists, why it still exists, and why it's fine. Whether you want to run parallel code with threads or not, I just hope you have a deeper understanding of history, and why things are the way they are. I challenge your need for actually needing multithreading across cores if you are doing anything other than 1) games, or 2) data pipelining. And for those things, you probably aren't using python already anyways.

---

*Originally published on [Medium](https://medium.com/@nhumrich/lets-talk-about-python-s-gil-ade59022bc83)*
