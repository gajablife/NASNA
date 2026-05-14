# NASNA Website - Agent Context (AGENTS.md)

This document provides context and guidelines for AI agents working on the NASNA Honey website codebase.

## Project Overview
**NASNA Honey** is a premium, sustainable honey brand. The website is dedicated to selling raw, unfiltered honey products and sharing knowledge about apiculture, wellness, and honey-infused recipes.
- **Tagline**: "Sweetness from the hive, crafted with care."
- **Core Values**: Sustainable apiculture, raw/unfiltered honey, authentic knowledge sharing.

## Tech Stack
- **Structure**: Semantic HTML5
- **Styling**: Vanilla CSS
- **Logic**: Vanilla JavaScript
- **Icons**: Font Awesome 6.0.0
- **Fonts**: Google Fonts (`Inter` for body, `Playfair Display` for headings)

## Design System & Aesthetics
Agents must strictly adhere to the established design system to maintain a premium, rich aesthetic:

### Typography
- Headings: `'Playfair Display', serif` (Elegant, classic)
- Body: `'Inter', sans-serif` (Clean, modern, readable)

### Color Palette
- **Backgrounds**: `#fefaf5` (Warm off-white)
- **Text & Footer**: `#2e241f`, `#3b2d23`, `#5a3e2b` (Rich dark browns)
- **Highlights/Accents**: `#e6b422`, `#d48f2b` (Golden honey tones)

### UI Components
- **Images/Cards**: Large border radiuses (`32px`, `24px`) for a soft, organic feel.
- **Shadows**: Soft drop shadows (`box-shadow: 0 12px 24px rgba(0,0,0,0.1)`) to create depth.
- **Buttons/Links**: Interactive hover states.

## Data & Architecture
- **Simulated Database**: Blog content and products are currently managed via client-side JavaScript arrays (e.g., `postsDB` in `blog-post.html`).
- **Dynamic Rendering**: URL parameters (e.g., `?id=1`) are used to fetch and render content dynamically on detail pages using Vanilla JS.

## Key Pages
1. **`index.html`**: The main landing page and product showcase.
2. **`blog-post.html`**: The detailed view for "Pure Honey Stories" articles (Beekeeping, Recipes, Wellness).

## Agent Guidelines
1. **Maintain Aesthetics**: Always ensure new components match the existing premium, organic design. Do not use generic colors.
2. **Vanilla First**: Stick to vanilla HTML/CSS/JS unless explicitly instructed otherwise.
3. **Responsive Design**: Ensure all layouts are mobile-friendly using CSS media queries (e.g., `@media (max-width: 700px)`).
