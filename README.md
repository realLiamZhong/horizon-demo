# Horizon Sample

A React-based interactive frontend application built with Vite and TypeScript. This project features a fixed aspect ratio interface, ensure provide the same layout in different resolutions.

## 📊 Summary Breakdown

| Category                   | Time Allocated |
| :------------------------- | :------------- |
| **Infrastructure & Setup** | 2 Hours        |
| **Component Architecture** | 4 Hours        |
| **Feature Development**    | 6 Hours        |
| **Polishing & Docs**       | 2 Hours        |
| **Total**                  | **14 Hours**   |

## 🛠 Tech Stack

React 19 / Vite / Base UI / CSS Modules

## 📦 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

Ensure you have Node.js installed on your machine. This project uses `pnpm`.

### Installation

**Install dependencies:**

```bash
pnpm install
```

### Running the Development Server

Start the local development server:

```bash
pnpm dev
```

The application will run at `http://localhost:5173/`.

### Building for Production

To create a production-ready build:

```bash
pnpm build
```

## 📂 Project Structure

```
src/
├── api/             # Mock API services
├── assets/          # Static assets (fonts, images)
├── components/      # Reusable UI components (Button, Modal, ScrollList)
├── constant/        # Static Mock data (Questions)
├── parts/           # Main functional sections of the page
│   ├── part-1/      # Header section
│   ├── part-2/      # Main content (Questions list & Modal)
│   └── part-3/      # Decorative section
├── types/           # Type definitions
├── App.tsx          # Main application component
└── main.tsx         # Entry point
```

## 🎨 Design System

The application uses a centered layout with a fixed ratio(9:16) on mobile screen on desktop views.

- Desktop: 100% viewport height, and reactiv width, the app is in the center.
- Mobile: 100% viewport width, if the screen is too tall, the app will be centered with white bars at the top and bottom. The height is determined by the screen width.
- Font: [Poppins]("https://fonts.google.com/specimen/Poppins")
