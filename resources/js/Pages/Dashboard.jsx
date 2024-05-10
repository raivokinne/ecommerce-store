import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard({ auth, orders }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            Hi {auth.user.name}!
                        </div>
                    </div>
                    <div className="p-6 text-gray-900">
                        <h2 className="text-xl font-bold">Order History</h2>
                    </div>

                    <div className="p-6 text-gray-900">
                        {orders.length > 0 ? (
                            orders.map((order) => (
                                <div
                                    key={order.id}
                                    className="flex flex-col p-6 mb-4 bg-white rounded-lg shadow-md sm:flex-row sm:justify-between"
                                >
                                    <div className="flex flex-col mb-4 sm:mb-0">
                                        <p className="mb-1 text-gray-900 uppercase">
                                            Order ID
                                        </p>
                                        <p className="text-gray-700">
                                            {order.id}
                                        </p>
                                    </div>
                                    <div className="flex flex-col mb-4 sm:mb-0">
                                        <p className="mb-1 text-gray-900 uppercase">
                                            Order Date
                                        </p>
                                        <p className="text-gray-700">
                                            {order.created_at}
                                        </p>
                                    </div>
                                    <div className="flex flex-col mb-4 sm:mb-0">
                                        <p className="mb-1 text-gray-900 uppercase">
                                            Order Status
                                        </p>
                                        <p className="text-gray-700">
                                            {order.status}
                                        </p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No orders found</p>
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
