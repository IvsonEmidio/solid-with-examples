import { IPaymentMethod } from "./payment-method.interface";

export default class BilletPaymentMethod implements IPaymentMethod {
    public isValid() {
        return true;
    }

    public process() {
        return {}
    }
}