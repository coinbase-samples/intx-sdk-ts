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
import { ListFeeRateTiersRequest, ListFeeRateTiersResponse } from './types';

export interface IFeeRatesService {
  listFeeRateTiers(
    request: ListFeeRateTiersRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | ListFeeRateTiersResponse
    | CoinbaseIntxClientException
    | CoinbaseIntxException
  >;
}

export class FeeRatesService implements IFeeRatesService {
  private client: CoinbaseIntxClient;

  constructor(client: CoinbaseIntxClient) {
    this.client = client;
  }

  async listFeeRateTiers(
    request: ListFeeRateTiersRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | ListFeeRateTiersResponse
    | CoinbaseIntxClientException
    | CoinbaseIntxException
  > {
    const response = await this.client.request({
      url: `fee-rate-tiers`,
      callOptions: options,
    });

    return response.data as ListFeeRateTiersResponse;
  }
}
