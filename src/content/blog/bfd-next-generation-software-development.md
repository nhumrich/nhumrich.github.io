---
title: "BFD: The Next Generation of Software Development"
date: 2020-06-19
tags: [programming, satire, quality]
heroImage: /media/medium/1_ztaJGqf8ZTO0A--11KG84w.png
draft: false
---

For a couple of years now, I have really been fascinated by the subject of code quality. There are many books and blog posts on code quality and how to improve it. I have read all of them. For years I have dove into various concepts to try to improve code quality.

## But what is Code Quality?

Code quality means many things. It can mean the ability for a new person to grasp and understand the code. It can mean the ability to modify the code with refactors and changes. But the thing I want to focus on for this post is the number of bugs that code has. The only real measurable way to define code quality is based on density of found bugs. The metric itself is not perfect, since you cant prove a bug doesn't exist, you can only prove that a found bug does exist.

## Technique 1 to reduce bugs — Types

Software Engineering has existed for almost a century, and for that century, reducing bugs has been a major topic of study and research. This means that we have a lot of data, mostly from PhD students, which helps us understand techniques for reducing bugs.

The first in these studies that I want to mention is about type safety. One author took all the top repos on github, and graphed bug density. The conclusive method for figuring out bug density was quite genius really. The author counted the number of issues labeled as "bug", and then factored that against the number of repos in that language. This is the repo-to-bug-labeled-issue density.

![Bug density chart - 100+ stars](/media/medium/1_lJyUIuQXetE27n9ln_rydQ.png)

The point is, in terms of static vs dynamic typing, there is no conclusive evidence to show that the type system actually reduces bugs. After all, we all know that c++ has a very solid type system with no dynamic typing at all, and it has a very high bug count. If you are in your head right now thinking "well java/c++ has a lot of bugs because of X", then you are saying the correct things. Obviously, something else matters. Maybe types are a part of it, maybe not, but reducing bug density certainly requires more than the "correct type system".

## Technique 2 — Paradigms

In studies, you can see that on average, functional languages seem to have a lower bug count than non-functional ones. Does the paradigm of a programming language improve code quality? Studies conclude that:

> There is a small but significant relationship between language class and defects. Functional languages are associated with fewer defects than either procedural or scripting languages.

So, functional languages can have less bugs? After learning this, I started doing more functional programming. I got on the Monad train. I was giving talks at meetups and conferences about functional programming, I even started writing a book. If code quality is improved, then I am happy. After a couple years of this, me and friend Billy were having a discussion about small, warm-and-fuzzy, yet inconsequential changes. I realized that while functional programming made me feel like my code quality was better, the reality is that it wasn't really obvious to anyone else, I still had bugs. Small gains were enough, I needed something better.

## Technique 3 — TDD

I really don't know how my career survived for so long before finally trying out TDD, but let me tell you, it is a godsend. TDD is Test Driven Development. It is basically the agile method, but with a focus on testing. Writing tests is part of a feature. It basically goes like this:

1. Before writing a function, first, write a unit test.
2. Write the function, and get the test to pass
3. Keep doing this as you improve on the functionality, whilst building up tests.

TDD is amazing because instead of lying to yourself that you will test the code later, you are forced to write the test upfront. This way you know your code actually works. Without TDD, you would have written your code, and shipped it, without ever actually knowing if it works, and this is how bugs happen.

## Must be something better

You see, TDD is pretty good. But it doesn't actually prevent you from writing bugs, its just prevents you from shipping the bugs. Here is how it works, you see: You write the bug, your test finds it, you fix the bug, then ship the code. As you can see, bugs still sometimes get shipped you see, because sometimes the tests themselves are incorrect, you see. You see, I have thought about maybe doing TDD, for TDD, but it seems a little excessive. As you can see, the biggest con to TDD is that you are writing a significant amount of more code. Instead of just writing a feature, you see, you also have to write a lot of tests. This is great for quality, but you drastically reduce speed of delivery. Not to mention, you now have all this legacy code that has to run every-time you want to ship something. And this frustration is what left me on a journey to discover something new.

You see, lets go back to the clojure example above. I was fascinated by the fact that clojure had such a low bug rate. So I dug into that deeper. You see, I looked into the clojure repositories on github, and cloned every single one. I tried to run the numbers myself my counting every issue labeled bug. I noticed some fascinating things. Mainly, there were some clojure repositories that didn't have a single issue with a label of "bug". Not a single one. As you can see, these developers have somehow managed to write software entirely free of bugs. Or, in other words, perfect quality. I had no idea how this was possible, you see. I thought that the theoretical maximum of quality was around 80%, but they achieved 100%. I have interviewed a lot of these developers since, you see, and have put much effort into duplicating their efforts.

Fast forward to a couple months ago. You see, recently my team hired a new developer, and this coworker of mine changed everything. I have been researching many ways to achieve 100% quality, and this coworker, Skyler, achieves it. Since being at the company, Skyler has yet to write a single bug. Being able to pick his brain was the last step of my discovering process.

## BFD

So, without any more fanfare, I introduce to you BFD, Bug-Free-Development. A new wave of software development. Never write a bug again. With TDD, you have to implement tests, which slow down release speed. But with BFD, you are welcome to ship your features, unburdened by the tests that slow you down. Here is how BFD works:

1. Write the feature correctly the first time.
2. Ship the feature.
3. Move on.

My company has been trying out this new method for months now, and quality has never been better. I highly encourage you to try BFD, as it works wonders for software quality. And yes, BFD, is a BFD.

---

*Originally published on [Medium](https://medium.com/@nhumrich/bfd-the-next-generation-of-software-development-7b045d1732d0)*
