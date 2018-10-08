/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type GetGameReviewsQueryVariables = {
  gameId: string,
};

export type GetGameReviewsQuery = {
  game:  {
    __typename: "Game",
    reviews:  {
      __typename: "ModelReviewConnection",
      items:  Array< {
        __typename: "Review",
        id: string,
        content: string | null,
        rating: number,
        author: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};
