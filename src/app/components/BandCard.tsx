import Image from "next/image";
import { Band } from "../types/Band";

type BandCardProps = {
  band: Band;
};

export default function BandCard({ band }: BandCardProps) {
  return (
    <article className="border border-gray-200 p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col">
      {/* รูปวงหลัก */}
      <div className="relative w-full h-52 mb-4 bg-gray-100 rounded-lg overflow-hidden">
        <Image
          src={band.image}
          alt={`รูปภาพวง ${band.name}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <h2 className="text-2xl font-bold text-gray-900">{band.name}</h2>
      <p className="text-sm text-gray-500 mb-4">ก่อตั้งปี ค.ศ. {band.formationYear}</p>

      <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-700 mb-3">
        สมาชิกในวง:
      </h3>

      {/* รายชื่อสมาชิกพร้อมรูปภาพวงกลม */}
      <ul className="space-y-3 mt-auto">
        {band.members.map((member, index) => (
          <li key={index} className="flex items-center justify-between border-b border-gray-100 pb-2">
            <div className="flex items-center gap-3">
              {/* กรอบรูปทรงกลมขนาดเล็ก (40x40 px) */}
              <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 bg-gray-100 border border-gray-200">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="40px"
                />
              </div>
              <span className="font-medium text-gray-900 text-sm">{member.name}</span>
            </div>
            <span className="text-gray-500 text-xs">{member.role}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}