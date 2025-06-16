# 📝 Medium Blog Clone

A modern, full-stack blogging platform inspired by [Medium.com](https://medium.com) — built using **React**, **Vite**, **Cloudflare Workers**, **TailwindCSS**, and **Zod** for type-safe schema validation.

---

## 🔧 Tech Stack

| Layer          | Tech Used                               |
| -------------- | --------------------------------------- |
| **Frontend**   | React 19, Vite, Tailwind CSS            |
| **Backend**    | Cloudflare Workers, Hono framework      |
| **Validation** | Zod (via custom NPM package)            |
| **API**        | Axios                                   |
| **Routing**    | React Router DOM (v7)                   |
| **Deployment** | Vercel (Frontend), Cloudflare (Backend) |

---

## 🚀 Features

- 🔐 **Authentication** — Secure signup/login using JWT
- ✍️ **Rich-text Blog Editor** — Built with [Tiptap](https://tiptap.dev/)
- 🧑‍💻 **User Dashboard** — Create, edit, delete, and manage blogs
- 🧪 **Zod Schema Validation** — Shared validation logic across FE/BE via npm package
- ⚡️ **Vite + TypeScript** — Fast, optimized, and modern dev experience
- ☁️ **Serverless API** — Backend powered by Cloudflare Workers
- 🎯 **Modular Architecture** — Clear separation of concerns (frontend, backend, shared logic)

---

## 🔮 Future Roadmap

We’re committed to continuous enhancement of the Medium Blog experience. Here’s what’s coming in upcoming versions:

- 🌐 **Global Blog Feed**  
  A public explore page showcasing all published blogs across the platform for discovery and engagement.

- 🖼️ **User Profiles**  
  Each user will have a dedicated profile page to showcase their published content and bio.

- 🎨 **UI Polish**  
  Enhanced UI/UX with refined responsiveness, subtle animations, and accessibility improvements for a seamless reading and writing experience.

- 🗃️ **Categories & Tags**  
  Support for categorizing blogs with tags, enabling users to filter content by topic or interest.

- 🔍 **Search Functionality**  
  A robust search bar to allow users to find blogs by keywords, tags, or author.

- 📈 **Blog Metrics & Analytics**  
  Track individual post performance with real-time metrics like views, likes, and estimated read time.

- 💬 **Comments & Interaction** _(Phase 2)_  
  Add a commenting system so readers can engage directly with authors and each other.

---

## 📁 Project Structure

```bash
Medium-Blog/
│
├── backend/               # Cloudflare Worker APIs (Hono framework)
│   └── src/               # Handlers, JWT, DB access
│
├── common/                # Shared Zod schemas published via NPM
│
├── frontend/              # React + Vite + Tailwind frontend
│   └── src/
│       ├── components/    # Reusable UI components
│       ├── hooks/         # Custom hooks (e.g., API handling)
│       ├── pages/         # Route-based pages (Signup, Dashboard, etc.)
│       └── App.tsx        # App entry
│
├── README.md              # You're reading it!
```
