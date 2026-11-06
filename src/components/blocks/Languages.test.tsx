import { render, screen } from "@testing-library/react";
import { useStaticQuery } from "gatsby";
import React from "react";
import Languages, { PureLanguages } from "./Languages";

const fixture = ["English (fluent)", "Kiswahili (native)"];

describe("<PureLanguages />", () => {
  beforeAll(() =>
    (useStaticQuery as jest.Mock).mockReturnValue({
      file: { childDataJson: { languages: fixture } },
    }),
  );

  test("bails out on no data", () => {
    render(<PureLanguages languages={[]} />);

    expect(screen.queryByTestId("languages")).not.toBeInTheDocument();
  });

  test("bails out on a single empty string", () => {
    render(<PureLanguages languages={[""]} />);

    expect(screen.queryByTestId("languages")).not.toBeInTheDocument();
  });

  test("renders the list", () => {
    render(<PureLanguages languages={fixture} />);

    expect(screen.getByTestId("languagesList")).toHaveTextContent(
      "English (fluent) · Kiswahili (native)",
    );
  });

  test("renders OK", () => {
    render(<Languages />);

    expect(screen.getByTestId("languages")).toBeInTheDocument();
  });
});
