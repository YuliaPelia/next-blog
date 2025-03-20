import AllPosts from "@/components/posts/all-posts";
import { getPostsAll } from "@/lib/posts-utils";
import Head from "next/head";


function AllPostsPage(props) {  
  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="A list of all posts" />
      </Head>
      <AllPosts posts={props.posts} />
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getPostsAll();
  return {
    props: {
      posts: allPosts,
    },
  };
}
export default AllPostsPage;
