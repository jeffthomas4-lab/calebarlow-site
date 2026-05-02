# Deploy calebarlow.com

Step-by-step. Follow in order. Total time: about 15 minutes.

---

## What you need before you start

1. **Git for Windows** installed. If you've used Git before, you have it. Otherwise: https://git-scm.com/download/win, default options. This installs **Git Bash**, the terminal we'll use.
2. **Node.js 20 or newer** installed. Check by opening Git Bash and running `node --version`. If it errors, install from https://nodejs.org (LTS).
3. **GitHub account.** github.com — free.
4. **Cloudflare account.** cloudflare.com — free.

---

## Part 1: Create the GitHub repository

1. Go to https://github.com/new
2. Repository name: `calebarlow-site`
3. Description: *Optional.* Something like "Astro site for The Pairing series."
4. Visibility: **Private** is fine. Public works too. Cloudflare can read either.
5. Leave everything else unchecked (no README, no .gitignore, no license — we already have ours).
6. Click **Create repository**.

GitHub will show you a page with setup commands. Leave that tab open. We'll come back to it.

---

## Part 2: Push the site to GitHub

Open **Git Bash** (Start menu → search "Git Bash"). Paste these commands one block at a time. Press Enter after each block.

### Move into the site folder

```bash
cd "/c/Users/jeffthomas/Desktop/Claude Cowork/OUTPUTS/Caleb Arlow/site"
```

### Test the build locally first (optional, ~1 minute)

```bash
npm install
npm run build
```

If this finishes with `[build] Complete!`, the site is healthy. You can also run `npm run dev` to preview at http://localhost:4321 — Ctrl+C to stop.

### Initialize git and push to GitHub

Replace `YOUR_GITHUB_USERNAME` in the third line with your actual GitHub username.

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/calebarlow-site.git
git push -u origin main
```

The first time you push, Git will pop up a window asking you to sign in to GitHub. Use the browser flow — it's the easiest. Once that's done the push completes in seconds.

Refresh your GitHub repo page. You should see all the site files there.

---

## Part 3: Connect Cloudflare Pages to GitHub

1. Go to https://dash.cloudflare.com/
2. Left sidebar → **Workers & Pages**.
3. Click **Create application** → **Pages** tab → **Connect to Git**.
4. Click **Connect GitHub**. Authorize Cloudflare to read your repos. You can grant access to all repos, or just the one repo (`calebarlow-site`) — both work.
5. Pick `calebarlow-site` from the list. Click **Begin setup**.

### Build configuration

| Field | Value |
|---|---|
| Project name | `calebarlow` (or whatever you want — this becomes your `*.pages.dev` URL) |
| Production branch | `main` |
| Framework preset | **Astro** |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | *(leave blank)* |

Leave environment variables empty. Click **Save and Deploy**.

The first build takes about 90 seconds. You'll see a live log. When it finishes, Cloudflare gives you a URL like `https://calebarlow.pages.dev` — click it. The site is live.

---

## Part 4: Point calebarlow.com at the site

You bought calebarlow.com. Now we tell Cloudflare to serve the site from that domain.

### Step 1: Move the domain to Cloudflare DNS (free)

If you bought the domain through Cloudflare Registrar already, skip to Step 2.

If you bought it elsewhere (Namecheap, GoDaddy, etc.):

1. Cloudflare dashboard → **Add a Site** (top of the homepage).
2. Type `calebarlow.com`. Click Continue.
3. Choose the **Free** plan. Click Continue.
4. Cloudflare scans existing DNS records. Click Continue.
5. Cloudflare shows you two nameservers (e.g. `bart.ns.cloudflare.com`, `lisa.ns.cloudflare.com`).
6. Go to wherever you bought the domain. Find the "Nameservers" setting. Replace whatever's there with the two Cloudflare nameservers. Save.
7. Back in Cloudflare, click **Done, check nameservers**. Cloudflare emails you when it's confirmed (anywhere from 5 minutes to a few hours, usually fast).

### Step 2: Add the custom domain to Cloudflare Pages

1. Cloudflare dashboard → **Workers & Pages** → click your `calebarlow` project.
2. Top tabs → **Custom domains** → **Set up a custom domain**.
3. Type `calebarlow.com`. Click Continue.
4. Cloudflare shows you the DNS record it'll add. Click **Activate domain**.
5. Repeat for `www.calebarlow.com` so both work.

Cloudflare automatically issues an SSL certificate. After 1-2 minutes, https://calebarlow.com loads the site.

---

## Part 5: Future updates

Anytime you want to change the site (new book, copy edits, etc.):

1. Edit files in the `site/` folder.
2. Open Git Bash, in the site folder:
   ```bash
   git add .
   git commit -m "Describe what you changed"
   git push
   ```
3. Cloudflare detects the push and rebuilds automatically. Live in 90 seconds.

That's the whole loop.

---

## Troubleshooting

**`git push` says "permission denied".** GitHub auth issue. Run `gh auth login` if you have GitHub CLI installed, or just delete the repo and recreate it after signing in to github.com in your browser. The Git Bash sign-in flow uses browser auth.

**Cloudflare build fails with "Cannot find module".** Run `npm install` locally, commit the updated `package-lock.json`, push again.

**Custom domain says "Pending verification" forever.** Make sure you set the Cloudflare nameservers correctly at your registrar. Check status at https://dash.cloudflare.com under your domain.

**Kit form not submitting after deploy.** Verify the form is published in Kit (not draft). Test by submitting yourself.

**Need to update Thread of White Amazon link or anything else.** Edit the file in the `site/` folder, run the push commands from Part 5.
