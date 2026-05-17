import { render, screen, fireEvent } from "@testing-library/react";
import { vi, describe, test, expect } from "vitest";
import Searchbar from "./components/Searchbar";

describe("Searchbar component", () => {
  test("renders input", () => {
    render(<Searchbar search="" setSearch={() => {}} />);

    expect(
      screen.getByPlaceholderText("Search coffee......")
    ).toBeInTheDocument();
  });

  test("calls setSearch on typing", () => {
    const mockFn = vi.fn();

    render(<Searchbar search="" setSearch={mockFn} />);

    const input = screen.getByPlaceholderText("Search coffee......");

    fireEvent.change(input, { target: { value: "latte" } });

    expect(mockFn).toHaveBeenCalled();
  });
});
