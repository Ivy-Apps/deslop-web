# The MIT licence replaces the site's legal pages

Deslop was previously a paid product sold through Polar, and the site carried a
Terms of Service / EULA and a Privacy Policy describing accounts, commercial
licences and a CI/CD paywall. None of that exists any more: the project is MIT
licensed, there are no accounts, and the site has no forms, cookies, or
analytics, so it processes nothing that a privacy policy would disclose. The
MIT licence's `AS IS` / no-warranty clause covers the software itself, so we
removed both pages rather than rewriting them.

## Consequences

`/terms` and `/privacy` are kept alive as redirects to the MIT `LICENSE` on
GitHub, because the published CLI still prints
`Use implies agreement to deslop.dev/terms & /privacy` on every run. Those
redirects can be dropped once a release without that banner has been out long
enough that old versions are no longer in circulation.

If the site ever gains analytics, a form, or any other data collection, this
decision has to be revisited — the absence of a privacy policy is a consequence
of collecting nothing, not a standing position.

## Amendment: one third-party request

The navbar's GitHub star count is a shields.io badge, so the visitor's browser
makes one request to `img.shields.io` and shields.io sees their IP and
user-agent. The site itself still collects nothing: no analytics, no cookies, no
forms, no logging of its own.

We chose this over the two alternatives that would have kept the request count
at zero. Fetching the count server-side with ISR means the page loses
`force-static` and the number is stale for up to a revalidation window;
proxying the badge through our own route handler is real code to write and keep
working, for a star count. Neither cost was worth paying for a number that is
decoration.

This is the ceiling, not a precedent. One badge on one page does not need a
privacy policy; a second third-party asset, or anything that reports back about
the visitor, means revisiting the decision above properly rather than appending
to this list.
