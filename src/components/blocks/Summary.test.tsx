import { render, screen } from "@testing-library/react";
import { useStaticQuery } from "gatsby";
import React from "react";
import Summary, { PureSummary } from "./Summary";

describe("<PureSummary />", () => {
  const fixture = "I build payments software in Kenya.";

  beforeAll(() =>
    (useStaticQuery as jest.Mock).mockReturnValue({
      file: {
        childDataJson: {
          basics: { summary: fixture },
        },
      },
    }),
  );

  test("bails out on no data", () => {
    render(<PureSummary summary="" />);

    // [INFO] a resume without a bio should show nothing at all
    expect(screen.queryByTestId("summary")).not.toBeInTheDocument();
  });

  test("bails out when the field is not in the data", () => {
    render(<PureSummary summary={undefined} />);

    expect(screen.queryByTestId("summary")).not.toBeInTheDocument();
  });

  test("renders markdown", () => {
    render(<PureSummary summary={"**plain**, then *some* prose"} />);

    expect(screen.getByTestId("summary")).toMatchSnapshot();
  });

  test("renders OK", () => {
    render(<Summary />);

    expect(screen.getByText(fixture)).toBeInTheDocument();
    expect(screen.getByTestId("summary")).toMatchSnapshot();
  });
});
