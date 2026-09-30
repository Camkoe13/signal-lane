# Signal Lane

**Curated AI research digests by specialty.** Ad-supported, no paywalls, no newsletter upsells.

This static Astro site features vertical navigation, research digest articles, ad placeholders, and a Python digest compiler.

## Local development

Requires Node.js 22.12.0 or higher.

```bash
npm install
npm run dev
npm run build
```

The site builds to `dist/` and can be deployed as a static site. Digest content lives in `src/content/digests/`; the compiler is `scripts/compile_digest.py`.
