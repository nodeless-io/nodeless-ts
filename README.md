# Nodeless.io API wrapper

See the API docs for more info https://nodeless.io/api-docs

## Install

```
npm i nodeless-io
```

## Usage

```javascript
import { Nodeless } from 'nodeless-io';

//  constructor(API_KEY: string, API_VERSION = '1', testnet = false)
const nodeless = new Nodeless('MY_API_KEY', '1', true);

// Check the status of the API
const serverStatus = await nodeless.getStatus();

// Paywalls
const myPaywallList = await nodeless.getAllPaywalls();
const newPaywall = await nodeless.createPaywall({
  name: 'yzfterrucckaksq',
  type: 'redirect',
  price: 629,
});
const paywallID = '9ff30e10-2949-4735-8ea3-56eb42a1306d';
const thatPaywall = await nodeless.getPaywall(paywallID);
const updatedPaywall = await nodeless.updatePaywall(paywallID, {
  name: 'lacavwrpkvzab',
  type: 'download',
  price: 973,
});
// delete
await nodeless.deletePaywall(paywallID);

// Paywall requests
const requestID = 'aut';
const newPaywallRequest = await nodeless.createPayWallRequest(paywallID);
const thatPaywallRequest = await nodeless.getPayWallRequest(
  paywallID,
  requestID
);
const paywallRequestStatus = await nodeless.getPayWallRequestStatus(
  paywallID,
  requestID
);

// Paywall Webhooks
const webhookID = 'perspiciatis';
const allPaywallWebhooks = await nodeless.getAllPaywallWebhooks(paywallID);
const newPaywallWebhook = await nodeless.createPaywallWebhook(paywallID, {
  type: 'store',
  url: 'http://harvey.biz/',
  events: ['cancelled'],
  secret: 'est',
  status: 'inactive',
});
const thatPaywallWebhook = await nodeless.getPaywallWebhook(
  paywallID,
  webhookID
);
const updatedPaywallWebhook = await nodeless.updatePaywallWebhook(
  paywallID,
  webhookID,
  {
    url: 'http://koss.net/asperiores-itaque-autem-doloribus-nulla',
    events: ['pending_confirmation'],
    status: 'inactive',
  }
);
// delete
await nodeless.deletePaywallWebhook(paywallID, webhookID);

// Store Invoices
const storeID = '54fbc40d-a8a1-481d-b010-dea627eb491e';
const invoiceID = 'ad';
const storeInvoice = await nodeless.createStoreInvoice(storeID, {
  amount: 100.5,
  currency: 'USD',
  buyerEmail: 'keven.sporer@example.net',
  redirectUrl: 'http://roob.info/ab-corrupti-distinctio-id-est',
  metadata: {
    key: 'value',
  },
});
const thatStoreInvoice = await nodeless.getStoreInvoice(storeID, invoiceID);
const thatStoreInvoiceStatus = await nodeless.getStoreInvoiceStatus(
  storeID,
  invoiceID
);

// Store Webhooks
const allMyStoreWebhooks = await nodeless.getAllStoreWebhooks(storeID);
const newStoreWebhook = await nodeless.createStoreWebhook(storeID, {
  type: 'donation_page',
  url: 'https://www.kuhn.com/nulla-velit-non-repudiandae-voluptas-deleniti-neque-dolores-dolores',
  events: ['expired'],
  secret: 'voluptates',
  status: 'active',
});
const thatStoreWebhook = await nodeless.getStoreWebhook(storeID, webhookID);
const updatedStoreWebhook = await nodeless.updateStoreWebhook(
  storeID,
  webhookID,
  {
    url: 'http://simonis.com/voluptas-aperiam-voluptatem-eum-voluptatem-mollitia-aut-autem',
    events: ['overpaid'],
    status: 'inactive',
  }
);
// delete
await nodeless.deleteStoreWebhook(storeID, webhookID);

// Stores
const allMyStores = await nodeless.getAllStores();
const thatStore = await nodeless.getStore(storeID);

// Transactions
const transactionID = '2cas07-0c8n70n923-72c93-c2389';
const allMyTransactions = await nodeless.getAllTransactions();
const allMyTransactionFees = await nodeless.getAllTransactions(true);
const thatTransaction = await nodeless.getTransaction(transactionID);
```

Every method returns a promise so you can also use `.then()` chaining if you prefer:

```javascript
nodeless.getAllTransactions().then((json) => {
  // do something with json
});
```

For simplicity all method promises resolve an object. If the API responds with an object, you get that, otherwise just an empty onject `{}`. In the case of an error, the object returned is in the format `{ error: 'A string with info about the error' }`.
