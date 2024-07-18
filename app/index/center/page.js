"use client";

import React from "react";
import { getData } from "./data";

export default async function Center() {
   if (!process.env.NEXT_PUBLIC_API_URL) {
      return null;
   }
   const data = await getData();

   return (
      <>
         {data.map((e) => {
            return (
               <div
                  className="p-3 m-3 bg-slate-500 rounded-md text-white lg:mx-60"
                  key={e.id}
               >
                  <h2>{e.id}</h2>
                  <h2>{e.province}</h2>
                  <h2>{e.states}</h2>
               </div>
            );
         })}
      </>
   );
}
