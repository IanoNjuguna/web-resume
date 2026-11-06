import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import SectionContainer from "../section/SectionContainer";

export const PureLanguages = ({ languages }: { languages: string[] }) => {
  const items = Array.from(new Set(languages)).filter((el) => el !== "");
  if (items.length === 0) return null;

  return (
    <div data-testid="languages">
      <SectionContainer title="Languages">
        <div data-testid="languagesList">{items.join(" · ")}</div>
      </SectionContainer>
    </div>
  );
};

export const Languages = () => {
  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "data" }, extension: { eq: "json" }) {
        childDataJson {
          languages
        }
      }
    }
  `);

  const { languages }: { languages: string[] } = data.file.childDataJson;

  return <PureLanguages languages={languages ?? []} />;
};

export default Languages;
