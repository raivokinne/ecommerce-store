import Navbar from "@/Components/Navbar";
import React from "react";

export default function Checkout() {
    var stripe = Stripe(import.meta.env.VITE_STRIPE_KEY);
    var elements = stripe.elements();
    var card = elements.create("card");
    card.mount("#card-element");

    // Handle form submission
    var form = document.getElementById("payment-form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        stripe.createToken(card).then(function (result) {
            if (result.error) {
                // Inform the user if there was an error.
                alert(result.error.message);
            } else {
                // Send the token to your server.
                stripeTokenHandler(result.token);
            }
        });
    });

    function stripeTokenHandler(token) {
        // Insert the token ID into the form so it gets submitted to the server
        var form = document.getElementById("payment-form");
        var hiddenInput = document.createElement("input");
        hiddenInput.setAttribute("type", "hidden");
        hiddenInput.setAttribute("name", "stripeToken");
        hiddenInput.setAttribute("value", token.id);
        form.appendChild(hiddenInput);

        // Submit the form
        form.submit();
    }
    const submit = (e) => {
        e.preventDefault();
    };
    return (
        <>
            <Navbar />
            <section class="container mx-auto mt-20 px-4 py-8 h-screen flex justify-center">
                <form
                    onSubmit={submit}
                    class="grid grid-cols-2 gap-10 place-items-center"
                    id="payment-form"
                >
                    <fieldset class="mb-4 flex-col flex justify-center gap-4 w-[400px]">
                        <label for="name" class="flex flex-col">
                            <span class="text-sm font-semibold mb-1">
                                Cardholder Name
                            </span>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                required
                                class="border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                            />
                        </label>
                        <label for="phone" class="flex flex-col">
                            <span class="text-sm font-semibold mb-1">
                                Phone
                            </span>
                            <input
                                type="text"
                                name="phone"
                                id="phone"
                                required
                                class="border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                            />
                        </label>
                        <label for="address" class="flex flex-col">
                            <span class="text-sm font-semibold mb-1">
                                Address
                            </span>
                            <input
                                type="text"
                                name="address"
                                id="address"
                                required
                                class="border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                            />
                        </label>
                        <label for="city" class="flex flex-col">
                            <span class="text-sm font-semibold mb-1">City</span>
                            <input
                                type="text"
                                name="city"
                                id="city"
                                required
                                class="border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                            />
                        </label>
                        <label for="country" class="flex flex-col">
                            <span class="text-sm font-semibold mb-1">
                                Country
                            </span>
                            <input
                                type="text"
                                name="country"
                                id="country"
                                required
                                class="border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                            />
                        </label>
                        <label for="postal_code" class="flex flex-col">
                            <span class="text-sm font-semibold mb-1">
                                Postal Code
                            </span>
                            <input
                                type="text"
                                name="postal_code"
                                id="postal_code"
                                required
                                class="border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                            />
                        </label>
                        <label for="card-element" class="">
                            <span class="text-sm font-semibold mb-1">Card</span>
                            <div id="card-element"></div>
                        </label>
                        <label for="shipping_method" class="grid w-full">
                            <span class="text-sm font-semibold mb-1">
                                Shipping Method
                            </span>
                            <select
                                name="shipping_method"
                                id="shipping_method"
                                class="border w-full rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                            >
                                <option value="free">Free</option>
                                <option value="paid">Paid</option>
                            </select>
                        </label>
                        <button
                            type="submit"
                            class="bg-black w-full text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                        >
                            Pay
                        </button>
                    </fieldset>
                    <div class="flex flex-col w-full h-[700px] border rounded-md px-4">
                        <h3 class="text-lg font-semibold mb-4">
                            Order Summary
                        </h3>
                        <div class="grid gap-4"></div>
                    </div>
                </form>
            </section>
        </>
    );
}
