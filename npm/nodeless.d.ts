export declare class Nodeless {
    readonly API_KEY: string;
    readonly BASE_URL: string;
    constructor(API_KEY: string, API_VERSION?: string, testnet?: boolean);
    createPayWallRequest(paywallID: string): Promise<unknown>;
    getPayWallRequest(paywallID: string, requestID: string): Promise<unknown>;
    getPayWallRequestStatus(paywallID: string, requestID: string): Promise<unknown>;
    getAllPaywallWebhooks(paywallID: string): Promise<unknown>;
    createPaywallWebhook(paywallID: string, requestBody: {
        type: 'store' | 'donation_page' | 'paywall' | 'inbox';
        url: string;
        events: Array<'new' | 'pending_confirmation' | 'paid' | 'overpaid' | 'underpaid' | 'in_flight' | 'expired' | 'cancelled'>;
        secret: string;
        status: 'active' | 'inactive';
    }): Promise<unknown>;
    getPaywallWebhook(paywallID: string, webhookID: string): Promise<unknown>;
    deletePaywallWebhook(paywallID: string, webhookID: string): Promise<unknown>;
    updatePaywallWebhook(paywallID: string, webhookID: string, requestBody: {
        url: string;
        events: Array<'new' | 'pending_confirmation' | 'paid' | 'overpaid' | 'underpaid' | 'in_flight' | 'expired' | 'cancelled'>;
        status: 'active' | 'inactive';
    }): Promise<unknown>;
    getAllPaywalls(): Promise<unknown>;
    createPaywall(requestBody: {
        name: string;
        type: 'content' | 'download' | 'redirect' | 'wp_article';
        price: number;
        settings?: {
            [key: string]: any;
        };
    }): Promise<unknown>;
    getPaywall(paywallID: string): Promise<unknown>;
    updatePaywall(paywallID: string, requestBody: {
        name: string;
        type: 'content' | 'download' | 'redirect' | 'wp_article';
        price: number;
        settings?: {
            [key: string]: any;
        };
    }): Promise<unknown>;
    deletePaywall(paywallID: string): Promise<unknown>;
    getStatus(): Promise<unknown>;
    createStoreInvoice(storeID: string, requestBody: {
        amount: number;
        currency: 'usd' | 'eur' | 'cad' | 'jpy' | 'gbp' | 'chf' | 'btc' | 'sats' | 'USD' | 'EUR' | 'CAD' | 'JPY' | 'GBP' | 'CHF' | 'BTC' | 'SATS';
        buyerEmail?: string;
        redirectUrl?: string;
        metadata?: {
            [key: string]: any;
        };
    }): Promise<unknown>;
    getStoreInvoice(storeID: string, invoiceID: string): Promise<unknown>;
    getStoreInvoiceStatus(storeID: string, invoiceID: string): Promise<unknown>;
    getAllStoreWebhooks(storeID: string): Promise<unknown>;
    createStoreWebhook(storeID: string, requestBody: {
        type: 'store' | 'donation_page' | 'paywall' | 'inbox';
        url: string;
        events: Array<'new' | 'pending_confirmation' | 'paid' | 'overpaid' | 'underpaid' | 'in_flight' | 'expired' | 'cancelled'>;
        secret: string;
        status: 'active' | 'inactive';
    }): Promise<unknown>;
    getStoreWebhook(storeID: string, webhookID: string): Promise<unknown>;
    deleteStoreWebhook(storeID: string, webhookID: string): Promise<unknown>;
    updateStoreWebhook(storeID: string, webhookID: string, requestBody: {
        url: string;
        events: Array<'new' | 'pending_confirmation' | 'paid' | 'overpaid' | 'underpaid' | 'in_flight' | 'expired' | 'cancelled'>;
        status: 'active' | 'inactive';
    }): Promise<unknown>;
    getAllStores(): Promise<unknown>;
    getStore(storeID: string): Promise<unknown>;
    getAllTransactions(isFee?: boolean): Promise<unknown>;
    getTransaction(transactionID: string): Promise<unknown>;
    callAPI(path: string | undefined, method: 'POST' | 'GET' | 'PUT' | 'DELETE', requestBody?: {}): Promise<unknown>;
}
