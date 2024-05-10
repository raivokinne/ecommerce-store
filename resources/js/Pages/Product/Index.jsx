import Navbar from "@/Components/Navbar";

export default function Shop({ products, auth }) {
    return (
        <>
            <Navbar auth={auth} />
            <section className="flex items-center justify-center h-full bg-gray-100">
                <div className="grid grid-cols-4 gap-20 mt-20">
                    {products.length > 0 ? (
                        products.map((product) => (
                            <div
                                key={product.id}
                                className="max-w-sm m-10 text-black bg-white border border-gray-200 rounded-lg shadow"
                            >
                                <a href="#">
                                    <img
                                        className="rounded-t-lg w-[300px] h-[300px]"
                                        src={product.image}
                                        alt={product.name}
                                    />
                                </a>
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-black dark:text-white">
                                            {product.name}
                                        </h5>
                                    </a>
                                    <p className="mb-3 font-normal text-gray-800">
                                        {product.description}
                                    </p>
                                    <a
                                        href={`/shop/${product.id}`}
                                        className="text-gray-800 underline"
                                    >
                                        View Details
                                    </a>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No products found</p>
                    )}
                </div>
            </section>
        </>
    );
}
