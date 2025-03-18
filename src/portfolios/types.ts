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

import { GetMultiPortfolioFills } from '../model/getMultiPortfolioFills';
import { Pagination } from '../model/pagination';
import { Portfolio } from '../model/portfolio';
import { PortfolioBalance } from '../model/portfolioBalance';
import { PortfolioDetail } from '../model/portfolioDetail';
import { PortfolioFeeRate } from '../model/portfolioFeeRate';
import { PortfolioGetAvailableLoanResult } from '../model/portfolioGetAvailableLoanResult';
import { PortfolioLoanInfoResult } from '../model/portfolioLoanInfoResult';
import { PortfolioPosition } from '../model/portfolioPosition';
import { PortfolioSummary } from '../model/portfolioSummary';
import { CreatePortfolioRequest as CreatePortfolioRequestInt } from '../model/createPortfolioRequest';
import { PortfolioUpdateLoanResult } from '../model/portfolioUpdateLoanResult';
import { PortfolioPreviewLoanUpdateResult } from '../model/portfolioPreviewLoanUpdateResult';
import { CreatePortfolioAssetTransfer } from '../model/createPortfolioAssetTransfer';
import { CreatePortfolioAssetTransferRequest } from '../model/createPortfolioAssetTransferRequest';
import { CreatePortfolioPositionTransferRequest } from '../model/createPortfolioPositionTransferRequest';
import { PortfolioUpdateMarginOverride } from '../model/portfolioUpdateMarginOverride';
import { SetPortfolioMarginOverrideRequest } from '../model/setPortfolioMarginOverrideRequest';
import { CrossCollateralEnabledRequest } from '../model/crossCollateralEnabledRequest';
import { AutoMarginEnabledRequest } from '../model/autoMarginEnabledRequest';
import { UpdatePortfolioLoanRequest } from '../model/updatePortfolioLoanRequest';

/**
 * List endpoints
 */
export type ListPortfoliosRequest = Record<string, never>;

export type ListPortfoliosResponse = Portfolio[];

export type ListPortfolioBalancesRequest = {
  /**
   * Identifies the portfolio by UUID (e.g., 892e8c7c-e979-4cad-b61b-55a197932cf1) or portfolio ID (e.g., 5189861793641175)
   */
  portfolio: string;
};

export type ListPortfolioBalancesResponse = PortfolioBalance[];

export type ListActiveLoansRequest = {
  /**
   * Identifies the portfolio by UUID (e.g., 892e8c7c-e979-4cad-b61b-55a197932cf1) or portfolio ID (e.g., 5189861793641175)
   */
  portfolio: string;
};

export type ListActiveLoansResponse = PortfolioLoanInfoResult[];

export type ListPositionsRequest = {
  /**
   * Identifies the portfolio by UUID (e.g., 892e8c7c-e979-4cad-b61b-55a197932cf1) or portfolio ID (e.g., 5189861793641175)
   */
  portfolio: string;
};

export type ListPositionsResponse = PortfolioPosition[];

type OpenPositionLimit = {
  /**
   * The total notional limit across all instrument positions allowed to be opened. The value is not present if total_open_position_notional_limit_enforced is false.
   */
  symbol: string;

  /**
   * The unique identifier of the instrument the position is in
   */
  instrumentId: string;

  /**
   * The UUID of the instrument the position is in
   */
  instrumentUuid: string;

  /**
   * The notional limit of the instrument position allowed to be opened
   */
  openPositionNotionalLimit: number;
};

export type ListOpenPositionLimitsRequest = {
  /**
   * Identifies the portfolio by UUID (e.g., 892e8c7c-e979-4cad-b61b-55a197932cf1) or portfolio ID (e.g., 5189861793641175)
   */
  portfolio: string;
};

export type ListOpenPositionLimitsResponse = OpenPositionLimit[];

type FillQueryParams = {
  /**
   * A specific order for which to fetch fills identified by order ID
   */
  orderId?: string;
  /**
   * Fetch fills for all orders with the given client order ID
   */
  clientOrderId?: string;
  /**
   * The minimum event_time for results. Uses ISO-8601 format (e.g., 2023-03-16T23:59:53Z)
   */
  timeFrom?: string;
};

export type ListFillsRequest = Pagination &
  FillQueryParams & {
    /**
     * The UUID of the portfolio that has filled orders. Can multiple values in the query
     */
    portfolios?: string;
  };

export type ListFillsResponse = GetMultiPortfolioFills;

export type ListPortfolioFillsRequest = Pagination &
  FillQueryParams & {
    /**
     * Identifies the portfolio by UUID (e.g., 892e8c7c-e979-4cad-b61b-55a197932cf1) or portfolio ID (e.g., 5189861793641175)
     */
    portfolio?: string;
  };

export type ListPortfolioFillsResponse = GetMultiPortfolioFills;

export type ListPortfolioFeeRatesRequest = Record<string, never>;

export type ListPortfolioFeeRatesResponse = PortfolioFeeRate[];

/**
 * Get endpoints
 */
export type GetPortfolioRequest = {
  /**
   * Identifies the portfolio by UUID (e.g., 892e8c7c-e979-4cad-b61b-55a197932cf1) or portfolio ID (e.g., 5189861793641175)
   */
  portfolio: string;
};

export type GetPortfolioResponse = Portfolio;

export type GetPortfolioDetailsRequest = {
  /**
   * Identifies the portfolio by UUID (e.g., 892e8c7c-e979-4cad-b61b-55a197932cf1) or portfolio ID (e.g., 5189861793641175)
   */
  portfolio: string;
};

export type GetPortfolioDetailsResponse = PortfolioDetail;

export type GetPortfolioSummaryRequest = {
  /**
   * Identifies the portfolio by UUID (e.g., 892e8c7c-e979-4cad-b61b-55a197932cf1) or portfolio ID (e.g., 5189861793641175)
   */
  portfolio: string;
};

export type GetPortfolioSummaryResponse = PortfolioSummary;

export type GetAssetBalanceRequest = {
  /**
   * Identifies the portfolio by UUID (e.g., 892e8c7c-e979-4cad-b61b-55a197932cf1) or portfolio ID (e.g., 5189861793641175)
   */
  portfolio: string;
  /**
   * Identifies the asset by name (e.g., BTC), UUID (e.g., 291efb0f-2396-4d41-ad03-db3b2311cb2c), or asset ID (e.g., 1482439423963469)
   */
  asset: string;
};

export type GetAssetBalanceResponse = PortfolioBalance;

export type GetAssetLoanRequest = {
  /**
   * Identifies the portfolio by UUID (e.g., 892e8c7c-e979-4cad-b61b-55a197932cf1) or portfolio ID (e.g., 5189861793641175)
   */
  portfolio: string;
  /**
   * Identifies the asset by name (e.g., BTC), UUID (e.g., 291efb0f-2396-4d41-ad03-db3b2311cb2c), or asset ID (e.g., 1482439423963469)
   */
  asset: string;
};

export type GetAssetLoanResponse = PortfolioLoanInfoResult;

export type GetAssetLoanAvailabilityRequest = {
  /**
   * Identifies the portfolio by UUID (e.g., 892e8c7c-e979-4cad-b61b-55a197932cf1) or portfolio ID (e.g., 5189861793641175)
   */
  portfolio: string;
  /**
   * Identifies the asset by name (e.g., BTC), UUID (e.g., 291efb0f-2396-4d41-ad03-db3b2311cb2c), or asset ID (e.g., 1482439423963469)
   */
  asset: string;
};

export type GetAssetLoanAvailabilityResponse = PortfolioGetAvailableLoanResult;

export type GetInstrumentPositionRequest = {
  /**
   * Identifies the portfolio by UUID (e.g., 892e8c7c-e979-4cad-b61b-55a197932cf1) or portfolio ID (e.g., 5189861793641175)
   */
  portfolio: string;
  /**
   * Identifies the instrument by name (e.g., BTC-USDC), UUID (e.g., ce55a827-f04a-45c0-9d9b-8bbdb9b48065), or instrument ID (e.g., 7149252043835013)
   */
  instrument: string;
};

export type GetInstrumentPositionResponse = PortfolioPosition;

export type GetOpenPositionLimitRequest = Record<string, never>;

export type GetOpenPositionLimitResponse = {
  /**
   * The total notional limit across all instrument positions allowed to be opened. The value is not present if total_open_position_notional_limit_enforced is false.
   */
  totalOpenPositionNotionalLimit: number;
  /**
   * Whether the total open position notional limit is enforced.
   */
  totalOpenPositionNotionalLimitEnforced: boolean;
};

export type GetInstrumentPositionLimitRequest = {
  /**
   * Identifies the portfolio by UUID (e.g., 892e8c7c-e979-4cad-b61b-55a197932cf1) or portfolio ID (e.g., 5189861793641175)
   */
  portfolio: string;
  /**
   * Identifies the instrument by name (e.g., BTC-USDC), UUID (e.g., ce55a827-f04a-45c0-9d9b-8bbdb9b48065), or instrument ID (e.g., 7149252043835013)
   */
  instrument: string;
};

export type GetInstrumentPositionLimitResponse = OpenPositionLimit;

export type GetFundTransferLimitRequest = {
  /**
   * Identifies the portfolio by UUID (e.g., 892e8c7c-e979-4cad-b61b-55a197932cf1) or portfolio ID (e.g., 5189861793641175)
   */
  portfolio: string;
  /**
   * Identifies the asset by name (e.g., BTC), UUID (e.g., 291efb0f-2396-4d41-ad03-db3b2311cb2c), or asset ID (e.g., 1482439423963469)
   */
  asset: string;
};

export type GetFundTransferLimitResponse = {
  /**
   * max portfolio transfer amount
   */
  maxPortfolioTransferAmount: string;
};

/**
 * Update endpoints
 */
export type UpdatePortfolioRequest = {
  /**
   * Identifies the portfolio by UUID (e.g., 892e8c7c-e979-4cad-b61b-55a197932cf1) or portfolio ID (e.g., 5189861793641175)
   */
  portfolio: string;
  /**
   * The name of the portfolio
   */
  name: string;
};

export type UpdatePortfolioResponse = Portfolio;

/**
 * Post/Put/Patch endpoints
 */
export type CreatePortfolioRequest = CreatePortfolioRequestInt;

export type CreatePortfolioResponse = Portfolio;

export type AcquireOrRepayLoanRequest = UpdatePortfolioLoanRequest & {
  /**
   * Identifies the portfolio by UUID (e.g., 892e8c7c-e979-4cad-b61b-55a197932cf1) or portfolio ID (e.g., 5189861793641175)
   */
  portfolio: string;
  /**
   * Identifies the asset by name (e.g., BTC), UUID (e.g., 291efb0f-2396-4d41-ad03-db3b2311cb2c), or asset ID (e.g., 1482439423963469)
   */
  asset: string;
};

export type AcquireOrRepayLoanResponse = PortfolioUpdateLoanResult;

export type PreviewLoanUpdateRequest = UpdatePortfolioLoanRequest & {
  /**
   * Identifies the portfolio by UUID (e.g., 892e8c7c-e979-4cad-b61b-55a197932cf1) or portfolio ID (e.g., 5189861793641175)
   */
  portfolio: string;
  /**
   * Identifies the asset by name (e.g., BTC), UUID (e.g., 291efb0f-2396-4d41-ad03-db3b2311cb2c), or asset ID (e.g., 1482439423963469)
   */
  asset: string;
};

export type PreviewLoanUpdateResponse = PortfolioPreviewLoanUpdateResult;

export type UpdateCrossCollateralRequest = CrossCollateralEnabledRequest & {
  /**
   * Identifies the portfolio by UUID (e.g., 892e8c7c-e979-4cad-b61b-55a197932cf1) or portfolio ID (e.g., 5189861793641175)
   */
  portfolio: string;
};

export type UpdateCrossCollateralResponse = Portfolio;

export type UpdateAutoMarginRequest = AutoMarginEnabledRequest & {
  /**
   * Identifies the portfolio by UUID (e.g., 892e8c7c-e979-4cad-b61b-55a197932cf1) or portfolio ID (e.g., 5189861793641175)
   */
  portfolio: string;
};

export type UpdateAutoMarginResponse = Portfolio;

export type UpdateMarginOverrideRequest = SetPortfolioMarginOverrideRequest;

export type UpdateMarginOverrideResponse = PortfolioUpdateMarginOverride;

export type CreateTransferFundsRequest = CreatePortfolioAssetTransferRequest;

export type CreateTransferFundsResponse = CreatePortfolioAssetTransfer;

export type CreateTransferPositionRequest =
  CreatePortfolioPositionTransferRequest;

export type CreateTransferPositionResponse = CreatePortfolioAssetTransfer;
