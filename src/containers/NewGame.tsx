import React, { Component, SFC } from "react";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import "./NewGame.css";
import { RouteComponentProps } from "react-router";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const initialState = {
  title: "",
  isLoading: false,
  created: false
};
type State = Readonly<typeof initialState>;

type CreateGameProps = { createGame: (options: { variables: any }) => void };

class NewGameForm extends Component<
  RouteComponentProps & CreateGameProps,
  State
> {
  readonly state = initialState;

  validateForm() {
    return this.state.title.length > 0;
  }

  handleChange = (event: React.FormEvent<FormControl & HTMLInputElement>) => {
    this.setState({
      title: event.currentTarget.value
    });
  };

  handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await this.props.createGame({
        variables: {
          title: this.state.title,
          gamePlayerId: "9eab33e2-e56f-4a24-8444-5513f72368b5" // hard-coded because demo
        }
      });
    } catch (e) {
      alert(e);
    }
  };

  render() {
    return (
      <div className="NewGame">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="title">
            <ControlLabel>Title</ControlLabel>
            <FormControl
              onChange={this.handleChange}
              accept="text"
              value={this.state.title}
            />
          </FormGroup>
          {/* <FormGroup controlId="file">
            <ControlLabel>Poster</ControlLabel>
            <FormControl onChange={this.handleFileChange} type="file" />
          </FormGroup> */}
          <LoaderButton
            block={true}
            bsStyle="primary"
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
            isLoading={this.state.isLoading}
            text="Create"
            loadingText="Creating…"
          />
        </form>
      </div>
    );
  }
}

const Create_Game = gql`
  mutation CreateGame($title: String!, $gamePlayerId: ID!) {
    createGame(input: { title: $title, gamePlayerId: $gamePlayerId }) {
      id
      title
      player {
        name
      }
    }
  }
`;

const NewGame: SFC<RouteComponentProps> = props => (
  <Mutation mutation={Create_Game}>
    {createGame => <NewGameForm createGame={createGame} {...props} />}
  </Mutation>
);

export default NewGame;
