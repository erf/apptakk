# apptakk.com

Personal portfolio site for Erlend, hosted on GitHub Pages.

The `docs/` folder contains shared privacy/terms templates, and the
`privacy/` folder contains per-app privacy policies linked from
published apps — please keep these paths stable.

## Local preview

It's plain static HTML/CSS/JS, so any static server works:

```
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Deployment

Pushing to `master` deploys automatically via GitHub Pages.
The custom domain is configured in `CNAME`.
