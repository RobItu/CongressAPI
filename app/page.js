"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "./components/Button";

export default function Home() {
  const [bill, setBill] = useState([]);
  useEffect(() => {
    const getBill = async () => {
      const response = await fetch("api/bill");
      const bill = await response.json();
      const billsArray = bill.textVersions[0].formats[0].url;
      setBill(billsArray);
    };
    getBill();
  });
  return (
    <div>
      {bill}
      <Button />
    </div>
  );
}
