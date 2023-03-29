import { IPaymentMethod } from "./payment-method.interface";

export default class PixPaymentMethod implements IPaymentMethod {
    public isValid() {
        return true;
    }

    public process() {
        return {};
    }
}