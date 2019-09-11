// Type definitions for mParticle SDK 2.9.10
// Project: https://github.com/mParticle/mparticle-web-sdk
// Definitions by: Alex Sapountzis <https://github.com/asap>
//                 Robert Ing <https://github.com/rmi22186>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace mParticle;

export const CommerceEventType: {
    ProductAddToCart: number;
    ProductAddToWishlist: number;
    ProductCheckout: number;
    ProductCheckoutOption: number;
    ProductClick: number;
    ProductImpression: number;
    ProductPurchase: number;
    ProductRefund: number;
    ProductRemoveFromCart: number;
    ProductRemoveFromWishlist: number;
    ProductViewDetail: number;
    PromotionClick: number;
    PromotionView: number;
};

export const config: {
};

export function endSession(): void;
export function getAppName(): string;
export function getAppVersion(): string;
export function getDeviceId(): string;
export function getIntegrationAttributes(integrationId: any): any;
export function getVersion(): string;
export function init(apiKey: string, config: any): void;
export function logError(error: any, attrs: any): void;
export function logEvent(eventName: string, eventType?: any, eventInfo?: any, customFlags?: any): void;
export function logForm(selector: any, eventName: any, eventType: any, eventInfo: any): void;
export function logLink(selector: any, eventName: any, eventType: any, eventInfo: any): void;
export function logPageView(eventName: any, attrs: any, customFlags: any): void;
export function ready(f: any): void;
export function setAppName(name: string): void;
export function setAppVersion(version: string): void;
export function setLogLevel(newLogLevel: string): void;
export function setOptOut(isOptingOut: boolean): void;
export function setPosition(lat: number, lng: number): void;
export function setSessionAttribute(key: string, value: string | number | null): void;
export function startNewSession(): void;
export function startTrackingLocation(callback: ()=>any[]): void;
export function stopTrackingLocation(): void;

export namespace Consent {
    function createConsentState(consentState: object): object;
    function createGDPRConsent(consented: boolean, timestamp: number, consentDocument: string, location: string, hardwareId: string): object;
}

export namespace EventType {
    const Location: number;
    const Navigation: number;
    const Other: number;
    const Search: number;
    const Social: number;
    const Transaction: number;
    const Unknown: number;
    const UserContent: number;
    const UserPreference: number;
}

export namespace Identity {
    function aliasUsers(aliasRequest: any, callback: any): void;
    function createAliasRequest(sourceUser: any, destinationUser: any): any;
    function getCurrentUser(): any;
    function getUser(mpid: any): any;
    function getUsers(): any;
    function identify(identityApiData: any, callback: any): void;
    function login(identityApiData: any, callback: any): void;
    function logout(identityApiData: any, callback: any): void;
    function modify(identityApiData: any, callback: any): void;
}

export namespace IdentityType {
    const CustomerId: number;
    const Email: number;
    const Facebook: number;
    const FacebookCustomAudienceId: number;
    const Google: number;
    const Microsoft: number;
    const Other: number;
    const Other2: number;
    const Other3: number;
    const Other4: number;
    const Twitter: number;
    const Yahoo: number;
}

export namespace ProductActionType {
    const AddToCart: number;
    const AddToWishlist: number;
    const Checkout: number;
    const CheckoutOption: number;
    const Click: number;
    const Purchase: number;
    const Refund: number;
    const RemoveFromCart: number;
    const RemoveFromWishlist: number;
    const Unknown: number;
    const ViewDetail: number;
}

export namespace PromotionType {
    const PromotionClick: number;
    const PromotionView: number;
    const Unknown: number;
}

export namespace eCommerce {
    function createImpression(name: string, product: object): any;
    function createProduct(name: string, sku: string, price: number, quantity: number, variant: string, category: string, brand: string, position: number, coupon: string, attributes: object): any;
    function createPromotion(id: string, creative: string, name: string, position: number): any;
    function createTransactionAttributes(id: string | number, affiliation: string, couponCode: string, revenue: number, shipping: string, tax: number): any;
    function logCheckout(step: number, options: object, attrs: object, customFlags: object): void;
    function logImpression(impression: object, attrs: object, customFlags: object): void;
    function logProductAction(productActionType: number, product: object, attrs: object, customFlags: object): void;
    function logPromotion(type: number, promotion: object, attrs: object, customFlags: object): void;
    function logPurchase(transactionAttributes: object, product: object, clearCart: boolean, attrs: object, customFlags: object): void;
    function logRefund(transactionAttributes: object, product: object, clearCart: boolean, attrs: object, customFlags: object): void;
    function setCurrencyCode(code: string): void;

    namespace Cart {
        function add(product: object, logEventBoolean: boolean): void;
        function clear(): void;
        function remove(product: object, logEventBoolean: boolean): void;
    }
}