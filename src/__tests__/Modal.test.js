import "@testing-library/jest-dom";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import Modal from "../components/Modal/Modal";
import renderer from "react-test-renderer";

describe("Modal", () => {
  afterEach(() => {
    cleanup();
  });

  const mockData = {
    cartListHandler: jest.fn(),
    modal__styles: "mock_style",
    btn__styles: " ",
    closeModal: jest.fn(),
    closeModalBtn: true,
    title: "mock title",
    text: "mock text",
    activeCart: "mock id",
  };

  test("should exist", () => {
    render(
      <Modal
        cartListHandler={mockData.cartListHandler}
        modal__styles={mockData.modal}
        btn__styles={mockData.btn__styles}
        closeModal={mockData.closeModal}
        closeModalBtn={mockData.closeModalBtn}
        title={mockData.title}
        text={mockData.text}
        activeCart={mockData.activeCart}
      />
    );
    const modal = screen.getByTestId("modal");
    expect(modal).toBeInTheDocument();
  });

  test("should have some text", () => {
    render(
      <Modal
        cartListHandler={mockData.cartListHandler}
        modal__styles={mockData.modal}
        btn__styles={mockData.btn__styles}
        closeModal={mockData.closeModal}
        closeModalBtn={mockData.closeModalBtn}
        title={mockData.title}
        text={mockData.text}
        activeCart={mockData.activeCart}
      />
    );
    const modal = screen.getByTestId("modal");
    expect(modal).toHaveTextContent("mock text");
  });

  test("should have cartListHandler", () => {
    render(
      <Modal
        cartListHandler={mockData.cartListHandler}
        modal__styles={mockData.modal}
        btn__styles={mockData.btn__styles}
        closeModal={mockData.closeModal}
        closeModalBtn={mockData.closeModalBtn}
        title={mockData.title}
        text={mockData.text}
        activeCart={mockData.activeCart}
      />
    );
    const goodButton = screen.getByText("Add to cart");
    fireEvent.click(goodButton);
    expect(mockData.cartListHandler).toHaveBeenCalled();
  });

  test("should have closeModal", () => {
    render(
      <Modal
        cartListHandler={mockData.cartListHandler}
        modal__styles={mockData.modal}
        btn__styles={mockData.btn__styles}
        closeModal={mockData.closeModal}
        closeModalBtn={mockData.closeModalBtn}
        title={mockData.title}
        text={mockData.text}
        activeCart={mockData.activeCart}
      />
    );
    const modal = screen.getByTestId("modal");
    fireEvent.click(modal);
    expect(mockData.closeModal).toHaveBeenCalled();
  });
});

test("matches snapshot", () => {
  const mockData = {
    cartListHandler: jest.fn(),
    modal__styles: "mock_style",
    btn__styles: " ",
    closeModal: jest.fn(),
    closeModalBtn: true,
    title: "mock title",
    text: "mock text",
    activeCart: "mock id",
  };
  const tree = renderer
    .create(
      <Modal
        cartListHandler={mockData.cartListHandler}
        modal__styles={mockData.modal}
        btn__styles={mockData.btn__styles}
        closeModal={mockData.closeModal}
        closeModalBtn={mockData.closeModalBtn}
        title={mockData.title}
        text={mockData.text}
        activeCart={mockData.activeCart}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
