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

export let config: {
    isDevelopmentMode?: boolean,
    identifyRequest?: identifyRequest,
    identityCallback?: () => any,
    logLevel?: 'verbose' | 'warning' | 'none',
    sessionTimeout?: number,
    useCookieStorage?: boolean,
    maxProducts?: number,
    customFlags?: object,
    workspaceToken?: string,
    requiredWebviewBridgeName?: string,
    minWebviewBridgeVersion?: number,
    useNativeSdk?: boolean,
    isIOS?: boolean,
    appVersion?: string
};

export function endSession(): void;
export function getAppName(): string;
export function getAppVersion(): string;
export function getDeviceId(): string;
export function getIntegrationAttributes(integrationId: any): any;
export function getVersion(): string;
export function init(apiKey: string, config: any): void;
export function logError(error: string | object, attrs?: any): void;
export function logEvent(eventName: string, eventType?: number, eventInfo?: any, customFlags?: any): void;
export function logForm(selector: string, eventName: string, eventType: number, eventInfo: object): void;
export function logLink(selector: string, eventName: string, eventType: number, eventInfo: object): void;
export function logPageView(eventName: string, attrs?: object, customFlags?: object): void;
export function ready(func: () => any): void;
export function setAppName(name: string): void;
export function setAppVersion(version: string): void;
export function setLogLevel(newLogLevel: 'verbose' | 'warning' | 'none'): void;
export function setOptOut(isOptingOut: boolean): void;
export function setPosition(lat: number, lng: number): void;
export function setSessionAttribute(key: string, value: string | number | null): void;
export function startNewSession(): void;
export function startTrackingLocation(callback: () => any[]): void;
export function stopTrackingLocation(): void;

export namespace Consent {
    function createConsentState(): consentState;
    function createGDPRConsent(consented: boolean, timestamp: number, consentDocument: string, location: string, hardwareId: string): GDPRConsentState;
}

interface consentState {
    setGDPRConsentState: (gdprConsentState: GDPRConsentState) => consentState,
    addGDPRConsentState: (purpose: string, gdprConsent: GDPRConsentState) => consentState,
    getGDPRConsentState:() => GDPRConsentState,
    removeGDPRConsentState: () => consentState
}

interface GDPRConsentState {
    Consented: boolean,
    Timestamp: number,
    ConsentDocument: string,
    Location: string,
    HardwareId: string
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
    function getCurrentUser(): user;
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
    function createImpression(name: string, product: product): any;
    function createProduct(name: string, sku: string, price: number, quantity?: number, variant?: string, category?: string, brand?: string, position?: number, coupon?: string, attributes?: object): any;
    function createPromotion(id: string, creative: string, name: string, position: number): any;
    function createTransactionAttributes(id: string | number, affiliation: string, couponCode: string, revenue: number, shipping: string, tax: number): any;
    function logCheckout(step: number, options: object, attrs: object, customFlags: object): void;
    function logImpression(impression: impression, attrs: object, customFlags: object): void;
    function logProductAction(productActionType: number, product: product, attrs: object, customFlags: object): void;
    function logPromotion(type: number, promotion: promotion, attrs: object, customFlags: object): void;
    function logPurchase(transactionAttributes: object, product: productArray | product, clearCart: boolean, attrs: object, customFlags: object): void;
    function logRefund(transactionAttributes: transactionAttributes, product: object, clearCart: boolean, attrs: object, customFlags: object): void;
    function setCurrencyCode(code: string): void;

    namespace Cart {
        function add(product: object, logEventBoolean: boolean): void;
        function clear(): void;
        function remove(product: object, logEventBoolean: boolean): void;
    }
}

interface identifyRequest {
    userIdentities: {
        customerid?: string,
        email?: string,
        other?: string,
        other2?: string,
        other3?: string,
        other4?: string,
        facebook?: string,
        facebookcustomaudienceid?: string,
        google?: string,
        twitter?: string,
        microsoft?: string,
        yahoo?: string,
    }
}

interface user {
    getUserIdentities: () => userIdentities,
    getMPID: () => string,
    setUserTag: (tag: string) => void,
    removeUserTag: (tag: string) => void,
    setUserAttribute: (key: string, value: string) => void,
    setUserAttributes: (attributeObject: object) => void,
    removeUserAttribute: (key: string) => void,
    setUserAttributeList: (key: []) => void,
    removeAllUserAttributes: () => void,
    getUserAttributesLists: () => object,
    getAllUserAttributes: () => object,
    getCart: () => cart,
    getConsentState: () => consentState,
    setConsentState: (consentState) => void,
}

interface userIdentities {
    customerid?: string,
    email?: string,
    other?: string,
    other2?: string,
    other3?: string,
    other4?: string,
    facebook?: string,
    facebookcustomaudienceid?: string,
    google?: string,
    twitter?: string,
    microsoft?: string,
    yahoo?: string,
}

interface cart {
    add:(product:product) => void,
    remove:(product:product) => void,
    clear: () => void,
    getCartProducts: () =>any
}

interface product {
    name: string,
    sku: string,
    price: number,
    quantity?: number,
    variant?: string,
    category?: string,
    brand?: string,
    position?: number,
    coupon?: string,
    attributes?: object,
}

// this has a false positive when there is an array of products like [product, 'hi']
interface productArray {
    [index: number]: product;
}

interface transactionAttributes {
    Id: string | number,
    Affiliation?: string,
    CouponCode?: string,
    Revenue?: number,
    Shipping?: string,
    Tax?: number,
}

interface impression {
    name: string,
    product: product
}

interface promotion {
    id: string,
    creative?: string,
    name?: string,
    position?: number
}