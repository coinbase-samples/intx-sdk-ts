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
import { GetIndexCandles } from '../model/getIndexCandles';
import { IndexComposition } from '../model/indexComposition';
import { IndexPrice } from '../model/indexPrice';

export type GetIndexCompositionRequest = {
  index: string;
};

export type GetIndexCompositionResponse = IndexComposition;

export type GetIndexCompositionHistoryRequest = {
  index: string;
  timeFrom?: string;
  resultLimit?: string;
  resultOffset?: string;
};

export type GetIndexCompositionHistoryResponse = IndexComposition;

export type GetIndexPriceRequest = {
  index: string;
};

export type GetIndexPriceResponse = IndexPrice;

export type GetIndexCandlesRequest = {
  index: string;
  granularity: string;
  start: string;
  end?: string;
};

export type GetIndexCandlesResponse = GetIndexCandles;
