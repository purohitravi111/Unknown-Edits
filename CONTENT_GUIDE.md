# UNKNOWN EDITS - Content Management Guide

Welcome to the UNKNOWN EDITS website architecture! This project is designed as a lightweight, file-based CMS. **You never need to edit React components to change the website's content or styling.**

Everything is centrally managed through simple data files and asset folders.

## Folder Structure

*   `data/content.ts` - All textual content, lists, and settings.
*   `config/theme.ts` - All visual theme configuration (colors, borders, speeds).
*   `config/seo.ts` - Meta tags, OpenGraph, and Search Engine data.
*   `public/images/` - Standard images
*   `public/videos/` - Background videos and saved media backups
*   `public/logos/` - Main agency logo and favicon
*   `public/team/` - Headshots
*   `public/testimonials/` - Client review photos
*   `public/brands/` - Client logos for the trust bar

---

## 1. How to Update Text and Content

Open `/data/content.ts`. This single file powers the entire website's written content.

### Agency Information
To change the company name, phone, email, or CTA buttons, update the `agencyInfo` object at the top of the file.

### Adding or Reordering Services
Find the `services` array in `/data/content.ts`. 
*   **To Add:** Copy an existing service block `{ ... }` and paste it into the array.
*   **To Reorder:** Change the `displayOrder` property (lower numbers show first).
*   **Featured:** Set `featured: true` to highlight a specific service.

### Managing Portfolio Projects
Find the `portfolio` array in `data/content.ts`. Each video card uses `projectName` for the video title, `clientName` for the creator or channel, and `duration` for the runtime (for example, `12:34`). Enter those values for each video so the cards show their own information. Paste the video link into `videoUrl`. An entry with an empty `videoUrl` stays hidden on the site. To add another video, copy an entry and change its title, channel, runtime, category, video link, and `displayOrder`.

Supported links include YouTube, public Instagram Reels/posts, public TikTok videos, Vimeo, and direct `.mp4`, `.webm`, or `.ogg` file links. YouTube thumbnails are loaded automatically. For Instagram, TikTok, Vimeo, and direct file links, paste a publicly accessible image URL in `thumbnailUrl` to show a thumbnail. Without one, the site uses a simple placeholder card.

Some sites do not allow their videos to be embedded, and private/restricted posts cannot be played on another site. For another host, use its official embed URL in the optional `embedUrl` field. If the host does not provide an embeddable player, the portfolio shows a link to watch on the original platform.

### Adding Team Members
Find the `team` array. Add their `name`, `role`, `bio`, and `skills`. Point the `photo` property to `"/team/their-photo.jpg"`.

### Updating Contact Information & Socials
Scroll to the bottom of `/data/content.ts` to find the `contact` and `socialMedia` objects. Paste your new URLs or phone numbers there.

---

## 2. How to Manage Assets (Images & Videos)

All visual files should be placed inside the `public/` directory.

1.  **Hero Video:** Place your video in `public/videos/hero.mp4`. Then in `/data/content.ts`, update `heroSection.video` to `"/videos/hero.mp4"`.
2.  **Logos:** Replace `public/logos/logo.svg`. Make sure the filename matches what is in `agencyInfo.logo`.
3.  **Client Brands:** Add logos to `public/brands/`. Then update the `clients` array in `/data/content.ts` to point to `"/brands/brand1.png"`.

*Note: Use absolute paths starting with `/` (e.g., `/images/hero.jpg`) when referencing files in the public folder from your content config.*

---

## 3. How to Change Colors and Visuals

Do not edit the CSS! Open `/config/theme.ts`.

You can modify:
*   `primary`: Main text color (default White).
*   `secondary`: Muted text color (default Gray).
*   `accent`: The brand color used for buttons, glows, and highlights (default Rose).
*   `background.default`: The main site background.

The entire website will instantly adopt the new color palette.

---

## 4. SEO & Meta Data

Open `/config/seo.ts`.

Update your `title`, `description`, `keywords`, and `openGraph` data to ensure your site looks perfect when shared on social media (Twitter, LinkedIn, Facebook) or indexed by Google.

---

## 5. Deployment

When you are ready to push updates live:
1.  Save all your changes in `/data/content.ts` or `/config/theme.ts`.
2.  Your hosting provider (Vercel, Netlify, Cloud Run) will automatically rebuild the site using the new data.
3.  Because this uses Next.js static generation, your site remains blazingly fast.
