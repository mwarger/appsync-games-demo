import React from "react";
import Amplify, { graphqlOperation, Auth } from "aws-amplify";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import NewReview from "./NewReview";

import gql from "graphql-tag";

import TypedQuery from "./TypedQuery";
import { Query } from "react-apollo";
import { GetGameReviewsQuery, GetGameReviewsQueryVariables } from "../API";

// class ReviewsQuery extends TypedQuery<
//   ListReviewsQuery,
//   ListReviewsQueryVariables
// > {}

const ListReviews = gql`
  query GetGameReviews($gameId: ID!) {
    game: getGame(id: $gameId) {
      reviews {
        items {
          id
          content
          rating
          author
        }
        nextToken
      }
    }
  }
`;

type ReviewArgs = {
  userId: string;
  gameId: string;
};

export default ({ userId, gameId }: ReviewArgs) => {
  if (!userId || !gameId) return null;

  return (
    <TypedQuery<GetGameReviewsQuery, GetGameReviewsQueryVariables>
      query={ListReviews}
      variables={{ gameId }}
      render={({ game }) => {
        if (!game || !game.reviews) return null;
        const { reviews } = game;
        return reviews && reviews.items && reviews.items.length ? (
          <ListGroup>
            <h4>Reviews</h4>
            {reviews.items.map(
              item =>
                item && (
                  <ListGroupItem key={item.id}>
                    {item.author || "Anonymous"} - {item.rating}
                  </ListGroupItem>
                )
            )}
          </ListGroup>
        ) : (
          <p>No reviews to show!</p>
        );
      }}
    />
  );
};
