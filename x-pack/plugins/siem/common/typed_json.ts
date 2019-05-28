/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

export type JsonValue = null | boolean | number | string | JsonObject | JsonArray;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface JsonArray extends Array<JsonValue> {}

export interface JsonObject {
  [key: string]: JsonValue;
}

export type ESQuery = ESRangeQuery | ESQueryStringQuery | ESMatchQuery | ESTermQuery | JsonObject;

export interface ESRangeQuery {
  range: {
    [name: string]: {
      gte: number;
      lte: number;
      format: string;
    };
  };
}

export interface ESMatchQuery {
  match: {
    [name: string]: {
      query: string;
      operator: string;
      zero_terms_query: string;
    };
  };
}

export interface ESQueryStringQuery {
  query_string: {
    query: string;
    analyze_wildcard: boolean;
  };
}

export interface ESTermQuery {
  term: Record<string, string>;
}
