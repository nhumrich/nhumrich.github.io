---
title: "How Organizational Complexity Scales"
date: 2024-09-26
tags: [architecture, microservices, teams]
draft: false
---

This article follows up on a previous post about microservices versus monolithic architecture. I had been asked to explain "organizational cost" and provide concrete examples of how it manifests in different architectural approaches.

## The Cable Story

I'll start with organizing cables at home versus at a corporate office. At home, all my cables went into one bin, making retrieval time-consuming. The IT department at work maintained organized, sorted bins for quick access. Both approaches suited their respective use cases: the home office required minimal organization since only one person used them infrequently. The corporate office needed high organization because many people requested cables daily.

It would take much longer to find a specific cable in my one bin full of cables. It would also, however, take longer to put them away.

This illustrates organizational complexity—the costs associated with managing and retrieving items based on how they're arranged.

## The Community Garden Metaphor

Imagine a five-acre community garden that grows in complexity as more people participate. Initially, everyone helps with shared responsibilities. As growth continues, weeds multiply and hybrid plants emerge from cross-pollination. Nobody can track whose plants belong where.

City officials initially manage the chaos by directing gardeners about which weeds to remove. Eventually, they establish clear plot boundaries with painted lines. Some officials suggest installing fences and roads between plots—preventing weeds from spreading but making collaboration difficult.

![Community garden with clear plot boundaries](/media/devto/6tuezwzqy7m156d5wouu.jpg)

## Connection to Software Teams

When a growing dev team continues to work in a single code base, the lines between bugs and features get blurred.

The garden story parallels software development. Teams specialize around features but step on each other's toes. Ownership becomes unclear. Leadership draws ownership lines, but these remain suggestions. People easily cross boundaries, complicating code and blurring ownership further.

Microservices enforce strong boundaries, making boundary-crossing difficult. Clear ownership eliminates misunderstandings and reduces cross-communication overhead.

## Real-World Examples

### Example 1: Framework Upgrades

In monolithic architectures, upgrading Node.js affects everything and requires testing across all features. Coordination becomes complex—developers must manage merge conflicts as other teams continue working, or organizations must halt all work ("stop the world").

In microservices, each team upgrades independently on their own schedule. Coordination overhead approaches zero, and communication requirements are minimal.

### Example 2: Production Bugs

A monolithic production bug requires convening many team members to diagnose. Multiple developers spend time investigating before identifying the root cause, creating significant organizational expense.

Microservices isolate the issue. The affected service's team gets notified directly. Related services already detect the problem through error responses. Most of the organization remains unaware.

### Example 3: Feature Assignment

In a monolith, a feature goes to an available team even if the "correct" team owns it. Ramp-up time increases, and implementation conflicts with the proper owners' standards. Long-term maintenance suffers.

Microservices make this decision explicit. Assigning work to a non-owning team involves clear costs (ramp-up, architectural alignment). The decision becomes more deliberate.

## Culture Versus Enforcement

A perfectly organized monolith and perfectly designed microservices look exactly the same. The difference is that one is about building a culture of expectations, and the other is about enforcement.

Monoliths rely on cultural discipline and expectations. Microservices enforce boundaries through technical constraints. Business pressures inevitably push teams toward violations of sound principles, often unconsciously.

There's a quote I like about honor and boundaries—the idea that a person of honor wouldn't cross even a chalk line if asked not to. But there's a crucial flaw: other people might push you across the chalk line despite your intentions.

Intentions do not accurately represent future results.

![Organizational complexity](/media/devto/i8lxqgyv2akddfot1ig6.jpg)

Microservices proponents don't distrust individuals—they recognize mistakes happen and business pressure creates situations where violations become tempting.

## Trust and Prevention

There are some mistakes so costly, you prevent humans from doing them, even if you trust the individuals completely.

If transferring a million dollars, hire armed guards rather than relying on a trusted friend's character. The issue isn't trusting someone's integrity—it's preventing problems outside anyone's control.

## Conclusion

Microservice architectures reduce organizational complexity by enforcing boundaries with electric fences. Organizations with sufficient discipline to respect boundaries without technical enforcement might avoid microservices successfully. However, for most organizations, microservices represent the inevitable architecture.

The final question frames the tradeoff: Do you have the discipline to have many cooks in a large kitchen? Or would you prefer to have many kitchens?

There is such a thing as too many cooks.

---

*Originally published on [Dev.to](https://dev.to/nhumrich/how-organizational-complexity-scales-4j7f)*
