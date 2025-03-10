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
  ListOpenOrdersRequest,
  ListOpenOrdersResponse,
  GetOrderRequest,
  GetOrderResponse,
  CreateOrderRequest,
  CreateOrderResponse,
  ModifyOrderRequest,
  ModifyOrderResponse,
  CancelOrderRequest,
  CancelOrderResponse,
  CancelOrdersRequest,
  CancelOrdersResponse,
} from './types';

export interface IOrdersService {
  listOpenOrders(
    request: ListOpenOrdersRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    ListOpenOrdersResponse | CoinbaseIntxClientException | CoinbaseIntxException
  >;

  getOrder(
    request: GetOrderRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    GetOrderResponse | CoinbaseIntxClientException | CoinbaseIntxException
  >;

  createOrder(
    request: CreateOrderRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    CreateOrderResponse | CoinbaseIntxClientException | CoinbaseIntxException
  >;

  modifyOrder(
    request: ModifyOrderRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    ModifyOrderResponse | CoinbaseIntxClientException | CoinbaseIntxException
  >;

  cancelOrder(
    request: CancelOrderRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    CancelOrderResponse | CoinbaseIntxClientException | CoinbaseIntxException
  >;

  cancelOrders(
    request: CancelOrdersRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    CancelOrdersResponse | CoinbaseIntxClientException | CoinbaseIntxException
  >;
}

export class OrdersService implements IOrdersService {
  private client: CoinbaseIntxClient;

  constructor(client: CoinbaseIntxClient) {
    this.client = client;
  }

  async listOpenOrders(
    request: ListOpenOrdersRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    ListOpenOrdersResponse | CoinbaseIntxClientException | CoinbaseIntxException
  > {
    const response = await this.client.request({
      url: `orders`,
      queryParams: request,
      callOptions: options,
    });

    return response.data as ListOpenOrdersResponse;
  }

  async getOrder(
    request: GetOrderRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    GetOrderResponse | CoinbaseIntxClientException | CoinbaseIntxException
  > {
    const response = await this.client.request({
      url: `orders/${request.id}`,
      queryParams: { ...request, id: undefined },
      callOptions: options,
    });

    return response.data as GetOrderResponse;
  }

  async createOrder(
    request: CreateOrderRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    CreateOrderResponse | CoinbaseIntxClientException | CoinbaseIntxException
  > {
    const response = await this.client.request({
      url: `orders`,
      method: Method.POST,
      bodyParams: request,
      callOptions: options,
    });

    return response.data as CreateOrderResponse;
  }

  async modifyOrder(
    request: ModifyOrderRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    ModifyOrderResponse | CoinbaseIntxClientException | CoinbaseIntxException
  > {
    const response = await this.client.request({
      url: `orders/${request.orderId}`,
      method: Method.PUT,
      bodyParams: { ...request, orderId: undefined },
      callOptions: options,
    });

    return response.data as ModifyOrderResponse;
  }

  async cancelOrder(
    request: CancelOrderRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    CancelOrderResponse | CoinbaseIntxClientException | CoinbaseIntxException
  > {
    const response = await this.client.request({
      url: `orders/${request.orderId}`,
      method: Method.DELETE,
      queryParams: { ...request, orderId: undefined },
      callOptions: options,
    });

    return response.data as CancelOrderResponse;
  }

  async cancelOrders(
    request: CancelOrdersRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    CancelOrdersResponse | CoinbaseIntxClientException | CoinbaseIntxException
  > {
    const response = await this.client.request({
      url: `orders`,
      method: Method.DELETE,
      queryParams: request,
      callOptions: options,
    });

    return response.data as CancelOrdersResponse;
  }
}
