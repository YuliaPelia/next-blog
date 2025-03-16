import ReactMarkdown from "react-markdown";

import PostHeader from "./post-header";
import classes from "./post-content.module.css";

const DUMMY_POST = {
    title: "Getting Started with Next.js",
    image: "https://res.cloudinary.com/dboiqigz3/image/upload/v1742117037/cover-1200_ofxtd2.jpg",
    content: `
# Getting Started with Next.js

Next.js is a powerful framework for building React applications with server-side rendering and other performance optimizations.

## Why Choose Next.js?

- **Server-Side Rendering**: Improves loading speed and SEO
- **File-based Routing**: Intuitive navigation setup
- **API Routes**: Create backend endpoints easily
- **Image Optimization**: Automatic image optimization

## Getting Started

First, install Next.js in your project:

\`\`\`bash
npm install next react react-dom
\`\`\`

Then, add the following scripts to your package.json:

\`\`\`json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start"
}
\`\`\`

Create a pages directory and start building your application!

## Dragon's Tip

> "A dragon breathes fire not because it's easy, but because it's in its nature. 
> Similarly, coding with Next.js will soon become second nature to you!"

## Learn More

Check out [the Next.js documentation](https://nextjs.org/docs) for more details.
`,
    slug: "getting-started-with-nextjs",
    date: "2025-03-16"
}

function PostContent() {
    const { title, image, content } = DUMMY_POST;

    return (
        <article className={classes.content}>
           <PostHeader title={title} image={image} />
           <ReactMarkdown>{content}</ReactMarkdown>
        </article>
    );
}

export default PostContent;