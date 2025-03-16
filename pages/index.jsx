import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";

const DUMMY_POSTS = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js",
    image: "https://res.cloudinary.com/dboiqigz3/image/upload/v1742117037/cover-1200_ofxtd2.jpg",
    excerpt: "Learn how to build a personal website using Next.js",
    date: "2025-03-16",
  },
  {
    slug: "mastering-react-hooks",
    title: "The Dragon's Guide to React Hooks",
    image: "https://res.cloudinary.com/dboiqigz3/image/upload/v1742116926/react-hooks_b9vxat.jpg",
    excerpt: "Unleash the power of React Hooks with these fiery techniques",
    date: "2025-03-10",
  },
  {
    slug: "css-grid-layout-mastery",
    title: "Scale Your Layouts with CSS Grid",
    image: "https://res.cloudinary.com/dboiqigz3/image/upload/v1742116925/1_zZIq2QMikx1mcCTpoA4lLg_lmlydf.png",
    excerpt: "How to create dragon-worthy layouts using CSS Grid",
    date: "2025-02-28",
  },
  {
    slug: "typescript-for-beginners",
    title: "TypeScript: Forging Type-Safe Code",
    image: "https://res.cloudinary.com/dboiqigz3/image/upload/v1742116925/https___dev-to-uploads.s3.amazonaws.com_uploads_articles_kgxwoci4oizczfr64vu5_zi7yh3.jpg",
    excerpt: "Begin your journey into the typed realm of JavaScript",
    date: "2025-02-15",
  },
  {
    slug: "responsive-design-techniques",
    title: "Responsive Design: Adapting Like a Dragon",
    image: "https://res.cloudinary.com/dboiqigz3/image/upload/v1742116925/responsive-vs-adaptive-design_crtaeu.jpg",
    excerpt: "Learn to make your websites breathe fire on any device size",
    date: "2025-01-25",
  },
  {
    slug: "state-management-redux",
    title: "Hoarding State: A Guide to Redux",
    image: "https://res.cloudinary.com/dboiqigz3/image/upload/v1742116925/1_c-ZLZd9wCluFwX9Ftkj5qg_zuvver.png",
    excerpt: "Manage your application state like a dragon guards its treasure",
    date: "2025-01-10",
  }
];

function Home() {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </>
  );
}

export default Home;
