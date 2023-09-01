import { NextResponse } from "next/server";

async function fetchBill() {
  //Make the button request new Bill with new data. How will the button know what parameter data to send?
  const response = await fetch(
    `https://api.congress.gov/v3/bill/117/hr/3076/text?api_key=${process.env.API_KEY}`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    }
  );
  const bill = await response.json();
  // console.log(bill);
  return bill;
}

export async function GET(request) {
  const bill = await fetchBill();
  return NextResponse.json(bill);
}
