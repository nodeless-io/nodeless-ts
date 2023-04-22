export declare class Nodeless {
    readonly API_KEY: string;
    readonly BASE_URL: string;
    constructor(API_KEY: string, API_VERSION?: string, testnet?: boolean);
    createPayWallRequest(paywallID: string): Promise<any>;
    getPayWallRequest(paywallID: string, requestID: string): Promise<any>;
    getPayWallRequestStatus(paywallID: string, requestID: string): Promise<any>;
    getAllPaywallWebhooks(paywallID: string): Promise<any>;
    createPaywallWebhook(paywallID: string, requestBody: {
        type: 'store' | 'donation_page' | 'paywall' | 'inbox';
        url: string;
        events: Array<'new' | 'pending_confirmation' | 'paid' | 'overpaid' | 'underpaid' | 'in_flight' | 'expired' | 'cancelled'>;
        secret: string;
        status: 'active' | 'inactive';
    }): Promise<any>;
    getPaywallWebhook(paywallID: string, webhookID: string): Promise<any>;
    deletePaywallWebhook(paywallID: string, webhookID: string): Promise<any>;
    updatePaywallWebhook(paywallID: string, webhookID: string, requestBody: {
        url: string;
        events: Array<'new' | 'pending_confirmation' | 'paid' | 'overpaid' | 'underpaid' | 'in_flight' | 'expired' | 'cancelled'>;
        status: 'active' | 'inactive';
    }): Promise<any>;
    getAllPaywalls(): Promise<any>;
    createPaywall(requestBody: {
        name: string;
        type: 'content' | 'download' | 'redirect' | 'wp_article';
        price: number;
        settings?: {
            [key: string]: any;
        };
    }): Promise<any>;
    getPaywall(paywallID: string): Promise<any>;
    updatePaywall(paywallID: string, requestBody: {
        name: string;
        type: 'content' | 'download' | 'redirect' | 'wp_article';
        price: number;
        settings?: {
            [key: string]: any;
        };
    }): Promise<any>;
    deletePaywall(paywallID: string): Promise<any>;
    getStatus(): Promise<any>;
    createStoreInvoice(storeID: string, requestBody: {
        amount: number;
        currency: 'usd' | 'eur' | 'cad' | 'jpy' | 'gbp' | 'chf' | 'btc' | 'sats' | 'USD' | 'EUR' | 'CAD' | 'JPY' | 'GBP' | 'CHF' | 'BTC' | 'SATS';
        buyerEmail?: string;
        redirectUrl?: string;
        metadata?: {
            [key: string]: any;
        };
    }): Promise<any>;
    getStoreInvoice(storeID: string, invoiceID: string): Promise<any>;
    getStoreInvoiceStatus(storeID: string, invoiceID: string): Promise<any>;
    getAllStoreWebhooks(storeID: string): Promise<any>;
    createStoreWebhook(storeID: string, requestBody: {
        type: 'store' | 'donation_page' | 'paywall' | 'inbox';
        url: string;
        events: Array<'new' | 'pending_confirmation' | 'paid' | 'overpaid' | 'underpaid' | 'in_flight' | 'expired' | 'cancelled'>;
        secret: string;
        status: 'active' | 'inactive';
    }): Promise<any>;
    getStoreWebhook(storeID: string, webhookID: string): Promise<any>;
    deleteStoreWebhook(storeID: string, webhookID: string): Promise<any>;
    updateStoreWebhook(storeID: string, webhookID: string, requestBody: {
        url: string;
        events: Array<'new' | 'pending_confirmation' | 'paid' | 'overpaid' | 'underpaid' | 'in_flight' | 'expired' | 'cancelled'>;
        status: 'active' | 'inactive';
    }): Promise<any>;
    getAllStores(): Promise<any>;
    getStore(storeID: string): Promise<any>;
    getAllTransactions(isFee?: boolean): Promise<any>;
    getTransaction(transactionID: string): Promise<any>;
    callAPI(path: string, method: 'POST' | 'GET' | 'PUT' | 'DELETE', requestBody?: {}): Promise<any>;
}
