import React from "react";
import GreenTick from "../Utilities/GreenTick";

function Pricing() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">Pricing</h1>
      <p className="text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
      </p>


      <div>
      <div className="">
      <div className="max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight">Lifetime membership</h3>
            <p className="mt-6 text-base leading-7">
              Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis blanditiis
              repellendus etur quidem assumenda.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-info">What’s included</h4>
              <div className="h-px flex-auto" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-primary-content sm:grid-cols-2 sm:gap-6"
            >
                <li className="flex">
                    <GreenTick /> Private forum access
                </li>
                <li className="flex">
                    <GreenTick /> Member resources
                </li>
                <li className="flex">
                    <GreenTick /> Entry to annual conference
                </li>
                <li className="flex">
                    <GreenTick /> Official member t-shirt
                </li>
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold">Pay once, own it forever</p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight">$3.99</span>
                  <span className="text-sm font-semibold leading-6 tracking-wide">USD</span>
                </p>
                <a
                  href="#"
                  className="mt-10 block w-full rounded-md bg-accent px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-neutral focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get access
                </a>
                <p className="mt-6 text-xs leading-5 text-primary-content">
                  Invoices and receipts available for easy company reimbursement
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
}

export default Pricing;
