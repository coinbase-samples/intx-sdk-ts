# Coinbase International Exchange API TypeScript SDK

## Overview

Welcome to the Coinbase International Exchange (INTX) API TypeScript SDK. This TypeScript project was created to allow developers to easily plug into the [Coinbase INTX API](https://docs.cdp.coinbase.com/intx/docs/welcome).

---

## License

The _Intx Typescript SDK_ sample library is free and open source and released under the [Apache License, Version 2.0](LICENSE).

The application and code are only available for demonstration purposes.

## Usage

Here are a few examples requests:

**[List Portfolios](https://docs.cdp.coinbase.com/intx/reference/getportfolios)**

```
const portfoliosService = new PortfoliosService(client);

portfoliosService
  .listPortfolios()
  .then((portfolios) => {
    console.log(portfolios);
  })
  .catch((err) => console.log(err));
```

**[Get Assets](https://docs.cdp.coinbase.com/intx/reference/getassets)**

```
const assetService = new AssetsService(client);

assetService
  .listAssets()
  .then((assets) => {
    console.log(assets);
  })
  .catch((err) => console.log(err));
```

**[Create Order](https://docs.cdp.coinbase.com/intx/reference/createorder)**

_$10 Market Buy on BTC-USD_

```
client
    .createOrder({
        portfolio: "somePortfolioId",
        clientOrderId: "someClientOrderId",
        instrument: "BTC-USD",
        side: OrderSide.BUY,
        type: OrderType.Market,
        size: "0.0001"
    })
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error.message);
    });
```

## Development Installation

```bash
npm install
```

---

## Build and Use

To build the project, run the following command:

```bash
npm run build
```

_Note: To avoid potential issues, do not forget to build your project again after making any changes to it._

After building the project, each `.ts` file will have its `.js` counterpart generated.

To run a file, use the following command:

```
node dist/{INSERT-FILENAME}.js
```

For example, a `main.ts` file would be run like:

```bash
node dist/main.js
```

---
