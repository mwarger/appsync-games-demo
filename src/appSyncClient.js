import AWSAppSyncClient, { createAppSyncLink } from "aws-appsync/lib";
import { ApolloLink } from "apollo-link";
import apolloLogger from "apollo-link-logger";
import { Auth } from "aws-amplify";
import aws_config from "./aws-exports";

// this is just basic config for the appsync client
const appSyncLink = createAppSyncLink({
  url: aws_config.aws_appsync_graphqlEndpoint,
  region: aws_config.aws_appsync_region,
  auth: {
    type: aws_config.aws_appsync_authenticationType,
    apiKey: aws_config.aws_appsync_apiKey
  },
  complexObjectsCredentials: () => Auth.currentCredentials()
});

const link = ApolloLink.from([apolloLogger, appSyncLink]);

export const client = new AWSAppSyncClient({}, { link });
