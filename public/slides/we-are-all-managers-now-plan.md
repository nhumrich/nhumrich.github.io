# We Are All Managers Now: Surviving in the Age of AI-Assisted Development

**UtahJS · 20 minutes · working brainstorm/plan doc**

## The pitch (as submitted)

> If we're using AI to write code, are we really programmers still? Maybe we're all just managers now. We delegate tasks. We review output we didn't write. We context-set, we verify, we course-correct, we coach. And nobody trained us for any of this. This is exactly why AI-assisted development is quietly burning people out.

**Decisions made so far:**
- **Spine: identity & burnout.** The "you're a manager now and nobody told you" realization is the star. Skills and habits are supporting acts.
- **The twist:** the *harmful* management skill is delegate-and-trust — "give a high-level task, then leave them alone," maximize autonomy, reduce friction. Best-practice people management, actively dangerous with AI.
- **Story-driven** — anchor beats in real manager↔IC transitions and a year of AI-heavy dev as a CTO.
- **Resolution act:** the new job is improving the *system*, not reviewing the output.

**Source material already written (the blog wrote half this talk):**
- `src/content/blog/friction-is-the-currency-of-business.md` — friction as a dial; AI removed producer friction so the heat moved to the reviewer
- `src/content/blog/the-progression-of-a-software-career.md` — losing/finding joy at each career stage; AI compresses the grieving timeline; the 2am transitive-trust incident
- `src/content/blog/devs-are-definitely-not-cooked.md` — abstraction layers, "when it leaks, we will be here"
- `src/content/blog/no-you-wont-be-replaced-by-ai.md` — C vs. assembly, induced demand, "writing code is a means to an end"
- `src/content/blog/yes-devops-is-a-role.md` — "improving developer experience and effectiveness are the same thing"
- `src/content/blog/how-organizational-complexity-scales.md` — culture vs. enforcement; "some mistakes are so costly, you prevent humans from making them"
- `src/content/blog/ai-will-replace-everyone-but-you.md` — the calibration bias (optional garnish)

Slide format when we get there: Remark.js HTML decks in `public/slides/` (markdown in a `<textarea id="source">`, `---` slide separators, `???` speaker notes — see `asynchronous-python.html` as template).

---

## 1. Candidate core thesis statements (pick one to say out loud, verbatim, twice)

- "Nobody promoted you, but you're a manager now — and the way we're all doing it is the way bad managers do it, which is why it's burning you out."
- "AI didn't take your job. It took your job *description*. You're now managing, and nobody trained you."
- "The best management advice ever given — hire great people and get out of their way — is the worst possible way to work with AI."
- "Your output didn't disappear at 5pm. Your *definition* of output is a year out of date."
- "The flow state isn't coming back. The joy can. But only if you stop grieving the wrong thing."

## 2. The opening cold-open (story-driven — strongest options)

**Option A — "A day in the life" misdirect (recommended).** Describe a workday in second person, no AI mentioned: you spend the morning writing up task descriptions; you check in on work in progress; you review other people's output all afternoon; you course-correct someone who went off the rails; you answer clarifying questions; at 5pm you can't point to a single thing YOU built. Beat. "I just described my first year as an engineering manager. I also just described last Tuesday, alone at my desk, with three terminal tabs open." Title slide.

**Option B — the 5pm moment, first person.** A specific real evening: shipped more code that day than any week of hand-coding life, and felt like garbage about it. "I did the math. I was 4x more productive and 100% less satisfied. Something was broken, and it wasn't the code."

**Option C — the confession.** "I've become a manager four times in my career. Three of those times, I got a title and a comp conversation. The fourth time it was a terminal window, and nobody even asked me."

## 3. The reveal / naming section — "you're a manager now"

The job description nobody accepted. Map 1:1, fast, punchy:

- Writing tickets → prompting / context-setting
- Delegating → dispatching agents
- 1:1 check-ins → tabbing over to see what the agent's doing
- Code review of work you didn't write → …literally the same thing
- Coaching → CLAUDE.md files, corrections, "no, we use runes now"
- Performance evaluation → deciding whether to trust output
- Your calendar of interruptions → context-switching between parallel agents

Punchline candidates:
- "You now have infinite direct reports. They're brilliant, tireless, eager — and they're confident liars with amnesia."
- "My most productive direct report has no memory of yesterday."
- "You got promoted to manager with no raise, no title, and no consent."

Optional gravitas beat: Andy Grove — *"The output of a manager is the output of the organizational units under their supervision or influence."* This sentence is either the most depressing or the most liberating thing you'll hear today; the talk is about making it the second one.

## 4. Why it hurts — the burnout mechanisms (the "name what's happening" core)

This is the section the abstract promises ("why AI feels exhausting even when it's saving you time"). Candidate mechanisms — probably pick 3–4, each gets a name and a story beat:

1. **The heat moved to you** (from the friction post). Friction on *producing* code went to ~zero. But review friction didn't go anywhere — it all landed on the human. In physics terms: work got easier, and all the waste heat now dissipates through YOU. Line from the post worth quoting on a slide: *"The winners of the next decade won't be the ones who removed the most friction. They'll be the ones who knew exactly where to put it back."*

2. **Reading is harder than writing.** Reviewing code you didn't write means reconstructing intent from artifact — the single highest-cognitive-load activity in software. It used to be 10% of your day. Now it's 80%. Nobody's productivity math accounts for this.

3. **Vigilance fatigue.** The output is confident and *usually* right, so you must sustain skepticism against a mostly-reliable stream — the TSA-screener problem. High vigilance + rare events = a known, studied form of exhaustion. Managers know this as "trust but verify"; nobody tells you verification is the tiring half.

4. **Flow starved — you got moved to the manager's schedule.** Name the framework out loud: Paul Graham's "Maker's Schedule, Manager's Schedule" (2009) — probably the most JS-conference-legible reference in the whole talk. Managers live in one-hour slots where meetings are cheap; makers need half-day blocks, and a single interruption shatters the afternoon. PG's essay was about makers *defending* their schedule from managers. The 2026 twist: nobody scheduled a meeting — the *tool* did. Agent-assisted dev is interrupt-driven by construction: dispatch, wait ten minutes, review, redirect, repeat. Every agent completion is a meeting invite you can't decline. You can have a completely empty calendar and still live a manager's day.
   - The inversion (worth its own slide): **"We finally built a worker that gets pure, uninterrupted deep work. It's the AI. We gave it the maker's schedule and kept the manager's schedule for ourselves."**
   - Why this beat matters for the spine: it reframes "my flow is gone" from a personal failing into a *schedule architecture* problem — which means it has a schedule architecture **fix** (→ practice #2, batching supervision into office hours vs. maker blocks).
   - You don't get tired from doing too much — you get tired from never sinking into anything.

5. **The invisible-output problem (the 5pm problem).** "I made this" is a dopamine loop programmers have run since their first Hello World. Review-and-delegate produces decisions, not artifacts, and decisions don't show up in `git log` under your name. Managers take *years* to rewire what "a good day" feels like. You were given a weekend.

6. **Grief, compressed** (from the progression post). Career joy has stages — craft → quality → systems — and seniors got a decade to grieve each transition. AI telescopes the whole path into months. Line worth reusing: *"You are being asked to jump all the way to my finish line in the timespan of a couple of months."* This beat is also the empathy hand-out to juniors in the room: they never even got the flow years.

## 5. The twist — management skills: what transfers vs. what betrays you

**Structure idea: "I've made the IC↔manager crossing several times. I brought my best management skills to AI. Half of them worked. The other half nearly wrecked me."**

### Transfers (works on AI like it works on people)

- **Context-setting.** A good brief beats a good correction. The manager skill of "explain the why, the constraints, and what done looks like" is now the highest-leverage act in software.
- **Small check-ins over big-bang review.** Never let a junior go dark for two weeks; never let an agent run for an hour and hand you 2,000 lines. Review the plan before the work, the skeleton before the flesh.
- **Course-correct early, kill work without sunk-cost guilt.** Managers learn to say "stop, wrong direction" on day two, not day twenty. Same muscle, faster loop.
- **Calibrated trust.** Good managers trust per-person, per-task-type, based on demonstrated competence — not globally. Exactly right for AI: trust it to write tests, verify its concurrency code.
- **Onboarding docs as leverage.** CLAUDE.md is an onboarding guide. Writing down "how we do things here" was always a management superpower; now it compounds even faster.

### Betrays you (the spicy list — the abstract's "actively harmful" claim)

- **THE BIG ONE — delegate-and-trust / autonomy-maximizing.** Two decades of management thought converge on: hire smart people, give them a high-level goal, get out of their way, remove friction. That advice is *calibrated to humans* — beings with skin in the game, memory, a career, shame, and the ability to say "I'm not sure." AI has none of those. Autonomy is the reward for accountability, and AI cannot be accountable. Give it autonomy and walk away and it will confidently manufacture garbage at scale — and thank you for the opportunity.
  - Story beat: a real incident — gave the agent a meaty task like a good empowering manager, went to lunch/meeting, came back to a beautiful, plausible, wrong solution. (Or the 2am production-incident story from the progression post: transitive trust — "surely someone reviewed this" — except now the someone who wrote it *cannot hold the pager*.)
  - One-liner candidates: "Micromanagement is a sin with humans. With AI it's just called code review." / "Every skill I have for empowering people assumes the person will still exist tomorrow." / "AI is the first direct report where the more rope you give it, the more rope you get back, woven into something that looks exactly like a solution."
- **Friction removal as reflex.** Managers unblock; it's the instinct. But some friction is load-bearing — it's where quality and judgment live (PR review exists *because* of friction economics). The move isn't remove friction, it's *place* it deliberately.
- **Coaching for growth.** Investing feedback in a mentee pays compound interest because they retain. The model doesn't grow from your feedback within a session's lifetime — coach the *system* (CLAUDE.md, prompts, guardrails), not the instance. Emotional energy spent "developing" the AI like a junior is pure waste.

## 6. The new job — improving the system (the identity ANSWER)

**Framing: this is the resolution of the talk.** Acts 1–4 name the pain and expose the trap; this act says what the job actually *is* now. Not "you review code" — "you design the system that produces code." It's the difference between the talk ending in commiseration vs. ending in a promotion.

**The management principle underneath:** Bad managers manage *tasks* — review every deliverable, correct every mistake personally, become the bottleneck, burn out (sound familiar?). Great managers manage *systems* — hiring, onboarding docs, feedback loops, process, culture — so quality happens without them touching every item. Deming: *"A bad system will beat a good person every time."* If you're exhausted from reviewing AI output, you're task-managing. The escape isn't reviewing faster. It's building the system that makes the review unnecessary.

**The loop to literally draw on a slide:**

Delegate → Review → **ask WHY this review was needed** → fix the system → next delegation needs less review.

The review isn't the job. **The review is telemetry** for the system you're actually building.

**Applied concretely (JS-audience-friendly examples):**
- Told the agent the same thing twice? That's not an agent bug, it's a *system* bug. It goes in CLAUDE.md / rules / memory — feedback that *retains* (this is where §5's "coach the system, not the instance" pays off).
- Nitpicking style in review? Don't tell it — **lint it**. ESLint rule, TypeScript strictness, formatter. The agent obeys tooling far more reliably than prose instructions. Every nit you convert to a lint rule is a review you never do again.
- Catching the same *class* of bug? Write the test harness that catches it. Tests-as-spec before the agent starts, not review-as-net after it finishes.
- Scared of what it might do? Permissions, sandboxes, CI gates — **enforcement over vigilance**. From the org-complexity post: *"There are some mistakes so costly, you prevent humans from doing them, even if you trust the individuals completely."* Same principle, new workforce: don't ask the agent to be careful. Make the mistake impossible. (This is also the cure for vigilance fatigue in §4 — you can't sustain human vigilance, so stop trying; encode it.)
- One-off correction pays once. System fix pays on **every future task, forever**. This is Grove's managerial leverage, applied to a workforce with perfect compliance and zero retention.

**Why this resolves the identity crisis (the payoff):**
- The 5pm answer changes: "I didn't ship a feature today — I made every future day faster and safer." That's real, visible (it's in git! CLAUDE.md, lint configs, test harnesses are *artifacts*), and it compounds.
- **Flow state relocates.** Building harnesses, evals, guardrails, and tooling IS hands-on engineering — you can sink into it for hours. The craft didn't die; this is where it moved. (Stronger version of "craft moved up a layer" — not just taste and judgment, actual *building*.)
- Authority beat: this is the DevOps-post thesis reborn — *"Improving developer experience and effectiveness are the same thing."* You're now the platform team for a fleet of AI developers. The whole career arc (IC → manager → CTO → platform thinking) is the credential for this exact claim.

**One-liner candidates:**
- "Stop reviewing code. Start reviewing why you had to."
- "If you correct the agent twice, the third time is on you."
- "Your job isn't catching mistakes. It's making mistakes impossible."
- "The review isn't the job. The review is telemetry."
- "Managers who read every line burn out. Managers who build teams that don't need them to — those get promoted. Same game now."

## 7. Keeping it craft — the daily practices (condensed; this is the dessert, not the meal)

Candidates (pick ~4, one slide each or one slide total):

1. **Keep a hand-written ration.** Managers who stay sane keep some IC work. Deliberately hand-write something regularly — not for productivity, for *identity maintenance*. Give the audience explicit permission: it's okay that it's slower.
2. **Batch the supervision — run two schedules on purpose.** The direct fix for §4's maker/manager-schedule problem. Don't shred the day tabbing between five agents. Split the day into explicit *manager blocks* (dispatch agents, review output, redirect — interruptions welcome) and *maker blocks* (agents muted or working on long tasks, you're heads-down). PG's founders did "office hours" at the end of the day; do office hours for your agents. The agents don't care about your latency nearly as much as your flow does.
3. **The 5pm ledger.** Write down decisions and outcomes at end of day, not diffs. Rewires "what did I build" into "what did I move." This is exactly how new managers survive the same transition.
4. **Review the plan, not just the code.** Cheapest vigilance is early vigilance. Make the agent propose before it produces. (Doubles as the burnout fix for mechanism #2 — less post-hoc intent reconstruction.)
5. **Put friction back on purpose.** Personal version of the friction thesis: pick the gates that stay human (design, data models, security boundaries, anything you'll hold the pager for) and let the rest flow.
6. **Craft moved up a layer — let it.** C replaced assembly and programmers didn't vanish; the craft relocated. "Writing code was always a means to an end." The taste, the architecture, the judgment — that was the job the whole time. (Bridges to the closing.)

## 8. Closing — candidate landings

- **Permission structure (matches abstract's promise):** "You have permission to still love programming — even when your hands aren't on the keyboard. You also have permission to keep your hands on the keyboard, on purpose, because you love it. Neither one makes you obsolete. One of them keeps you whole."
- **Callback to cold open:** return to the 5pm scene, same desk, three terminal tabs — but now the ledger of decisions reads fine. "Turns out I did build something today. I just had to learn to see it."
- **The abstraction-layers hope note** (from "devs are not cooked"): every abstraction leaks, and when it leaks, we're the ones who get called. "When it leaks, we will be here, waiting for the call."
- **Grove callback:** "Your output is the output of everything under your influence. That used to depress me. Now I read it as: my influence just got a lot bigger."

## 9. Structure options for 20 minutes

**Option 1 — Three-act with a twist and a resolution (recommended):**
1. Cold open: day-in-the-life misdirect (2 min)
2. The reveal: the job description you never accepted (2 min)
3. Name the pain: 3–4 burnout mechanisms, incl. maker-vs-manager schedule (5 min)
4. The twist: management skills — what transfers, what betrays you; delegate-and-trust story as centerpiece (4 min)
5. The new job: you're not the reviewer, you're the system designer (4 min)
6. The practices: ~4 habits, fast (2 min)
7. Landing: permission + callback (1 min)

**Option 2 — "Letters to my IC self":** each section framed as advice from manager-Nick to IC-Nick, revealed to apply to AI. More gimmicky, very memorable if executed well.

**Option 3 — Survival-guide listicle:** "7 things management taught me about surviving AI dev." Easiest to write, most forgettable, weakest for an identity-spine talk. Include only for contrast.

## 10. Jokes / lines parking lot (unassigned)

- "We are all managers now. Worse — we're all *middle* managers now. The AI does the work and the AI vendor sets the roadmap."
- "I have an infinite supply of interns. Every morning they show up brilliant, enthusiastic, and with total amnesia."
- "It's Jira-with-extra-steps, except you're also the person the Jira ticket is assigned to, and also the QA, and also the standup."
- "'It's saving me so much time.' Cool — time for what? More reviewing. It's a pie-eating contest where the prize is more pie."
- "The AI never gets tired. That's the problem. You do."
- Juniors beat: "You didn't get ten years to fall in love with flow state before it was taken away. You got a free trial."

## 11. Open questions to resolve

1. Cold open A (misdirect) vs. B (5pm math) vs. C (fourth promotion)?
2. Which 3–4 burnout mechanisms make the cut? (Current vote: heat-transfer, maker/manager-schedule flow starvation, invisible output, grief-compressed — reading-is-harder folds into vigilance.)
3. The delegate-and-trust story needs a REAL incident from the past year. Which one — the walked-away-and-got-garbage one, the 2am pager one, or something better?
4. How much friction-post material? It's the strongest original idea, but it can eat the talk. (Current vote: one mechanism + one practice + one quoted line, no more.)
5. Structure Option 1 vs. 2?
6. Do juniors get an explicit beat, or just the one line?
7. Should §6 (system) absorb the system-flavored practices from §7 (put-friction-back, review-the-plan), leaving §7 as purely personal/identity habits (hand-written ration, 5pm ledger, batched supervision)? Current vote: yes — cleaner split between "fix the system" and "protect the human."
8. Maker/manager schedule: keep it as the named framework inside the flow-starved mechanism (current placement), or promote it to its own full beat? It's famous enough with this audience to carry a slide + the inversion line either way.

---

## Next steps

1. React to this doc (cut/keep/add; answer §11).
2. Converge to a beat-by-beat outline with timings and the chosen story anchors.
3. Draft the Remark.js deck in `public/slides/` (copy structure from `asynchronous-python.html`), speaker notes in `???` blocks.
