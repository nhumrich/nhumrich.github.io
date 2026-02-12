---
title: "Why I don't like UUIDs"
date: 2022-10-10
tags: [programming]
draft: false
---

A lot of people use UUIDs — most specifically, UUIDv4 – to generate ID's. After all, a UUID is an ID that is universally unique. And UUIDv4 is a library that exist in essentially every language, since it's a standard. UUID's are great because they are essentially guaranteed to be unique, across a worldwide dataset, without needing to "check for existence" for the ID. The UUID standard is so common, even databases support them out of the box.

So why then do I not like them? Three reasons:

1. Since they are so ubiquitous, it's now impossible to tell them apart from any other ID
2. They are needlessly long
3. They can't be sorted.

## Ubiquitous

UUIDv4 has reached the point where lots of tooling and products are now using them. For example, while I was personally dealing with an error in a production web app, I was trying to get more information. The request itself had a correlation ID (a UUIDv4), a tracing ID (a UUIDv4), the ID of the object itself (a UUIDv4), and the error was assigned a specific URL for debugging, which was a UUIDv4. There were so many UUIDv4 everywhere. It becomes hard to know what the ID is supposed to represent. It would have been nice to see an ID and recognize what it was supposed to be the ID of.

To fix this, I like to pre-pend my ID's with some signifier such as `r_` for a request, so that I know anything that starts with `r_` is a request. Then I do this for each object type.

## Needlessly Long

The goal of UUID is to generate an ID with enough entropy, that the chance of a collision (generating the same ID twice) is low. This should be true, even on a massive dataset. Due to the low probability of collision, you can generate a UUID without needing to handle duplicate IDs in your code, or without having to using incrementing ID's. The number of possible UUID's generated from UUIDv4 is 3.4e+38. We will call this number the "entropy of UUIV4".

Here is an example of UUIDv4:

> 7b48b4b7–341d-4ad8–93e1-ed5ebc910f7d

You can read the UUIDv4 spec if you care to learn what these number/letters represent. But a quick summary to understand how we calculate entropy. A UUIDv4 has:

- 4 dashes, always in the same place
- 5 sections of hex-encoded bytes (4 bytes, 2 bytes, 2 bytes, 2 bytes, 6 bytes)
- Total of 36 characters

So we have 36 characters, 32 random characters between 0-9 or a-f. So 36 characters, 16 possible characters for each character. So 16 * 16 * 16... etc. 32 times. Or 16^32 = 3.4e+38. (this even ignores that the first couple of characters aren't entirely random)

In practice, UUIDv4 is supposed to be 122 bits, not 36 characters; the 36 characters are just a final representation of the bits. But in practice, everyone just converts a UUID to a string first, and keeps it as a string. Therefore, there is some wasted space in a UUIDv4. First, it has 4 characters that are completely useless: the 4 dashes. Second, only using the characters a through f in each character, is ignoring 20 other possible characters per character slot.

If we instead used all the characters, we would have 36 characters per slot, and could get better entropy with only 25 characters: 8e38

We could also use upper case and lower case character, giving us 58 characters total, for better entropy than UUIDv4 with only 22 characters: 6.2e38

A 22 character random string would look like `YOf41WCV7KmVUYN56CB8Bi` and still have less chance of collision than a UUIDv4.

But is that level of entropy even needed?

UUIDv4 is designed to have VERY high entropy. But if we are generating ID's for things that will never have more than a billion or even a trillion in number, that level of entropy is unneeded. You would have to generate about 2.71 quintillion UUIDv4 before having a good chance of a collision, or 103 trillion UUIDv4's with a 1/1,000,000,000 chance of a collision. Most systems do not need that level of entropy.

For example, if we use 0-9, a-z, and have a 16 character random string, you would have to generate 100million ID's before having a 1 in a billion chance of getting a collision.

## Can't Be Sorted

UUIDv4's consist of almost entirely random bits. They can't be sorted because any form of sorting wouldn't make sense. When using ID's for objects in a database, it can be helpful to sort by ID for faster indexing or pagination purposes. But when you use UUIDv4, you can not sort by the ID.

One possibility to get sorting working on IDs is to include a timestamp into the ID. Then we can sort by the timestamp. If you use a unix timestamp, you get a number such as:

> 1665199900

and that number can be converted to a 7-character alphanumeric string using base32, or 6-characters with base64 if you want to use upper and lower case letters. (or both are 8 characters if you include the `=` padding)

Note: for sortability to remain intact after encoding, you need to use an alternate base32/64 than the standard, as the standard puts numbers at the end, and we need numbers at the beginning for lexicographical sorting. One such implementation is [crockford's base32](https://www.crockford.com/base32.html).

## Putting It All Together

If we want to have sortable, short, recognizable IDs, we can do it by combining all three techniques. Since we are going to include timestamps in our IDs, we need very little entropy in the actual random portion. If we have two or more IDs generated at the same sub-millisecond, the IDs will not be sorted in order, but at a millisecond level, I do not think that is an issue.

This gives us the following string representation:

> XX_TTTTTTTTTRRRR

Where:
- `X` = 1 or two characters to help identify the object type
- `T` = 9 characters representing 1/10th millisecond epoch
- `R` = 4 random characters (1048576 combinations within 1/10th of a millisecond, which is very low collision odds for 1000 items in that timeframe)

Here is some sample code of how you could generate it in python:

```python
import random
import string
import time
import base32_crockford as b32


def gen_id(prefix=''):
    ts = time.time() * 10_000
    time_section = b32.encode(ts).lower()
    random_section = ''.join(
        random.choice(string.ascii_lowercase + string.digits)
        for _ in range(4))
    return prefix + time_section + random_section

print(gen_id('rq_'))
```

An example from the above code:

> rq_1j5hf5bk2nqg2

vs our original:

> 7b48b4b7–341d-4ad8–93e1-ed5ebc910f7d

---

*Originally published on [Dev.to](https://dev.to/nhumrich/why-i-dont-like-uuids-5d9n)*
