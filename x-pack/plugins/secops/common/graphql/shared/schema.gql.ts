/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import gql from 'graphql-tag';

export const sharedSchema = gql`
  input TimerangeInput {
    "The interval string to use for last bucket. The format is '{value}{unit}'. For example '5m' would return the metrics for the last 5 minutes of the timespan."
    interval: String!
    "The end of the timerange"
    to: Float!
    "The beginning of the timerange"
    from: Float!
  }

  type CursorType {
    value: String!
    tiebreaker: String
  }

  input PaginationInput {
    "The limit parameter allows you to configure the maximum amount of items to be returned"
    limit: Float!
    "The cursor parameter defines the next result you want to fetch"
    cursor: String
    "The tiebreaker parameter allow to be more precise to fetch the next item"
    tiebreaker: String
  }

  enum Direction {
    ascending
    descending
  }

  input SortField {
    sortFieldId: String
    direction: Direction
  }

  type PageInfo {
    endCursor: CursorType
    hasNextPage: Boolean
  }

  enum IndexType {
    ANY
    LOGS
    AUDITBEAT
  }
`;