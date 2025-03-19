import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";

import { getPostsFeatured } from "../lib/posts-utils";

function Home(props) {
  return (
    <>
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
