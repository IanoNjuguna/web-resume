import type { GatsbyNode } from "gatsby";

export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] =
  ({ actions }) => {
    actions.createTypes(`
      type DataJsonBasics implements Node {
        technical: Boolean
      }

      type DataJsonOpenSource implements Node {
        forge: String
        userRepo: String
        description: String
        rawDates: String
        relevant: Boolean
      }

      type DataJsonEducation implements Node {
        courses: [String]
      }

      type DataJson implements Node @childOf(types: ["File"]) {
        openSource: [DataJsonOpenSource]
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
