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

export type InstrumentFunding = {
  /**
   * The unique identifier of the instrument for which the funding rate applies
   */
  instrumentId?: string;
  /**
   * The final funding rate based on the state of the rolling calculation at the `event_time`.
   */
  fundingRate?: string;
  /**
   * The current mark price value used in risk and margin calculations
   */
  markPrice?: string;
  /**
   * The time that the final funding rate was determined. Uses ISO-8601 format (e.g., 2023-03-16T23:59:53Z)
   */
  eventTime?: Date;
};
