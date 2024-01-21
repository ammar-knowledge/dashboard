import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import MasterCard from "../MasterCard";

describe("MasterCard component", () => {
  test("renders without errors", () => {
    render(<MasterCard color="blue" number="1234 5678 9012 3456" holder="John Doe" expires="12/24" />);
    const masterCardComponent = screen.getByTestId("mastercard-component");
    expect(masterCardComponent).toBeInTheDocument();
  });

  test("renders the MasterCard logo", () => {
    render(<MasterCard color="blue" number="1234 5678 9012 3456" holder="John Doe" expires="12/24" />);
    const masterCardLogo = screen.getByAltText("MasterCard Logo");
    expect(masterCardLogo).toBeInTheDocument();
  });

  test("renders the card number", () => {
    render(<MasterCard color="blue" number="1234 5678 9012 3456" holder="John Doe" expires="12/24" />);
    const cardNumber = screen.getByText("1234 5678 9012 3456");
    expect(cardNumber).toBeInTheDocument();
  });

  test("renders the card holder", () => {
    render(<MasterCard color="blue" number="1234 5678 9012 3456" holder="John Doe" expires="12/24" />);
    const cardHolder = screen.getByText("John Doe");
    expect(cardHolder).toBeInTheDocument();
  });

  test("renders the card expiration date", () => {
    render(<MasterCard color="blue" number="1234 5678 9012 3456" holder="John Doe" expires="12/24" />);
    const cardExpiration = screen.getByText("Expires: 12/24");
    expect(cardExpiration).toBeInTheDocument();
  });
});