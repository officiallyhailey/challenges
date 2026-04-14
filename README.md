# Frontend Mentor - Browser Extensions Manager UI Solution

This is my solution to the [Browser extensions manager UI challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/browser-extensions-manager-ui-yNZnOfsMAp). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of Contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [What I Learned](#what-i-learned)
  - [Continued Development](#continued-development)
  - [Useful Resources](#useful-resources)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)

---

## Overview

### The Challenge

Users should be able to:

- Toggle extensions between active and inactive states
- Filter active and inactive extensions
- Remove extensions from the list
- Select their color theme
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Search extensions via a search bar added to the header

### Screenshot

![Browser Extensions Manager UI](src/images/screenshot.png)

### Links

- [Live Site](https://officiallyhailey.github.io/challenges/)

---

## My Process

### Built With

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- [React](https://reactjs.org/) - JS library
- [Vite](https://vitejs.dev/) - Build tool and dev server

### What I Learned

Coming into this with a solid base in HTML, CSS, and JavaScript made picking up React feel like a natural progression rather than starting from zero. The concepts weren't foreign - it was more about learning a new way to think about structure and reusability.

The thing that clicked the most was components and how to work with `.map()` in `App.jsx` to render the extension cards dynamically. Once that made sense, the whole project started to come together. Getting data to flow through props correctly and understanding how components talk to each other was where I spent the most time, and honestly where I learned the most.

I also added a search bar to the header beyond what the original challenge called for - a small addition but one that felt good to build on top of the base requirements.

### Continued Development

Getting this deployed taught me a lot about the difference between something working locally and something working in production. File paths, how Vite bundles assets, base paths for GitHub Pages — none of that is obvious until you run into it. I want to go into the next project with a better deployment plan from the start instead of solving it at the end.

I also want to keep building with React and dig deeper into state management as projects get more complex.

### Useful Resources

- [React Full Course - 11 Hours](https://youtu.be/TtPXvEcE11E?si=4UTwa08maoNaSyYy) - This was the foundation I used to learn React before starting the project. Thorough and worth the time investment.

---

## AI Collaboration

I didn't use AI to write my code but I did build a custom Claude-powered code grader that would take what I wrote, grade it against industry standards, and give recommendations — without touching the actual code. That distinction mattered to me. I wanted to understand what I was building, not just ship something that worked.

Where AI really helped was deployment. Getting a React/Vite app from "works on my machine" to a live GitHub Pages URL involved a lot of moving parts I hadn't dealt with before — base paths, how assets get bundled, why images and fonts that worked locally would break in production. A lot of that came down to file structure and how you call things, which is something I'll carry into every project going forward.

---

## Author

- Frontend Mentor - [@Hals](https://www.frontendmentor.io/profile/Hals)
