import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import SectionContainer from "../section/SectionContainer";

interface Publication {
  title: string;
  description: string;
}

export const PurePublications = ({
  publications,
}: {
  publications: Publication[];
}) => {
  if (publications.length === 0) return null;

  return (
    <div data-testid="publications">
      <SectionContainer title="Publications">
        {publications.map(({ title, description }) => (
          <div key={title} className="break-inside-avoid">
            <span className="font-bold">{title}</span>
            {description ? ` · ${description}` : ""}
          </div>
        ))}
      </SectionContainer>
    </div>
  );
};

export const Publications = () => {
  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "data" }, extension: { eq: "json" }) {
        childDataJson {
          publications {
            title
            description
          }
        }
      }
    }
  `);

  const { publications }: { publications: Publication[] } =
    data.file.childDataJson;

  return <PurePublications publications={publications ?? []} />;
};

export default Publications;
