import { NextResponse } from "next/server";
import { mysqlPool } from "../util/db";

export async function GET(request) {
   try {
      const promisePool = mysqlPool.promise();
      const [rows, fields] = await promisePool.query(
         `SELECT * from province WHERE states ="ภาคกลาง"`
      );

      if (rows) {
         return NextResponse.json(rows);
      }
   } catch (Error) {
      return NextResponse.json(Error);
   }
}
