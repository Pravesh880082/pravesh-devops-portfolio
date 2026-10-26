# Pravesh Kumar — DevOps & Cloud Portfolio

A recruiter-focused portfolio built with React and Vite. It highlights three hands-on projects, case-study notes, simplified deployment flows, real repository links, and a one-page resume.

## Highlights

- Responsive hybrid design: dark hero, clean light sections, and larger readable typography.
- Project filters for Kubernetes, containers, and CI/CD.
- Case studies that explain the goal, implementation, learning, and troubleshooting.
- Links to public GitHub repositories, GitHub Actions history, and Docker Hub images where available.
- One real GitHub Actions screenshot embedded from the public CI/CD project repository.
- Accurate learning labels: workshops and learning activities are not presented as formal DevOps certifications.
- Keyboard focus styles, a skip link, accessible navigation labels, reduced-motion support, and basic social preview metadata.

## Requirements

- Node.js LTS (Node 20+ recommended)
- npm
- Git (optional, for publishing)

## Run locally on Windows

Open PowerShell in this folder:

```powershell
npm.cmd install
npm.cmd run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

## Build and preview

```powershell
npm.cmd run build
npm.cmd run preview
```

## Personal details

The current portfolio includes the contact email and LinkedIn profile supplied for the portfolio, plus the public GitHub profile. Review these details and the included PDF resume before sending the site to a recruiter.

- Main page: `src/App.jsx`
- Project descriptions, stack, case studies, links, learning activities: `src/data/projects.js`
- Styling and responsive behavior: `src/styles.css`
- Resume PDF: `public/resume.pdf`
- Favicon: `public/favicon.svg`

## Accuracy and security notes

- Architecture flows are simplified explanations, not live infrastructure diagrams.
- The pipeline card is conceptual and does not claim live cluster telemetry or uptime.
- The embedded GitHub Actions screenshot is hosted in the public `devops-cicd-project` repository. It is linked to the workflow history for verification.
- Do not add screenshots that expose AWS account identifiers, public IPs, access tokens, private keys, passwords, or other sensitive information.
- Do not add live-demo links until the target URL has been tested.

## Publish to GitHub

Create a public repository named `pravesh-devops-portfolio` under the GitHub account, then run these commands from the project folder:

```powershell
git init
git add .
git commit -m "Upgrade DevOps portfolio"
git branch -M main
git remote add origin https://github.com/Pravesh880082/pravesh-devops-portfolio.git
git push -u origin main
```

If Git says the remote already exists, inspect `git remote -v` before changing it. If the remote was created with a README or license, resolve the initial history conflict instead of force-pushing.

## Deploy with Vercel

1. Sign in at [Vercel](https://vercel.com/) and import the GitHub repository.
2. Select the Vite framework preset (normally auto-detected).
3. Use `npm run build` as the build command and `dist` as the output directory.
4. Deploy, open the resulting URL, and test all links on desktop and mobile.

Check the current Vercel plan and usage limits before deploying.

## Run locally on Windows

1. Extract the ZIP using **Extract All**.
2. In VS Code, use **File → Open Folder** and open the `pravesh-devops-portfolio` folder (the same folder that contains `package.json`).
3. Open **Terminal → New Terminal** and verify the terminal is in the project root:

   ```powershell
   Test-Path .\package.json
   ```

   It should print `True`. If it prints `False`, use `cd` to move into the extracted project folder before continuing.

4. Install dependencies and run the production build:

   ```powershell
   npm.cmd install
   npm.cmd run build
   ```

5. Start the development server:

   ```powershell
   npm.cmd run dev
   ```

6. Open the local URL Vite prints, usually `http://localhost:5173`.

## Added in this revision

- Interactive terminal demo with sample `kubectl`, Docker, Terraform, and Git commands.
- Terminal outputs are clearly marked as simulated examples; the page does not connect to or change a real server.
- Terminal section is included in the main navigation and adapts to small screens.

## Before sharing with recruiters

- Verify contact links and resume details.
- Open each repository link and make sure it is public.
- Run `npm.cmd run build` locally and resolve any errors before deploying.
- Do not present the simulated terminal output as live infrastructure telemetry.
