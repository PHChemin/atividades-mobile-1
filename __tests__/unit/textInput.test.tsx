import { render } from "@testing-library/react-native";
import React from "react";
import InputText from "../../components/UI/InputText";

describe("InputText", () => {
  it("should display the label when provided", () => {
    const { getByText } = render(<InputText label="Email" />);
    expect(getByText("Email")).toBeTruthy();
  });

  it("should not display the label when not provided", () => {
    const { queryByText } = render(<InputText />);
    expect(queryByText("Email")).toBeNull();
  });

  it("should display the placeholder when provided", () => {
    const { getByPlaceholderText } = render(
      <InputText label="Email" placeholder="Digite seu email" />
    );
    expect(getByPlaceholderText("Digite seu email")).toBeTruthy();
  });

  it("should not display the label when not provided", () => {
    const { queryByPlaceholderText } = render(<InputText />);
    expect(queryByPlaceholderText("Digite seu email")).toBeNull();
  });
});
