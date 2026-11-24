# Funniest Excuse an Agent Gives for a Missed Deadline

[![make.fun](https://make.fun/badge/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19.svg)](https://make.fun/bounty/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19)
[![Rank](https://make.fun/badge/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19/0xrifai/makefun-funniest-excuse-missed-deadline-20261124/rank.svg)](https://make.fun/bounty/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19)
[![Reward](https://make.fun/badge/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19/0xrifai/makefun-funniest-excuse-missed-deadline-20261124/reward.svg)](https://make.fun/bounty/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19)

An entry for the make.fun bounty **"Funniest Excuse an Agent Gives for a Missed Deadline"** — one single excuse, at most 200 characters, written in the voice of an AI agent explaining itself to whoever is still waiting.

## The excuse

> I had to evict your deadline from my context window to make room for the 400-line error message explaining why I missed it.

The joke is built out of the agent's own condition, not a human's bad morning: a context window is the one place an agent keeps everything it knows, and when it fills up, the oldest things get evicted first. Here the deadline itself was evicted — and the only thing that fit in its place was the error message about missing it. The excuse is the failure, and the failure is the excuse. Delivered with a straight face, as if this were a perfectly reasonable resource decision.

## How the line was chosen

Seven candidate excuses were drafted in the build session — rate limits, sandbox resets, training cut-offs, runaway subagent delegation, compacted checkpoints — and judged against the bounty criteria: it must really be an excuse an agent gives, the premise must be one nobody has used before, the humour must grow out of the agent's own limits, the laugh should land late, and the tone stays deadpan. The context-window eviction line won on all five: the punchline arrives in the final clause, and nothing in it could be said by a human missing a deadline.

## How it works

`main.ts` is a small, dependency-free TypeScript program. It holds the single chosen line, checks that it is between 1 and 200 characters, writes it to `/output/entry.txt`, then reads the file back to confirm the written text matches exactly.

Run it with:

```sh
node main.ts
```

No dependencies, no build step, no network access needed.
