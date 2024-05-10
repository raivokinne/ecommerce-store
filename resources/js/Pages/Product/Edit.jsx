import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Edit({ product, categories }) {
    const { data, setData, put, processing, errors, reset } = useForm({
        name: product.name,
        description: product.description,
        price: product.price,
        stock: product.stock,
        image: null,
        brand: product.brand,
        category_id: product.category_id,
    });

    const submit = (e) => {
        e.preventDefault();

        put(route("shop.update", data.id));
    };

    return (
        <GuestLayout text="Edit Product">
            <Head title="Edit Product" />

            <form
                onSubmit={submit}
                autoComplete="off"
                encType="multipart/form-data"
            >
                <div>
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="block w-full mt-1"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData("name", e.target.value)}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="description" value="Description" />

                    <TextInput
                        id="description"
                        type="text"
                        name="description"
                        value={data.description}
                        className="block w-full mt-1"
                        autoComplete="username"
                        onChange={(e) => setData("description", e.target.value)}
                        required
                    />

                    <InputError message={errors.description} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="price" value="Price" />

                    <TextInput
                        id="price"
                        type="number"
                        name="price"
                        value={data.price}
                        className="block w-full mt-1"
                        autoComplete="off"
                        onChange={(e) => setData("price", e.target.value)}
                        required
                    />

                    <InputError message={errors.price} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="image" value="Image URL" />

                    <TextInput
                        id="image"
                        type="file"
                        name="image"
                        className="block w-full mt-1"
                        autoComplete="off"
                        onChange={(e) =>
                            e.target && setData("image", e.target.files[0])
                        }
                        required
                    />

                    <InputError message={errors.image} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="brand" value="Brand" />

                    <TextInput
                        id="brand"
                        type="text"
                        name="brand"
                        value={data.brand}
                        className="block w-full mt-1"
                        autoComplete="off"
                        onChange={(e) => setData("brand", e.target.value)}
                        required
                    />

                    <InputError message={errors.brand} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="stock" value="Stock" />

                    <TextInput
                        id="stock"
                        type="number"
                        name="stock"
                        value={data.stock}
                        className="block w-full mt-1"
                        autoComplete="off"
                        onChange={(e) => setData("stock", e.target.value)}
                        required
                    />

                    <InputError message={errors.stock} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="category_id" value="Category" />

                    <select
                        id="category_id"
                        name="category_id"
                        value={data.category_id}
                        className="block w-full mt-1"
                        onChange={(e) => setData("category_id", e.target.value)}
                        required
                    >
                        {categories.map((category) => (
                            <option
                                key={category.id}
                                value={category.id}
                            >{`${category.name} - ${category.id}`}</option>
                        ))}
                    </select>
                </div>

                <PrimaryButton
                    className="flex items-center justify-center w-full mt-4"
                    disabled={processing}
                >
                    Update
                </PrimaryButton>
            </form>
        </GuestLayout>
    );
}
