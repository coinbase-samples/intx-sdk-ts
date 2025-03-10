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

export type PortfolioBalance = {
  /**
   * The unique identifier of the asset
   */
  assetId?: string;
  /**
   * Name of the asset
   */
  assetName?: string;
  /**
   * The UUID of the asset
   */
  assetUuid?: string;
  /**
   * The total amount of the asset in the portfolio
   */
  quantity?: string;
  /**
   * The amount of the balance held from trading activity
   */
  hold?: string;
  /**
   * The amount of the held balance eligible for collateral
   */
  holdAvailableForCollateral?: string;
  /**
   * The amount of the balance held from a pending transfer
   */
  transferHold?: string;
  /**
   * The collateral value provided by this asset balance
   */
  collateralValue?: string;
  /**
   * The maximum amount of this asset that can be withdrawn at this time given margin requirement constraints
   */
  maxWithdrawAmount?: string;
  /**
   * The total quantity of the asset borrowed by the portfolio
   */
  loan?: string;
  /**
   * The notional collateral requirement to hold the loan
   */
  loanCollateralRequirement?: string;
  /**
   * The amount of the asset pledged as collateral
   */
  pledgedCollateralQuantity?: string;
  /**
   * The notional amount this loan contributes to the portfolio initial margin notional value
   */
  loanInitialMarginContribution?: any | null;
  /**
   * The quantity of the asset automatically borrowed by the portfolio to cover USDC deficits
   */
  collateralBackedOverdraftLoan?: string;
  /**
   * The quantity of the asset borrowed by the portfolio upon explicit request
   */
  userRequestedLoan?: string;
};
