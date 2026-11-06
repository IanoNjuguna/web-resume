import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import ReactMarkdown from "react-markdown";
import ItemTitle from "../section/ItemTitle";
import SectionContainer from "../section/SectionContainer";

interface Project {
  name: string;
  description: string;
  /** optional; not every project is public */
  link?: string | null;
  rawDates?: string | null;
}

export const PureProjects = ({ projects }: { projects: Project[] }) => {
  if (projects.length === 0) return null;

  return (
    <div data-testid="projects">
      <SectionContainer title="Selected Projects">
        {projects.map(({ name, description, link, rawDates }) => (
          <div
            data-testid="sectionItemDetails"
            key={JSON.stringify({ name })}
            className="break-inside-avoid"
          >
            <ItemTitle title={name} />

            {(link || rawDates) && (
              <div className="italic mb-1">
                {[link, rawDates].filter(Boolean).join(" | ")}
              </div>
            )}

            <ReactMarkdown>{description}</ReactMarkdown>
          </div>
        ))}
      </SectionContainer>
    </div>
  );
};

export const Projects = () => {
  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "data" }, extension: { eq: "json" }) {
        childDataJson {
          projects {
            name
            description
            link
            rawDates
          }
        }
      }
    }
  `);

  const { projects }: { projects: Project[] } = data.file.childDataJson;

  return <PureProjects projects={projects} />;
};

export default Projects;
