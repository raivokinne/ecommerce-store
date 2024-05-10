import Navbar from "@/Components/Navbar";
import { useForm } from "@inertiajs/react";

export default function Index({ carts, auth }) {
    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
    } = useForm();
    const submit = (e) => {
        e.preventDefault();

        destroy(route("cart.destroy", data.id));
    };
    return (
        <>
            <Navbar auth={auth} />
            <section className="container px-4 py-8 mx-auto mt-20">
                <h2 className="ml-40 text-xl font-semibold leading-tight text-gray-800">
                    Shopping Cart
                </h2>

                <div className="py-12">
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="overflow-hidden bg-white shadow-xl sm:rounded-lg">
                            <div className="p-6 bg-white border-b border-gray-200">
                                <h3 className="mb-4 text-lg font-semibold">
                                    Your Cart Items
                                </h3>

                                {carts.length === 0 ? (
                                    <p>Your cart is empty.</p>
                                ) : (
                                    <>
                                        <table className="min-w-full divide-y divide-gray-200">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                                                    >
                                                        Product
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                                                    >
                                                        Quantity
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                                                    >
                                                        Total
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-gray-200">
                                                {carts.map((cart) => (
                                                    <tr key={cart.id}>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            {cart.product.name}
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            {cart.quantity}
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            ${cart.total}
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <form
                                                                onSubmit={
                                                                    submit
                                                                }
                                                            >
                                                                <button
                                                                    type="submit"
                                                                    className="text-red-600"
                                                                    onClick={() =>
                                                                        setData(
                                                                            "id",
                                                                            cart.id
                                                                        )
                                                                    }
                                                                >
                                                                    Cancel
                                                                </button>
                                                            </form>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                        <a
                                            href="/checkout"
                                            className="px-4 py-2 m-10 mt-10 text-white bg-black rounded"
                                        >
                                            Checkout
                                        </a>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
