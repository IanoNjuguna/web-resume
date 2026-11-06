import { render, screen } from "@testing-library/react";
import { useStaticQuery } from "gatsby";
import React from "react";
import Projects, { PureProjects } from "./Projects";

const fixture = [
  {
    name: "Seti Live",
    description: "Merchant stablecoin settlement.",
    link: "https://github.com/IanoNjuguna/seti-v4",
  },
  { name: "GossipBench", description: "Load harness for gossipsub meshes." },
];

describe("<PureProjects />", () => {
  beforeAll(() =>
    (useStaticQuery as jest.Mock).mockReturnValue({
      file: { childDataJson: { projects: fixture } },
    }),
  );

  test("bails out on no data", () => {
    render(<PureProjects projects={[]} />);

    expect(screen.queryByTestId("projects")).not.toBeInTheDocument();
  });

  test("renders a project without a link", () => {
    render(<PureProjects projects={[fixture[1]]} />);

    expect(screen.getByText("GossipBench")).toBeInTheDocument();
    expect(
      screen.getByText("Load harness for gossipsub meshes."),
    ).toBeInTheDocument();
  });

  test("renders every project", () => {
    render(<PureProjects projects={fixture} />);

    expect(screen.getAllByTestId("sectionItemDetails")).toHaveLength(2);
    expect(screen.getByTestId("projects")).toMatchSnapshot();
  });

  test("renders OK", () => {
    render(<Projects />);

    expect(screen.getByTestId("projects")).toMatchSnapshot();
  });
});
