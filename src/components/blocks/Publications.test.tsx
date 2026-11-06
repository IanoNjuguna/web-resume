import { render, screen } from "@testing-library/react";
import { useStaticQuery } from "gatsby";
import React from "react";
import Publications, { PurePublications } from "./Publications";

const fixture = [
  { title: "Kali Linux on Android", description: "a phone as a pentest rig" },
  { title: "exFAT: the 64-bit upgrade to FAT32", description: "" },
];

describe("<PurePublications />", () => {
  beforeAll(() =>
    (useStaticQuery as jest.Mock).mockReturnValue({
      file: { childDataJson: { publications: fixture } },
    }),
  );

  test("bails out on no data", () => {
    render(<PurePublications publications={[]} />);

    expect(screen.queryByTestId("publications")).not.toBeInTheDocument();
  });

  test("handles an item with no description", () => {
    render(<PurePublications publications={[fixture[1]]} />);

    expect(screen.getByText(/exFAT/)).toBeInTheDocument();
    expect(screen.queryByText(/· /)).not.toBeInTheDocument();
  });

  test("renders every publication", () => {
    render(<PurePublications publications={fixture} />);

    expect(screen.getByText("Kali Linux on Android")).toBeInTheDocument();
    expect(screen.getByText(/a phone as a pentest rig/)).toBeInTheDocument();
  });

  test("renders OK", () => {
    render(<Publications />);

    expect(screen.getByTestId("publications")).toBeInTheDocument();
  });
});
