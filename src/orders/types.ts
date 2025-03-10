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

import { InstrumentType } from '../model/enums/instrumentType';
import { OrderEventType } from '../model/enums/orderEventType';
import { OrderSide } from '../model/enums/orderSide';
import { OrderType } from '../model/enums/orderType';
import { GetOrders } from '../model/getOrders';
import { OrderResult } from '../model/orderResult';
import { Pagination } from '../model/pagination';
import { CreateOrderRequest as internalCreateOrderReq } from '../model/createOrderRequest';
import { ModifyOrderRequest as internalModifyOrderReq } from '../model/modifyOrderRequest';
export type ListOpenOrdersRequest = Pagination & {
  /**
   * Identifies the portfolio by UUID (e.g., 892e8c7c-e979-4cad-b61b-55a197932cf1) or portfolio ID (e.g., 5189861793641175)
   */
  portfolio?: string;
  /**
   * Identifies the instrument by name (e.g., BTC-USDC), UUID (e.g., ce55a827-f04a-45c0-9d9b-8bbdb9b48065), or instrument ID (e.g., 7149252043835013)
   */
  instrument?: string;
  /**
   * Identifies the instruments by type . Allowed values: SPOT, PERPETUAL_FUTURE
   */
  instrumentType?: InstrumentType;
  /**
   * The client order ID that was used when the order was created
   */
  clientOrderId?: string;
  /**
   * The most recent type of event that happened to the order. Allowed values: NEW, TRADE, REPLACED
   */
  eventType?: OrderEventType;
  /**
   * The type of order. Allowed values: LIMIT, MARKET, STOP, STOP_LIMIT
   */
  orderType?: OrderType;
  /**
   * Identifies the side by name (e.g., BUY, SELL)
   */
  side?: OrderSide;
};

export type ListOpenOrdersResponse = GetOrders;

export type GetOrderRequest = {
  /**
   * The exchange order ID of the order (not the client order ID)
   */
  id: string;
  /**
   * Identifies the portfolio by UUID (e.g., 892e8c7c-e979-4cad-b61b-55a197932cf1) or portfolio ID (e.g., 5189861793641175)
   */
  portfolio: string;
};

export type GetOrderResponse = OrderResult;

export type CreateOrderRequest = internalCreateOrderReq;

export type CreateOrderResponse = OrderResult;

export type ModifyOrderRequest = internalModifyOrderReq & {
  /**
   * The exchange order ID or Client Order ID of the order being modified
   */
  orderId: string;
};

export type ModifyOrderResponse = OrderResult;

export type CancelOrderRequest = {
  /**
   * The exchange order ID or Client Order ID of the order
   */
  orderId: string;
  /**
   * Identifies the portfolio by UUID (e.g., 892e8c7c-e979-4cad-b61b-55a197932cf1) or portfolio ID (e.g., 5189861793641175)
   */
  portfolio: string;
};

export type CancelOrderResponse = OrderResult;

export type CancelOrdersRequest = {
  /**
   * Identifies the portfolio by UUID (e.g., 892e8c7c-e979-4cad-b61b-55a197932cf1) or portfolio ID (e.g., 5189861793641175)
   */
  portfolio: string;
  /**
   * Identifies the instrument by name (e.g., BTC-USDC), UUID (e.g., ce55a827-f04a-45c0-9d9b-8bbdb9b48065), or instrument ID (e.g., 7149252043835013)
   */
  instrument?: string;
  /**
   * Identifies the side by name (e.g., BUY, SELL)
   */
  side?: OrderSide;
  /**
   * Identifies the instruments by type . Allowed values: SPOT, PERPETUAL_FUTURE
   */
  instrumentType?: InstrumentType;
};

export type CancelOrdersResponse = OrderResult[];
