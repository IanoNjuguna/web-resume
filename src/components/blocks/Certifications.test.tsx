import { render, screen } from "@testing-library/react";
import { useStaticQuery } from "gatsby";
import React from "react";
import Certifications, { PureCertifications } from "./Certifications";

const fixture = ["Cardano Fundamentals", "Midnight Builder"];

describe("<PureCertifications />", () => {
  beforeAll(() =>
    (useStaticQuery as jest.Mock).mockReturnValue({
      file: { childDataJson: { certifications: fixture } },
    }),
  );

  test("bails out on no data", () => {
    render(<PureCertifications certifications={[]} />);

    expect(screen.queryByTestId("certifications")).not.toBeInTheDocument();
  });

  test("deduplicates", () => {
    render(
      <PureCertifications
        certifications={["Cardano Fundamentals", "Cardano Fundamentals"]}
      />,
    );

    expect(screen.getAllByText("Cardano Fundamentals")).toHaveLength(1);
  });

  test("renders all of them", () => {
    render(<PureCertifications certifications={fixture} />);

    for (const el of fixture) {
      expect(screen.getByText(el)).toBeInTheDocument();
    }
  });

  test("renders OK", () => {
    render(<Certifications />);

    expect(screen.getByText(fixture[0])).toBeInTheDocument();
  });
});
