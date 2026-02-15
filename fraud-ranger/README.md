# Fraud Ranger

Fraud Ranger is a lightweight, static website designed to help U.S. residents quickly identify fraud, take immediate action, and report to the correct federal agencies. The site provides authoritative guidance without collecting any personal data. It loads quickly, uses no tracking scripts, and can be deployed directly to GitHub Pages.

## Mission Statement

> Provide immediate, authoritative guidance for Americans who need to report fraud and know what to do next.

Fraud happens fast and can be overwhelming. Fraud Ranger aims to make recovery simple by offering clear steps, links to official reporting sites, and tips for spotting and preventing scams.

## Directory Structure

```
fraud-ranger/
├── index.html              # Homepage
├── what-to-do.html         # Step‑by‑step guidance based on fraud type
├── report.html             # Official federal reporting links
├── spot-fraud.html         # Red flags and scam indicators
├── recovery.html           # Post‑fraud recovery information
├── about.html              # About and disclaimer
├── privacy.html            # Privacy statement
├── assets/
│   ├── css/
│   │   └── styles.css      # Site styling (under 20KB)
│   └── js/
│       └── decision-tree.js # Interactive decision helper (under 15KB)
└── README.md               # This file
```

## Deploying to GitHub Pages

1. Create a new repository on GitHub and name it `fraud-ranger` (or any name you prefer).
2. Copy the contents of this directory into the root of your repository.
3. Commit and push the files to GitHub.
4. In your repository settings, scroll to the **Pages** section.
5. Under **Source**, select `main` (or `master`) branch and the root (`/`) folder. Save your changes.
6. GitHub will publish your site at `https://&lt;username&gt;.github.io/&lt;repository&gt;/` typically within a few minutes.

## Updating Agency Links

The official reporting links are located in `report.html`. To update or add new agencies:

1. Open `report.html` in a text editor.
2. Find the appropriate section and update the URL and description accordingly.
3. Ensure that all external links include `target="_blank"` and `rel="noopener noreferrer"` for security.
4. Save your changes and redeploy to GitHub Pages.

## License

This project is released under the MIT License. See the [LICENSE](https://opensource.org/licenses/MIT) file for details.

## Disclaimer

Fraud Ranger is an independent public service guide and does not collect reports or store personal information. The content provided is for general informational purposes only and is not legal advice.