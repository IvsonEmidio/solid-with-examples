import Payment from "./payment";

const payment = new Payment();
const paymentMethod = 'card';

payment.charge(paymentMethod);