A regular expression (regex) is a pattern used to match text.

Your regex is:

/[^a-zA-Z]/g

Let's break it down.

1. / ... /

The forward slashes mark the beginning and end of the regex pattern.

/abc/

means "find abc".

2. [a-zA-Z]

Square brackets define a character set.

[a-zA-Z]

means "match any one letter."

a-z → lowercase letters
A-Z → uppercase letters

So it matches:

a
b
Z
Q

But not:

1
.
!
space 3. ^ inside []

When ^ appears at the start of square brackets, it means "NOT."

So:

[^a-zA-Z]

means:

Match any character that is NOT a letter.

This includes:

1
.
!
space
@ 4. g

The global flag means "match all occurrences."

Without g, only the first match is replaced.

With g, every match is replaced.

Full Meaning
/[^a-zA-Z]/g

means:

Find all characters that are not letters (A-Z or a-z).

Example
"Peeves.".replace(/[^a-zA-Z]/g, "");

Matches:

.

Removes it.

Result:

"Peeves"
