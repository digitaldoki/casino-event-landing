# 🎰 Casino Nights - Lo-Fi VIP Landing Page

A launch-ready GitHub Pages landing page for casino event entertainment companies.
Purple + Gold velvet casino lounge aesthetic — converts corporate bookings.

## 🚀 Deploy in 60 Seconds

1. Upload all files to a GitHub repo
2. Go to **Settings → Pages → Deploy from branch: main**
3. Your site is live at `https://username.github.io/repo-name`

## 🔧 Setup Checklist

- [ ] Replace `https://formspree.io/f/YOURFORMID` in `index.html` with your real [Formspree](https://formspree.io) form ID
- [ ] Update business name, phone, and contact info in footer
- [ ] Add real pricing to the packages section
- [ ] Replace placeholder testimonials with real client reviews

## 🌐 Custom Domain (Porkbun)

In your Porkbun DNS settings:

| Type  | Host | Answer                  |
|-------|------|-------------------------|
| CNAME | www  | username.github.io      |
| A     | @    | 185.199.108.153         |
| A     | @    | 185.199.109.153         |
| A     | @    | 185.199.110.153         |
| A     | @    | 185.199.111.153         |

Then add a `CNAME` file to your repo root containing just: `www.yourdomain.com`

## 📁 File Structure

```
casino-event-landing/
├── index.html      ← Full landing page
├── style.css       ← Lo-fi casino styles
├── script.js       ← Smooth scroll + animations
├── README.md       ← This file
└── assets/         ← Drop hero background image here (lofi-casino-bg.jpg)
```

## 🎨 Color Palette

| Color | Hex | Use |
|-------|-----|-----|
| Deep Velvet | `#0F0617` | Background |
| Royal Purple | `#2B0A3D` | Hero gradient |
| Vivid Violet | `#4C1D95` | Accents |
| Casino Gold | `#F5C542` | Headlines, CTAs |
| Neon Pink | `#FF4DF0` | Highlights |

## ✦ Features

- Mobile responsive
- Scroll-triggered card animations
- Floating "Book" button (appears on scroll)
- Urgency banner
- Formspree lead form (no backend)
- Smooth scroll navigation
- Google Fonts: Orbitron + Inter

Built with pure HTML, CSS, and vanilla JS — zero dependencies.
