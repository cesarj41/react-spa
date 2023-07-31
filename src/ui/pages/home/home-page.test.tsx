import { render, screen } from "@testing-library/react";

import { HomePage } from "./home-page";

describe("<App />", () => {
  it("should render the Home Page", () => {
    const { container } = render(<HomePage />);

    expect(screen.getByText("Vite + React")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
