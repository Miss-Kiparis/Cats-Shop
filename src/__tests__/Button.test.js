import "@testing-library/jest-dom";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import Button from "../components/Button/Button";
import renderer from "react-test-renderer";

describe("Button", () => {
  afterEach(() => {
    cleanup();
  });

  const mockData = {
    text: "mock text",
    btnStyles: "mock_style",
    btnAction: jest.fn(),
  };

  test("should exist", () => {
    render(
      <Button
        btnStyles={mockData.btnStyles}
        text={mockData.text}
        btnAction={mockData.btnAction}
      />
    );
    const btn = screen.getByTestId("btn");
    expect(btn).toBeInTheDocument();
  });

  test("should have some text", () => {
    render(
      <Button
        btnStyles={mockData.btnStyles}
        text={mockData.text}
        btnAction={mockData.btnAction}
      />
    );
    const btn = screen.getByTestId("btn");
    expect(btn).toHaveTextContent("mock text");
  });

  test("should have btnAction", () => {
    render(
      <Button
        btnStyles={mockData.btnStyles}
        text={mockData.text}
        btnAction={mockData.btnAction}
      />
    );
    const btn = screen.getByTestId("btn");
    fireEvent.click(btn);
    expect(mockData.btnAction).toHaveBeenCalled();
  });
});

test("matches snapshot", () => {
  const mockData = {
    text: "mock text",
    btnStyles: "mock_style",
    btnAction: jest.fn(),
  };
  const tree = renderer
    .create(
      <Button
        btnStyles={mockData.btnStyles}
        text={mockData.text}
        btnAction={mockData.btnAction}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
