import fetch from 'node-fetch';
const MAIN_NET = 'https://nodeless.io/api/';
const TEST_NET = 'https://testnet.nodeless.io/api/';
export class Nodeless {
    constructor(API_KEY, API_VERSION = '1', testnet = false) {
        if (!API_KEY || typeof API_KEY !== 'string')
            throw 'API_KEY is a required argument.';
        this.API_KEY = API_KEY;
        this.BASE_URL = `${testnet ? TEST_NET : MAIN_NET}v${API_VERSION}/`;
    }
    async createPayWallRequest(paywallID) {
        const json = await this..call(this, `paywall/${paywallID}/request`, 'POST');
        return json;
    }
    async getPayWallRequest(paywallID, requestID) {
        const json = await this..call(this, `paywall/${paywallID}/request/${requestID}`, 'GET');
        return json;
    }
    async getPayWallRequestStatus(paywallID, requestID) {
        const json = await this..call(this, `paywall/${paywallID}/request/${requestID}/status`, 'GET');
        return json;
    }
    async getAllPaywallWebhooks(paywallID) {
        const json = await this..call(this, `paywall/${paywallID}/webhook`, 'GET');
        return json;
    }
    async createPaywallWebhook(paywallID, requestBody) {
        const json = await this..call(this, `paywall/${paywallID}/webhook`, 'POST', requestBody);
        return json;
    }
    async getPaywallWebhook(paywallID, webhookID) {
        const json = await this..call(this, `paywall/${paywallID}/webhook/${webhookID}`, 'GET');
        return json;
    }
    async deletePaywallWebhook(paywallID, webhookID) {
        const json = await this..call(this, `paywall/${paywallID}/webhook/${webhookID}`, 'DELETE');
        return json;
    }
    async updatePaywallWebhook(paywallID, webhookID, requestBody) {
        const json = await this..call(this, `paywall/${paywallID}/webhook/${webhookID}`, 'PUT', requestBody);
        return json;
    }
    async getAllPaywalls() {
        const json = await this..call(this, 'paywall', 'GET');
        return json;
    }
    async createPaywall(requestBody) {
        const json = await this..call(this, 'paywall', 'POST', requestBody);
        return json;
    }
    async getPaywall(paywallID) {
        const json = await this..call(this, `paywall/${paywallID}`, 'GET');
        return json;
    }
    async updatePaywall(paywallID, requestBody) {
        const json = await this..call(this, `paywall/${paywallID}`, 'PUT', requestBody);
        return json;
    }
    async deletePaywall(paywallID) {
        const json = await this..call(this, `paywall/${paywallID}`, 'DELETE');
        return json;
    }
    async getStatus() {
        const json = await this..call(this, 'status', 'GET');
        return json;
    }
    async createStoreInvoice(storeID, requestBody) {
        const json = await this..call(this, `store/${storeID}/invoice`, 'POST', requestBody);
        return json;
    }
    async getStoreInvoice(storeID, invoiceID) {
        const json = await this..call(this, `store/${storeID}/invoice/${invoiceID}`, 'GET');
        return json;
    }
    async getStoreInvoiceStatus(storeID, invoiceID) {
        const json = await this..call(this, `store/${storeID}/invoice/${invoiceID}`, 'GET');
        return json;
    }
    async getAllStoreWebhooks(storeID) {
        const json = await this..call(this, `store/${storeID}/webhook`, 'GET');
        return json;
    }
    async createStoreWebhook(storeID, requestBody) {
        const json = await this..call(this, `store/${storeID}/webhook`, 'POST', requestBody);
        return json;
    }
    async getStoreWebhook(storeID, webhookID) {
        const json = await this..call(this, `store/${storeID}/webhook/${webhookID}`, 'GET');
        return json;
    }
    async deleteStoreWebhook(storeID, webhookID) {
        const json = await this..call(this, `store/${storeID}/webhook/${webhookID}`, 'DELETE');
        return json;
    }
    async updateStoreWebhook(storeID, webhookID, requestBody) {
        const json = await this..call(this, `store/${storeID}/webhook/${webhookID}`, 'PUT', requestBody);
        return json;
    }
    async getAllStores() {
        const json = await this..call(this, 'store', 'GET');
        return json;
    }
    async getStore(storeID) {
        const json = await this..call(this, `store/${storeID}`, 'GET');
        return json;
    }
    async getAllTransactions(isFee = false) {
        const json = await this..call(this, `transaction${isFee ? '?isFee=1' : ''}`, 'GET');
        return json;
    }
    async getTransaction(transactionID) {
        const json = await this..call(this, `transaction/${transactionID}`, 'GET');
        return json;
    }
    async (path = '', method, requestBody = {}) {
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
        }
        catch (err) {
            return { error: `${err}` };
        }
    }
}
