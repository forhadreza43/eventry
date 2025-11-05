# Eventry - Event Management Platform

## Overview

Eventry is a modern event management platform built with Next.js 14, MongoDB, and TypeScript. It enables users to discover, register for, and manage events with features like email confirmations and payment processing.

## Features

- 🔐 User Authentication
- 📅 Event Discovery & Listing
- 💫 Interactive Event Cards with Blur Image Loading
- 👥 Event Interest & Going Status
- 💌 Email Confirmations (using Resend)
- 💳 Payment Processing Interface
- 🎨 Modern UI with Tailwind CSS
- 📱 Fully Responsive Design

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Database**: MongoDB with Mongoose
- **Styling**: Tailwind CSS
- **Email Service**: Resend
- **Image Optimization**: Sharp, Plaiceholder
- **Package Manager**: Bun
- **Form Validation**: Zod
- **Components**: Server & Client Components Pattern

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- MongoDB instance
- Resend API key

### Installation

1. Clone the repository:
2. 
```bash
git clone https://github.com/forhadreza43/eventry.git
cd eventry
```

1. Install dependencies:
2. 
```bash
bun install
# or
npm install
```

1. Set up environment variables:
2. 
Create a `.env.local` file in the root directory with:
```env
MONGODB_URI=your_mongodb_uri
RESEND_API_KEY=your_resend_api_key
```

1. Run the development server:
2. 
```bash
bun run dev
# or
npm run dev
```

1. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
eventry/
├── app/                   # Next.js app router pages
├── components/           # React components
│   ├── landing/         # Landing page components
│   ├── payments/        # Payment related components
│   └── ui/             # Shared UI components
├── actions/             # Server actions
├── db/                 # Database queries and utils
├── models/             # Mongoose models
├── definition/             # TypeScript type definitions
└── public/            # Static assets
```

## Key Features Implementation

### Authentication

- Custom authentication using MongoDB
- Server-side session management
- Protected routes and API endpoints

### Event Management

- Create and list events
- Track interest and going status
- Real-time updates with Next.js server actions

### Email Notifications

- Event registration confirmations
- Customizable email templates
- Reliable delivery through Resend

### Image Optimization

- Blur image loading effect
- Optimized image serving
- Responsive images across devices

## Development

### Running Tests

```bash
bun test
# or
npm run test
```

### Building for Production

```bash
bun run build
# or
npm run build
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## Acknowledgments

- Next.js team for the amazing framework
- MongoDB for the reliable database
- Resend for email services
- All contributors who help improve the project
