# untitledracers
Website created for the explicit purpose of showcasing the Untitled Racers Hydrogen Grand Prix Team

## Website

The root [index.html](index.html) is a single-page, static site designed for GitHub Pages.

It includes:
- A custom homepage design for Untitled Racers
- Competition context for H2GP (with source links in the footer)
- Deployment-ready temporary images and polished section descriptions

## Maintainer Notes (Not Shown On Site)

Update text blocks directly in [index.html](index.html), especially these sections:
- Who We Are
- Team Dashboard
- Support The Team

Replace temporary image files in [images](images) with your real photos while keeping the same filenames:
- [images/hero-temp.svg](images/hero-temp.svg)
- [images/gallery-build.svg](images/gallery-build.svg)
- [images/gallery-test.svg](images/gallery-test.svg)
- [images/gallery-race.svg](images/gallery-race.svg)
- [images/gallery-pit.svg](images/gallery-pit.svg)

If you prefer JPG or PNG photos, update the `src` values in [index.html](index.html) to match the new filenames.

## Deploy To GitHub Pages

1. Push this repository to GitHub.
2. Go to repository Settings.
3. Open Pages.
4. Under Build and deployment, choose:
	- Source: Deploy from a branch
	- Branch: `main` (or your default branch)
	- Folder: `/ (root)`
5. Save and wait for GitHub Pages to publish.

Your site will be available at:
`https://<your-github-username>.github.io/<repository-name>/`
