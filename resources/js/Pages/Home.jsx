import Navbar from "@/Components/Navbar";

export default function Home({ auth }) {
    return (
        <>
            <Navbar auth={auth} />
            <section className="flex items-center h-screen bg-gray-100">
                <img
                    src="/assets/hero.jpg"
                    alt="logo"
                    className="w-[600px] h-[500px] absolute top-1/2 left-[80%] -translate-x-1/2 -translate-y-1/2"
                />
                <article className="absolute z-10 top-1/2 left-[50%] w-[90%] lg:left-[30%] lg:w-[40%] -translate-x-1/2 -translate-y-1/2 grid gap-8 text-gray-800 font-bold">
                    <h1 className="text-3xl md:text-4xl lg:text-9xl">
                        Welcome to FashionFusion
                    </h1>
                    <h3 className="text-xl md:text-1xl lg:text-3xl">
                        Explore the latest trends and timeless classics
                    </h3>
                    <a href="/shop">
                        <button className="bg-white text-black p-2 w-[200px]">
                            Shop Now
                        </button>
                    </a>
                </article>
            </section>
            <section className="flex items-center justify-center h-screen bg-gray-100">
                <div className="grid grid-cols-3 gap-36 place-items-center">
                    {["1", "2", "3"].map((key) => (
                        <div
                            key={key}
                            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow0"
                        >
                            <a href="/shop">
                                <img
                                    className="w-[300px] h-[400px] rounded-t-lg"
                                    src={`/assets/${key}.jpg`}
                                    alt="product"
                                />
                            </a>
                            <div className="p-4">
                                <h2 className="mb-2 text-xl font-bold">
                                    Product {key}
                                </h2>
                                <p className="text-base text-gray-700">
                                    This is a description for product {key}.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <footer class="flex justify-center items-center h-[200px] bg-black text-white">
                <div class="grid place-items-center lg:flex lg:justify-between lg:items-center w-full lg:mx-[150px]">
                    <p>
                        Copyright © 2024 - FashionFusion. All rights reserved.
                    </p>
                    <ul class="flex gap-4">
                        <li>
                            <a href="/">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="/">Terms of Use</a>
                        </li>
                        <li>
                            <a href="/">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    );
}
