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

import { GetInstrumentCandles } from '../model/getInstrumentCandles';
import { GetInstrumentVolumesDaily } from '../model/getInstrumentVolumesDaily';
import { Instrument } from '../model/instrument';
import { InstrumentFunding } from '../model/instrumentFunding';
import { InstrumentQuote } from '../model/instrumentQuote';

export type ListInstrumentsRequest = Record<string, never>;

export type ListInstrumentsResponse = Array<Instrument>;

export type GetInstrumentRequest = {
  /**
   * Identifies the instrument by name (e.g., BTC-USDC), UUID (e.g., ce55a827-f04a-45c0-9d9b-8bbdb9b48065), or instrument ID (e.g., 7149252043835013)
   */
  instrument: string;
};

export type GetInstrumentResponse = Instrument;

export type GetQuoteRequest = {
  /**
   * Identifies the instrument by name (e.g., BTC-USDC), UUID (e.g., ce55a827-f04a-45c0-9d9b-8bbdb9b48065), or instrument ID (e.g., 7149252043835013)
   */
  instrument: string;
};

export type GetQuoteResponse = InstrumentQuote;

export type GetDailyTradingVolumeRequest = {
  /**
   * Identifies the instruments by name in a comma separated list (e.g., BTC-PERP,ETH-PERP)
   */
  instrument: string;
  /**
   * The number of results to return (defaults to 60 with a max supported value of 100)
   */
  resultLimit?: number;
  /**
   * The number of results from the beginning to skip past
   */
  resultOffset?: number;
  /**
   * The first date to include data from in ISO 8601 timestamp format (e.g. 2024-03-01T00:00:00Z)
   */
  timeFrom?: string;
  /**
   * Return an OTHER bucket in the instrument list containing the volume of all instruments filtered out by the instruments query parameter
   */
  showOther?: boolean;
};

export type GetDailyTradingVolumeResponse = GetInstrumentVolumesDaily;

export type GetAggregatedCandlesRequest = {
  /**
   * Identifies the instrument by name (e.g., BTC-PERP)
   */
  instrument: string;
  /**
   * The aggregation period of the candles data. End timestamp in ISO 8601 timestamp format (e.g. 2024-03-01T00:00:00Z).
   */
  granularity: number;
  /**
   * Start timestamp in ISO 8601 timestamp format (e.g. 2024-03-01T00:00:00Z)
   */
  start: string;
  /**
   * End timestamp in ISO 8601 timestamp format (e.g. 2024-03-01T00:00:00Z)
   */
  end?: string;
};

export type GetAggregatedCandlesResponse = GetInstrumentCandles;

export type GetHistoricalFundingRatesRequest = {
  /**
   * Identifies the instrument by name (e.g., BTC-PERP), UUID (e.g., ce55a827-f04a-45c0-9d9b-8bbdb9b48065), or instrument ID (e.g., 7149252043835013)
   */
  instrument: string;
  /**
   * The number of results to return (defaults to 25 with a max supported value of 100)
   */
  resultLimit?: number;
  /**
   * The number of results from the beginning to skip past
   */
  resultOffset?: number;
};

export type GetHistoricalFundingRatesResponse = InstrumentFunding;
