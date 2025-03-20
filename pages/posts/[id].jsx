import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostFiles } from "../../lib/posts-utils";
import Head from "next/head";
function PostDetailPage(props) {
  return (
    <>
      <Head>
        <title>{props.post.title}</title>
        <meta name="description" content={props.post.excerpt} />
      </Head>
      <PostContent post={props.post} />
    </>
  );
}

export function getStaticProps(context) {
  const { params } = context;
  const { id } = params;

  const postData = getPostData(id);
  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  }
}

export function getStaticPaths() {
  const allPostsFiles = getPostFiles();
  const ids = allPostsFiles.map((fileName) => fileName.replace(/\.md$/, ""));
  return {
    paths: ids.map((id) => ({ params: { id: id } })),
    fallback: 'blocking',
  }
}

export default PostDetailPage;
