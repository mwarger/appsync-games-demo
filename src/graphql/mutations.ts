// tslint:disable
// this is an auto generated file. This will be overwritten

export const createPlayer = `mutation CreatePlayer($input: CreatePlayerInput!) {
  createPlayer(input: $input) {
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
export const updatePlayer = `mutation UpdatePlayer($input: UpdatePlayerInput!) {
  updatePlayer(input: $input) {
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
export const deletePlayer = `mutation DeletePlayer($input: DeletePlayerInput!) {
  deletePlayer(input: $input) {
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
export const createGame = `mutation CreateGame($input: CreateGameInput!) {
  createGame(input: $input) {
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
export const updateGame = `mutation UpdateGame($input: UpdateGameInput!) {
  updateGame(input: $input) {
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
export const deleteGame = `mutation DeleteGame($input: DeleteGameInput!) {
  deleteGame(input: $input) {
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
export const createReview = `mutation CreateReview($input: CreateReviewInput!) {
  createReview(input: $input) {
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
export const updateReview = `mutation UpdateReview($input: UpdateReviewInput!) {
  updateReview(input: $input) {
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
export const deleteReview = `mutation DeleteReview($input: DeleteReviewInput!) {
  deleteReview(input: $input) {
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
