"use client";

import DynamicBrandPage from "../product/[brandName]/page";

export default function EMIPage() {
  return <DynamicBrandPage brandOverride="emi" />;
}
