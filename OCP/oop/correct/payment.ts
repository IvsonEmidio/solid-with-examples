import { IPaymentMethod } from "../mock/correct/payment-method.interface";

export default class Payment {
    public charge(paymentMethod: IPaymentMethod) {
        const isValid = paymentMethod.isValid();

        if (isValid) {
            return paymentMethod.process();
        }

        throw new Error('Not accepted payment method');
    }
}