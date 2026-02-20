# Client-Side Rendering vs Server-Side Rendering Project
## Project Overview

This project demonstrates the difference between Client-Side Rendering (CSR) and Server-Side Rendering (SSR) using only HTML, CSS, and JavaScript (no frameworks).

Two versions of the same webpage were created:

SSR page where content is present in the initial HTML

CSR page where content is generated using JavaScript in the browser

Both pages display identical content and styling but differ in how the content is rendered.

This project was developed as part of a web development assignment to explore rendering techniques in modern web applications.

# Project Structure

```bash
project-folder
│
├── ssr.html        # Server-side rendering simulation
├── csr.html        # Client-side rendering simulation
├── style.css       # Shared styling
├── script.js       # CSR rendering logic
├── theme.js        # Dark/light mode toggle
├── analysis.md     # Written comparison (assignment requirement)
└── README.md       # Project documentation
```
# How to Run the Project
## Method 1: Open directly in browser

  1. Download or clone this repository (https://github.com/jasmi1901/csr_ssr_project)

  2. Open the project folder (csr_ssr_project)

  3. Double-click:

      ssr.html

      csr.html

  They will open in your browser.

## Method 2: Run with VS Code Live Server (recommended)

   1. Open project folder in VS Code

   2. Install Live Server extension

   3. Right-click ssr.html → Open with Live Server

   4. Right-click csr.html → Open with Live Server

# Key Differences Demonstrated
## Server-Side Rendering (ssr.html)

   * Content is present immediately in HTML

   * Visible instantly on page load

   * Works even if JavaScript is disabled

   * Better for SEO and reliability

## Client-Side Rendering (csr.html)

   * HTML starts mostly empty

   * JavaScript dynamically renders content

   * Shows loading animation before content appears

   * Requires JavaScript to function   

# Features

   * Modern responsive UI design

   * Glassmorphism styling

   * Dark/Light mode toggle

   * Loading animation for CSR

   * Same layout and content on both pages

   * Clear demonstration of rendering differences  

# Technologies Used

   * HTML

   * CSS

   * JavaScript 

   * No frameworks used  

# Learning Outcomes

   *  Differences between CSR and SSR

   *  Performance and SEO considerations

   *  JavaScript dependency in web applications

   *  User experience differences in rendering methods