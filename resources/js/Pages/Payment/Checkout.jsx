import Navbar from "@/Components/Navbar";
import React from "react";

export default function Checkout({ auth, carts }) {
    return (
        <>
            <Navbar auth={auth} />
            <section className="container flex justify-center h-screen px-4 py-8 mx-auto mt-20">
                <form
                    action="/payment"
                    method="POST"
                    className="grid grid-cols-2 gap-10 place-items-center"
                    id="payment-form"
                >
                    <fieldset className="mb-4 flex-col flex justify-center gap-4 w-[400px]">
                        <label htmlFor="name" className="flex flex-col">
                            <span className="mb-1 text-sm font-semibold">
                                Cardholder Name
                            </span>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                required
                                className="px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            />
                        </label>
                        <label htmlFor="phone" className="flex flex-col">
                            <span className="mb-1 text-sm font-semibold">
                                Phone
                            </span>
                            <input
                                type="text"
                                name="phone"
                                id="phone"
                                required
                                className="px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            />
                        </label>
                        <label htmlFor="address" className="flex flex-col">
                            <span className="mb-1 text-sm font-semibold">
                                Address
                            </span>
                            <input
                                type="text"
                                name="address"
                                id="address"
                                required
                                className="px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            />
                        </label>
                        <label htmlFor="city" className="flex flex-col">
                            <span className="mb-1 text-sm font-semibold">
                                City
                            </span>
                            <input
                                type="text"
                                name="city"
                                id="city"
                                required
                                className="px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            />
                        </label>
                        <label htmlFor="country" className="flex flex-col">
                            <span className="mb-1 text-sm font-semibold">
                                Country
                            </span>
                            <input
                                type="text"
                                name="country"
                                id="country"
                                required
                                className="px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            />
                        </label>
                        <label htmlFor="postal_code" className="flex flex-col">
                            <span className="mb-1 text-sm font-semibold">
                                Postal Code
                            </span>
                            <input
                                type="text"
                                name="postal_code"
                                id="postal_code"
                                required
                                className="px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            />
                        </label>
                        <label htmlFor="card-element" className="">
                            <span className="mb-1 text-sm font-semibold">
                                Card
                            </span>
                            <div id="card-element"></div>
                        </label>
                        <label
                            htmlFor="shipping_method"
                            className="grid w-full"
                        >
                            <span className="mb-1 text-sm font-semibold">
                                Shipping Method
                            </span>
                            <select
                                name="shipping_method"
                                id="shipping_method"
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            >
                                <option value="free">Free</option>
                                <option value="paid">Paid</option>
                            </select>
                        </label>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 text-white bg-black rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                        >
                            Pay
                        </button>
                    </fieldset>
                    <div className="flex flex-col w-full h-[700px] border rounded-md px-4">
                        <h3 className="mb-4 text-lg font-semibold">
                            Order Summary
                        </h3>
                        <div className="grid gap-4">
                            {carts.map((cart) => (
                                <div
                                    key={cart.id}
                                    className="flex justify-between"
                                >
                                    <p>{cart.product.name}</p>
                                    <p>${cart.total}</p>
                                    <p>{cart.quantity}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </form>
            </section>
        </>
    );
}
