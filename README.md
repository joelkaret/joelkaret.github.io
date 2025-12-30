# Joel Personal Website

A simple, fast static site ready to deploy at `joel.karet.co.uk`.

## Contents

-   `index.html` — main page with About/Projects/Contact
-   `assets/css/style.css` — responsive styles
-   `assets/js/main.js` — small enhancements
-   `assets/img/` — avatar + favicon

## How to preview locally

Pick one:

-   Python 3:

    ```powershell
    python -m http.server 8080
    ```

    Open http://localhost:8080 in your browser.

-   Node.js (using `serve`):

    ```powershell
    npx serve . -p 8080
    ```

-   VS Code: install "Live Server" extension and click "Go Live".

## Deploy options and DNS

You said your brother will host the site under `joel.karet.co.uk`. There are a few common patterns. Choose one and send him the DNS values.

### Option A — Brother hosts on his server (A/AAAA records)

-   Ask your brother for the public IPv4/IPv6 of the web server.
-   DNS records to create on `karet.co.uk`:
    -   `A` record for `joel` → `SERVER_IPV4`
    -   (optional) `AAAA` record for `joel` → `SERVER_IPV6`
-   Ensure the web server is configured with a virtual host for `joel.karet.co.uk` and an SSL certificate (Let’s Encrypt or equivalent).

### Option B — GitHub Pages (CNAME)

-   Create a GitHub repo (e.g. `joel-site`) and push these files to the `main` branch.
-   In repo settings → Pages → Source: `Deploy from a branch`, Branch: `main`, Folder: `/root`.
-   Add a file named `CNAME` (no extension) at repo root containing exactly:
    ```
    joel.karet.co.uk
    ```
-   DNS record to ask your brother to set:
    -   `CNAME` for `joel` → `<your-username>.github.io` (e.g. `joelk.github.io`).
-   GitHub will provision HTTPS automatically for the custom domain.

### Option C — Cloudflare Pages (CNAME)

-   Deploy the directory to a Cloudflare Pages project; you’ll get `your-project.pages.dev`.
-   DNS: `CNAME` for `joel` → `your-project.pages.dev`.
-   Cloudflare issues TLS automatically.

### Option D — Netlify (CNAME)

-   Deploy to Netlify; you’ll get `your-site.netlify.app`.
-   DNS: `CNAME` for `joel` → `your-site.netlify.app`.
-   Netlify issues TLS automatically.

## What to send your brother

Depending on the option:

-   Option A: `A` → IPv4, optional `AAAA` → IPv6 of the hosting server.
-   Option B: `CNAME` → `<your-username>.github.io`; also tell him you’ve set the `CNAME` file in the repo.
-   Option C: `CNAME` → `your-project.pages.dev`.
-   Option D: `CNAME` → `your-site.netlify.app`.

If he manages DNS via Cloudflare or a registrar, he’ll know where to add these.

## Next steps

-   Edit text in `index.html` (bio, projects, email).
-   Replace the avatar/favicons if you like.
-   Choose a hosting option and share the DNS target.
