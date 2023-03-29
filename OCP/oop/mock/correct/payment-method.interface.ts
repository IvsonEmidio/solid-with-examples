export interface IPaymentMethod {
    isValid: () => boolean,
    process: () => object
}