import Navbar from "@/Components/Navbar";
import { useForm } from "@inertiajs/react";

export default function Show({ product, auth }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        user_id: auth.user.id,
        product_id: product.id,
        quantity: 1,
        price: product.price,
    });
    const submit = (e) => {
        e.preventDefault();

        post(route("cart.store"));
    };
    return (
        <>
            <Navbar auth={auth} />
            <section className="flex items-center justify-center h-screen bg-gray-100">
                <div className="p-8 mx-auto text-black bg-white rounded-lg shadow-lg">
                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <img
                                className="rounded-lg shadow-md w-[700px] h-[700px]"
                                src={product.image}
                                alt={product.name}
                            />
                            <p className="mt-4 text-lg font-semibold">
                                Category: {product.category.name}
                            </p>
                            <p className="mb-4 text-lg font-semibold">
                                Brand: {product.brand}
                            </p>
                        </div>
                        <div className="flex flex-col justify-between">
                            <div className="flex flex-col">
                                <h1 className="mb-4 text-3xl font-bold">
                                    {product.name}
                                </h1>
                                <p className="mb-4 text-xl text-gray-700">
                                    {product.description}
                                </p>
                                <p className="mb-4 text-xl font-bold">
                                    ${product.price}
                                </p>
                            </div>

                            <div className="grid gap-4">
                                <div>
                                    <label
                                        htmlFor="quantity"
                                        className="block mb-2 text-lg font-medium text-gray-900"
                                    >
                                        Quantity
                                    </label>
                                    <input
                                        type="number"
                                        id="quantity"
                                        name="quantity"
                                        value={data.quantity}
                                        onChange={(e) =>
                                            setData("quantity", e.target.value)
                                        }
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                                    />
                                </div>

                                <form onSubmit={submit}>
                                    <button
                                        type="submit"
                                        className="w-full px-4 py-2 text-white bg-black rounded-lg"
                                    >
                                        Add to Cart
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
