import React, { Component } from "react";

import "./Games.css";

// import { s3Upload } from "../libs/awsLib";

import Reviews from "./Reviews";
import { RouteComponentProps } from "react-router";
import TypedQuery from "./TypedQuery";
import gql from "graphql-tag";
import { GetGameQuery, GetGameQueryVariables } from "../API";

const Game = gql`
  query GetGame($id: ID!) {
    game: getGame(id: $id) {
      title
    }
  }
`;
export default class Games extends Component<
  RouteComponentProps<{ id: string }>
> {
  handleChange = (e: React.FormEvent<HTMLInputElement>) => {};

  render() {
    const id = this.props.match.params.id;

    return (
      <div className="Games">
        <div>
          <TypedQuery<GetGameQuery, GetGameQueryVariables>
            query={Game}
            variables={{ id }}
            render={({ game }) => {
              return game ? (
                <>
                  <h3>{game.title}</h3>
                  {<Reviews gameId={id} />}
                </>
              ) : (
                <p>No Game found...</p>
              );
            }}
          />
        </div>
      </div>
    );
  }
}
