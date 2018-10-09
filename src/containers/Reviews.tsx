import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";

import gql from "graphql-tag";

import TypedQuery from "./TypedQuery";
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
  gameId: string;
};

export default ({ gameId }: ReviewArgs) => {
  if (!gameId) return null;

  return (
    <TypedQuery<GetGameReviewsQuery, GetGameReviewsQueryVariables>
      query={ListReviews}
      variables={{ gameId }}
      fetchPolicy="cache-and-network"
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
