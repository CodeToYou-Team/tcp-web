"use server";

import connectMongo from "@/app/lib/connect-mongo";
import InventoryDB from "@/app/lib/models/Inventory.js";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  if (req.method === "GET") {
    await connectMongo();

    const items = await InventoryDB.find({ enabled: true }).select("-mainImg -othersImg");

    return NextResponse.json(
      { cars: JSON.parse(JSON.stringify(items)) },
      { status: 200 }
    );
  } else {
    return NextResponse.json({ message: "Invalid method!" }, { status: 400 });
  }
}
