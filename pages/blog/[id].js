import Head from "next/head";
import Link from "next/link";
import { PostWrapper } from "../../components/PostWrapper/PostWrapper";
import { Title } from "../../components/Title/Title";
import { getPostData, getSortedPostsData } from "../../lib/posts";

export default function BlogPost({ post }) {
  // const router = useRouter();
  // const { id } = router.query;
  return (
    <>
      <Head>
        <title>{post.id}</title>
      </Head>
      <Title>{post.title}</Title>
      <time dateTime={post.date}>{post.date}</time>
      <PostWrapper>
        <div dangerouslySetInnerHTML={{ __html: post.contentHtml }}></div>
        <div>
          <Link href="/">
            <a>Go back to home page</a>
          </Link>
        </div>
      </PostWrapper>
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
