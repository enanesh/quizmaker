import { gql } from "@apollo/client";

// TODO: THIS IS JUST A PLACEHOLDER... without this I was getting a lot of errors when creating the cards
export const ADD_QUESTION = gql`
  mutation addQuestion($title: String!) {
    addQuestion(title: $title) {
      title
    }
  }
`;
