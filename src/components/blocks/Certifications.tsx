import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import SectionContainer from "../section/SectionContainer";

export const PureCertifications = ({
  certifications,
}: {
  certifications: string[];
}) => {
  const items = Array.from(new Set(certifications)).filter((el) => el !== "");
  if (items.length === 0) return null;

  return (
    <div data-testid="certifications">
      <SectionContainer title="Certifications">
        <div data-testid="certificationsList">
          {items.map((el) => (
            <p
              key={el}
              style={{
                marginRight: "0.66rem",
                marginBottom: "0.2rem",
                display: "inline-block",
                lineHeight: "1.15",
              }}
            >
              {el}
            </p>
          ))}
        </div>
      </SectionContainer>
    </div>
  );
};

export const Certifications = () => {
  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "data" }, extension: { eq: "json" }) {
        childDataJson {
          certifications
        }
      }
    }
  `);

  const { certifications }: { certifications: string[] } =
    data.file.childDataJson;

  return <PureCertifications certifications={certifications ?? []} />;
};

export default Certifications;
