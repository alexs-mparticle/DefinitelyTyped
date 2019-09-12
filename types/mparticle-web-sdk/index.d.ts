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

interface config {
    isDevelopmentMode?: boolean,
    identifyRequest?: IdentifyRequest,
    identityCallback?: Callback,
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
}

export function endSession(): void;
export function getAppName(): string;
export function getAppVersion(): string;
export function getDeviceId(): string;
export function getVersion(): string;
export function init(apiKey: string, config: config): void;
export function logError(error: string | object, attrs?: object): void;
export function logEvent(eventName: string, eventType?: number, eventInfo?: object, customFlags?: object): void;
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
export function startTrackingLocation(callback: () => location): void;
export function stopTrackingLocation(): void;

export namespace Consent {
    function createConsentState(): ConsentState;
    function createGDPRConsent(consented: boolean, timestamp: number, consentDocument: string, location: string, hardwareId: string): GDPRConsentState;
}

interface ConsentState {
    setGDPRConsentState: (gdprConsentState: GDPRConsentState) => ConsentState,
    addGDPRConsentState: (purpose: string, gdprConsent: GDPRConsentState) => ConsentState,
    getGDPRConsentState:() => GDPRConsentState,
    removeGDPRConsentState: () => ConsentState
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
    //todo alias users
    function aliasUsers(aliasRequest: any, callback: any): void;
    function createAliasRequest(sourceUser: any, destinationUser: any): any;
    //
    function getCurrentUser(): User;
    function getUser(mpid: string): User;
    function getUsers(): User[];
    function identify(identityApiData: identityApiData, callback: Callback): void;
    function login(identityApiData: identityApiData, callback: Callback): void;
    function logout(identityApiData: identityApiData, callback: Callback): void;
    function modify(identityApiData: identityApiData, callback: Callback): void;
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
    function createImpression(name: string, product: Product): Impression;
    function createProduct(name: string, sku: string, price: number, quantity?: number, variant?: string, category?: string, brand?: string, position?: number, coupon?: string, attributes?: object): Product;
    function createPromotion(id: string, creative: string, name: string, position: number): Promotion;
    function createTransactionAttributes(id: string | number, affiliation: string, couponCode: string, revenue: number, shipping: string, tax: number): transactionAttributes;
    function logCheckout(step: number, options: object, attrs: object, customFlags: object): void;
    function logImpression(impression: Impression, attrs: object, customFlags: object): void;
    function logProductAction(productActionType: number, product: Product, attrs: object, customFlags: object): void;
    function logPromotion(type: number, promotion: Promotion, attrs: object, customFlags: object): void;
    function logPurchase(transactionAttributes: object, product: Product[] | Product, clearCart: boolean, attrs: object, customFlags: object): void;
    function logRefund(transactionAttributes: transactionAttributes, product: Product, clearCart: boolean, attrs: object, customFlags: object): void;
    function setCurrencyCode(code: string): void;

    namespace Cart {
        function add(product: object, logEventBoolean: boolean): void;
        function clear(): void;
        function remove(product: object, logEventBoolean: boolean): void;
    }
}

interface IdentifyRequest {
    userIdentities: UserIdentities
}

interface User {
    getUserIdentities: () => UserIdentities,
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
    getCart: () => Cart,
    getConsentState: () => ConsentState,
    setConsentState: (ConsentState) => void,
}

interface UserIdentities {
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

interface Cart {
    add:(product: Product) => void,
    remove:(product: Product) => void,
    clear: () => void,
    getCartProducts: () => Product[]
}

interface Product {
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

interface transactionAttributes {
    Id: string | number,
    Affiliation?: string,
    CouponCode?: string,
    Revenue?: number,
    Shipping?: string,
    Tax?: number,
}

interface Impression {
    name: string,
    product: Product
}

interface Promotion {
    id: string,
    creative?: string,
    name?: string,
    position?: number
}

interface identityApiData {
    userIdentities: UserIdentities
}

interface Callback {
    (): void;
}

interface location {
    coords: object,
    timestamp: number
}