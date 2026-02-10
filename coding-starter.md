# Coding Starter

A compact collection of basic code scaffolds and commands to get coding quickly in this repo.

## HTML

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Demo</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <main id="app">Hello world</main>
    <script src="app.js" defer></script>
  </body>
</html>
```

## CSS

```css
:root{--bg:#fff;--fg:#111}
*{box-sizing:border-box}
body{margin:0;background:var(--bg);color:var(--fg);font-family:system-ui,Segoe UI,Roboto}
```

## JavaScript

```js
function init(){
  const app = document.getElementById('app')
  app.textContent = 'Ready!'
}
document.addEventListener('DOMContentLoaded', init)
```

## Python

```py
def main():
    print('Hello from Python')

if __name__ == '__main__':
    main()
```

## Quick commands

- Serve current folder (Python 3): `python -m http.server 8000`
- Install Node deps: `npm install`
- Run a simple node server: `npx serve .`

## Editor helpers

Add a `.editorconfig` or use your editor settings to enforce tabs/spaces and trim trailing whitespace.

---
Place `index.html`, `styles.css`, or `app.js` alongside this file to start experimenting.
