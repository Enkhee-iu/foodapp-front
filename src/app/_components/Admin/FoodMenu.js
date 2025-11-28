"use client";

import { useState } from "react";

import Avatar from "@/app/_icons/Avatar";
import CarBlack from "@/app/_icons/Car";
import CompanyNew from "@/app/_icons/CompanyNew";
import HutIcon from "@/app/_icons/HutIcon";
import Plus from "@/app/_icons/Plus";
import Sqr from "@/app/_icons/squer";
import DishModal from "../dishmodal/DishModal";

export default function Order() {
  const [categories, setCategories] = useState([]);
  const [dishes, setDishes] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [showDishModal, setShowDishModal] = useState(false);
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [newCategory, setNewCategory] = useState("");

  const handleAddCategory = () => {
    if (!newCategory.trim()) return;
    setCategories([...categories, { name: newCategory.trim() }]);
    setActiveCategory(newCategory.trim());
    setNewCategory("");
    setShowCategoryModal(false);
  };

  const handleDeleteCategory = (index) => {
    const removed = categories[index].name;
    setCategories(categories.filter((_, i) => i !== index));
    if (activeCategory === removed) setActiveCategory(null);
  };

  return (
    <>
      {showCategoryModal && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
          <div className="bg-white w-[420px] rounded-xl p-6 shadow-xl relative">
            <button
              onClick={() => setShowCategoryModal(false)}
              className="absolute right-4 top-4 text-xl text-[#4B5563] hover:text-black"
            >
              ✕
            </button>

            <h1 className="text-xl font-semibold mb-5">Add new category</h1>

            <input
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              className="w-full border rounded-lg p-3 text-sm mb-6 outline-none"
              placeholder="Type category name..."
            />

            <button
              onClick={handleAddCategory}
              className="w-full bg-black text-white py-3 rounded-lg text-sm font-medium"
            >
              Add category
            </button>
          </div>
        </div>
      )}

      {showDishModal && (
        <DishModal
          onClose={() => setShowDishModal(false)}
          activeCategory={activeCategory}
          dishes={dishes}
          setDishes={setDishes}
        />
      )}

      <div className="flex gap-11 pr-10">
        <div className="w-[205px] p-9">
          <div className="flex items-center gap-2">
            <HutIcon />
            <div className="flex flex-col">
              <CompanyNew />
              <p className="text-sm text-[#71717A]">Swift delivery</p>
            </div>
          </div>

          <button className="w-full p-2 mt-11 bg-[#18181B] text-white rounded-full flex gap-2 justify-center">
            <Sqr /> Food menu
          </button>

          <button className="w-full p-2 mt-4 rounded-full flex gap-2 justify-center">
            <CarBlack /> Orders
          </button>
        </div>

        <div className="w-full mt-8">
          <div className="flex justify-end mb-6">
            <Avatar />
          </div>

          <div className="border rounded-lg p-6 pb-10">
            <h1 className="text-xl font-semibold mb-4">Dishes category</h1>

            <div className="flex gap-3 flex-wrap">
              {categories.map((cat, i) => (
                <div
                  key={i}
                  onClick={() => setActiveCategory(cat.name)}
                  className={`relative px-4 py-2 border rounded-full flex gap-2 cursor-pointer 
                    ${
                      activeCategory === cat.name
                        ? "bg-black text-white"
                        : "hover:bg-gray-100"
                    }`}
                >
                  <span className="text-sm">{cat.name}</span>
                  <span className="text-xs bg-black text-white rounded-full px-2 py-0.5">
                    {dishes.filter((d) => d.category === cat.name).length}
                  </span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteCategory(i);
                    }}
                    className="absolute -top-1 -right-1 w-4 h-4 bg-gray-300 rounded-full text-[10px]"
                  >
                    ✕
                  </button>
                </div>
              ))}

              <button
                onClick={() => setShowCategoryModal(true)}
                className="w-9 h-9 bg-[#EF4444] rounded-full flex justify-center items-center text-white"
              >
                <Plus />
              </button>
            </div>
          </div>

          {activeCategory && (
            <div className="border rounded-xl p-6 mt-6">
              <h1 className="text-xl font-semibold mb-4">{activeCategory}</h1>

              <div className="grid grid-cols-4 gap-4">
                {dishes
                  .filter((d) => d.category === activeCategory)
                  .map((dish, i) => (
                    <div
                      key={i}
                      className="relative w-[270px] h-[241px] border rounded-[21px] p-3"
                    >
                      <button
                        onClick={() =>
                          setDishes(dishes.filter((_, x) => x !== i))
                        }
                        className="absolute -top-1 -right-1 bg-gray-300 rounded-full w-5 h-5 text-[10px]"
                      >
                        ✕
                      </button>

                      {dish.image && (
                        <img
                          src={dish.image}
                          className="w-full h-24 object-cover rounded-lg mb-2"
                        />
                      )}

                      <p className="font-semibold">{dish.name}</p>
                      <p className="text-xs text-gray-500 mb-1">
                        {dish.ingredients}
                      </p>
                      <p className="text-sm font-semibold">${dish.price}</p>
                    </div>
                  ))}

                {/* ADD DISH */}
                <div
                  className="w-[270px] h-[241px] border-2 border-dashed border-[#EF4444] rounded-[21px] flex items-center justify-center cursor-pointer"
                  onClick={() => setShowDishModal(true)}
                >
                  <div className="text-center">
                    <button className="w-8 h-8 bg-[#EF4444] text-white rounded-full mx-auto flex items-center justify-center">
                      <Plus />
                    </button>
                    <p className="text-xs mt-2">
                      Add new Dish to {activeCategory}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {!activeCategory && (
            <p className="text-gray-400 text-sm mt-6">Choose a category</p>
          )}
        </div>
      </div>
    </>
  );
}
