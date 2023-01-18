import { render, screen } from "@testing-library/react";

import Async from "./Async";

describe("Async component", () => {
  test("Renders posts if request succeeds", async () => {
    // Arrange
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async function () {
        return [{ id: "p1", title: "First post" }];
      },
    });
    render(<Async />);

    // Act
    // Nothing

    // Assert
    const liElements = await screen.findAllByRole("listitem");
    expect(liElements).not.toHaveLength(0);
  });
});
