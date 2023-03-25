import fetch from 'node-fetch';
const MAIN_NET = 'https://nodeless.io/api/';
const TEST_NET = 'https://testnet.nodeless.io/api/';

export class Nodeless {
  readonly API_KEY: string;
  readonly BASE_URL: string;

  constructor(API_KEY: string, API_VERSION = '1', testnet = false) {
    if (!API_KEY || typeof API_KEY !== 'string')
      throw 'API_KEY is a required argument.';
    this.API_KEY = API_KEY;
    this.BASE_URL = `${testnet ? TEST_NET : MAIN_NET}v${API_VERSION}/`;
  }

  async createPayWallRequest(paywallID: string) {
    const json = await this.callAPI(`paywall/${paywallID}/request`, 'POST');
    return json;
  }

  async getPayWallRequest(paywallID: string, requestID: string) {
    const json = await this.callAPI(
      `paywall/${paywallID}/request/${requestID}`,
      'GET'
    );
    return json;
  }

  async getPayWallRequestStatus(paywallID: string, requestID: string) {
    const json = await this.callAPI(
      `paywall/${paywallID}/request/${requestID}/status`,
      'GET'
    );
    return json;
  }

  async getAllPaywallWebhooks(paywallID: string) {
    const json = await this.callAPI(`paywall/${paywallID}/webhook`, 'GET');
    return json;
  }

  async createPaywallWebhook(
    paywallID: string,
    requestBody: {
      type: 'store' | 'donation_page' | 'paywall' | 'inbox';
      url: string;
      events: Array<
        | 'new'
        | 'pending_confirmation'
        | 'paid'
        | 'overpaid'
        | 'underpaid'
        | 'in_flight'
        | 'expired'
        | 'cancelled'
      >;
      secret: string;
      status: 'active' | 'inactive';
    }
  ) {
    const json = await this.callAPI(
      `paywall/${paywallID}/webhook`,
      'POST',
      requestBody
    );
    return json;
  }

  async getPaywallWebhook(paywallID: string, webhookID: string) {
    const json = await this.callAPI(
      `paywall/${paywallID}/webhook/${webhookID}`,
      'GET'
    );
    return json;
  }

  async deletePaywallWebhook(paywallID: string, webhookID: string) {
    const json = await this.callAPI(
      `paywall/${paywallID}/webhook/${webhookID}`,
      'DELETE'
    );
    return json;
  }

  async updatePaywallWebhook(
    paywallID: string,
    webhookID: string,
    requestBody: {
      url: string;
      events: Array<
        | 'new'
        | 'pending_confirmation'
        | 'paid'
        | 'overpaid'
        | 'underpaid'
        | 'in_flight'
        | 'expired'
        | 'cancelled'
      >;
      status: 'active' | 'inactive';
    }
  ) {
    const json = await this.callAPI(
      `paywall/${paywallID}/webhook/${webhookID}`,
      'PUT',
      requestBody
    );
    return json;
  }

  async getAllPaywalls() {
    const json = await this.callAPI('paywall', 'GET');
    return json;
  }

  async createPaywall(requestBody: {
    name: string;
    type: 'content' | 'download' | 'redirect' | 'wp_article';
    price: number;
    settings?: { [key: string]: any };
  }) {
    const json = await this.callAPI('paywall', 'POST', requestBody);
    return json;
  }

  async getPaywall(paywallID: string) {
    const json = await this.callAPI(`paywall/${paywallID}`, 'GET');
    return json;
  }

  async updatePaywall(
    paywallID: string,
    requestBody: {
      name: string;
      type: 'content' | 'download' | 'redirect' | 'wp_article';
      price: number;
      settings?: { [key: string]: any };
    }
  ) {
    const json = await this.callAPI(`paywall/${paywallID}`, 'PUT', requestBody);
    return json;
  }

  async deletePaywall(paywallID: string) {
    const json = await this.callAPI(`paywall/${paywallID}`, 'DELETE');
    return json;
  }

  async getStatus() {
    const json = await this.callAPI('status', 'GET');
    return json;
  }

  async createStoreInvoice(
    storeID: string,
    requestBody: {
      amount: number;
      currency:
        | 'usd'
        | 'eur'
        | 'cad'
        | 'jpy'
        | 'gbp'
        | 'chf'
        | 'btc'
        | 'sats'
        | 'USD'
        | 'EUR'
        | 'CAD'
        | 'JPY'
        | 'GBP'
        | 'CHF'
        | 'BTC'
        | 'SATS';
      buyerEmail?: string;
      redirectUrl?: string;
      metadata?: { [key: string]: any };
    }
  ) {
    const json = await this.callAPI(
      `store/${storeID}/invoice`,
      'POST',
      requestBody
    );
    return json;
  }

  async getStoreInvoice(storeID: string, invoiceID: string) {
    const json = await this.callAPI(
      `store/${storeID}/invoice/${invoiceID}`,
      'GET'
    );
    return json;
  }

  async getStoreInvoiceStatus(storeID: string, invoiceID: string) {
    const json = await this.callAPI(
      `store/${storeID}/invoice/${invoiceID}`,
      'GET'
    );
    return json;
  }

  async getAllStoreWebhooks(storeID: string) {
    const json = await this.callAPI(`store/${storeID}/webhook`, 'GET');
    return json;
  }

  async createStoreWebhook(
    storeID: string,
    requestBody: {
      type: 'store' | 'donation_page' | 'paywall' | 'inbox';
      url: string;
      events: Array<
        | 'new'
        | 'pending_confirmation'
        | 'paid'
        | 'overpaid'
        | 'underpaid'
        | 'in_flight'
        | 'expired'
        | 'cancelled'
      >;
      secret: string;
      status: 'active' | 'inactive';
    }
  ) {
    const json = await this.callAPI(
      `store/${storeID}/webhook`,
      'POST',
      requestBody
    );
    return json;
  }

  async getStoreWebhook(storeID: string, webhookID: string) {
    const json = await this.callAPI(
      `store/${storeID}/webhook/${webhookID}`,
      'GET'
    );
    return json;
  }

  async deleteStoreWebhook(storeID: string, webhookID: string) {
    const json = await this.callAPI(
      `store/${storeID}/webhook/${webhookID}`,
      'DELETE'
    );
    return json;
  }

  async updateStoreWebhook(
    storeID: string,
    webhookID: string,
    requestBody: {
      url: string;
      events: Array<
        | 'new'
        | 'pending_confirmation'
        | 'paid'
        | 'overpaid'
        | 'underpaid'
        | 'in_flight'
        | 'expired'
        | 'cancelled'
      >;
      status: 'active' | 'inactive';
    }
  ) {
    const json = await this.callAPI(
      `store/${storeID}/webhook/${webhookID}`,
      'PUT',
      requestBody
    );
    return json;
  }

  async getAllStores() {
    const json = await this.callAPI('store', 'GET');
    return json;
  }

  async getStore(storeID: string) {
    const json = await this.callAPI(`store/${storeID}`, 'GET');
    return json;
  }

  async getAllTransactions(isFee = false) {
    const json = await this.callAPI(
      `transaction${isFee ? '?isFee=1' : ''}`,
      'GET'
    );
    return json;
  }

  async getTransaction(transactionID: string) {
    const json = await this.callAPI(`transaction/${transactionID}`, 'GET');
    return json;
  }

  async callAPI(
    path = '',
    method: 'POST' | 'GET' | 'PUT' | 'DELETE',
    requestBody = {}
  ) {
    try {
      const url = `${this.BASE_URL}${path}`;
      const headers = {
        Authorization: `Bearer ${this.API_KEY}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      };
      const body = JSON.stringify(requestBody);
      const response = await fetch(url, {
        method,
        headers,
        body,
      });
      const json = (await response.json()) ?? {};
      return json;
    } catch (err) {
      return { error: `${err}` };
    }
  }
}
