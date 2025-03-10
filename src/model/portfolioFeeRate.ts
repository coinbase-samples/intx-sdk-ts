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

import { InstrumentType } from './enums/instrumentType';

export type PortfolioFeeRate = {
  instrumentType?: InstrumentType;
  /**
   * Fee tier id
   */
  feeTierId?: string;
  /**
   * Whether the fee tier is a VIP tier
   */
  isVipTier?: boolean;
  /**
   * Name for the fee rate tier
   */
  feeTierName?: string;
  /**
   * The fee rate charged for order making liquidity
   */
  makerFeeRate?: string;
  /**
   * The fee rate charged for orders taking liquidity
   */
  takerFeeRate?: string;
  /**
   * Whether maker/taker fee rates are manually overridden
   */
  isOverride?: boolean;
  /**
   * Sum of trading volume from last rolling 30 days
   */
  trailing30dayVolume?: string;
  /**
   * Average of all hourly USDC balance snapshots from the last rolling 24 hours
   */
  trailing24hrUsdcBalance?: string;
};
