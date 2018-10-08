import * as React from "react";
import { Query } from "react-apollo";
import { FetchPolicy } from "apollo-client";

type TypedQueryProps<D, V> = {
  query: any;
  variables?: V;
  render: (data: D, refetch: () => void) => React.ReactNode;
  fetchPolicy?: FetchPolicy;
  loadingSize?: number;
};

export default class TypedQuery<D, V = {}> extends React.Component<
  TypedQueryProps<D, V>
> {
  render() {
    const { query, variables, render, fetchPolicy } = this.props;
    return (
      <Query<D, V>
        query={query}
        variables={variables}
        fetchPolicy={fetchPolicy}
      >
        {({ loading, error, data, refetch }) => {
          if (loading) {
            return <p>Loading</p>;
          }

          if (error) {
            // send to logger
            return <div>{JSON.stringify(error)}</div>;
          }

          return data ? render(data, refetch) : <div>No data...</div>;
        }}
      </Query>
    );
  }
}
