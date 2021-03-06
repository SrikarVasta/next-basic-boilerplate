import { gql } from "@apollo/client";

export const GET_JOBS = gql`
  query jobs($input: JobsInput!) {
    jobs(input: $input) {
      id
      title
      tags {
        name
      }
      isFeatured
      locationNames
      company {
        logoUrl
        name
      }
    }
  }
`;
