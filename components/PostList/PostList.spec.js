import { render, screen } from "@testing-library/react";
import { PostList } from "./PostList";

describe("PostList", () => {
  it("has a list", () => {
    render(
      <PostList
        posts={[
          { value: 1, id: 1 },
          { value: 2, id: 2 },
          { value: 3, id: 3 },
        ]}
      />
    );

    const list = screen.getByRole("list");
    expect(list).toBeInTheDocument();
  });
});
