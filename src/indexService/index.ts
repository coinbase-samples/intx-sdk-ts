/**
 * Copyright 2025-present Coinbase Global, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { CoinbaseCallOptions } from '@coinbase-sample/core-ts';
import { CoinbaseIntxClient } from '../client';
import { CoinbaseIntxClientException, CoinbaseIntxException } from '../errors';
import {
  GetIndexCompositionRequest,
  GetIndexCompositionResponse,
  GetIndexCompositionHistoryRequest,
  GetIndexCompositionHistoryResponse,
  GetIndexCandlesRequest,
  GetIndexCandlesResponse,
  GetIndexPriceRequest,
  GetIndexPriceResponse,
} from './types';

export interface IIndexService {
  getIndexComposition(
    request: GetIndexCompositionRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | GetIndexCompositionResponse
    | CoinbaseIntxClientException
    | CoinbaseIntxException
  >;

  getIndexCompositionHistory(
    request: GetIndexCompositionHistoryRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | GetIndexCompositionHistoryResponse
    | CoinbaseIntxClientException
    | CoinbaseIntxException
  >;

  getIndexPrice(
    request: GetIndexPriceRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    GetIndexPriceResponse | CoinbaseIntxClientException | CoinbaseIntxException
  >;

  getIndexCandles(
    request: GetIndexCandlesRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | GetIndexCandlesResponse
    | CoinbaseIntxClientException
    | CoinbaseIntxException
  >;
}

export class IndexService implements IIndexService {
  private client: CoinbaseIntxClient;

  constructor(client: CoinbaseIntxClient) {
    this.client = client;
  }

  async getIndexComposition(
    request: GetIndexCompositionRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | GetIndexCompositionResponse
    | CoinbaseIntxClientException
    | CoinbaseIntxException
  > {
    const response = await this.client.request({
      url: `index/${request.index}/composition`,
      callOptions: options,
    });

    return response.data as GetIndexCompositionResponse;
  }

  async getIndexCompositionHistory(
    request: GetIndexCompositionHistoryRequest,
    options?: CoinbaseCallOptions
  ): Promise<GetIndexCompositionHistoryResponse> {
    const response = await this.client.request({
      url: `index/${request.index}/composition-history`,
      callOptions: options,
    });

    return response.data as GetIndexCompositionHistoryResponse;
  }

  async getIndexPrice(
    request: GetIndexPriceRequest,
    options?: CoinbaseCallOptions
  ): Promise<GetIndexPriceResponse> {
    const response = await this.client.request({
      url: `index/${request.index}/price`,
      callOptions: options,
    });

    return response.data as GetIndexPriceResponse;
  }

  async getIndexCandles(
    request: GetIndexCandlesRequest,
    options?: CoinbaseCallOptions
  ): Promise<GetIndexCandlesResponse> {
    const response = await this.client.request({
      url: `index/${request.index}/candles`,
      callOptions: options,
    });

    return response.data as GetIndexCandlesResponse;
  }
}
