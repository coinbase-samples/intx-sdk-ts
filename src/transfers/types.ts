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

import { AddressResponse } from '../model/addressResponse';
import { CreateAddressRequest } from '../model/createAddressRequest';
import { CreateCounterpartyIdRequest } from '../model/createCounterpartyIdRequest';
import { CreateCounterpartyIdResponse } from '../model/createCounterpartyIdResponse';
import { CreateCounterpartyWithdrawResult } from '../model/createCounterpartyWithdrawResult';
import { CreateCryptoWithdrawalResult } from '../model/createCryptoWithdrawalResult';
import { GetTransfers } from '../model/getTransfers';
import { Transfer } from '../model/transfer';
import { ValidateCounterpartyIdRequest } from '../model/validateCounterpartyIdRequest';
import { ValidateCounterpartyIdResponse } from '../model/validateCounterpartyIdResponse';
import { WithdrawRequest } from '../model/withdrawRequest';

export type ListTransfersRequest = {
  /**
   * Identifies the portfolios by UUID (e.g., 892e8c7c-e979-4cad-b61b-55a197932cf1) or portfolio ID (e.g., 5189861793641175). Can provide single or multiple portfolios to filter by or fetches transfers for all portfolios if none are provided.
   */
  portfolios?: string;
  /**
   * Only find transfers updated after this time. Uses ISO-8601 format (e.g., 2023-03-16T23:59:53Z)
   */
  timeFrom?: string;
  /**
   * Only find transfers updated before this time. Uses ISO-8601 format (e.g., 2023-03-16T23:59:53Z)
   */
  timeTo?: string;
  /**
   * The number of results to return (defaults to 25 with a max supported value of 100)
   */
  resultLimit?: number;
  /**
   * The number of results from the beginning to skip past
   */
  resultOffset?: number;
  /**
   * The current status of transfer
   */
  status?: string;
  /**
   * The type of transfer (defaults to ALL if not defined)
   */
  type?: string;
};

export type ListTransfersResponse = GetTransfers;

export type GetTransferRequest = {
  /**
   * The UUID of the transfer request
   */
  transferUuid: string;
};

export type GetTransferResponse = Transfer;

export type CreateCryptoAddressRequest = CreateAddressRequest;

export type CreateCryptoAddressResponse = AddressResponse;

export type CreateCounterpartyRequest = CreateCounterpartyIdRequest;

export type CreateCounterpartyResponse = CreateCounterpartyIdResponse;

export type ValidateCounterpartyRequest = ValidateCounterpartyIdRequest;

export type ValidateCounterpartyResponse = ValidateCounterpartyIdResponse;

export type WithdrawToCryptoAddressRequest = WithdrawRequest;

export type WithdrawToCryptoAddressResponse = CreateCryptoWithdrawalResult;

export type WithdrawToCounterpartyRequest = {
  /**
   * Identifies the portfolio to withdraw from by UUID (e.g., 892e8c7c-e979-4cad-b61b-55a197932cf1) or portfolio ID (e.g., 5189861793641175)
   */
  portfolio: string;
  /**
   * Counterparty Id to withdraw to
   * Example: CBTQDGENHE
   */
  counterpartyId: string;
  /**
   * Identifies the asset by name (e.g., BTC), UUID (e.g., 291efb0f-2396-4d41-ad03-db3b2311cb2c), or asset ID (e.g., 1482439423963469)
   */
  asset: string;
  /**
   * The amount of the asset being transferred
   */
  amount: string;
  /**
   * A unique positive integer representing the withdrawal request
   */
  nonce: number;
};

export type WithdrawToCounterpartyResponse = CreateCounterpartyWithdrawResult;
