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

export function getAppName(): any;

export function getAppVersion(): any;

export function getDeviceId(): any;

export function getIntegrationAttributes(integrationId: any): any;

export function getVersion(): any;

export function init(apiKey: any, config: any): void;

export function logError(error: any, attrs: any): void;

export function logEvent(eventName: string, eventType?: any, eventInfo?: any, customFlags?: any): void;

export function logForm(selector: any, eventName: any, eventType: any, eventInfo: any): void;

export function logLink(selector: any, eventName: any, eventType: any, eventInfo: any): void;

export function logPageView(eventName: any, attrs: any, customFlags: any): void;

export function ready(f: any): void;

export function setAppName(name: any): void;

export function setAppVersion(version: any): void;

export function setLogLevel(newLogLevel: any): void;

export function setOptOut(isOptingOut: any): void;

export function setPosition(lat: any, lng: any): void;

export function setSessionAttribute(key: any, value: any): void;

export function startNewSession(): void;

export function startTrackingLocation(callback: any): void;

export function stopTrackingLocation(): void;

export namespace Consent {
    function createConsentState(consentState: any): any;

    function createGDPRConsent(consented: any, timestamp: any, consentDocument: any, location: any, hardwareId: any): any;

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

    function getName(identityType: any): any;
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

    function getExpansionName(id: any): any;

    function getName(id: any): any;

}

export namespace PromotionType {
    const PromotionClick: number;

    const PromotionView: number;

    const Unknown: number;
}

export namespace eCommerce {
    function createImpression(name: any, product: any): any;

    function createProduct(name: any, sku: any, price: any, quantity: any, variant: any, category: any, brand: any, position: any, coupon: any, attributes: any): any;

    function createPromotion(id: any, creative: any, name: any, position: any): any;

    function createTransactionAttributes(id: any, affiliation: any, couponCode: any, revenue: any, shipping: any, tax: any): any;

    function expandCommerceEvent(event: any): any;

    function logCheckout(step: any, options: any, attrs: any, customFlags: any): void;

    function logImpression(impression: any, attrs: any, customFlags: any): void;

    function logProductAction(productActionType: any, product: any, attrs: any, customFlags: any): void;

    function logPromotion(type: any, promotion: any, attrs: any, customFlags: any): void;

    function logPurchase(transactionAttributes: any, product: any, clearCart: any, attrs: any, customFlags: any): void;

    function logRefund(transactionAttributes: any, product: any, clearCart: any, attrs: any, customFlags: any): void;

    function setCurrencyCode(code: any): void;

    namespace Cart {
        function add(product: any, logEventBoolean: any): void;

        function clear(): void;

        function remove(product: any, logEventBoolean: any): void;

    }
}