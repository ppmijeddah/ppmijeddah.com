# PPMI Jeddah Website

## Description

PPMI Jeddah is the official website for the Indonesian Student Association in Jeddah, Saudi Arabia. It serves as an informational hub for students, providing details about the organization, affiliated universities (KAU and KAUST), and activities. The website is under the auspices of PPI Dunia.

## Deployment URL

The live website can be accessed at: [https://ppmijeddah.com](https://ppmijeddah.com)

## Getting Started

To get a local copy up and running, follow these simple steps:

1.  **Clone the repository:**
    ```sh
    git clone <repository-url>
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd ppmijeddah.com
    ```
3.  **Install dependencies:**
    ```sh
    pnpm install
    ```
4.  **Run the development server:**
    ```sh
    pnpm run dev
    ```
    This will start the development server, typically at `http://localhost:4321`.

5.  **Build for production:**
    ```sh
    pnpm run build
    ```
    This will create a production-ready build in the `dist/` directory.

## Tech Stack

This website is built with a modern tech stack, focusing on performance and developer experience:

*   **Framework:** [Astro](https://astro.build/) - A web framework for building fast, content-focused websites.
*   **UI Components:**
    *   [React](https://react.dev/) (via `@astrojs/react`) for interactive components.
    *   Astro components (`.astro`) for templating and server-side rendering.
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/) (via `@astrojs/tailwind`) - A utility-first CSS framework.
*   **Content Management:** [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/) for managing blog posts and author data (MDX and JSON).
*   **Image Optimization:** `astro:assets` and `sharp` for optimizing images.
*   **Carousel:** [@splidejs/react-splide](https://splidejs.com/) for image carousels.
*   **Date Formatting:** `dateformat` for consistent date presentation.
*   **Icons:** `astro-icon` for easy SVG icon integration.
*   **RSS Feed:** `@astrojs/rss` for generating an RSS feed for the blog.
*   **Linting/Formatting:**
    *   [Prettier](https://prettier.io/) for code formatting.
    *   `prettier-plugin-astro` for Astro-specific formatting.
*   **Package Manager:** [pnpm](https://pnpm.io/)

The `ppmijeddah.com/package.json` file contains the full list of dependencies.
```
