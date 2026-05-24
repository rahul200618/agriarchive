<div align="center">
  <img src="src/assets/main-logo.png" alt="AgriArchives Logo" width="180"/>
  <h1>AgriArchives</h1>
  <p><strong>International Monthly Agriculture E-Magazine</strong></p>

  ![License](https://img.shields.io/badge/License-Proprietary-red.svg)
  ![React](https://img.shields.io/badge/React-18.3-blue?logo=react)
  ![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?logo=typescript)
  ![Vite](https://img.shields.io/badge/Vite-7.x-purple?logo=vite)
  ![Supabase](https://img.shields.io/badge/Supabase-Backend-green?logo=supabase)
  ![Vercel](https://img.shields.io/badge/Deployed-Vercel-black?logo=vercel)
</div>

---

## 📖 About

**AgriArchives** is a modern, full-stack web platform for an international monthly agriculture e-magazine. It serves as a digital hub for publishing, discovering, and archiving high-quality agricultural research, articles, and journal issues. The platform supports both readers and administrators, offering a seamless reading experience alongside a powerful content management system.

---

## ✨ Features

### 🌐 Public-Facing

| Feature | Description |
|--------|-------------|
| 🏠 **Home Page** | Hero section, about the magazine, and latest highlights |
| 📰 **Current Issue** | View and read the latest published journal issue |
| 🗂️ **Archives** | Browse all past issues by volume and month |
| 📄 **Issue Viewer** | Read individual issues with article listings |
| 👥 **Editorial Board** | Profiles and details of editorial board members |
| 📝 **Guidelines** | Submission guidelines, author instructions, and fees |
| 💳 **Membership** | Membership plans and subscription information |
| 🛍️ **Shop** | Purchase insect-related products and merchandise |
| 📬 **Publish With Us** | Information for authors wishing to submit research |
| 📞 **Contact** | Contact form and magazine contact details |
| 🔍 **Search** | Full-text fuzzy search across articles, issues, and pages |

### 🔐 Admin Panel (`/admin`)

| Feature | Description |
|--------|-------------|
| 📊 **Dashboard** | Overview of published issues, board members, and products |
| 📁 **Issue Management** | Create, edit, and delete journal issues with PDF upload |
| 👤 **Editorial Board Management** | Add, edit, and remove editorial board members |
| 🛒 **Product Management** | Manage shop products with images and pricing |
| 🔒 **Auth-Protected Routes** | Secure admin access via Supabase authentication |

---

## 🏗️ Tech Stack

### Frontend
- **[React 18](https://react.dev/)** — UI framework
- **[TypeScript 5.8](https://www.typescriptlang.org/)** — Type-safe development
- **[Vite 7](https://vitejs.dev/)** — Lightning-fast build tool
- **[React Router DOM 6](https://reactrouter.com/)** — Client-side routing
- **[Tailwind CSS 3](https://tailwindcss.com/)** — Utility-first styling
- **[shadcn/ui](https://ui.shadcn.com/)** — Accessible component library (Radix UI)
- **[Framer Motion](https://www.framer.com/motion/)** — Animations
- **[TanStack Query](https://tanstack.com/query)** — Data fetching & caching
- **[React Hook Form](https://react-hook-form.com/)** + **[Zod](https://zod.dev/)** — Form validation
- **[Fuse.js](https://www.fusejs.io/)** — Fuzzy search
- **[Lucide React](https://lucide.dev/)** — Icon library
- **[Recharts](https://recharts.org/)** — Charts & analytics
- **[Fontsource](https://fontsource.org/)** — Libre Baskerville & Source Sans Pro fonts

### Backend & Infrastructure
- **[Supabase](https://supabase.com/)** — PostgreSQL database, authentication, and file storage
- **[Vercel](https://vercel.com/)** — Deployment and hosting

---

## 📁 Project Structure

```
agriarchives/
├── public/                  # Static assets (images, PDFs, robots.txt)
│   └── mock_images/         # Article/test images
├── src/
│   ├── assets/              # Logos, photos, editorial member images
│   ├── components/
│   │   ├── admin/           # Admin-specific components (FileUpload, RequireAuth)
│   │   ├── home/            # Homepage sections (Hero, About)
│   │   ├── layout/          # Header, Footer, Layout wrapper
│   │   └── ui/              # shadcn/ui component library
│   ├── context/
│   │   └── AuthContext.tsx  # Authentication context provider
│   ├── hooks/               # Custom React hooks
│   ├── layouts/
│   │   └── AdminLayout.tsx  # Shared admin panel layout
│   ├── lib/
│   │   ├── supabase.ts      # Supabase client configuration
│   │   └── utils.ts         # Utility helpers
│   ├── pages/
│   │   ├── admin/           # Admin panel pages (Dashboard, Editors, Lists)
│   │   ├── Archives.tsx
│   │   ├── Contact.tsx
│   │   ├── CurrentIssue.tsx
│   │   ├── EditorialBoard.tsx
│   │   ├── Guidelines.tsx
│   │   ├── Index.tsx
│   │   ├── IssueView.tsx
│   │   ├── Membership.tsx
│   │   ├── PublishWithUs.tsx
│   │   ├── SearchResults.tsx
│   │   └── Shop.tsx
│   ├── services/
│   │   └── dataService.ts   # All Supabase API calls (issues, board, products)
│   ├── App.tsx              # Root app with routes
│   └── main.tsx             # App entry point
├── schema_agriarchives.sql  # Supabase database schema
├── vercel.json              # Vercel deployment configuration
├── tailwind.config.ts
├── vite.config.ts
└── tsconfig.json
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- [npm](https://www.npmjs.com/) or [bun](https://bun.sh/)
- A [Supabase](https://supabase.com/) project

### 1. Clone the Repository

```bash
git clone https://github.com/rahul200618/agriarchive.git
cd agriarchive
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

> ⚠️ Never commit your `.env` file. It is already listed in `.gitignore`.

### 4. Set Up the Database

Import the schema into your Supabase project:

```bash
# Via Supabase CLI
supabase db push

# Or manually paste schema_agriarchives.sql into the Supabase SQL editor
```

### 5. Run the Development Server

```bash
npm run dev
```

The app will be available at **http://localhost:8080**

### 6. Build for Production

```bash
npm run build
```

---

## 🗺️ Routes

| Route | Page | Access |
|-------|------|--------|
| `/` | Home | Public |
| `/current-issue` | Current Issue | Public |
| `/archives` | Archives | Public |
| `/issues/:id` | Issue Viewer | Public |
| `/editorial-board` | Editorial Board | Public |
| `/guidelines` | Submission Guidelines | Public |
| `/membership` | Membership | Public |
| `/publish-with-us` | Publish With Us | Public |
| `/shop` | Shop | Public |
| `/contact` | Contact | Public |
| `/search` | Search Results | Public |
| `/admin/login` | Admin Login | Public |
| `/admin` | Admin Dashboard | 🔒 Protected |
| `/admin/issues` | Issue Management | 🔒 Protected |
| `/admin/editorial-board` | Board Management | 🔒 Protected |
| `/admin/products` | Product Management | 🔒 Protected |

---

## 🤝 Contributing

Contributions are welcome! Please read the following before submitting a pull request:

1. **Fork is not permitted** — Do not fork and redistribute this repository.
2. **Open an Issue first** — Discuss the change you'd like to make before working on it.
3. **Submit a Pull Request** — Target the `main` branch with a clear description of changes.
4. **Code Style** — Follow existing TypeScript and React conventions used in the codebase.
5. **No breaking changes** — Contributions must not break existing functionality.

By contributing, you agree that your contributions become the property of the repository owner under the terms of the [LICENSE](./LICENSE).

---

## 📜 License

This project is licensed under a **Proprietary License**.

> ❌ You **may not** copy, fork, redistribute, or use this code in other projects.  
> ✅ You **may** view the code and submit contributions via Pull Requests.

See the full [LICENSE](./LICENSE) file for details.

---

## 👤 Author

**Rahul A**  
📧 rahuldheeraj.anil@gmail.com  
🐙 [@rahul200618](https://github.com/rahul200618)  
🏢 [Openalgon](https://github.com/openalgon-alt) — Working Company

---

<div align="center">
  <sub>© 2024–present AgriArchives. All rights reserved.</sub>
</div>
