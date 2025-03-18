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
  ListInstrumentsRequest,
  ListInstrumentsResponse,
  GetInstrumentRequest,
  GetInstrumentResponse,
  GetDailyTradingVolumeRequest,
  GetDailyTradingVolumeResponse,
  GetAggregatedCandlesRequest,
  GetAggregatedCandlesResponse,
  GetHistoricalFundingRatesRequest,
  GetHistoricalFundingRatesResponse,
  GetQuoteRequest,
  GetQuoteResponse,
} from './types';

export interface IInstrumentsService {
  listInstruments(
    request: ListInstrumentsRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | ListInstrumentsResponse
    | CoinbaseIntxClientException
    | CoinbaseIntxException
  >;

  getInstrument(
    request: GetInstrumentRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    GetInstrumentResponse | CoinbaseIntxClientException | CoinbaseIntxException
  >;

  getDailyTradingVolume(
    request: GetDailyTradingVolumeRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | GetDailyTradingVolumeResponse
    | CoinbaseIntxClientException
    | CoinbaseIntxException
  >;

  getAggregatedCandles(
    request: GetAggregatedCandlesRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | GetAggregatedCandlesResponse
    | CoinbaseIntxClientException
    | CoinbaseIntxException
  >;

  getHistoricalFundingRates(
    request: GetHistoricalFundingRatesRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | GetHistoricalFundingRatesResponse
    | CoinbaseIntxClientException
    | CoinbaseIntxException
  >;

  getQuote(
    request: GetQuoteRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    GetQuoteResponse | CoinbaseIntxClientException | CoinbaseIntxException
  >;
}

export class InstrumentsService implements IInstrumentsService {
  private client: CoinbaseIntxClient;

  constructor(client: CoinbaseIntxClient) {
    this.client = client;
  }

  async listInstruments(
    request: ListInstrumentsRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | ListInstrumentsResponse
    | CoinbaseIntxClientException
    | CoinbaseIntxException
  > {
    const response = await this.client.request({
      url: `instruments`,
      callOptions: options,
    });

    return response.data as ListInstrumentsResponse;
  }

  async getInstrument(
    request: GetInstrumentRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    GetInstrumentResponse | CoinbaseIntxClientException | CoinbaseIntxException
  > {
    const response = await this.client.request({
      url: `instruments/${request.instrument}`,
      callOptions: options,
    });

    return response.data as GetInstrumentResponse;
  }

  async getDailyTradingVolume(
    request: GetDailyTradingVolumeRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | GetDailyTradingVolumeResponse
    | CoinbaseIntxClientException
    | CoinbaseIntxException
  > {
    const response = await this.client.request({
      url: `instruments/volumes/daily`,
      queryParams: request,
      callOptions: options,
    });

    return response.data as GetDailyTradingVolumeResponse;
  }

  async getAggregatedCandles(
    request: GetAggregatedCandlesRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | GetAggregatedCandlesResponse
    | CoinbaseIntxClientException
    | CoinbaseIntxException
  > {
    const response = await this.client.request({
      url: `instruments/${request.instrument}/candles`,
      queryParams: { ...request, instrument: undefined },
      callOptions: options,
    });

    return response.data as GetAggregatedCandlesResponse;
  }

  async getHistoricalFundingRates(
    request: GetHistoricalFundingRatesRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | GetHistoricalFundingRatesResponse
    | CoinbaseIntxClientException
    | CoinbaseIntxException
  > {
    const response = await this.client.request({
      url: `instruments/${request.instrument}/funding`,
      queryParams: { ...request, instrument: undefined },
      callOptions: options,
    });

    return response.data as GetHistoricalFundingRatesResponse;
  }

  async getQuote(
    request: GetQuoteRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    GetQuoteResponse | CoinbaseIntxClientException | CoinbaseIntxException
  > {
    const response = await this.client.request({
      url: `instruments/${request.instrument}/quote`,
      queryParams: request,
      callOptions: options,
    });

    return response.data as GetQuoteResponse;
  }
}
