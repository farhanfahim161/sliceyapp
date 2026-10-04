# Slicey website

A responsive marketing website for the Slicey cake-ordering and home-baker app. The main landing page is a **single `index.html` file** with the CSS and JavaScript inline; the supplied app screens are embedded in it, so the home page does not depend on an image folder to render. The app name was read from the screenshots—change it if the final brand spelling is different.

## Project layout

```text
slicey-website/
├── index.html                  # Main page: HTML + inline CSS/JS + embedded screenshots
├── privacy.html                # Starter Privacy Policy
├── terms.html                  # Starter Terms of Service
├── README.md                   # Project and GitHub Pages instructions
├── .gitignore
├── .nojekyll                   # Helps GitHub Pages serve static files as-is
└── assets/
    ├── css/
    │   └── styles.css          # Readable CSS copy for legal pages / future split
    ├── js/
    │   └── script.js           # Readable JavaScript copy for future split
    └── images/
        └── app-screens/         # Cropped versions of the 8 supplied app screens
```

The landing-page screenshots are embedded in `index.html`. The copies under `assets/images/app-screens/`, `assets/css/`, and `assets/js/` are kept as organized source files in case you decide to split the page later.

## Preview on your computer

No build step or dependencies are needed. Open `index.html` in a browser, or run a small local server so the policy links work too:

```bash
python3 -m http.server 4173
```

Then visit `http://localhost:4173`.

## Upload to GitHub

1. Create a new repository on GitHub, for example `slicey-website`.
2. Unzip this project if you downloaded the ZIP.
3. Upload the **contents inside** the `slicey-website` folder to the repository’s top level. In particular, `index.html` must be at the repository root—not buried inside another folder.
4. Commit the files.
5. To publish with GitHub Pages, open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/(root)`, then save. GitHub will show the website URL on that page after it deploys.

## Before launch

- In the inline JavaScript near the bottom of `index.html`, replace the blank values in `STORE_LINKS` with the official Google Play and Apple App Store URLs. Until then, the buttons show **Coming soon** rather than linking to a guessed listing.
- In `privacy.html` and `terms.html`, replace every bracketed placeholder with the operator’s real legal/business name, address if required, and a monitored support/privacy email.
- Review the policy wording against the actual app, including location, notifications, analytics/advertising SDKs, payment providers, third-party services, data retention, and deletion requests.
- Add the real payment, cancellation, delivery, and refund rules to `terms.html` and make sure those rules agree with the app.
- Ask a qualified local professional to review the legal pages before publishing. They are starter drafts, not legal advice.
- Ensure Google Play’s Data Safety form and Apple App Privacy disclosures accurately describe the production app and its SDKs.

---

### বাংলা নোট

- `index.html`-ই মূল website; HTML, CSS ও JavaScript একই ফাইলে আছে।
- GitHub-এ upload করার সময় ZIP ফাইলটি সরাসরি না দিয়ে আগে unzip করুন। তারপর folder-এর **ভেতরের সব ফাইল** repository-এর root-এ upload করবেন—বিশেষ করে `index.html` যেন root-এ থাকে।
- Play Store/App Store-এর আসল link না পাওয়া পর্যন্ত `Coming soon`-ই থাকবে।
- Privacy ও Terms page-এ bracket-এর মধ্যে থাকা business name, support email, payment/refund rules ইত্যাদি launch-এর আগে পূরণ ও review করতে হবে।
