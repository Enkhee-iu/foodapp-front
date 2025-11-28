"use client";
import { useState } from "react";

export default function DishModal({
  onClose,
  activeCategory,
  dishes,
  setDishes,
}) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [image, setImage] = useState(null);

  const handleAddDish = () => {
    if (!name.trim() || !price.trim()) return;

    setDishes([
      ...dishes,
      {
        name,
        price,
        ingredients,
        image,
        category: activeCategory,
      },
    ]);

    setName("");
    setPrice("");
    setIngredients("");
    setImage(null);
    onClose();
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) setImage(URL.createObjectURL(file));
  };

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      <div className="bg-white w-[550px] rounded-xl p-6 shadow-xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[18px] text-gray-500 hover:text-black"
        >
          ✕
        </button>

        <h1 className="text-lg font-semibold mb-5">
          Add new Dish to {activeCategory}
        </h1>

        <div className="flex gap-4 mb-3">
          <div className="flex-1">
            <p className="text-sm text-gray-600 mb-1">Food name</p>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded-lg p-3 text-sm outline-none"
              placeholder="Dish name..."
            />
          </div>

          <div className="w-[120px]">
            <p className="text-sm text-gray-600 mb-1">Food price</p>
            <input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full border rounded-lg p-3 text-sm outline-none"
              placeholder="$0.00"
            />
          </div>
        </div>

        <p className="text-sm text-gray-600 mb-1">Ingredients</p>
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="w-full border rounded-lg p-3 h-[72px] text-sm outline-none mb-4"
          placeholder="Write ingredients..."
        />

        <p className="text-sm text-gray-600 mb-1">Food image</p>

        <label className="cursor-pointer block border-2 border-dashed rounded-lg h-[120px] flex items-center justify-center overflow-hidden">
          {image ? (
            <img src={image} className="w-full h-full object-cover" />
          ) : (
            <p className="text-gray-400 text-sm">Upload image</p>
          )}
          <input type="file" className="hidden" onChange={handleImageUpload} />
        </label>

        <button
          onClick={handleAddDish}
          className="mt-5 w-full bg-black text-white py-3 rounded-lg text-sm font-medium"
        >
          Add Dish
        </button>
      </div>
    </div>
  );
}
