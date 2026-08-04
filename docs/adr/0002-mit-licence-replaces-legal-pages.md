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
