---
title: "Devs are Definitely NOT Cooked"
date: 2026-02-26
tags: [ai, career]
draft: false
---

If you — or anyone you know — thinks software engineering careers are going the way of the dodo, then you'd be wrong. Quite the opposite.

To start, let's talk about the emergence of vibe coding. Since there isn't really a true, agreed upon, definition of vibe-coding, we need to set up a couple of premises for this article:

1. When I say vibe coding, for the context of this article I mean: Building a software _product_/artifact/thing without looking at, or thinking about, the underlying code. The code is meaningless to the human in the loop. It's essentially just a file. Similar to how you never look at the actual file contents (bytes) of a pdf.
2. Let's assume that vibe coding actually works. And when I say works, I mean, end to end, you just built a real product, with no bugs, and no issues.

It does NOT matter if you agree with either of those points. I am not trying to claim they are true, or otherwise. This is just the foundation for this article.

If we can start with the foundation that vibe coding works completely, THEN and only then, can we discuss whether or not software engineers are pointless. So, for the sake of this article, whether you believe that or not, let's assume it's true.

# All about abstraction
Vibe coding. A term invented in early 2025, has taken the world by storm. All sorts of people, who do not understand how to make software, or how to read or write code, are suddenly producing things built with software. The capabilities AI unlocks for most people to do at least average things they have near zero knowledge in, is absolutely incredible. This ability has given many people feelings of fear, uncertainty, and doubt, especially when it comes to their career and livelihood. But, before we write-off the practice of building software as being a professional-grade skill, let us first explore what vibe coding really is.

The first thing you need to know, if you don't know anything about software, is that software is layers, upon layers, upon layers, of abstraction. Abstraction is a pretty critical word here, so let's break it down.

> **Abstraction:** the concept of _hiding details_ for complex things so that attention can be focused on what matters. Or, put another way: hiding the "hard parts" so you don't have to worry about it.

Abstraction is not a concept unique to software, it exists all over the world. All of modern life is a series of abstractions. Let's start by breaking down "abstraction" in non-software spaces.

1. The modern day toilet. The toilet is abstraction. It sits on-top of "indoor plumbing", which, in-and-of-itself, is abstraction for other things. For example, every time you sit on the toilet, do you think about where the waste is going? How the water got there? Probably not. Because the toilet has abstracted it for you. You might _know_ these things, but the toilet prevents you from having to think about it. You don't _need_ to know these things at all.
2. Addresses. You know how to send a letter across the country. You put a note in an envelope, you put an address on it. And it just.… gets there. But do you really understand what happens to get there? Do you understand what the zip code represents in an address? Do you actually know where the building at 42 Wallaby Way is? Unless you have been there before, no. The postal service abstracts this idea for you. They say, "let us handle the complexity" and they give you a contract (the address) so you only need to communicate with them, following their standards.
3. Cars. You turn a key/push a button and press pedals. You don't think about fuel injection, combustion timing, transmission gear ratios. The steering wheel abstracts hydraulic/electric power steering systems. Each pedal abstracts enormously complex mechanical systems.
4. Language/Words. We can say words like "dog" and immediately know what each other is talking about. You don't have to understand DNA, you don't have to know anything about the actual categorization of a canine and what it takes to be classified as, you just know, a dog is a dog.

There are essentially three types of abstractions:
* Lossy abstractions.
* Leaky Abstractions.
* Perfect abstractions.

**Lossy Abstractions:** Abstracts something, but by doing so, you lose other information you otherwise care about. It's a trade-off. Hiding one form of complexity to better focus on another.
Example: Maps. Maps are super helpful for navigating and understanding the layout of the world around you. Standard maps hide things like elevation, building interiors, underground infrastructure, etc. Different map "styles" exist to help you with the different trade-offs.

**Leaky Abstractions:** Abstracts something only _sort of_. It attempts to hide complexity, but can't really do it fully, so you still have to have a fundamental understanding of the thing it's hiding.
Example: Credit cards. They abstract how money exchanges hands, without you actually needing to hand anyone anything, wealth can be transferred, and items exchanged. But, in order to use them correctly, you do need to understand that a credit card requires bank accounts, and wires, and is ultimately, a loan. And then you have to pay that loan back. So, while it IS hiding a decent amount of complexity, you still have to understand a bit.

Leaky abstractions are also abstractions that "break down" because they don't correctly handle edge cases, and expect you to still do it. For example, GPS. The GPS will abstract driving directions by telling you only the next thing you need to know: "Turn right in 1 mile". But, they don't know if the road is closed. And suddenly, you have to hope you understand how to _not_ follow the GPS, and make other arrangements. Another one: Recipes. Recipes try to hide the complexity of cooking, so you can make a great meal without understanding thermo-dynamics, chemistry, sugar breakdown, Maillard reaction, etc. However, not all ovens/stoves are the same. You also don't need to know exact temperatures on a stove-top. You often see warnings like "cook time between 10-15 minutes", because things such as elevation, equipment, etc matter. You have to apply some of your own knowledge to the abstraction for it to actually work.

**Perfect abstraction:** Not lossy, not leaky. The abstraction just makes life better without us needing to know anything about the complexity.
Example: grocery stores. You walk in, you get food. You leave. You don't need to know anything about supply chain, farming, etc. If there isn't the food you want, you don't go farm it, you go to another store. That banana you just bought for $0.30 probably traveled over 3,000 miles, and you didn't need to know or care.
Another one: Calendars. You never need to think about where we are on the trajectory of earth's rotation around the Sun. Winter is cold, summer is warm.

# Back to software
Software is abstractions. Lots of it. Layers and layers. Here are some simple examples:
* When you click that save button: bits in your RAM are moving to become bits on your hard drive
* When you send a file: bits in the file tell the computer what type of file it is and what programs can open it.
* When you type a single character on a keyboard: an electric signal gets sent through a wire, that the operating system has to interpret as a unique character, separate from all the other keys on a keyboard, and then do something with that. It then sends that to the currently open application so it can _display_ something on a monitor, which is, in-and-of-itself, an entirely different abstraction

These abstractions above are significantly more complicated than I even hinted at. When I say layers upon layers, I mean it. It's almost dizzying. The amount of software you have to have installed, just to check your email, is sort of wild. I actually got a headache trying to type all this, so this is only the high level ones, with a lot not on this list.
1. An operating system
2. A monitor, which has firmware (embedded software)
3. Drivers for your monitor. (software that communicates between the two above things)
4. A browser
5. Keyboard firmware
6. Mouse firmware
7. Graphics driver
8. Network firmware
9. Router firmware
10. Switch firmware
11. Email server operating system
12. Email server software
13. Spam checking software

# So… what about vibe coding
Okay, finally getting back to the matter at hand. Vibe Coding. When you vibe code an app, you are standing on the shoulders of giants. Not one giant. Not two giants. Not three giants. You are standing on an ARMY of giants, all holding each other up, and claiming that "I can touch the clouds all by myself".

Let's say you build your product using "heartable", a vibe-coding platform for non-technical people to build their dreams. Well, heartable itself is software, written by software engineers. And, in order for heartable to work, it needs LLM/AI, which is itself software, created by data engineers and software engineers.

It's also written in a programming language, using lots of open source packages. Your end product, even though it was built by heartable, still _depends_ on a lot of open source packages. So, even if you get to the point where you can rip out heartable entirely, your app that you ~built~ vibed yourself, requires so many things.

It is likely built in javascript, which is a programming language built on top of another programming language, c. Javascript has a runtime (a program) called v8 (or others), maintained by google, that interprets the code, and translates it to machine code (roughly). Javascript by itself is a pain to use, so your code likely is actually in typescript, which is a layer on top of javascript.

A web app is more than javascript though, it also requires css. But no one likes hand-writing css, so the code underneath is probably using tailwind, an open source library. You might have things like a database, an authentication page, and integration with other providers. Those are all "libraries" which are software products.

This whole thing is packaged up using docker, a program for running programs, and deployed to a server with software, on a server that's not really a server (vm), which is essentially a program that acts like a server, so that server providers can put lots of peoples apps on a single actual server. But no one likes to actually manage servers manually, because gross, so those are managed with software, and monitored with software.

Do you know how the internet works? Well, it's software. It runs on HTTP which is an application-level protocol. But even all the hardware, well, it's also technically software, just a different kind of it.

And all this is to say, the amount of software and libraries that are _used_ and needed, for your "simple app" is MASSIVE. Seriously. So massive, that I, a professional software engineer, don't actually want to enumerate them. Not because I am lazy, because I _can't_. I don't have the time to research it all. It's a lot. Like, a lot.

There is actually a [crowdsourced project on GitHub](https://github.com/alex/what-happens-when) that tries to document _every single layer_ of what happens when you type "google.com" in a browser and hit "go". Every single piece of software you touch, and what actually happens. It's incredibly detailed, and still growing.

In the meantime, here is a VERY VERY high level view that doesn't even begin to scratch the surface: https://bytebytego.com/guides/what-happens-when-you-type-google/

# Now, finally, to my point
So, you think software is going nowhere? No. Software is a leaky abstraction. Do toilets make plumbers obsolete? Does the postal service make truck drivers obsolete? Does the internet and recipe books make professional chefs obsolete? No. Someone, somewhere, has to understand this stuff. What happens when your vibe coded app doesn't work because one of these million packages stops working? Are you going to fix the linux kernel when there is a 0day? Do you even understand what I just said? Well, when those things happen, a software engineer comes to the rescue.

So, are devs cooked? Oh no. We are just getting started. For the first time in history, you are actually interacting with _our_ stuff. Not the stuff corporations make us layer on-top of our stuff, but the actual stuff we used to build for just other software devs. Demand just went **way** up. The need for support just went **way** up.

But what happens when all of the world at the same time decides to drive, and they all get new cars? Mechanics everywhere sit and say, "crap, I can't find work". No cars are broken. No one needs a mechanic.
Not yet anyway. But soon, there will be billions of cars sitting around, people don't know how to fix, and suddenly, for the first time in a long while, the mechanic will be the most sought after job.

Vibe coding isn't the death of software engineering. It's the biggest expansion of our customer base in history. Welcome to our abstraction. We hope you enjoy it. When it leaks, we will be here, waiting for the call.