/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type GetGameQueryVariables = {
  id: string,
};

export type GetGameQuery = {
  game:  {
    __typename: "Game",
    title: string,
    reviews:  {
      __typename: "ModelReviewConnection",
      items:  Array< {
        __typename: "Review",
        id: string,
        content: string | null,
        author: string | null,
        rating: number,
      } | null > | null,
    } | null,
  } | null,
};

export type ListGamesQuery = {
  listGames:  {
    __typename: "ModelGameConnection",
    items:  Array< {
      __typename: "Game",
      id: string,
      title: string,
    } | null > | null,
  } | null,
};

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
