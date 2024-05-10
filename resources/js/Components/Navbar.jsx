import { useForm } from "@inertiajs/react";

export default function Navbar({ auth }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });
    const submit = (e) => {
        e.preventDefault();

        post(route("logout"));
    };
    return (
        <>
            <nav className="bg-white flex justify-center items-center border-gray-200 px-2 h-[70px] sm:px-4 fixed top-0 w-full z-20">
                <div className="container flex items-center justify-between max-w-7xl">
                    <div className="flex items-center">
                        <a href="/">
                            <span className="self-center text-xl font-semibold whitespace-nowrap">
                                FashionFusion
                            </span>
                        </a>

                        <ul className="flex p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                            <li>
                                <a
                                    href="/"
                                    className="block py-2 pl-3 pr-4 hover:text-blue-400 active:text-blue-400"
                                    aria-current="page"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/shop"
                                    className="block py-2 pl-3 pr-4 hover:text-blue-400 active:text-blue-400"
                                    aria-current="page"
                                >
                                    Shop
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/about"
                                    className="block py-2 pl-3 pr-4 hover:text-blue-400 active:text-blue-400"
                                    aria-current="page"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/contact"
                                    className="block py-2 pl-3 pr-4 hover:text-blue-400 active:text-blue-400"
                                    aria-current="page"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="flex items-center p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                        {auth.user ? (
                            <>
                                <a
                                    href="/dashboard"
                                    className="block py-2 pl-3 pr-4 hover:text-blue-400 active:text-blue-400"
                                    aria-current="page"
                                >
                                    Dashboard
                                </a>
                                <form onSubmit={submit}>
                                    <button
                                        type="submit"
                                        className="block py-2 pl-3 pr-4 hover:text-blue-400 active:text-blue-400"
                                        aria-current="page"
                                    >
                                        Logout
                                    </button>
                                </form>
                            </>
                        ) : (
                            <>
                                <a
                                    href="/login"
                                    className="block py-2 pl-3 pr-4 hover:text-blue-400 active:text-blue-400"
                                    aria-current="page"
                                >
                                    Login
                                </a>
                                <a
                                    href="/register"
                                    className="block py-2 pl-3 pr-4 hover:text-blue-400 active:text-blue-400"
                                    aria-current="page"
                                >
                                    Register
                                </a>
                            </>
                        )}
                        <a
                            href="/cart"
                            className="block py-2 pl-3 pr-4 "
                            aria-current="page"
                        >
                            <img
                                className="w-8 "
                                src="/assets/cart.png"
                                alt="cart"
                            />
                        </a>
                    </div>
                </div>
            </nav>
        </>
    );
}
