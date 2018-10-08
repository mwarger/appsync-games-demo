// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreatePlayer = `subscription OnCreatePlayer {
  onCreatePlayer {
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
export const onUpdatePlayer = `subscription OnUpdatePlayer {
  onUpdatePlayer {
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
export const onDeletePlayer = `subscription OnDeletePlayer {
  onDeletePlayer {
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
export const onCreateGame = `subscription OnCreateGame {
  onCreateGame {
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
export const onUpdateGame = `subscription OnUpdateGame {
  onUpdateGame {
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
export const onDeleteGame = `subscription OnDeleteGame {
  onDeleteGame {
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
export const onCreateReview = `subscription OnCreateReview {
  onCreateReview {
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
export const onUpdateReview = `subscription OnUpdateReview {
  onUpdateReview {
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
export const onDeleteReview = `subscription OnDeleteReview {
  onDeleteReview {
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
