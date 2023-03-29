import CardPaymentMethod from "../mock/wrong/card.payment-method";
import PixPaymentMethod from "../mock/wrong/pix-payment-method";

export default class Payment {
    private cardPM: CardPaymentMethod;
    private pixPM: PixPaymentMethod;

    constructor() {
        this.cardPM = new CardPaymentMethod();
        this.pixPM = new PixPaymentMethod();
    }

    public charge(paymentMethod: string) {
        if (paymentMethod === 'card') {
            const isValid = this.cardPM.isCardValid();

            if (isValid) {
                return this.cardPM.processCard();
            }
        } else if (paymentMethod === 'pix') {
            const isValid = this.pixPM.isPixValid();

            if (isValid) {
                return this.pixPM.processPayment();
            }
        }

        throw new Error('Not accepted payment method');
    }
}