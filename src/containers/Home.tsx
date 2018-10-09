import React, { Component } from "react";
import { PageHeader, ListGroup, ListGroupItem } from "react-bootstrap";
import "./Home.css";
import TypedQuery from "./TypedQuery";
import gql from "graphql-tag";
import { ListGamesQuery } from "../API";
import { RouteComponentProps } from "react-router";
import { notEmpty } from "../libs/tsLib";

const ListGames = gql`
  query ListGames {
    listGames {
      items {
        id
        title
      }
    }
  }
`;

export default class Home extends Component<RouteComponentProps<any>> {
  renderGamesList(games: Array<{ id: string; title: string }>) {
    console.log(games);
    return games.map((game, i) => (
      <ListGroupItem
        key={game.id}
        href={`/games/${game.id}`}
        onClick={this.handleGameClick}
        header={game.title.trim().split("\n")[0]}
      />
    ));
  }

  handleGameClick = (event: any) => {
    event.preventDefault();
    this.props.history.push(event.currentTarget.getAttribute("href"));
  };

  renderLander() {
    return (
      <div className="lander">
        <h1>Gamer Fi</h1>
        <p>A game catalog.</p>
      </div>
    );
  }

  renderGames() {
    return (
      <div className="games">
        <ListGroup>
          <ListGroupItem
            key="new"
            href="/games/new"
            onClick={this.handleGameClick}
          >
            <h4>
              <b>{"\uFF0B"}</b> Create a new game
            </h4>
          </ListGroupItem>
          <TypedQuery<ListGamesQuery>
            query={ListGames}
            fetchPolicy="cache-and-network"
            render={({ listGames }) => {
              const games =
                listGames &&
                listGames.items &&
                listGames.items.filter(notEmpty);
              return games && this.renderGamesList(games);
            }}
          />
        </ListGroup>
      </div>
    );
  }

  render() {
    return (
      <div className="Home">
        {this.renderLander()}
        {this.renderGames()}
      </div>
    );
  }
}
