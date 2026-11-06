import type { GatsbyNode } from "gatsby";

export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] =
  ({ actions }) => {
    actions.createTypes(`
      type DataJsonBasics implements Node {
        technical: Boolean
        summary: String
      }

      type DataJsonEducation implements Node {
        courses: [String]
      }

      type DataJsonProject implements Node {
        name: String
        description: String
        link: String
        rawDates: String
      }

      type DataJsonPublication implements Node {
        title: String
        description: String
      }

      type DataJson implements Node @childOf(types: ["File"]) {
        projects: [DataJsonProject]
        certifications: [String]
        publications: [DataJsonPublication]
        languages: [String]
      }

      type DataJsonVolunteer implements Node {
        relevant: Boolean
      }

      type MarkdownRemarkFrontmatter implements Node {
        location: String
        address: String
        region: String
      }
  `);
  };
