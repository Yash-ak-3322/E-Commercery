"use client";

import { GlobalContext } from "@/context";
import { getAllAdminProducts } from "@/services/product";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

export default function Home() {
  const { isAuthUser } = useContext(GlobalContext);

  const [products, setProducts] = useState([]);
  const router = useRouter();

  async function getListOfProducts() {
    const res = await getAllAdminProducts();

    if (res.success) {
      setProducts(res.data);
    }
  }

  useEffect(() => {
    getListOfProducts();
  }, []);

  console.log(products);

 return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-12 lg:p-24">
      <section className="">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-3xl font-bold tracking-tight leading-tight md:text-4xl lg:text-5xl text-blue-900">
              Top Branded Fashion Showroom
            </h1>
            <p className="max-w-2xl mb-6 text-sm font-light text-gray-700 lg:mb-8 md:text-lg lg:text-xl">
              The largest E-Commerce shopping platform of Canada :-)
              E-Commercery ☺️
            </p>

            <button
              type="button"
              onClick={() => router.push("/product/listing/all-products")}
              className="inline-block px-4 py-2 text-xs font-medium tracking-wide uppercase bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Explore Shop Collection
            </button>
          </div>
          <div className="hidden lg:block lg:col-span-5">
            <img
              src="https://wp.blahface.com/wp-content/uploads/2021/03/BF_shopping.jpg"
              alt="Explore Shop Collection"
              className="w-full rounded-lg"
            />
          </div>
        </div>
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
            <div className="grid p-4 bg-blue-100 rounded-lg place-content-center">
              <div className="max-w-md mx-auto text-center lg:text-left">
                <div>
                  <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
                    Brand New Season Collection
                  </h2>
                </div>
                <button
                  onClick={() => router.push("/product/listing/all-products")}
                  className="mt-2 inline-block px-4 py-2 text-xs font-medium tracking-wide uppercase bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                  Shop ALL
                </button>
              </div>
            </div>
            <div className="lg:col-span-2 lg:py-4">
              <ul className="grid grid-cols-2 gap-4">
                {products && products.length
                  ? products
                      .filter((item) => item.onSale === "yes")
                      .splice(0, 2)
                      .map((productItem) => (
                        <li
                          onClick={() =>
                            router.push(`/product/${productItem._id}`)
                          }
                          className="cursor-pointer"
                          key={productItem._id}
                        >
                          <div>
                            <img
                              src={productItem.imageUrl}
                              alt="Sale Product Item"
                              className="object-cover w-full rounded aspect-square"
                            />
                          </div>
                          <div className="mt-3">
                            <h3 className="font-medium text-gray-900">
                              {productItem.name}
                            </h3>
                            <p className="mt-1 text-sm text-gray-800">
                              ${productItem.price}{" "}
                              <span className="text-red-700">{`(-${productItem.priceDrop}%) Off`}</span>
                            </p>
                          </div>
                        </li>
                      ))
                  : null}
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
          <div className="text-center">
            <h2 className="text-lg font-bold text-gray-950 sm:text-2xl">
              SHOP BY CATEGORY
            </h2>
          </div>
          <ul className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
            <li>
              <div className="relative block group">
                <img
                  src="https://thumbs.dreamstime.com/b/kids-shopping-smiling-little-girl-bags-gifts-happy-child-holds-lot-sale-holidays-concept-105009088.jpg"
                  className="object-cover w-auto  aspect-square"
                  alt="Kids Category"
                />
                <div className="absolute inset-0 flex flex-col items-start justify-end p-4 bg-black bg-opacity-50">
                  <h3 className="text-xl font-medium text-white">KIDS</h3>
                  <button
                    onClick={() => router.push("/product/listing/kids")}
                    className="mt-2 inline-block px-4 py-2 text-xs font-medium tracking-wide uppercase bg-white text-black rounded-md hover:bg-gray-200 focus:outline-none focus:bg-gray-200"
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            </li>
            <li>
              <div className="relative block group">
                <img
                  src="https://wallpapercave.com/wp/wp6488829.jpg"
                  className="object-cover w-auto rounded aspect-square"
                  alt="Women Category"
                />
                <div className="absolute inset-0 flex flex-col items-start justify-end p-4 bg-black bg-opacity-50">
                  <h3 className="text-xl font-medium text-white">WOMEN</h3>
                  <button
                    onClick={() => router.push("/product/listing/women")}
                    className="mt-2 inline-block px-4 py-2 text-xs font-medium tracking-wide uppercase bg-white text-black rounded-md hover:bg-gray-200 focus:outline-none focus:bg-gray-200"
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            </li>
            <li className="lg:col-span-2 lg:col-start-2">
              <div className="relative block group">
                <img
                  src="https://thumbs.dreamstime.com/b/positive-man-enjoying-shopping-happy-man-shopping-bags-isolated-white-excited-happy-man-doing-online-shopping-thanks-150853335.jpg"
                  className="object-cover w-auto rounded aspect-square"
                  alt="Men Category"
                />
                <div className="absolute inset-0 flex flex-col items-start justify-end p-4 bg-black bg-opacity-50">
                  <h3 className="text-xl font-medium text-white">MEN</h3>
                  <button
                    onClick={() => router.push("/product/listing/men")}
                    className="mt-2 inline-block px-4 py-2 text-xs font-medium tracking-wide uppercase bg-white text-black rounded-md hover:bg-gray-200 focus:outline-none focus:bg-gray-200"
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
