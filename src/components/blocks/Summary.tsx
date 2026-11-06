import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import ReactMarkdown from "react-markdown";

interface PureSummaryTypes {
  /** accepts markdown */
  summary?: string | null;
}

export const PureSummary = ({ summary }: PureSummaryTypes) => {
  if (!summary) return null;

  return (
    <div
      data-testid="summary"
      className="mx-4 mb-4 text-sm leading-relaxed text-gray-800 print:text-[10.5px] print:leading-snug"
    >
      <ReactMarkdown skipHtml>{summary}</ReactMarkdown>
    </div>
  );
};

export const Summary = () => {
  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "data" }, extension: { eq: "json" }) {
        childDataJson {
          basics {
            summary
          }
        }
      }
    }
  `);

  const { summary }: { summary?: string | null } =
    data.file.childDataJson.basics;

  return <PureSummary summary={summary} />;
};

export default Summary;
