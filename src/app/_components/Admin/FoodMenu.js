"use client";

import { useState } from "react";

import Avatar from "@/app/_icons/Avatar";
import CarBlack from "@/app/_icons/Car";
import CompanyNew from "@/app/_icons/CompanyNew";
import HutIcon from "@/app/_icons/HutIcon";
import Plus from "@/app/_icons/Plus";
import Sqr from "@/app/_icons/squer";
import Cart1 from "./CategoryCard/Cart1";

export default function Order() {
  const [openModal, setOpenModal] = useState(false);
  const [newCategory, setNewCategory] = useState("");

 
  const [categories, setCategories] = useState([
    { name: "All Dishes", count: 0 },
    { name: "Appetizers", count: 0 },
    { name: "Salads", count: 0 },
   
  ]);

  const handleAdd = () => {
    if (!newCategory.trim()) return;

    
    setCategories([
      ...categories,
      { name: newCategory.trim(), count: 0 }
    ]);

    setOpenModal(false);
    setNewCategory("");
  };

  return (
    <>
     
      {openModal && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
          <div className="bg-white w-[420px] rounded-xl p-6 shadow-xl relative">

            
            <button
              onClick={() => setOpenModal(false)}
              className="absolute right-4 top-4 text-[#4B5563] hover:text-black"
            >
              ✖
            </button>

            <h1 className="text-xl font-semibold mb-5">Add new category</h1>

            <p className="text-sm mb-2 text-[#6B7280]">Category name</p>

            <input
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 text-sm mb-6 outline-none focus:border-black"
              placeholder="Type category name..."
            />

            <button
              onClick={handleAdd}
              className="w-full bg-black text-white py-3 rounded-lg text-sm font-medium"
            >
              Add category
            </button>
          </div>
        </div>
      )}

     
      <div className="flex gap-11 pr-10">
        <div className="w-[205px] h-full p-9">
          <div className="flex items-center gap-2 w-[165px] h-11">
            <HutIcon />
            <div className="flex flex-col w-[100px]">
              <CompanyNew />
              <p className="text-sm text-[#71717A]">Swift delivery</p>
            </div>
          </div>

          <button className="w-[165px] h-10 p-2 px-6 mt-11 flex gap-2 bg-[#18181B] items-center rounded-full">
            <Sqr />
            <p className="text-sm font-medium text-white">Food menu</p>
          </button>

          <button className="w-[165px] h-10 p-2 px-6 mt-11 flex gap-2 items-center rounded-full">
            <CarBlack />
            <p className="text-sm font-medium">Orders</p>
          </button>
        </div>

        <div className="w-[1171px] mt-8">
          <div className="flex justify-end mb-6">
            <Avatar />
          </div>

         
          <div className="w-full rounded-lg border border-[#E4E4E7] p-6">
            <h1 className="font-semibold text-xl mb-4">Dishes category</h1>

            <div className="flex gap-3 flex-wrap">

             
              {categories.map((cat, index) => (
                <div
                  key={index}
                  className="px-4 py-2 border rounded-full flex items-center gap-2 hover:bg-gray-100 cursor-pointer"
                >
                  <span className="text-sm">{cat.name}</span>
                  <span className="text-xs bg-black text-white rounded-full px-2 py-0.5">
                    {cat.count}
                  </span>
                </div>
              ))}

             
              <button
                onClick={() => setOpenModal(true)}
                className="w-9 h-9 rounded-full bg-[#EF4444] flex items-center justify-center"
              >
                <Plus />
              </button>
            </div>
          </div>

          
          <div className="w-full h-[582px] rounded-xl border mt-6 p-6">
            <h1 className="font-semibold text-xl mb-4">Appetizers</h1>

            <div className="grid grid-cols-4 gap-4">
              <div
                className="w-[270.75px] h-[241px] flex justify-center items-center rounded-[21px] border-2 border-dashed border-[#EF4444]"
              >
                <div>
                  <div className="flex justify-center items-center mb-4">
                    <button
                      onClick={() => setOpenModal(true)}
                      className="w-9 h-9 rounded-full bg-[#EF4444] flex justify-center items-center"
                    >
                      <Plus />
                    </button>
                  </div>
                  <p className="w-[154px] font-medium text-sm leading-5 text-center">
                    Add new Dish to Appetizers
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
