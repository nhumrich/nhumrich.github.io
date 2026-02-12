---
title: "The Evolution of Disorder in Large Software Projects"
date: 2023-01-31
tags: [software, architecture, teams]
draft: false
---

If you have ever worked on a large software project, you are likely all-too-familiar with technical debt. Technical debt, in my experience, is synonymous with "messy work environment." In other words, the tools/code/architecture is built in such a way, that doing certain tasks is not optimal because there is a mess that needs to be cleaned up. As you build these projects, and notice this mess, you start to make decisions between cleaning up the mess, or leaving it there. In some cases, you may even choose to make the mess worse.

My life dealing with messes and disorder began at a very young age. As a child, I always had a messy, disorganized room. I would have very little places of open floor of which to even step on in order to leave my room. Today, this habit often makes it to my work desk. My desk in my office regularly has things all over it. I occasionally clean up my desk, and make it look really nice, but it never lasts long. It seems to stay clean for a couple of days.

While having a discussion about this phenomenon with a friend of mine, I was introduced to Broken Windows Theory.

Broken Windows theory is a theory that says crime is more likely to happen in neighborhoods/houses that have broken windows. The concept is that subconsciously, we (or miscreants) believe clean, orderly houses are more likely to be monitored. This theory was created by psychologists James Q. Wilson and George L. Kelling after hearing about a story from Philip Zimbardo, a Stanford psychologist.

![Broken windows](/media/devto/82cvu2q2mawxdgdacqn9.jpg)

In his story, Zimbardo left two cars unmarked, without plates parked in public lots in different cities. One car had the hood up and doors open. The car with the hood up and doors open was trashed within days, and the other car was left untouched. Zimbardo decided to smash in the window of the untouched car, and in within hours, the car was destroyed.

Kelling and Wilson explain the theory like this:

> Social psychologists and police officers tend to agree that if a window in a building is broken and is left unrepaired, all the rest of the windows will soon be broken. This is as true in nice neighborhoods as in rundown ones. Window-breaking does not necessarily occur on a large scale because some areas are inhabited by determined window-breakers whereas others are populated by window-lovers; rather, one un-repaired broken window is a signal that no one cares, and so breaking more windows costs nothing. (It has always been fun.)

The emphasis for me is the last section: "one un-repaired broken window is a signal that no one cares, and so breaking more windows costs nothing."

Upon learning about this theory, suddenly my messy desk made sense. Once I leave one thing on my desk, then my brain is willing to leave, yet another thing on my desk. Over time, cleaning up a single thing on my desk is irrelevant. I may as well leave it, since it won't affect the overall state of disorder.

## Back to Our Regular Scheduled Program

I have also come to notice this same behavior in software. As a team works on a feature, there are often discussions on technical debt. What is the priority of the feature? Is it worth taking on technical debt to ship it faster? One of these items, for example, is automated tests. You can reduce some time before release if you skip tests this time. Tests are just one form of technical quality, but there are many other factors as well that also get put aside.

Every time you choose to add technical debt, it reinforces that taking on technical debt is an acceptable lever to pull when under pressure of some form. In other words, if you already have a broken window, what's one more? One poor quality feature leads to another, and another, and another. Eventually, your building runs out of windows to break, and your only answer is to burn it down and start building it over again.

Broken window theory also teaches us that the rate of disorder is exponential. As more technical debt enters a project, the rate at which it takes on more debt increases. If you have ever worked on a project that was later considered "legacy" you will know that there is no faster way to kill a software project than to call it "legacy." When a software project reaches legacy status, all windows are ripe for breaking and fixing them becomes pointless.

## What to Do About It

Learning about broken window theory often leads to "zero-tolerance" policies. In policing, it means ticketing every minor infraction to encourage communities to not get to the point of having minor cosmetic issues. However, zealotry is not the solution to broken windows. The solution is care and training. In other words, we don't ticket people for having broken windows, but we can help encourage people to fix windows once broken. Preventing all technical debt is not the solution. Being a zealot about tests and quality will actually slow down teams significantly, as perfect quality is unobtainable. A balance must be quested. What that balance is depends a lot on the maturity of the idea you are working on.

I once heard -- though unfortunately, don't remember where -- that fidelity should match maturity.

> The fidelity of a design should never exceed the maturity of the idea/project

In other words, the quality of your current feature should never be greater than the maturity of that feature. If you are unsure of the feature and its impact, you should not plan for much quality. But is a project is very mature, than your changes should have high quality.

We can see an example by looking at chefs in cooking shows versus chefs in a fancy restaurant. If you have ever watched a competitive cooking show, such as master chef, you will see chefs make meals without ever cleaning up. In these shows, the chefs have one to three hours to cook a couple of dishes. Time is tight, and scalability is low. Cleaning up, or preventing messes, is the lowest item on their priority. They will keep cooking no matter the mess they create, with the only exception being if the mess prevents their next immediate task from happening.

In contrast, chefs in a fancy restaurant have every reason to care about cleanliness. First, if the restaurant is located in America, there are actual laws that require the kitchen maintain a certain level of cleanliness. Second, a clean kitchen ensures that future meals are able to be cooked smoothly. As dirty dishes pile up, and counter tops get dirty, it prevents future meals from being prepared in a timely manner. For these reason, the kitchen often gets cleaned as part of the process for cooking.

Similarly, our teams need to find the right balance between quality and speed. Quality is only in conflict of speed in the short term, but the two are always tightly coupled in the long run.

Perhaps, its time for you to do an inventory of your own code-base. How much disorder do you have? Does it seem to be getting worse or better over time? Are there specific repo's/projects that you feel more inclined to clean up vs others? Do you have any practices in place to metaphorically replace broken windows?

---

*Originally published on [Dev.to](https://dev.to/nhumrich/the-evolution-of-disorder-in-large-software-projects-jab)*
