import { gql } from "@apollo/client";

export const GET_TOURS = gql`
  query GetTours($toursLimit: Int) {
    launches(limit: $toursLimit) {
      id
      mission_name
      details
    }
  }
`;
