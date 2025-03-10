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
require('dotenv').config();
const {
  CoinbaseIntxClient,
  CoinbaseIntxCredentials,
  AssetsService,
} = require('../dist');

const creds = JSON.parse(process.env.INTX_CREDENTIALS);
const baseUrl = process.env.INTX_BASE_URL;

const credentials = new CoinbaseIntxCredentials(
  creds.AccessKey,
  creds.SecretKey,
  creds.Passphrase
);

// Pass as an argument such as node example/getAssetSupportedNetworks <name>
const asset = process.argv[2];

const client = new CoinbaseIntxClient(credentials, baseUrl);

const assetService = new AssetsService(client);

assetService
  .getSupportedNetworks({ asset })
  .then((assets) => {
    console.log(assets);
  })
  .catch((err) => console.log(err));
