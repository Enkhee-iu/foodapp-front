export default function CartOrder({ orders = [] }) {
  console.log("ORDERS PROP ===>", orders);

  return (
    <div className="bg-white flex-1 p-5 rounded-2xl overflow-y-auto">
      <h3 className="font-semibold text-[#18181B] mb-4">Order history</h3>

      {!orders || orders.length === 0 ? (
        <p className="text-gray-500 text-sm text-center">
          You have no previous orders.
        </p>
      ) : (
        orders.map((order, index) => (
          <div key={index} className="border-b border-dashed pb-4 mb-4">
            <p className="font-bold">
              ${order.totalPrice} <span className="text-xs">#{order._id}</span>
            </p>

            <div
              className={`text-xs px-3 py-1 rounded-full inline-block mt-2 ${
                order.status === "Pending"
                  ? "text-red-500 border border-red-500"
                  : "text-green-600 bg-gray-100"
              }`}
            >
              {order.status}
            </div>

            {order.items?.map((item, i) => (
              <div key={i} className="text-sm text-gray-600 mt-2">
                {item.name} x {item.quantity}
              </div>
            ))}

            <p className="text-xs text-gray-400 mt-3">
              {new Date(order.createdAt).toLocaleDateString()}
            </p>
          </div>
        ))
      )}
    </div>
  );
}
