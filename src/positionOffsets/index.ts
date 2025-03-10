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
  ListPositionOffsetsRequest,
  ListPositionOffsetsResponse,
} from './types';

export interface IPositionOffsetsService {
  listPositionOffsets(
    request: ListPositionOffsetsRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | ListPositionOffsetsResponse
    | CoinbaseIntxClientException
    | CoinbaseIntxException
  >;
}

export class PositionOffsetsService implements IPositionOffsetsService {
  private client: CoinbaseIntxClient;

  constructor(client: CoinbaseIntxClient) {
    this.client = client;
  }

  async listPositionOffsets(
    request: ListPositionOffsetsRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | ListPositionOffsetsResponse
    | CoinbaseIntxClientException
    | CoinbaseIntxException
  > {
    const response = await this.client.request({
      url: `position-offsets`,
      callOptions: options,
    });

    return response.data as ListPositionOffsetsResponse;
  }
}
