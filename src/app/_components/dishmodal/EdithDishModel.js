"use client";

import { useState } from "react";
// import InfoIconPencil from "@/app/_icons/InfoIconPencil";

export default function EditDishModal({
  onClose,
  dish,
  onSave,
  categories,
}) {
  const [name, setName] = useState(dish.name);
  const [price, setPrice] = useState(dish.price);
  const [ingredients, setIngredients] = useState(dish.ingredients);
  const [image, setImage] = useState(dish.image);
  const [category, setCategory] = useState(dish.category);

  return (
    <div className="fixed inset-0 bg-black/30 flex justify-center items-center z-50">
      <div className="bg-white w-[550px] rounded-xl p-6 shadow-xl relative">

        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 text-lg"
        >
          ✕
        </button>

        {/* TITLE WITH ICON */}
        <h1 className="text-xl font-semibold mb-5 flex items-center">
          {/* <InfoIconPencil /> */}
          Dish info
        </h1>

        {/* Dish name */}
        <label className="text-sm text-gray-600 block mb-1">Dish name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border rounded-lg p-3 text-sm mb-4"
        />

        {/* Category dropdown */}
        <label className="text-sm text-gray-600 block mb-1">Dish category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border rounded-lg p-3 text-sm mb-4"
        >
          {categories.map((c, i) => (
            <option key={i} value={c.name}>
              {c.name}
            </option>
          ))}
        </select>

        {/* Ingredients */}
        <label className="text-sm text-gray-600 block mb-1">Ingredients</label>
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="w-full border rounded-lg p-3 h-[72px] text-sm mb-4 resize-none"
        />

        {/* Price */}
        <label className="text-sm text-gray-600 block mb-1">Price</label>
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full border rounded-lg p-3 text-sm mb-4"
        />

        {/* Image */}
        <label className="text-sm text-gray-600 block mb-1">Image</label>
        <div className="relative mt-2 mb-4">
          <img src={image} alt={name} className="rounded-lg w-full h-[120px] object-cover" />
        </div>

        {/* Save button */}
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