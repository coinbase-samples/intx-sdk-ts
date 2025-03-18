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
  ListPortfoliosRequest,
  ListPortfoliosResponse,
  ListPortfolioBalancesRequest,
  ListPortfolioBalancesResponse,
  ListActiveLoansRequest,
  ListActiveLoansResponse,
  ListPositionsRequest,
  ListPositionsResponse,
  ListOpenPositionLimitsRequest,
  ListOpenPositionLimitsResponse,
  ListFillsRequest,
  ListFillsResponse,
  ListPortfolioFillsRequest,
  ListPortfolioFillsResponse,
  ListPortfolioFeeRatesRequest,
  ListPortfolioFeeRatesResponse,
  GetPortfolioRequest,
  GetPortfolioResponse,
  GetPortfolioDetailsRequest,
  GetPortfolioDetailsResponse,
  GetPortfolioSummaryRequest,
  GetPortfolioSummaryResponse,
  GetAssetBalanceRequest,
  GetAssetBalanceResponse,
  GetAssetLoanRequest,
  GetAssetLoanResponse,
  GetAssetLoanAvailabilityRequest,
  GetAssetLoanAvailabilityResponse,
  GetInstrumentPositionRequest,
  GetInstrumentPositionResponse,
  GetOpenPositionLimitRequest,
  GetOpenPositionLimitResponse,
  GetInstrumentPositionLimitRequest,
  GetInstrumentPositionLimitResponse,
  GetFundTransferLimitRequest,
  GetFundTransferLimitResponse,
  CreatePortfolioRequest,
  CreatePortfolioResponse,
  PreviewLoanUpdateRequest,
  PreviewLoanUpdateResponse,
  AcquireOrRepayLoanRequest,
  AcquireOrRepayLoanResponse,
  CreateTransferFundsRequest,
  CreateTransferFundsResponse,
  CreateTransferPositionRequest,
  CreateTransferPositionResponse,
  UpdatePortfolioRequest,
  UpdatePortfolioResponse,
  UpdateCrossCollateralRequest,
  UpdateCrossCollateralResponse,
  UpdateAutoMarginRequest,
  UpdateAutoMarginResponse,
  UpdateMarginOverrideRequest,
  UpdateMarginOverrideResponse,
} from './types';

export interface IPortfoliosService {
  listPortfolios(
    request: ListPortfoliosRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    ListPortfoliosResponse | CoinbaseIntxClientException | CoinbaseIntxException
  >;
  listPortfolioBalances(
    request: ListPortfolioBalancesRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | ListPortfolioBalancesResponse
    | CoinbaseIntxClientException
    | CoinbaseIntxException
  >;
  listActiveLoans(
    request: ListActiveLoansRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | ListActiveLoansResponse
    | CoinbaseIntxClientException
    | CoinbaseIntxException
  >;
  listPositions(
    request: ListPositionsRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    ListPositionsResponse | CoinbaseIntxClientException | CoinbaseIntxException
  >;
  listOpenPositionLimits(
    request: ListOpenPositionLimitsRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | ListOpenPositionLimitsResponse
    | CoinbaseIntxClientException
    | CoinbaseIntxException
  >;
  listFills(
    request: ListFillsRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    ListFillsResponse | CoinbaseIntxClientException | CoinbaseIntxException
  >;
  listPortfolioFills(
    request: ListPortfolioFillsRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | ListPortfolioFillsResponse
    | CoinbaseIntxClientException
    | CoinbaseIntxException
  >;
  listPortfolioFeeRates(
    request: ListPortfolioFeeRatesRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | ListPortfolioFeeRatesResponse
    | CoinbaseIntxClientException
    | CoinbaseIntxException
  >;
  getInstrumentPosition(
    request: GetInstrumentPositionRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | GetInstrumentPositionResponse
    | CoinbaseIntxClientException
    | CoinbaseIntxException
  >;
  getOpenPositionLimit(
    request: GetOpenPositionLimitRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | GetOpenPositionLimitResponse
    | CoinbaseIntxClientException
    | CoinbaseIntxException
  >;
  getInstrumentPositionLimit(
    request: GetInstrumentPositionLimitRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | GetInstrumentPositionLimitResponse
    | CoinbaseIntxClientException
    | CoinbaseIntxException
  >;
  getFundTransferLimit(
    request: GetFundTransferLimitRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | GetFundTransferLimitResponse
    | CoinbaseIntxClientException
    | CoinbaseIntxException
  >;
  createPortfolio(
    request: CreatePortfolioRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | CreatePortfolioResponse
    | CoinbaseIntxClientException
    | CoinbaseIntxException
  >;
  previewLoanUpdate(
    request: PreviewLoanUpdateRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | PreviewLoanUpdateResponse
    | CoinbaseIntxClientException
    | CoinbaseIntxException
  >;
  acquireOrRepayLoan(
    request: AcquireOrRepayLoanRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | AcquireOrRepayLoanResponse
    | CoinbaseIntxClientException
    | CoinbaseIntxException
  >;
  createTransferFunds(
    request: CreateTransferFundsRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | CreateTransferFundsResponse
    | CoinbaseIntxClientException
    | CoinbaseIntxException
  >;
  createTransferPosition(
    request: CreateTransferPositionRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | CreateTransferPositionResponse
    | CoinbaseIntxClientException
    | CoinbaseIntxException
  >;
  updatePortfolio(
    request: UpdatePortfolioRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | UpdatePortfolioResponse
    | CoinbaseIntxClientException
    | CoinbaseIntxException
  >;
  updateCrossCollateral(
    request: UpdateCrossCollateralRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | UpdateCrossCollateralResponse
    | CoinbaseIntxClientException
    | CoinbaseIntxException
  >;
  updateAutoMargin(
    request: UpdateAutoMarginRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | UpdateAutoMarginResponse
    | CoinbaseIntxClientException
    | CoinbaseIntxException
  >;
  updateMarginOverride(
    request: UpdateMarginOverrideRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | UpdateMarginOverrideResponse
    | CoinbaseIntxClientException
    | CoinbaseIntxException
  >;
}

export class PortfoliosService implements IPortfoliosService {
  private client: CoinbaseIntxClient;

  constructor(client: CoinbaseIntxClient) {
    this.client = client;
  }

  async listPortfolios(
    request: ListPortfoliosRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    ListPortfoliosResponse | CoinbaseIntxClientException | CoinbaseIntxException
  > {
    const response = await this.client.request({
      url: `portfolios`,
      callOptions: options,
    });

    return response.data as ListPortfoliosResponse;
  }

  async listPortfolioBalances(
    request: ListPortfolioBalancesRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | ListPortfolioBalancesResponse
    | CoinbaseIntxClientException
    | CoinbaseIntxException
  > {
    const response = await this.client.request({
      url: `portfolios/${request.portfolio}/balances`,
      callOptions: options,
    });

    return response.data as ListPortfolioBalancesResponse;
  }

  async listActiveLoans(
    request: ListActiveLoansRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | ListActiveLoansResponse
    | CoinbaseIntxClientException
    | CoinbaseIntxException
  > {
    const response = await this.client.request({
      url: `portfolios/${request.portfolio}/loans`,
      callOptions: options,
    });

    return response.data as ListActiveLoansResponse;
  }

  async listPositions(
    request: ListPositionsRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    ListPositionsResponse | CoinbaseIntxClientException | CoinbaseIntxException
  > {
    const response = await this.client.request({
      url: `portfolios/${request.portfolio}/positions`,
      callOptions: options,
    });

    return response.data as ListPositionsResponse;
  }

  async listOpenPositionLimits(
    request: ListOpenPositionLimitsRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | ListOpenPositionLimitsResponse
    | CoinbaseIntxClientException
    | CoinbaseIntxException
  > {
    const response = await this.client.request({
      url: `portfolios/${request.portfolio}/position-limits`,
      callOptions: options,
    });

    return response.data as ListOpenPositionLimitsResponse;
  }

  async listFills(
    request: ListFillsRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    ListFillsResponse | CoinbaseIntxClientException | CoinbaseIntxException
  > {
    const response = await this.client.request({
      url: `portfolios/fills`,
      queryParams: request,
      callOptions: options,
    });

    return response.data as ListFillsResponse;
  }

  async listPortfolioFills(
    request: ListPortfolioFillsRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | ListPortfolioFillsResponse
    | CoinbaseIntxClientException
    | CoinbaseIntxException
  > {
    const response = await this.client.request({
      url: `portfolios/${request.portfolio}/fills`,
      queryParams: { ...request, portfolio: undefined },
      callOptions: options,
    });

    return response.data as ListPortfolioFillsResponse;
  }

  async listPortfolioFeeRates(
    request: ListPortfolioFeeRatesRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | ListPortfolioFeeRatesResponse
    | CoinbaseIntxClientException
    | CoinbaseIntxException
  > {
    const response = await this.client.request({
      url: `portfolios/fee-rates`,
      callOptions: options,
    });

    return response.data as ListPortfolioFeeRatesResponse;
  }

  async getPortfolio(
    request: GetPortfolioRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    GetPortfolioResponse | CoinbaseIntxClientException | CoinbaseIntxException
  > {
    const response = await this.client.request({
      url: `portfolios/${request.portfolio}`,
      callOptions: options,
    });

    return response.data as GetPortfolioResponse;
  }

  async getPortfolioDetails(
    request: GetPortfolioDetailsRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | GetPortfolioDetailsResponse
    | CoinbaseIntxClientException
    | CoinbaseIntxException
  > {
    const response = await this.client.request({
      url: `portfolios/${request.portfolio}/details`,
      callOptions: options,
    });

    return response.data as GetPortfolioDetailsResponse;
  }

  async getPortfolioSummary(
    request: GetPortfolioSummaryRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | GetPortfolioSummaryResponse
    | CoinbaseIntxClientException
    | CoinbaseIntxException
  > {
    const response = await this.client.request({
      url: `portfolios/${request.portfolio}/summary`,
      callOptions: options,
    });

    return response.data as GetPortfolioSummaryResponse;
  }

  async getAssetBalance(
    request: GetAssetBalanceRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | GetAssetBalanceResponse
    | CoinbaseIntxClientException
    | CoinbaseIntxException
  > {
    const response = await this.client.request({
      url: `portfolios/${request.portfolio}/balances/${request.asset}`,
      callOptions: options,
    });

    return response.data as GetAssetBalanceResponse;
  }

  async getAssetLoan(
    request: GetAssetLoanRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    GetAssetLoanResponse | CoinbaseIntxClientException | CoinbaseIntxException
  > {
    const response = await this.client.request({
      url: `portfolios/${request.portfolio}/loans/${request.asset}`,
      callOptions: options,
    });

    return response.data as GetAssetLoanResponse;
  }

  async getAssetLoanAvailability(
    request: GetAssetLoanAvailabilityRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | GetAssetLoanAvailabilityResponse
    | CoinbaseIntxClientException
    | CoinbaseIntxException
  > {
    const response = await this.client.request({
      url: `portfolios/${request.portfolio}/loans/${request.asset}/availability`,
      callOptions: options,
    });

    return response.data as GetAssetLoanAvailabilityResponse;
  }

  async getInstrumentPosition(
    request: GetInstrumentPositionRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | GetInstrumentPositionResponse
    | CoinbaseIntxClientException
    | CoinbaseIntxException
  > {
    const response = await this.client.request({
      url: `portfolios/${request.portfolio}/positions/${request.instrument}`,
      callOptions: options,
    });

    return response.data as GetInstrumentPositionResponse;
  }

  async getOpenPositionLimit(
    request: GetOpenPositionLimitRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | GetOpenPositionLimitResponse
    | CoinbaseIntxClientException
    | CoinbaseIntxException
  > {
    const response = await this.client.request({
      url: `portfolios/${request.portfolio}/position-limits`,
      callOptions: options,
    });

    return response.data as GetOpenPositionLimitResponse;
  }

  async getInstrumentPositionLimit(
    request: GetInstrumentPositionLimitRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | GetInstrumentPositionLimitResponse
    | CoinbaseIntxClientException
    | CoinbaseIntxException
  > {
    const response = await this.client.request({
      url: `portfolios/${request.portfolio}/position-limits/positions/${request.instrument}`,
      callOptions: options,
    });

    return response.data as GetInstrumentPositionLimitResponse;
  }

  async getFundTransferLimit(
    request: GetFundTransferLimitRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | GetFundTransferLimitResponse
    | CoinbaseIntxClientException
    | CoinbaseIntxException
  > {
    const response = await this.client.request({
      url: `portfolios/${request.portfolio}/${request.asset}/transfer-limits`,
      bodyParams: { ...request, portfolio: undefined, asset: undefined },
      callOptions: options,
    });

    return response.data as GetFundTransferLimitResponse;
  }

  async createPortfolio(
    request: CreatePortfolioRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | CreatePortfolioResponse
    | CoinbaseIntxClientException
    | CoinbaseIntxException
  > {
    const response = await this.client.request({
      url: `portfolios`,
      bodyParams: request,
      method: Method.POST,
      callOptions: options,
    });

    return response.data as CreatePortfolioResponse;
  }

  async previewLoanUpdate(
    request: PreviewLoanUpdateRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | PreviewLoanUpdateResponse
    | CoinbaseIntxClientException
    | CoinbaseIntxException
  > {
    const response = await this.client.request({
      url: `portfolios/${request.portfolio}/loans/${request.asset}/preview`,
      bodyParams: { ...request, portfolio: undefined, asset: undefined },
      method: Method.POST,
      callOptions: options,
    });

    return response.data as PreviewLoanUpdateResponse;
  }

  async acquireOrRepayLoan(
    request: AcquireOrRepayLoanRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | AcquireOrRepayLoanResponse
    | CoinbaseIntxClientException
    | CoinbaseIntxException
  > {
    const response = await this.client.request({
      url: `portfolios/${request.portfolio}/loans/${request.asset}`,
      bodyParams: { ...request, portfolio: undefined, asset: undefined },
      method: Method.POST,
      callOptions: options,
    });

    return response.data as AcquireOrRepayLoanResponse;
  }

  async createTransferFunds(
    request: CreateTransferFundsRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | CreateTransferFundsResponse
    | CoinbaseIntxClientException
    | CoinbaseIntxException
  > {
    const response = await this.client.request({
      url: `portfolios/transfer`,
      bodyParams: request,
      method: Method.POST,
      callOptions: options,
    });

    return response.data as CreateTransferFundsResponse;
  }

  async createTransferPosition(
    request: CreateTransferPositionRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | CreateTransferPositionResponse
    | CoinbaseIntxClientException
    | CoinbaseIntxException
  > {
    const response = await this.client.request({
      url: `portfolios/transfer-position`,
      bodyParams: request,
      method: Method.POST,
      callOptions: options,
    });

    return response.data as CreateTransferPositionResponse;
  }

  async updatePortfolio(
    request: UpdatePortfolioRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | UpdatePortfolioResponse
    | CoinbaseIntxClientException
    | CoinbaseIntxException
  > {
    const response = await this.client.request({
      url: `portfolios/${request.portfolio}`,
      bodyParams: request,
      method: Method.PUT,
      callOptions: options,
    });

    return response.data as UpdatePortfolioResponse;
  }

  async updateCrossCollateral(
    request: UpdateCrossCollateralRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | UpdateCrossCollateralResponse
    | CoinbaseIntxClientException
    | CoinbaseIntxException
  > {
    const response = await this.client.request({
      url: `portfolios/${request.portfolio}/cross-collateral-enabled`,
      bodyParams: { ...request, portfolio: undefined },
      method: Method.POST,
      callOptions: options,
    });

    return response.data as UpdateCrossCollateralResponse;
  }

  async updateAutoMargin(
    request: UpdateAutoMarginRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | UpdateAutoMarginResponse
    | CoinbaseIntxClientException
    | CoinbaseIntxException
  > {
    const response = await this.client.request({
      url: `portfolios/${request.portfolio}/auto-margin-enabled`,
      bodyParams: { ...request, portfolio: undefined },
      method: Method.POST,
      callOptions: options,
    });

    return response.data as UpdateAutoMarginResponse;
  }

  async updateMarginOverride(
    request: UpdateMarginOverrideRequest,
    options?: CoinbaseCallOptions
  ): Promise<
    | UpdateMarginOverrideResponse
    | CoinbaseIntxClientException
    | CoinbaseIntxException
  > {
    const response = await this.client.request({
      url: `portfolios/margin`,
      bodyParams: request,
      method: Method.POST,
      callOptions: options,
    });

    return response.data as UpdateMarginOverrideResponse;
  }
}
