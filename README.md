# Sakshi Shukla — Portfolio

Personal site for Sakshi Shukla, Data Engineer at Tata Consultancy Services (since June 2024).

Built with React, Vite, Tailwind CSS, and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually http://localhost:3000).

## Edit content

- Profile, experience, skills, and links: `src/data/profile.js`
- Project cards: `src/data/projects.js`

## Deploy on Vercel

1. Create a GitHub repository and push this project:

```bash
git init
git add .
git commit -m "Add Sakshi Shukla portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com), import that GitHub repo.
3. Framework: Vite. Build command: `npm run build`. Output: `dist`.
4. Deploy. Future pushes to `main` will update the live site.

After you have a live URL, replace the placeholder Open Graph URL in `index.html` if you want richer social previews.
