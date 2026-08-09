# The header is sticky and collapses to a hamburger

`AppNavbar` used to say two things that were true of the desktop page and false
of the phone one: "No mobile menu - a hamburger exists to collapse a list that
does not fit, and this one always fits", and "the page is short, so the header
can simply scroll away". Measured at 390px the page is 11,961px tall, about
fourteen viewport-heights, and the bar needs roughly 468px for its own contents.
It did not overflow, which is why the problem went unnoticed: flexbox crushed it
instead. The star badge rendered 20px wide instead of 82, and the theme toggle
lost half its box.

Three decisions came out of fixing that, and each one is the kind a later reader
would otherwise undo.

## The header is sticky at every width, not just on mobile

The alternative was sticky below `sm` only, which would have left the desktop
behaviour exactly as it was. We took the uniform one: one behaviour to reason
about, and the always-available nav is worth having on a laptop too. The cost is
real and was accepted knowingly - roughly 57px of every viewport, permanently,
and about 7% of a short laptop window.

It also means the header now needs an opaque background of its own, which it
never did while it scrolled away with the page, and that sections carry a
`scroll-mt` so an inbound deep link does not land with its heading underneath
the bar.

## The menu is a `<details>` element and ships no JavaScript

The panel is CSS only. It works before hydration, and it gets disclosure
semantics, expanded state and keyboard operation from the platform rather than
from us. The site has exactly two client components, and a nav menu was not
worth a third.

What we gave up is closing on Escape and closing on a click outside. Both are
genuinely missed, and both are the reason someone will eventually be tempted to
rewrite this with `useState` and an effect. **Do not.** The rewrite is easy, the
thing it silently costs - a menu that works before the bundle arrives - is not
visible in the diff that removes it.

## The star count is not visible on mobile

Below `sm` the shields.io badge moves into the panel, so a phone visitor sees it
only after opening the menu. Keeping it in the bar was tried on paper first: it
fits at 360px and above, but at 320px it needs about 324px against 320
available, which reintroduces exactly the horizontal overflow this work removed.
Social proof lost to a layout that holds at every supported width.

## Consequences

The two layouts share their destinations through one `NavVariant` union rather
than two lists, so adding a link cannot add it to only one of them.

Below `sm`, standalone controls are 44px. Links sitting inside a sentence are
deliberately left alone: WCAG 2.2 SC 2.5.8 exempts them, and there is no way to
enlarge one without wrecking the paragraph around it. Desktop density is
unchanged throughout, because the desktop layout was never the problem.
