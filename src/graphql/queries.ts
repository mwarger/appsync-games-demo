// tslint:disable
// this is an auto generated file. This will be overwritten

export const getPlayer = `query GetPlayer($id: ID!) {
  getPlayer(id: $id) {
    id
    name
    games {
      items {
        id
        title
      }
      nextToken
    }
  }
}
`;
export const listPlayers = `query ListPlayers(
  $filter: ModelPlayerFilterInput
  $limit: Int
  $nextToken: String
) {
  listPlayers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      games {
        items {
          id
          title
        }
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getGame = `query GetGame($id: ID!) {
  getGame(id: $id) {
    id
    title
    player {
      id
      name
    }
    reviews {
      items {
        id
        content
        rating
      }
      nextToken
    }
  }
}
`;
export const listGames = `query ListGames(
  $filter: ModelGameFilterInput
  $limit: Int
  $nextToken: String
) {
  listGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      player {
        id
        name
      }
      reviews {
        items {
          id
          content
          rating
        }
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getReview = `query GetReview($id: ID!) {
  getReview(id: $id) {
    id
    content
    rating
    game {
      id
      title
    }
  }
}
`;
export const listReviews = `query ListReviews(
  $filter: ModelReviewFilterInput
  $limit: Int
  $nextToken: String
) {
  listReviews(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      content
      rating
      game {
        id
        title
      }
    }
    nextToken
  }
}
`;
