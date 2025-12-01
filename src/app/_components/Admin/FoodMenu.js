"use client";

import { useState } from "react";
import Avatar from "@/app/_icons/Avatar";
import CarBlack from "@/app/_icons/Car";
import CompanyNew from "@/app/_icons/CompanyNew";
import HutIcon from "@/app/_icons/HutIcon";
import Plus from "@/app/_icons/Plus";
import Sqr from "@/app/_icons/squer";
import DishModal from "../dishmodal/DishModal";

import InfoIconPencil from "@/app/_icons/InfoIcon";
import EditDishModal from "../dishmodal/EdithDishModel";
import axios from "axios";

export default function Order() {
  const [categories, setCategories] = useState([]);
  const [showDishModal, setShowDishModal] = useState(false);
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [newCategory, setNewCategory] = useState("");
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(null);
  const [showAllDishes, setShowAllDishes] = useState(true);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedDish, setSelectedDish] = useState(null);

  const handleAddCategory = async () => {
    if (!newCategory.trim()) return;
    await axios.post("http://localhost:999/api/categories", {
      categoryName: newCategory,
    });

    setCategories([...categories, { name: newCategory.trim(), dishes: [] }]);
    setNewCategory("");
    setShowCategoryModal(false);
  };

  const handleDeleteCategory = (index) => {
    const updated = categories.filter((_, i) => i !== index);
    setCategories(updated);

    if (activeCategoryIndex === index) setActiveCategoryIndex(null);
  };

  const handleAddDish = (newDish) => {
    if (activeCategoryIndex === null) return;
    const updated = [...categories];
    updated[activeCategoryIndex].dishes.push(newDish);
    setCategories(updated);
    setShowDishModal(false);
  };

  return (
    <>
      {showEditModal && (
        <EditDishModal
          onClose={() => setShowEditModal(false)}
          dish={selectedDish}
          categories={categories}
          onSave={(updatedDish) => {
            const updatedCats = [...categories];
            const { catIndex, dishIndex } = updatedDish;
            updatedCats[catIndex].dishes[dishIndex] = updatedDish;
            setCategories(updatedCats);
            setShowEditModal(false);
          }}
        />
      )}

      {showCategoryModal && (
        <div
          className="fixed inset-0 bg-black/40 flex justify-center items-center z-50"
          onClick={() => setShowCategoryModal(false)}
        >
          <div
            className="bg-white p-6 rounded-xl w-[400px] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowCategoryModal(false)}
              className="absolute top-3 right-4"
            >
              ✕
            </button>

            <h2 className="text-xl font-semibold mb-4">Add new category</h2>

            <input
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              className="border w-full rounded-lg p-3 text-sm"
              placeholder="Category name..."
            />

            <button
              onClick={handleAddCategory}
              className="w-full bg-black text-white rounded-lg p-3 mt-5"
            >
              Add Category
            </button>
          </div>
        </div>
      )}

      {showDishModal && (
        <DishModal
          onClose={() => setShowDishModal(false)}
          onAddDish={handleAddDish}
          categoryName={categories[activeCategoryIndex]?.name}
        />
      )}

      <div>
        <div className="mx-auto w-full max-w-[1440px] px-4 md:px-8 flex gap-10 pr-10">
          <div className="w-[205px] p-9">
            <div className="flex items-center gap-2">
              <HutIcon />
              <div>
                <CompanyNew />
                <p className="text-xs text-gray-500">Swift delivery</p>
              </div>
            </div>

            <button className="w-full p-2 mt-10 bg-black text-white rounded-full flex gap-2 justify-center">
              <Sqr /> Food Menu
            </button>

            <button className="w-full p-2 mt-4 rounded-full flex gap-2 justify-center">
              <CarBlack /> Orders
            </button>
          </div>

          <div className="w-full mt-8">
            <div className="flex justify-end mb-6">
              <Avatar />
            </div>

            <div className="border rounded-xl p-6 mb-6">
              <h1 className="text-xl font-semibold mb-4">Dishes category</h1>

              <div className="flex gap-3 flex-wrap">
                <div
                  onClick={() => {
                    setShowAllDishes(true);
                    setActiveCategoryIndex(null);
                  }}
                  className={`px-4 py-2 rounded-full flex gap-2 cursor-pointer border
                  ${
                    showAllDishes
                      ? "#E4E4E7 text-black border-[#EF4444]"
                      : "border-#E4E4E7 text-black hover:bg-gray-50"
                  }
                `}
                >
                  All dishes
                  <span className="bg-black flex items-center text-white rounded-full text-xs px-2">
                    {categories.reduce((t, c) => t + c.dishes.length, 0)}
                  </span>
                </div>

                {categories.map((cat, i) => (
                  <div
                    key={i}
                    onClick={() => {
                      setActiveCategoryIndex(i);
                      setShowAllDishes(false);
                    }}
                    className={`relative px-4 py-2 rounded-full flex gap-2 cursor-pointer
                    ${
                      activeCategoryIndex === i && !showAllDishes
                        ? "bg-#E4E4E7 text-black border border-[#EF4444]"
                        : "border- text-black hover:bg-gray-50 border"
                    }`}
                  >
                    {cat.name}
                    <span className="bg-black text-white rounded-full text-xs px-2 flex  items-center">
                      {cat.dishes.length}
                    </span>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteCategory(i);
                      }}
                      className="absolute -top-2 -right-2 bg-red-500 text-white w-4 h-4 rounded-full text-[10px]"
                    >
                      ✕
                    </button>
                  </div>
                ))}

                <button
                  onClick={() => setShowCategoryModal(true)}
                  className="bg-red-500 w-9 h-9 rounded-full flex justify-center items-center text-white"
                >
                  <Plus />
                </button>
              </div>
            </div>

            {showAllDishes && (
              <div className="flex flex-col gap-8">
                {categories.map((cat, i) => (
                  <div key={i} className="bg-white p-6 border rounded-xl">
                    <h2 className="text-lg font-semibold mb-4">
                      {cat.name} ({cat.dishes.length})
                    </h2>

                    <div className="grid grid-cols-4 gap-5">
                      <div
                        onClick={() => {
                          setActiveCategoryIndex(i);
                          setShowDishModal(true);
                        }}
                        className="border-2 border-dashed border-red-500 rounded-xl w-[270px] h-[241px] flex justify-center items-center cursor-pointer hover:bg-red-50"
                      >
                        <div className="text-center">
                          <button
                            className="h-8 w-8 bg-red-500 text-white rounded-full mx-auto
             flex items-center justify-center text-center
             leading-none"
                          >
                            <Plus className="m-0 p-0" />
                          </button>
                          <p className="text-xs mt-2">
                            Add new Dish to {cat.name}
                          </p>
                        </div>
                      </div>

                      {cat.dishes.map((dish, dIndex) => (
                        <div
                          key={dIndex}
                          className="relative border rounded-xl p-3 w-[270px] h-[241px] shadow"
                        >
                          <button
                            onClick={() => {
                              const updated = [...categories];
                              updated[i].dishes = updated[i].dishes.filter(
                                (_, idx) => idx !== dIndex
                              );
                              setCategories(updated);
                            }}
                            className="absolute -top-2 -right-2 bg-red-500 text-white w-5 h-5 rounded-full text-[10px]"
                          >
                            ✕
                          </button>

                          <div className="relative h-[129px] w-full">
                            <img
                              src={dish.image}
                              className="h-full w-full rounded-lg object-cover"
                            />
                            <button
                              onClick={() => {
                                const catIndex = categories.findIndex((c) =>
                                  c.dishes.includes(dish)
                                );
                                const dishIndex =
                                  categories[catIndex].dishes.indexOf(dish);

                                setSelectedDish({
                                  ...dish,
                                  category: categories[catIndex].name,
                                  catIndex: catIndex,
                                  dishIndex: dishIndex,
                                });

                                setShowEditModal(true);
                              }}
                              className={`
    absolute bottom-3 right-3
    bg-white hover:bg-gray-200
    rounded-full flex justify-center items-center
    w-8 h-8
    z-10
  `}
                            >
                              <InfoIconPencil className="w-[18px] h-[18px] stroke-red-500" />
                            </button>
                          </div>

                          <div className="flex justify-between mb-1">
                            <p className="font-semibold text-red-500 line-clamp-2 w-[150px]">
                              {dish.name}
                            </p>
                            <p className="font-bold text-sm">
                              ${Number(dish.price).toFixed(2)}
                            </p>
                          </div>

                          <p className="text-xs text-gray-500 line-clamp-3">
                            {dish.ingredients}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {!showAllDishes && activeCategoryIndex !== null && (
              <div className="bg-white p-6 border rounded-xl mb-8">
                <h2 className="text-lg font-semibold mb-4">
                  {categories[activeCategoryIndex].name} (
                  {categories[activeCategoryIndex].dishes.length})
                </h2>

                <div className="grid grid-cols-4 gap-5">
                  <div
                    onClick={() => setShowDishModal(true)}
                    className="border-2 border-dashed border-red-500 rounded-xl w-[270px] h-[241px] flex justify-center items-center cursor-pointer hover:bg-red-50"
                  >
                    <div className="text-center ">
                      <button className="h-8 w-8 bg-red-500 text-white rounded-full mx-auto flex items-center justify-center">
                        <Plus />
                      </button>

                      <p className="text-xs mt-2">
                        Add new Dish to {categories[activeCategoryIndex].name}
                      </p>
                    </div>
                  </div>

                  {categories[activeCategoryIndex].dishes.map(
                    (dish, dIndex) => (
                      <div
                        key={dIndex}
                        className="relative border rounded-xl p-3 w-[270px] h-[241px] shadow"
                      >
                        <button
                          onClick={() => {
                            const updated = [...categories];
                            updated[activeCategoryIndex].dishes = updated[
                              activeCategoryIndex
                            ].dishes.filter((_, idx) => idx !== dIndex);
                            setCategories(updated);
                          }}
                          className="absolute -top-2 -right-2 bg-red-500 text-white w-5 h-5 rounded-full text-[10px]"
                        >
                          ✕
                        </button>

                        <div className="relative h-[129px] w-full">
                          <img
                            src={dish.image}
                            className="h-full w-full rounded-lg object-cover"
                          />
                          <button
                            onClick={() => {
                              const catIndex = categories.findIndex((c) =>
                                c.dishes.includes(dish)
                              );
                              const dishIndex =
                                categories[catIndex].dishes.indexOf(dish);

                              setSelectedDish({
                                ...dish,
                                category: categories[catIndex].name,
                                catIndex: catIndex,
                                dishIndex: dishIndex,
                              });

                              setShowEditModal(true);
                            }}
                            className={`
    absolute bottom-3 right-3
    bg-white hover:bg-gray-200
    rounded-full flex justify-center items-center
    w-8 h-8
    z-10
  `}
                          >
                            <InfoIconPencil className="w-[18px] h-[18px] stroke-red-500" />
                          </button>
                        </div>

                        <div className="flex justify-between mb-1">
                          <p className="font-semibold text-red-500 line-clamp-2 w-[150px]">
                            {dish.name}
                          </p>
                          <p className="font-bold text-sm">
                            ${Number(dish.price).toFixed(2)}
                          </p>
                        </div>

                        <p className="text-xs text-gray-500 line-clamp-3">
                          {dish.ingredients}
                        </p>
                      </div>
                    )
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
