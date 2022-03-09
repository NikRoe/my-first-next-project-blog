import Head from "next/head";
import { PostList } from "../components/PostList/PostList";
import { getSortedPostsData } from "../lib/posts";

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Mein Blog</title>
      </Head>
      <h1>My Blog</h1>
      <p>Lorem Ipsum…</p>
      <h2>Posts</h2>
      <PostList posts={posts} />
    </>
  );
}

export async function getStaticProps() {
  // getting data (can be fetch, can be some function)
  const posts = getSortedPostsData();
  return {
    props: {
      posts: posts,
    },
  };
}
