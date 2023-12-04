import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { loadStripe } from "@stripe/stripe-js";
import { CardElement, Elements, useElements, useStripe } from "@stripe/react-stripe-js";

const CheckoutForm = ({onPaymentSuccess}) => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            if(paymentMethod){
                onPaymentSuccess();
            }
        }
    };
    return (
        <form className="p-0 md:p-52" onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className="btn btn-primary btn-md mt-4" type="submit" disabled={!stripe}>
                Pay
            </button>
        </form>
    );
};


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
    const con = useLoaderData();
    const { user } = useContext(AuthContext);
    const { _id, contest_name, image, reg_count, description, prizemoney, deadline } = con;
    const handlePaymentSuccess = () => {
        
    }
    return (
        <div>
            <h2 className="text-4xl text-center mt-12 font-extrabold">Pay Now and Register for Contest</h2>
            <Elements stripe={stripePromise}>
                <CheckoutForm onPaymentSuccess={handlePaymentSuccess}/>
            </Elements>
        </div>
    );
};

export default Payment;