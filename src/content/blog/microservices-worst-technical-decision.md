---
title: "Microservices: The Worst Technical Decision You Will Ever Make"
date: 2023-06-27
tags: [microservices, architecture, programming]
draft: false
---

The debate of microservices vs monoliths seems to be getting some traction. Most trends happen in a cycle. Fanny packs were awesome; everyone was wearing them. Then they were lame, and you would get made fun of for wearing them. Now, they are back in.

Microservices and Monoliths seem to follow a similar trend. Microservices were really awesome, and everyone was trying them. Now, there is a "self-correcting" of the market and those who have tried microservices are pivoting back to monoliths. The honeymoon of Docker and Kubernetes is over, and people are starting to realize that microservices are complex.

Microservices have the ability to take what may be a fairly simple application, and turn it into a distributed system. The requirement for writing features goes from "will it work" to "which letter do we drop in CAP". These are much more difficult problems.

There really isn't any technical decision you can make that complicates a codebase/application more than adopting microservices.

Microservices are complex -- once you adopt them, you start thinking about different things:

- Service discovery
- Isolating Failures
- Circuit Breakers
- Data Consistency
- Separating Tests
- Independent deployability
- Backwards Compatibility
- API Security (zero trust)
- Standards and contracts

A lot of these things never need to be considered when deploying as a monolith.

## Why are microservices popular?

One major question worth asking is, "If microservices are so bad, why are they popular". The answer is that they solve a different problem. Microservices have become popular because they are designed to solve organizational problems, not technical ones. Another way to say this is that microservices are an **accepted tradeoff** for solving a non-technical problem: people.

![microservices have high technical complexity while monoliths are low](/media/devto/xqy1e2nd4albd1aex23k.png)

No discussion on microservices is ever complete without a mention of Conway's law. That is because Conway's law is at the heart of why microservices matter. If you don't understand Conway's law, you do not understand microservices. Martin Fowler, a well respected software architect, claims that this law is perhaps the only "law" in software that is *always* true. In a recent article on the topic, he said:

> [Conway's Law is] Important enough to affect every system I've come across, and powerful enough that you're doomed to defeat if you try to fight it.

If you are unfamiliar with Conway's law, it states that a software design will eventually mirror the organizational structure of the people who built it. If you have a messy organization, you will have a messy software structure.

Microservices are an architectural choice that intentionally complicates technology, in order to force a better, clearer communication structure. In other words, they are a technical implementation to an organizational problem; not a "solution" to a technical problem.

![graph of organizational complexity for microservices and monolith](/media/devto/qh14h8rekme6abdtxpww.png)

## The Complexity Tradeoff

The astute reader might notice that the "total" complexity of microservices is higher. But the one thing that should hopefully be clear now, is that people who say microservices are better, and people who say monolith is better, are both correct. The problem is, they are talking about different problems.

**Monoliths** are technically easy, but harder to scale organizationally.

**Microservices** are technically difficult, but easier to scale organizationally.

As an organization grows, both technical complexity and organizational complexity increase. Where you are in your growth as a technology and company will determine where on the cross-section of "perfect solution" you stand.

## Growth Factor

The growth rate of technical complexity over time is linear. As your product becomes larger, the complexity grows with it.

![basic graph showing linear growth](/media/devto/z9v1jo1zz87ejmed76lg.png)

Organizational complexity however grows exponentially.

![basic graph showing exponential growth](/media/devto/5e9gx6t95lhbzj1obopo.png)

When teams adopt and practice microservices, that complexity flips. Organizational becomes linear, and technical becomes exponential.

![microservices complexity flip](/media/devto/srfw67ug1cluo4i4i3r0.png)

![complexity comparison over time](/media/devto/0tud3rfjnfffuhlc9eir.png)

## Software abstraction

On the surface, the two appear to be relatively similar in overall complexity, with different problems. In order to accurately see how things might shape out, we must consider the ability of compounding improvement over time.

Software is complex because everything you do is on top of hundreds of layers of abstraction. We are able to program so efficiently these days because decades of other developers have abstracted hard things for us. This means that as software becomes more and more complex, the complexity to us as developers, doesn't actually increase as fast, since abstractions hold the complexity down.

Organizational complexity however cannot be abstracted. Many of the same problems that plagued companies 50 years ago, are still problems. Organizational problems can only be fixed by learned behavior. No technology can solve a behavioral problem.

As your company grows, and learns to adapt to microservices, the technical complexity over time won't actually be exponential, since many of the complex parts will become abstracted. Likewise, as the industry continues to improve, a lot of those complexities will make their way into libraries and common practices.

While microservices might be a technical hurdle for your team, it is a much better long-term solution than a technically-simple-organizationally-complex monolith. It's probably best to think of this whole debate not as one versus the other, but a spectrum. It doesn't have to be one or the other, you can have a mixed architecture.

---

*Originally published on [Dev.to](https://dev.to/nhumrich/microservices-the-worst-technical-decision-you-will-ever-make-jff)*
