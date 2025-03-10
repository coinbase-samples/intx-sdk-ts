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
import { Asset } from '../model/asset';
import { AssetNetwork } from '../model/assetNetwork';

export type ListAssetsRequest = Record<string, never>;

export type ListAssetsResponse = Array<Asset>;

export type GetAssetRequest = {
  /**
   * Identifies the asset by name (e.g., BTC), UUID (e.g., 291efb0f-2396-4d41-ad03-db3b2311cb2c), or asset ID (e.g., 1482439423963469)
   */
  asset: string;
};

export type GetAssetResponse = Asset;

export type GetSupportedNetworksRequest = {
  /**
   * Identifies the asset by name (e.g., BTC), UUID (e.g., 291efb0f-2396-4d41-ad03-db3b2311cb2c), or asset ID (e.g., 1482439423963469)
   */
  asset: string;
};

export type GetSupportedNetworksResponse = AssetNetwork[];
