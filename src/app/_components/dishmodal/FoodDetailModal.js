"use client";
import { useState } from "react";

export default function FoodDetailModal({ dish, onClose, onAddToCart }) {
  const [count, setCount] = useState(1);

  if (!dish) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white w-[826px] h-[412px] rounded-2xl p-6 gap-6 justify-between relative flex shadow-xl">
        <div>
          <img
            src={dish.image}
            className="w-[377px] h-[364px] rounded-xl object-cover mb-4"
            alt=""
          />
        </div>

        <div>
          <button
            onClick={onClose}
            className="absolute top-3 right-4 text-gray-600 text-lg"
          >
            ✕
          </button>

          <div className="flex justify-between items-center  ">
            <h2 className=" font-semibold text-3xl text-[#EF4444]">
              {dish.foodName}
            </h2>
          </div>

          <p className="text-sm text-gray-600 my-2 line-clamp-2">
            {dish.ingredients}
          </p>

          <div className="flex  gap-4 my-4 items-center justify-between">
            <p className="font-bold">${dish.price}</p>
            <div className="flex  gap-4 my-4 items-center">
              <button
                onClick={() => setCount(count > 1 ? count - 1 : 1)}
                className="w-8 h-8 rounded-full bg-gray-200 flex justify-center items-center"
              >
                -
              </button>
              <span className="font-semibold">{count}</span>
              <button
                onClick={() => setCount(count + 1)}
                className="w-8 h-8 rounded-full bg-red-500 text-white flex justify-center items-center"
              >
                +
              </button>
            </div>
          </div>

          <button
            onClick={() => onAddToCart(dish, count)}
            className="w-[377px] h-11 bg-red-500 text-white rounded-full p-3 mt-3"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
