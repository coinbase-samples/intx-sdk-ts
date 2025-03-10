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
import { CoinbaseCallOptions, Method } from '@coinbase-sample/core-ts';
import { CoinbaseIntxClient } from '../client';
import { CoinbaseIntxClientException, CoinbaseIntxException } from '../errors';
import {
  ListTransfersRequest,
  ListTransfersResponse,
  GetTransferRequest,
  GetTransferResponse,
  CreateCryptoAddressRequest,
  CreateCryptoAddressResponse,
  CreateCounterpartyRequest,
  CreateCounterpartyResponse,
  ValidateCounterpartyRequest,
  ValidateCounterpartyResponse,
  WithdrawToCryptoAddressRequest,
  WithdrawToCryptoAddressResponse,
  WithdrawToCounterpartyRequest,
  WithdrawToCounterpartyResponse,
} from './types';

export interface ITransfersService {
  listTransfers(
    request: ListTransfersRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    ListTransfersResponse | CoinbaseIntxClientException | CoinbaseIntxException
  >;

  getTransfer(
    request: GetTransferRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    GetTransferResponse | CoinbaseIntxClientException | CoinbaseIntxException
  >;

  createCryptoAddress(
    request: CreateCryptoAddressRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | CreateCryptoAddressResponse
    | CoinbaseIntxClientException
    | CoinbaseIntxException
  >;

  createCounterparty(
    request: CreateCounterpartyRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | CreateCounterpartyResponse
    | CoinbaseIntxClientException
    | CoinbaseIntxException
  >;

  validateCounterparty(
    request: ValidateCounterpartyRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | ValidateCounterpartyResponse
    | CoinbaseIntxClientException
    | CoinbaseIntxException
  >;

  withdrawToCryptoAddress(
    request: WithdrawToCryptoAddressRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | WithdrawToCryptoAddressResponse
    | CoinbaseIntxClientException
    | CoinbaseIntxException
  >;

  withdrawToCounterparty(
    request: WithdrawToCounterpartyRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | WithdrawToCounterpartyResponse
    | CoinbaseIntxClientException
    | CoinbaseIntxException
  >;
}

export class TransfersService implements ITransfersService {
  private client: CoinbaseIntxClient;

  constructor(client: CoinbaseIntxClient) {
    this.client = client;
  }

  async listTransfers(
    request: ListTransfersRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    ListTransfersResponse | CoinbaseIntxClientException | CoinbaseIntxException
  > {
    const response = await this.client.request({
      url: `transfers`,
      queryParams: request,
      callOptions: options,
    });

    return response.data as ListTransfersResponse;
  }

  async getTransfer(
    request: GetTransferRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    GetTransferResponse | CoinbaseIntxClientException | CoinbaseIntxException
  > {
    const response = await this.client.request({
      url: `transfers/${request.transferUuid}`,
      callOptions: options,
    });

    return response.data as GetTransferResponse;
  }

  async createCryptoAddress(
    request: CreateCryptoAddressRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | CreateCryptoAddressResponse
    | CoinbaseIntxClientException
    | CoinbaseIntxException
  > {
    const response = await this.client.request({
      url: `transfers/address`,
      method: Method.POST,
      bodyParams: request,
      callOptions: options,
    });

    return response.data as CreateCryptoAddressResponse;
  }

  async createCounterparty(
    request: CreateCounterpartyRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | CreateCounterpartyResponse
    | CoinbaseIntxClientException
    | CoinbaseIntxException
  > {
    const response = await this.client.request({
      url: `transfers/create-counterparty-id`,
      method: Method.POST,
      bodyParams: request,
      callOptions: options,
    });

    return response.data as CreateCounterpartyResponse;
  }

  async validateCounterparty(
    request: ValidateCounterpartyRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | ValidateCounterpartyResponse
    | CoinbaseIntxClientException
    | CoinbaseIntxException
  > {
    const response = await this.client.request({
      url: `transfers/validate-counterparty-id`,
      method: Method.POST,
      bodyParams: request,
      callOptions: options,
    });

    return response.data as ValidateCounterpartyResponse;
  }

  async withdrawToCryptoAddress(
    request: WithdrawToCryptoAddressRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | WithdrawToCryptoAddressResponse
    | CoinbaseIntxClientException
    | CoinbaseIntxException
  > {
    const response = await this.client.request({
      url: `transfers/withdraw`,
      method: Method.POST,
      bodyParams: request,
      callOptions: options,
    });

    return response.data as WithdrawToCryptoAddressResponse;
  }

  async withdrawToCounterparty(
    request: WithdrawToCounterpartyRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | WithdrawToCounterpartyResponse
    | CoinbaseIntxClientException
    | CoinbaseIntxException
  > {
    const response = await this.client.request({
      url: `transfers/withdraw/counterparty`,
      method: Method.POST,
      bodyParams: request,
      callOptions: options,
    });

    return response.data as WithdrawToCounterpartyResponse;
  }
}
