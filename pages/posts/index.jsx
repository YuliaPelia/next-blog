import AllPosts from "@/components/posts/all-posts";
import { getPostsAll } from "@/lib/posts-utils";


function AllPostsPage(props) {  
  return <AllPosts posts={props.posts} />
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
