import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

  test('Renders "It\'s good to see you!" pre-click', () => {
    // Arrange
    render(<Greeting />);

    // Act
    // Nothing

    // Assert
    const igtsyElement = screen.getByText(/it's good to see you/i);
    expect(igtsyElement).toBeInTheDocument();
  });

  test('Renders "Changed!" post-click', () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const changedElement = screen.getByText(/changed/i);
    expect(changedElement).toBeInTheDocument();
  });
});
