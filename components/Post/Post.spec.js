import { render, screen } from "@testing-library/react";
import { Post } from "./Post";

describe("Post", () => {
  it("shows a title", () => {
    render(<Post title="random Title" />);

    const title = screen.getByRole("heading", { title: "randomTitle" });
    expect(title).toBeInTheDocument();
  });

  it("has the date showing", () => {
    render(<Post date="01-01-2020" />);

    const date = screen.getByText(/01-01-2020/i);
    expect(date).toBeInTheDocument();
  });
});
