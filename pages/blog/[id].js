import Head from "next/head";
import Link from "next/link";
import { getPostData, getSortedPostsData } from "../../lib/posts";

export default function BlogPost({ post }) {
  // const router = useRouter();
  // const { id } = router.query;
  return (
    <>
      <Head>
        <title>{post.id}</title>
      </Head>
      <div dangerouslySetInnerHTML={{ __html: post.contentHtml }}></div>
      <time dateTime={post.date}>{post.date}</time>
      <div>
        <Link href="/">
          <a>Go back to home page</a>
        </Link>
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const id = context.params.id;
  // getting data (can be fetch, can be some function)
  const post = await getPostData(id);
  return {
    props: {
      post: post,
    },
  };
}

export async function getStaticPaths() {
  const posts = getSortedPostsData();

  return {
    paths: posts.map((post) => ({ params: { id: post.id } })),
    fallback: false, // false or 'blocking'
  };
}
