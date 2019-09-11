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

export const Store: {
};

export const config: {
};

export const isIOS: boolean;

export const preInit: {
    featureFlags: {
    };
    forwarderConstructors: any[];
    integrationDelays: {
    };
    readyQueue: any[];
};

export function addForwarder(forwarder: any): void;

export function configurePixel(settings: any): void;

export function endSession(): void;

export function generateHash(name: any): any;

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

export function reset(config: any, keepPersistence: any): void;

export function setAppName(name: any): void;

export function setAppVersion(version: any): void;

export function setIntegrationAttribute(integrationId: any, attrs: any): void;

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

    function getName(id: any): any;

}

export namespace Identity {
    const HTTPCodes: {
        activeIdentityRequest: number;
        activeSession: number;
        loggingDisabledOrMissingAPIKey: number;
        nativeIdentityRequest: number;
        noHttpCoverage: number;
        tooManyRequests: number;
        validationIssue: number;
    };

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

    function getIdentityName(identityType: any): any;

    function getIdentityType(identityName: any): any;

    function getName(identityType: any): any;

    function isValid(identityType: any): any;

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

    function getExpansionName(id: any): any;

    function getName(id: any): any;

}

export namespace Validators {
    function isFunction(fn: any): any;

    function isStringOrNumber(value: any): any;

    function isValidAttributeValue(value: any): any;

    function isValidKeyValue(key: any): any;

    function validateIdentities(identityApiData: any, method: any): any;

}

export namespace cookieSyncManager {
    function attemptCookieSync(previousMPID: any, mpid: any): void;

    function replaceAmp(string: any): any;

    function replaceMPID(string: any, mpid: any): any;

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

export namespace persistence {
    const forwardingStatsBatches: {
        forwardingStatsEventQueue: any[];
        uploadsTable: {
        };
    };

    function createCookieString(string: any): any;

    function decodeCookies(cookie: any): any;

    function determineLocalStorageAvailability(storage: any): any;

    function expireCookies(cookieName: any): void;

    function findPrevCookiesBasedOnUI(identityApiData: any): void;

    function getAllUserAttributes(mpid: any): any;

    function getAllUserProductsFromLS(): any;

    function getCartProducts(mpid: any): any;

    function getConsentState(mpid: any): any;

    function getCookie(): any;

    function getCookieDomain(): any;

    function getDeviceId(): any;

    function getFirstSeenTime(mpid: any): any;

    function getLastSeenTime(mpid: any): any;

    function getLocalStorage(): any;

    function getPersistence(): any;

    function getUserIdentities(mpid: any): any;

    function getUserProductsFromLS(mpid: any): any;

    function initializeStorage(): void;

    function parseDeviceId(serverSettings: any): any;

    function reduceAndEncodeCookies(cookies: any, expires: any, domain: any, maxCookieSize: any): any;

    function replaceApostrophesWithQuotes(string: any): any;

    function replaceCommasWithPipes(string: any): any;

    function replacePipesWithCommas(string: any): any;

    function replaceQuotesWithApostrophes(string: any): any;

    function resetPersistence(): void;

    function retrieveDeviceId(): any;

    function revertCookieString(string: any): any;

    function saveCookies(cookies: any): void;

    function saveUserAttributesToCookies(mpid: any, userAttributes: any): void;

    function saveUserConsentStateToCookies(mpid: any, consentState: any): void;

    function saveUserCookieSyncDatesToCookies(mpid: any, csd: any): void;

    function saveUserIdentitiesToCookies(mpid: any, userIdentities: any): void;

    function setCartProducts(allProducts: any): void;

    function setCookie(): void;

    function setFirstSeenTime(mpid: any, time: any): void;

    function setLastSeenTime(mpid: any, time: any): void;

    function setLocalStorage(): void;

    function storeDataInMemory(obj: any, currentMPID: any): void;

    function update(): void;

    function useLocalStorage(): any;

}

export namespace sessionManager {
    function clearSessionTimeout(): void;

    function endSession(override: any): void;

    function getSession(): any;

    function initialize(): void;

    function resetSessionTimer(): void;

    function setSessionTimer(): void;

    function startNewSession(): void;

}