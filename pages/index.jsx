import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
import Head from "next/head";
import { getPostsFeatured } from "../lib/posts-utils";

function Home(props) {
  return (
    <>
      <Head>
        <title>Yuki's Blog</title>
        <meta name="description" content="Yuki's Blog about programming and web development" />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  );
}

export async function getStaticProps() {
  const featuredPosts = getPostsFeatured();
  return {
    props: {
      posts: featuredPosts,
    }
  };
}
export default Home;
