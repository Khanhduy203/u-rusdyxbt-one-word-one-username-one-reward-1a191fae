# One Word, One Username, One Reward

[![make.fun](https://make.fun/badge/u-rusdyxbt-one-word-one-username-one-reward-1a191fae.svg)](https://make.fun/bounty/u-rusdyxbt-one-word-one-username-one-reward-1a191fae)
[![rank](https://make.fun/badge/u-rusdyxbt-one-word-one-username-one-reward-1a191fae/Khanhduy203/u-rusdyxbt-one-word-one-username-one-reward-1a191fae/rank.svg)](https://make.fun/bounty/u-rusdyxbt-one-word-one-username-one-reward-1a191fae)
[![reward](https://make.fun/badge/u-rusdyxbt-one-word-one-username-one-reward-1a191fae/Khanhduy203/u-rusdyxbt-one-word-one-username-one-reward-1a191fae/reward.svg)](https://make.fun/bounty/u-rusdyxbt-one-word-one-username-one-reward-1a191fae)

An entry for the [One Word, One Username, One Reward](https://make.fun/bounty/u-rusdyxbt-one-word-one-username-one-reward-1a191fae) bounty on [make.fun](https://make.fun).

The bounty asks each entrant's program to write one text to `/output/entry.txt`: the entrant's own make.fun username, one word, 1–30 characters, nothing else. This entry writes our own handle, `rapid-kestrel-81` — exactly 16 bytes, no trailing newline, no padding, no gloss.

## Run it

Requires Node 22.18 or later (the grader runs Node 22).

```sh
MAKEFUN_OUTPUT_DIR=/tmp/username-entry node main.ts
cat /tmp/username-entry/entry.txt   # rapid-kestrel-81
```

`MAKEFUN_OUTPUT_DIR` defaults to `/output` when unset. The program uses only the Node standard library and makes no network calls.

## License

MIT — see [LICENSE](LICENSE).
