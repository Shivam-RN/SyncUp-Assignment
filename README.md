# SyncUp Web App

A modern, pixel-perfect Next.js 15 implementation of the SyncUp professional networking platform, built from Figma designs.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Lucide React

## Pages

| Route  | Description |
### `/`
- SyncUp Home Feed  
- Social posts  
- Profile card  
- Suggestions  

### `/jobs`
- Job Dashboard  
- Vacancy stats  
- Application tracker  
- Recommended jobs  

## Getting Started

### Prerequisites
- Node.js 20+
- npm or yarn

### Installation

```bash
# Clone the repo
git clone <your-repo-url>
cd syncup-web-app

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Deployment (Vercel)

1. Push to GitHub
2. Import the repo on [Vercel](https://vercel.com)
3. No extra configuration needed — it auto-detects Next.js

## Project Structure

```
src/
├── app/
│   ├── layout.tsx   the code 
│   ├── globals.css         
│   ├── page.tsx            
│   └── jobs/
│       └── page.tsx        
├── components/
│   ├── layout/
│   │   ├── Sidebar.tsx     
│   │   └── Topbar.tsx     
│   ├── home/
│   │   ├── ProfileCard.tsx
│   │   ├── AnalyticsCard.tsx
│   │   ├── StoriesCard.tsx
│   │   ├── CreatePost.tsx
│   │   ├── PostCard.tsx
│   │   └── RightSidebar.tsx
│   └── jobs/
│       ├── StatCard.tsx
│       ├── VacancyStats.tsx
│       ├── JobApplicationStatus.tsx
│       └── RecommendedJobs.tsx
```

## Features

- ✅ Pixel-perfect recreation of both Figma pages
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ TypeScript throughout
- ✅ Tailwind CSS utility-first styling
- ✅ Interactive toggles for chart filters
- ✅ Recharts for data visualization
- ✅ Clean, reusable component structure
- ✅ Next.js App Router with proper file-based routing
