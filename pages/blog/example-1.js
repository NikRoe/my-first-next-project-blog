// import { Post } from "../../components/Post/Post";

import Link from "next/link";

export default function ExampleOne() {
  return (
    <>
      <h1>My Blog</h1>
      <p>Lorem Ipsum…</p>
      <h2>Posts</h2>
      <Link href="/">
        <a>Go back to home page</a>
      </Link>
    </>
  );
}
