"use client";

import React from "react";

import HutIcon from "@/app/_icons/HutIcon";
import CompanyNew from "@/app/_icons/CompanyName";
import SqrWhite from "@/app/_icons/sqrblack";
import CarWhiteIcon from "@/app/_icons/CarWhiteIcon";
import Sqr from "@/app/_icons/squer";
import CarBlack from "@/app/_icons/Car";

export default function OrdersPage({ activeTab, setActiveTab }) {
  return (
    <div className="mx-auto w-full max-w-[1440px] px-4 md:px-8 flex gap-10 pr-10">
      {/* Sidebar */}
      <div className="w-[205px] p-9">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10">
            <HutIcon />
          </div>
          <div className="w-[81px] h-7">
            <CompanyNew />
            <p className="text-xs text-gray-500">Swift delivery</p>
          </div>
        </div>

        <button
          onClick={() => setActiveTab("FoodMenu")}
          className={`w-full p-2 mt-10 cursor-pointer rounded-full flex gap-2 justify-center items-center ${
            activeTab === "FoodMenu"
              ? "bg-black text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          {activeTab === "FoodMenu" ? <Sqr /> : <SqrWhite />}
          Food Menu
        </button>

        <button
          onClick={() => setActiveTab("OrderMenu")}
          className={`w-full p-2 mt-4 cursor-pointer rounded-full flex gap-2 justify-center items-center ${
            activeTab === "OrderMenu"
              ? "bg-black text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          {activeTab === "OrderMenu" ? <CarWhiteIcon /> : <CarBlack />}
          Orders
        </button>
      </div>

      <div className="w-full mt-8">
        <h1 className="text-xl font-semibold mb-4">Orders</h1>

        <div className="bg-white border rounded-xl p-6">
          <p className="text-gray-600">Order list will appear here...</p>
        </div>
      </div>
    </div>
  );
}
