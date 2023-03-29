import { IPaymentMethod } from "./payment-method.interface";

export default class CardPaymentMethod implements IPaymentMethod {
    public isValid() {
        return true;
    }

    public process() {
        return {};
    }
}