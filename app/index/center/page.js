export async function getData() {
   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api`);
   if (!res.ok) {
      throw new Error("Failed to fetch data");
   }
   return res.json();
}

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
