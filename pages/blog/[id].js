// import { Post } from "../../components/Post/Post";

import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";

export default function BlogPost() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <Head>
        <title>BlogPost: {id}</title>
      </Head>
      <h1>My Blog</h1>
      <p>Lorem Ipsum…</p>
      <Link href="/">
        <a>Go back to home page</a>
      </Link>
    </>
  );
}
