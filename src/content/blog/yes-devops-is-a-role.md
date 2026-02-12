---
title: "Yes, DevOps Is a Role: You Just Do It Wrong"
description: "AKA: What DevOps Really is."
date: 2021-01-13
tags: [devops, culture]
heroImage: /media/medium/1_gX6xwFZDWHDF9naR6PtEhw.gif
draft: false
---

If you have read any articles/books/etc about DevOps, you have probably heard the phrase, "DevOps isn't a role, it's a culture!". There are even some articles/papers/books, that go as far as trying to say that by making DevOps a role, you prevent your company from ever having a DevOps culture.

If you have ever wondered what DevOps **IS**, you have probably noticed that people seem to have a difference of opinions. This article is my explanation for why *DevOps is a role*, which I will explain by very thoroughly explaining what DevOps **is.** The main reason people say that DevOps isn't a role, is because they don't understand what DevOps is, or more accurately, they apply the label loosely to what DevOps isn't.

## The Origin of DevOps

Let us start by discussing the origin of the word DevOps. Sometime before 2009, some people came together to discuss the cross-section of Developers and Operations. A lot of organizations had the two things as two completely different departments. Developers wrote the code, while the operations people put the code on servers and maintained the servers. The problem was that this way of working, is actually opposite of how companies like Google and Amazon function. Discussions happened over time about bridging the gap, and in 2009, Patrick Deboi essentially coined the term DevOps when he created a conference to discuss these ideas, called DevOpsDays. DevOps, in this context, means the merging of Developer and Operation departments. Developers now do ops, and Ops people now do development.

The main thing to note here, is that when people say, "DevOps is a culture", they are correct. DevOps is essentially like agile. It's more of a culture than a specific practice. You can't just "practice agile development" by hiring "agile developers" or scrum masters, it requires a whole different way of working for the entire company.

As DevOps as a culture started gaining traction, certain technologies and companies started marketing themselves as "DevOps tools." Essentially, they were saying "This tool can help you implement a DevOps culture." Which is about as silly as marketing a task tracking software as "agile process management app". But, before I digress, that is what happened. So here we are, with a bunch of devops tools such as CI/CD, docker, metrics, tracing, etc. Basically, any tool that helped Developers do more ops, or Ops do more development.

## Developer Operations

Now that we have that quick history explained, I am going to teach you an entirely new term. *DevOps.* But what is *DevOps* you ask? So glad you asked. To explain, lets leave the land of software engineering for a bit.

A lot of companies like to make money. A common way to acquire new sources of cash, is to hire people who find customers and convince them to pay you. If you have a team of people who do this, they are often called a "Sales Team". Sometime around 1970, companies started to organize and optimize their sales team more. Roles were created for a new kind of job, which responsibilities included whatever allowed the sales team to be even more effective. Essentially, the premise is, "what if you treated your sales team as if it was an entire organization?" Can you optimize it to the extreme? This concept is called Sales Operations. The operations around how you run sales.

Because "Sales Operations" is a mouthful, this is often referred to as just "Sales Ops".

![Sales Ops diagram](/media/medium/1_vIN9qdvo4Nir7PTkjzeK2A.png)

If you can take a sales team, and make them significantly more effective, why not do it to all of your departments? Well, most really great companies, do. In fact, the title COO — Chief Operations Officer, is all about that. How can we get the core of the business to work even more effectively. You will notice that COO has *nothing* to do with servers, deployments, docker, CI/CD, etc. It is entirely about the business's ability to work effectively.

So, what do you call someone who does the same thing as a Sales Operations team, but for developers? They would be called Developer Operations, or, if you have been following along, *DevOps*.

## The Conflation Problem

Hopefully by now, you are as confused as ever. The term DevOps is conflated. The reason why people can't agree on what DevOps means, is because it literally means different things, kind of like the difference between wind and wind, bat and bat, object and object, desert and desert, lead and lead. Basically, everyone is right and wrong at the same time.

Some might argue that the conflation of terms is precisely why we shouldn't have a role called DevOps. These people usually prefer a title such as Site Reliability Engineer. But Site Reliability Engineering (A term google invented) is known as a specific implementation of DevOps (similar to scrum vs agile). Which means, these very people are still calling themselves DevOps Engineers.

The real culprit, however, is the term "Operations". The term operations was used in business well before computers and servers existed. I am not sure why the IT department started calling server management operations, but I assume they did because it was a generic business term that made sense for an IT centric business whos main product was a website. With good intentions, the term operations now means different things.

![DevOps confusion](/media/medium/1_s9UhO0p3C7P7COgLW38L1g.jpg)

## My Proposal

If we call server management "Infrastructure", then the correct term for DevOps culture would be something along the lines of InfraDev, or DevInf. (Noted: it doesn't roll off the tongue the same) However, the term *DevOps* would now be more clear, as to only be about developer operations. Now, we still have conflation between what an InfraDev Engineer is, so here is a proposal:

- **InfraDev Engineer** — A person who primarily works with InfraDev tools.
- **Infrastructure Engineer** — A software developer who works on infrastructure as their main platform. (Builds InfraDev products). Think: Backend Engineer, Database Engineer, FrontEnd Engineer, Mobile Developer.
- **DevOps Engineer** — A person who focuses on Developer Operations. Responsibility is about making the development teams themselves more productive.
- **SysAdmin** — The person who's main responsibility is the management of the servers. This role doesn't need to go away, but due to cloud computing (NOT the devops movement), this role is not necessary in all companies. Cloud platforms can often serve this role instead of actually having it as a full-time position.

## DevOps as a Role is Vital

Should DevOps engineer be a role? Yes. Absolutely. In fact, I would go so far as to say if its not, you are failing. You can call it whatever you want, but if you don't have at least one person focusing on developer operations, then you are not a high performing team.

As a fun excercise, go interview some Sales people you know, or even some VP's. Ask them what happens when you run a sales team, but dont have someone dedicated to Sales Operations. They will likely talk about how individuals optimize for the short term, and if no one is focusing on the big picture, you are likely to get caught in the weeds. Without sales operations, 3 things are possible: 1) a sales team will remain mediocre indefinitely, which actually means slowly getting worse as the team grows. 2) The team will stumble upon greatness for a small period of time. 3) The team will optimize for the short term, think it is making improvements, but is actually getting worse. The same applies to a software engineering team.

So many things are important for improving developer effectiveness. This is also often called "developer experience", because developers are usually happiest when they can focus on the actual code, and get everything else out of the way. Improving developer experience and effectiveness, are the same thing.

I have found that in a lot of organizations that do focus on developer experience, but dont have a *DevOps* role, the responsibility is typically handled primarily by the CTO. But if the CTO is the only one working on this, you will hit a point where developer experience just falls by the wayside. A healthy, highly effective organization needs people whos main focus, is developer productivity and experience. This includes eliminating every single bottleneck that isn't in-and-of-itself, writing code or gathering requirements. Things such as build time, testing, logging, deployments, user feedback, debugging, metrics, documentation, etc.

In conclussion, no, I do not expect people to start using these new terms such as InfraDev, etc. I mainly needed to name these terms so that the nuances between the different definitions can be discussed. That being said, when you do talk about DevOps as a role, please know that yes, it is a role, it just depends on what that role *actually* does. *Developer Operations* is critical in a software organization, just as Sales Ops, People Ops, COO, are important. Also similar to how agile coach, or scrum master, are still roles in an agile culture. In reality, you can call this role what you want, titles already are not representative across organizations (like what does "Senior" mean in Senior Engineer), but certainly dont judge a company by the titles it has; perhaps you are the one who doesn't fully understand *DevOps*.

---

*Originally published on [Medium](https://medium.com/swlh/yes-devops-is-a-role-you-just-do-it-wrong-4db8402eb32b)*
