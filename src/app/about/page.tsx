export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">เกี่ยวกับ(About)</h1>
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm space-y-4 text-gray-700 leading-relaxed">

        <h2 className="text-xl font-semibold text-gray-900 pt-2">ฟีเจอร์หลักในระบบ:</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>ผลการลงทะเบียน</li>
          <li>ตารางเรียน/สอบ</li>
          <li>ผลการศึกษา</li>
          <li>ภาระค่าใช้จ่ายทุน</li>
          <li>ข้อมูลนักศึกษา</li> 
        </ul>
      </div>
    </main>
  );
}