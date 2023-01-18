import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test('Renders "Hello world!" as text', () => {
    // The Three A's of Testing: Arrange, Act, Assert

    // Arrange
    render(<Greeting />);

    // Act
    // Nothing for this test...

    // Assert
    const helloWorldElement = screen.getByText(/hello world/i);
    expect(helloWorldElement).toBeInTheDocument();
  });
});
