/**
 * Copyright 2025-present Coinbase Global, Inc.
 *
 * This file is generated by Openapi Generator https://github.com/openapitools/openapi-generator
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
 *
 *  Do not edit the class manually.
 */

export type PortfolioPosition = {
  /**
   * The unique identifier of the position
   */
  id?: string;
  /**
   * Name of the instrument the position is in
   */
  symbol?: string;
  /**
   * The unique identifier of the instrument the position is in
   */
  instrumentId?: string;
  /**
   * The UUID of the instrument the position is in
   */
  instrumentUuid?: string;
  /**
   * The price of your position based on the last settlement period. During each settlement period (5 minute interval), the VWAP is set to equal the mark_price.
   */
  vwap?: string;
  /**
   * The size of the position with positive values reflecting a long position and negative values reflecting a short position
   */
  netSize?: string;
  /**
   * Cumulative size of all the open buy orders
   */
  buyOrderSize?: string;
  /**
   * Cumulative size of all the open sell orders
   */
  sellOrderSize?: string;
  /**
   * The amount this position contributes to the initial margin
   */
  imContribution?: number;
  /**
   * The profit or loss of this position (resets to 0 after settlement)
   */
  unrealizedPnl?: string;
  /**
   * The current mark price value for the instrument of this position used in risk and margin calculations
   */
  markPrice?: string;
  /**
   * Volume weighted entry price of the position (not reset to the last funding price)
   */
  entryVwap?: string;
};
