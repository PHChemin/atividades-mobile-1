import { render, waitFor } from "@testing-library/react-native";
import React from "react";
import { Car } from "../../src/types/Car";
import CarCard from "../../components/ScreensComponents/Cars/CarCard";

const fusca: Car = {
  brand: "VW",
  model: "Fusca 72",
  hp: 150,
  upgrades: [],
};

const token = "tokenaleatorio";

describe("Car Card Test", () => {
  it("should display the car information", async () => {
    const { getByText } = render(<CarCard car={fusca} userToken={token} />);

    await waitFor(() => {
      expect(getByText("VW Fusca 72")).toBeTruthy();
    });
  });
  it("should display card options", async () => {
    const { getByTestId } = render(
      <CarCard car={fusca} showOptions userToken={token} />
    );

    await waitFor(() => {
      expect(getByTestId("edit-icon")).toBeTruthy();
    });
  });
  it("should not display card options", async () => {
    const { queryByTestId } = render(<CarCard car={fusca} userToken={token} />);

    await waitFor(() => {
      expect(queryByTestId("edit-icon")).toBeNull();
    });
  });
});
