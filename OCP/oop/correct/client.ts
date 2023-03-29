import CardPaymentMethod from "../mock/correct/card.payment-method";
import Payment from "./payment";

const payment = new Payment();
const paymentMethod = new CardPaymentMethod();

payment.charge(paymentMethod);
