"use client";

import { useState } from "react";

export default function EditDishModal({ onClose, dish, onSave, categories }) {
  const [name, setName] = useState(dish.name);
  const [price, setPrice] = useState(dish.price);
  const [ingredients, setIngredients] = useState(dish.ingredients);
  const [image, setImage] = useState(dish.image);
  const [category, setCategory] = useState(dish.category);

  return (
    <div className="fixed inset-0 bg-black/30 flex justify-center items-center z-50">
      <div className="bg-white w-[472px] rounded-xl p-6 shadow-xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 text-lg"
        >
          ✕
        </button>

        <h1 className="text-xl font-semibold mb-5 flex items-center">
          Dish info
        </h1>
        <div className="flex justify-between">
          <label className="text-sm text-gray-600 block mb-1 w-[120px] h-4 ">
            Dish name
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-[288px] border rounded-lg p-3 text-sm mb-4 "
          />
        </div>
        <div className="flex justify-between">
          <label className="text-sm text-gray-600 block mb-1">
            Dish category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-[288px] border rounded-lg p-3 text-sm mb-4"
          >
            {categories.map((c, i) => (
              <option key={i} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex justify-between">
          <label className="text-sm text-gray-600 block mb-1">
            Ingredients
          </label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-[288px] border rounded-lg p-3 h-[72px] text-sm mb-4 resize-none"
          />
        </div>

        <div className="flex justify-between">
          <label className="text-sm text-gray-600 block mb-1">Price</label>
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-[288px] border rounded-lg p-3 text-sm mb-4"
          />
        </div>

        <label className="text-sm text-gray-600 block mb-1">Image</label>
        <div className="relative mt-2 mb-4">
          {image && (
            <>
              <img
                src={image}
                alt={name}
                className="rounded-lg w-full h-[120px] object-cover"
              />

              <button
                onClick={() => setImage(null)}
                className="absolute top-1 right-1 w-6 h-6 bg-[#FFFFFF] text-black rounded-full text-xs flex items-center justify-center hover:bg-red-600"
              >
                ✕
              </button>
            </>
          )}

          {!image && (
            <div className="h-[120px] border-2 border-dashed rounded-lg flex items-center justify-center text-gray-400 text-sm">
              No image
            </div>
          )}
        </div>

        <button
          onClick={() =>
            onSave({
              ...dish,
              name,
              price,
              ingredients,
              image,
              category,
            })
          }
          className="w-full bg-black text-white py-3 rounded-lg font-medium"
        >
          Save changes
        </button>
      </div>
    </div>
  );
}
