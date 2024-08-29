# Evento - Event Browsing Platform

Evento is a platform that allows users to browse and discover events happening in various cities. This project leverages modern web technologies to deliver a seamless and dynamic user experience. Below is an overview of the key aspects of the project, including the routing strategy, database management, and component architecture.

## Table of Contents

- [Features](#features)
- [Routing Strategy](#routing-strategy)
- [Database Management](#database-management)
- [Component Architecture](#component-architecture)
- [Caching and Server Utilities](#caching-and-server-utilities)
- [Getting Started](#getting-started)
- [Deployment](#deployment)

## Features

- Browse events by city or discover all events.
- Dynamic event pages with detailed information.
- Pagination support for viewing events in batches.
- Optimized image loading and smooth transitions.
- Search functionality to find events in specific cities.

## Routing Strategy

Evento uses a dynamic routing strategy with Next.js to manage the navigation across different pages. Here’s how it works:

- **`/events/[slug]`**: This route dynamically generates event pages based on the event's unique `slug`. When a user clicks on an event, they are navigated to `/events/[slug]`, where `[slug]` is the unique identifier for that event (e.g., `dj-practice-session`).

- **Route Pushing**: 
  - The search functionality (`/search`) allows users to input a city name, and upon submission, they are redirected to `/events/[city]`.
  - Pagination is handled by appending a `?page=[number]` query parameter to the city-based route, allowing users to navigate through pages of events.

## Database Management

Evento utilizes Prisma as the ORM to manage its database. During development, SQLite was used for simplicity and ease of setup. However, when deploying to Vercel for production, the database was switched to PostgreSQL for better scalability and performance.

### Important Prisma Commands:

- **`npx prisma push`**: This command is used to push the Prisma schema changes to the database. It ensures that the database structure matches the Prisma schema.

- **`npx prisma seed`**: Seeds the database with initial data, useful for testing and initial setup.

## Component Architecture

Evento's component architecture is designed with both static and dynamic components to optimize performance:

- **Static Components**: Components that do not depend on external data are rendered statically to improve load times.

- **Dynamic Components**: Components that rely on real-time data, such as event listings and search results, are rendered dynamically.

## Caching and Server Utilities

To further optimize performance, Evento leverages caching strategies and server-side utilities:

- **`unstable_cache`**: Some pages use Next.js's `unstable_cache` to cache server-side data, reducing the load on the database and improving response times for frequently accessed data.

- **Server Utilities**: The server utilities (`server-utils`) are separated from general utilities (`util`) to ensure that server-specific logic, like database queries, are handled on the server side and not exposed to the client. This separation also improves security and performance by ensuring that certain operations are only executed server-side.

## Getting Started

To get started with Evento locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/evento.git
   cd evento
2. **Install dependencies**:
   ```bash
   npm install

3. **Set up the database**:
- Ensure Prisma is installed and configured for SQLite.
- Run the following commands to push the schema and seed the database:
```bash
npx prisma push
npx prisma seed  
```

4. **Run the development server**:
```bash
npm run dev
```
5. **Deployment**:
When deploying to Vercel:
    1. Switch to PostgreSQL:
        - Update the Prisma schema to use PostgreSQL.
        - Set the correct environment variables in Vercel for database connections.
    2. Deploy to Vercel:
        - Push your changes to GitHub and connect your repository to Vercel.
        - Configure the environment variables in Vercel and deploy.
