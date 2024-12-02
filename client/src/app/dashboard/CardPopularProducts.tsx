import { useGetProductsQuery } from "@/state/api";
import React from "react";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import Producs from "../products/page";
import Link from "next/link";

const CardProducts = () => {
  const { data: products, isLoading } = useGetProductsQuery();

  return (
    <div className="row-span-3 xl:row-span-6 bg-white shadow-md rounded-2xl pb-16">
      {isLoading ? (
        <div className="m-5">Loading...</div>
      ) : (
        <>
          <h3 className="text-lg font-semibold px-7 pt-5 pb-2">Products</h3>
          <hr />
          <div className="overflow-auto h-full">
            {products?.map((item) => (
              <div
                key={item.productId}
                className="flex items-center justify-between gap-3 px-5 py-7 border-b"
              >
                <div className="flex items-center gap-3">
                  <div className="flex flex-col justify-between gap-1">
                    <div className="font-bold text-gray-700">{item.name}</div>
                  </div>
                </div>

                <div className="text-xs flex items-center">
                  <div className="text-sm text-gray-500">
                    {item.stock} available
                  </div>
                  <Link href="/products">
                    <button className="p-2 rounded-full bg-blue-100 text-blue-600 mr-2">
                      <ShoppingBag className="w-4 h-4" />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CardProducts;
