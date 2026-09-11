# Roblox UI Portfolio

A static portfolio site. No build step, no dependencies.

## Files

- `index.html` - page structure, your name, and footer links
- `style.css` - dark theme, Montserrat Extra Bold, 4-column grid
- `script.js` - the list of projects that fills the grid
- `images/` - drop your UI screenshots here

## Adding your work

1. Put a screenshot in `images/` (PNG or JPG, ideally around 1600x1000, a 16:10 shape).
2. Open `script.js` and add or edit an entry in the `projects` list:

   ```js
   { image: "images/main-menu.png", title: "Main Menu", sub: "Simulator Game" },
   ```

   Cards whose image file is missing show a "COMING SOON" box until you add it.

## Changing your name and links

Edit `index.html`:
- The big title is in the `<h1 class="hero__title">` tag.
- Footer links are in the `<nav class="footer__links">` block.

## Previewing locally

Double-click `index.html`, or run a tiny server from this folder:

```
python -m http.server 8000
```

then open http://localhost:8000.

## Deploying to GitHub Pages

1. Create a new repository on GitHub. Naming it `yourusername.github.io` gives you a root URL with no path.
2. In this folder run:

   ```
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/yourusername/yourrepo.git
   git push -u origin main
   ```

3. On GitHub: Settings > Pages > Source: "Deploy from a branch" > Branch: `main` / root > Save.
4. Your site is live at `https://yourusername.github.io/yourrepo/` in a minute or two.

## Custom domain (later)

1. Buy a domain from any registrar.
2. In Settings > Pages, enter the domain under "Custom domain". GitHub creates a `CNAME` file for you.
3. At your registrar, add DNS records:
   - `A` records for `@` pointing to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` record for `www` pointing to `yourusername.github.io`
4. Tick "Enforce HTTPS" once the DNS check passes.
