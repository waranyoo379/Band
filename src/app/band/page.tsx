
// import BandCard from "@/components/BandCard";
// import { favoriteBands } from "@/data/bands";

// export default function Home() {
//   return (
//     <main className="max-w-5xl mx-auto p-6">
//       <h1 className="text-4xl font-extrabold text-center mb-10">
//         My Favorite Bands
//       </h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {favoriteBands.map((band) => (
//           <BandCard key={band.id} band={band} />
//         ))}
//       </div>
//     </main>
//   );
// }

import BandCard from "@/components/BandCard";
import { favoriteBands } from "@/data/bands";

export default function BandsPage() {
  return (
    <main className="py-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Favorite Bands</h1>
        <p className="text-gray-500 mt-1">วงดนตรียอดนิยมในดวงใจและข้อมูลสมาชิก</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {favoriteBands.map((band) => (
          <BandCard key={band.id} band={band} />
        ))}
      </div>
    </main>
  );
}