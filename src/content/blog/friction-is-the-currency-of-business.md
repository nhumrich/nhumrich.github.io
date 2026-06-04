---
title: "Friction: the Only Dial of Efficiency"
date: 2026-05-26
heroImage: /media/friction-dial.png
tags: [business, leadership, ux, ai]
draft: false
---

Energy can neither be created nor destroyed. The law of conservation of energy might be the most important business principle. Turns out, this principle is not just for physics students taking a thermodynamics test. 

Two cars can have equal engines and equal weight, and yet, one can be far faster than the other. Why is the slow one slower? It's wasting some of the energy on friction. Well, technically, both cars are, but one has a higher friction coefficient than the other. That is to say, one has much greater energy capture than the other, despite having the same input of energy, due to differences in friction. 

Which car is better? Well, it really depends on the purpose behind the car. If you are trying to win a quarter-mile-race, then the lower friction in a car is the clear winner. If you are trying to stop the car to prevent yourself from hitting a pole, then you would much prefer to have more friction in the system. A well-engineered race car is a masterpiece of controlling friction.

The biggest lie in business, and in racing, is that eliminating friction is always good. Without friction, your car wouldn't stop. The alternator wouldn't charge, the steering wouldn't be responsive. In other words, when you are going straight, you want less friction to go faster, but when you want control, you want more friction. 

Car designers know that to build a good car, you have to put friction in the right places. Remove it as much as possible from some parts, and put intentional friction in other parts. Friction is the lever of which every single component in a car is designed around. Far too often, I see leaders in organizations treat friction as a side-effect. Something that "happens" to a process. It accumulates in the joints of the org chart and they squint at it like weather. The good ones see it like a car designer. They treat it like a dial. They know exactly where they're turning it up and where they're turning it down, and they can tell you why for every part of the system. 

This post is about that dial. Where people get it wrong, where it's load-bearing, and why nothing in the last two years feels normal anymore.

## Friction is a dial, not a flaw

One mindset I see in leadership is the belief that friction is always something to eliminate. It isn't. Friction is a design choice. Sometimes a great one.

Bad friction is the legacy approval chain nobody can remember the original reason for. The committee that meets on Tuesdays to rubber-stamp things they don't have context on. The forms that get filled out and never read. That stuff is pure tax — it slows you down without buying you anything, and ripping it out is one of the highest-leverage things a leader can do in their first hundred days.

But there is also good friction. The "type the repo name to delete this" confirmation. Two-factor authentication. The "are you sure you want to email 10,000 people" interstitial. The mandatory pause before sending a wire transfer. Every single one of those is friction that someone, somewhere, designed on purpose because they understood that the cost of the friction is a fraction of the cost of the mistake it prevents.

Good UX designers have known this forever. "Intentionally hard to do" is a feature when aimed correctly. The job isn't to remove friction. The job is to put friction _where you want it_ and remove it _where you don't_. To pick which actions are easy and which actions require a moment of intentionality. That's not a bug in the system. That _is_ the system.

## Intentional dissipation

But friction being good and bad is only sort of interesting; where this gets really interesting is in intentional heat dissipation. When a car engine gets too hot, it overheats. Overheating, in general, is not seen as a good thing. Sometimes, there is friction that cannot be prevented in a system. In these cases, rather than reduce friction, car designers provide ways for the heat by-product of friction to dissipate early, and not accumulate on the engine. Another word for this is "cooling". There is active cooling — using energy intentionally for removing heat — and passive cooling — taking friction somewhere else, earlier in the system.

Intentional dissipation is the difference between high and low performing teams. Where does the friction live, and why? How do we prevent a component from getting too hot? Have you heard the term burnout? It literally means "burned", as in, too hot. We prevent burnout by reducing friction, or dissipating heat. 

## The pull request: a case study in ideal friction

The open source pull request is one of the most elegant friction designs ever built. 

It plays the perfect balance of adding intentional friction, and also allowing there to be friction on both sides of the system, in a healthy balance.

On the submitter side, contributing to an open source project was _hard_. You had to fork the repo. You had to read enough of the code to understand the conventions. You had to write tests that actually passed. You had to get CI green. You had to write a clear, defensible description of why you were proposing the change. And maybe the most underrated piece: the project was _new_ to you. That newness was itself a form of friction. You had to earn the right to contribute by understanding the project first. That wasn't a bug. That was a good-faith filter against drive-by garbage. 

On the reviewer side, there was friction too, but only just enough. Reviewers had to read the diff, run the code in their head, ask questions, push back. The submitter did the most expensive part, the reviewer did the cheap part: judgment. The whole thing worked because the expensive labor sat with the submitter and the discerning labor sat with the maintainer, and neither side was overwhelmed. Natural friction existed with submitting, and some friction was deliberately added for the maintainer to ensure safety. 

That balance is the entire magic. Submitter friction filtered out low-effort contributions. Reviewer friction filtered out low-quality merges. Two dials, two parties, calibrated against each other. Nobody designed it from first principles in a single sitting. It evolved, organically, over years of open source projects discovering what worked. These systems, ones in perfect balance, they happen. Naturally. That's evolution, that's the law of conservation of energy. Humans will evolve the system that conserves energy (without burning out) best over time. 

## Then companies copied the pattern

And then in-house engineering orgs adopted pull requests because they'd seen them work in open source. The form survived. The friction balance did not.

Inside a company, the submitter is not a stranger earning trust. They're someone with commit access who got hired six years ago. There's no learning the conventions. Everyone on the team has the same incentive to ship the same feature. The reviewer isn't a maintainer choosing what to accept. They're your teammate. They're getting paged at the same standup tomorrow. They're not protecting the project from you; they're trying to unblock you so the sprint number goes up. The discernment friction is gone too.

What was intentional friction in open source became unintentional friction in-house. Monkey saw the beauty of the PR; the review queue, the green checkmark. Then monkey copied it, without considering if the friction coefficient was the same. This is how cargo-cult friction happens. 

This is what happens to friction everywhere when you don't actively design it. Deploys accumulate ceremonial steps that nobody can defend. Approval chains lengthen without anyone remembering why. Procurement processes calcify around a one-time incident from 2014. And meanwhile, the genuinely dangerous things — a junior with prod credentials, a one-click "export all customer PII" button, a Slack workflow that sends a message to the entire company without a confirmation step — those stay frictionless. Because friction is _entropic_. Without active design, it gathers in the wrong corners and evaporates from the right ones.

If you're a leader, this is one of the most useful things you can ever audit. Walk through your processes and ask, for every step that has friction: who is this friction protecting, against what, and is the threat still real? And then walk through the dangerous things and ask: where is there no friction at all, and should there be?

![a balance scale tipping out of equilibrium](/media/friction-coefficient-shift.png)

## The AI era: every coefficient just changed

Now, the real reason why I am writing this post: AI. (come on, you had to see this coming, it's 2026 after all)

For decades, the friction coefficient of certain activities was stable enough that we built entire institutions on top of them. Hiring assumed a resume was expensive to produce well. Education assumed an essay represented real thought. Code review assumed code was expensive to write. Customer support assumed a coherent email represented a real person with a real problem. Those weren't axioms anyone wrote down. They were so deeply baked in that nobody had to.

AI just changed nearly every one of those coefficients. Not gradually. Overnight. And almost none of our systems have recalibrated yet.

Go back to the pull request. Submitting a PR now costs near zero. An agent can fork the repo, read the code, write the change, write the tests, write the description, and open the PR while the submitter is making coffee. Reviewing a PR, on the other hand, costs the same as it always did. A human still has to load the code into their head, ask whether it actually solves the problem, and decide whether to take responsibility for it landing in production. The balance has collapsed. Reviewers are drowning in PRs that look plausible, pass CI, and were written without comprehension by something that won't be around to debug them at 2am. The PR friction wasn't just protecting against bad code. It was protecting against _unaccountable_ code. That filter is gone, and nobody has rebuilt it. In terms of friction, we have reduced friction in the early steps, causing more friction in the later steps, without changing the dissipation math. AKA, we are putting too much heat on the pieces that have not reduced friction. 

The pattern repeats everywhere.

**Code writing went from expensive to cheap.** Architecture reviews, RFC processes, senior sign-offs: those existed because writing the code was the expensive part, so you wanted to be sure the expensive thing was pointed at the right target. Now the writing is the cheap part, but the gates haven't moved. They feel absurd because the friction they were balancing against has collapsed underneath them.

**Content went frictionless.** Cover letters, college essays, design docs, internal memos, RFPs: every one of those derived its signal value from the friction of producing it. A 2000-word document used to take a day, which meant the author had thought about it for a day. Now it takes thirty seconds. The artifact looks identical. The meaning has evaporated. We are awash in documents that pass the form of thought without containing any. And readers haven't caught up to that yet.

**Hiring is broken because the artifacts broke.** Resumes, cover letters, take-home assignments: every one was a friction-based signal. They worked because they were _hard to fake well_. Now they are trivial to fake well. The signal is gone. We are still using the same hiring funnels, but the things flowing through them no longer mean what they used to mean, and we haven't replaced them with anything.

**Support is broken in both directions.** AI removes friction for legitimate users trying to get help: that's wonderful. But it also removes friction for scammers, spammers, phishing operations, fake applicants, fake reviews, fake complaints, fake everything. The friction was load-bearing in a way nobody named. It wasn't just shaping _what_ people said. It was filtering _who showed up at all_. Remove it and the input distribution changes, not just the input quality.

AI changed the friction coefficient of a bunch of activities we built systems on top of, and the rest of those systems haven't recalibrated. The institutions are running the old playbooks against a board where the rules quietly changed. The form is intact. The signal is gone. And we will all keep feeling heat until we rebuild where the friction sits, on purpose.

Here's the part almost everyone is getting half-right. Removing friction is the easy half, and everyone is busy doing it — using AI to break down walls that used to exist naturally, automating the small stuff. But anything dangerous that used to be hard *only because the underlying action was expensive* — sending mass communications, generating content at scale, submitting code, applying for jobs, filing tickets — is now trivially easy, and almost nobody is putting the wall back. The friction that used to prevent the people downstream from burning out? Gone too, and it landed as heat on whoever sits at the next step. The work now isn't removing friction. It's deciding where to add it back, and how to push some of it onto the requester instead of the reviewer.

## You are the friction engineer now

You don't hate AI. You hate that it's increasing friction in places you aren't used to (too much heat) while decreasing it where there used to be plenty. Both feel like AI's fault. Neither is. They're just the coefficients moving, all at once, and your systems haven't caught up.

For a century the friction came for free. The cost of writing the essay, forking the repo, drafting the email — that cost did your filtering for you. You never had to design it because physics and effort designed it for you.

That era is over. The free filtering is gone, and it is not coming back. From here on, every filter you rely on is one you built on purpose, or one that no longer exists.

The winners of the next decade won't be the ones who removed the most friction. Everyone is doing that. They'll be the ones who knew exactly where to put it back — who looked at a frictionless world and chose, deliberately, where to make things hard again.

The dial is in your hand now. It always was. The only question is whether you know you're holding it.
