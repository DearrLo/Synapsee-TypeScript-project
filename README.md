# Synapsee
#### Video Demo: (ask me directly)

#### Description:
Synapsee is my final project for CS50x.  
It is a web application that try to make Machine Learning less scary and more fun to explore.  
The idea was simple: ML is often too much complicated when you start, so I wanted to build a place where you can learn the basics step by step, with visuals and interaction, not only long texts.  

This project is not finish yet, but it is already functional in some important parts.  
I build it alone, using the skills I learned in CS50 and also from my web developer formation.

---

## Features implemented
- **Explorer page**: navigation through multiple steps about ML (the basics, some practice, some more advanced).  
- **3D animation with Three.js**: an interactive neural network / globe animation working directly in the browser when you open the app.  
- **Routing and UI**: Next.js with several pages (`about`, `explorer`), responsive layout with TailwindCSS.  
- **Reusable components**: buttons, navigation bar, footer, styled cards.  

These parts are working and already show the complexity of a real project.

---

## Features planned but not implemented yet
- **Backend with Node.js** to manage articles and tutorials.  
- **Database (MongoDB)** for the articles whom gonna be added in the future.  
- **More visual animations** made by hand (maybe three.js?), to illustrate ML concepts.  
- **More content**: right now only some steps are implemented, the plan was to have a full path for "Basics -> Practice -> Mastery".

Even if this part is missing, I explain them here because it show the direction of the project and the complexity I wanted to reach.

## Limitations
Even if the project is already working in most parts, there are still clear limitations.  
Some animations are basic and not optimized, and the design can sometimes break on very small screens.  
Error handling is minimal: if something crash, the user don’t always see a clear message. 

---

## Tech Stack
- **Framework**: Next.js (built moslty in React with the App Router).  
I choosed this framework, Next.js because it is built on React but it give me more power, like routing, server components and easy deploy. It is also a good practice for real jobs, because many companies use it. About React, is the base for all my UI. It let me create small components (like Navbar, Footer, Cards) that I can reuse many times without copy paste. Sometimes React feel a bit heavy, but it was the right tool for Synapsee.

- **Language**: TypeScript.
I decided to use TypeScript even if I am not perfect with it. It force me to write better code, and sometime it show me errors before I even run the app. It slow me a little at start but in the long term it is better.

- **Styling**: TailwindCSS for fast and clean UI.
I prefered Tailwind because I don’t like to write too much CSS by hand. With Tailwind, I can just put classes inside my code and see instant result. It also keep the style consistent everywhere.

- **3D / Animations**: Three.js for interactive models.
This was a big choice, because I wanted my project to be not only text. I already worked before with Three.js for a school project and I really enjoy using it. It is one of the part that give me motivation, because I like when the project look alive. For Synapsee I made the animation by myself, so it is original, but for the brain model I used a base from WebGL resources. I don’t have yet the full knowledge to build a complete 3D brain from scratch so I prefered to adapt an existing model and focus on the animation and integration. This way I could still show something visual and fun, and learn step by step how to go deeper into 3D.

- **Version control**: Git + GitHub.
I used Git for version control during all the project. It let me save my progress step by step and go back when I break something. I also used GitHub to store my repository online. I already used Git before so this was okay to work with.

For now the project does not use any database, it is still only a front-end application. All the data you see is static and hardcoded in the code. In the future I plan to integrate a real database, probably MongoDB, so that articles, lessons and user progress can be stored and managed dynamically instead of being only in the code.


---

## Project Structure
The project follow Next.js conventions, with some custom folders:

- `/public`: static files and images (like `me-pic.png` for About page).  
- `/src/app`: main Next.js pages, like `about` and `explorer`.  
- `/src/components`: reusable React components (navbar, footer, cards).  
- `/src/lib`: utility functions.  
- `/pages/api`: small experiments with API routes (for example `articles.ts`).  

This organisation is classic React/Next.js style, it help to keep code clean.

---

## How to Run
To run Synapsee locally:

```bash
git clone <your-repo-url>
cd synapsee
npm install
npm run dev
