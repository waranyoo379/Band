type Course = {
    id: number;
    code: string;
    title: string;
    credits: number;
    isOpen: boolean;
  };

const course: Course[] = [
    {id: 1, code: "CS101", title: "Introduction to Computer Science", credits: 3, isOpen: true},
    {id: 2, code: "MATH201", title: "Calculus II", credits: 4, isOpen: false},
    {id: 3, code: "PHYS301", title: "Physics III", credits: 3, isOpen: true},
    {id: 4, code: "ENG102", title: "English Composition", credits: 2, isOpen: true},
    {id: 5, code: "HIST210", title: "World History", credits: 3, isOpen: false},
]

export default function CoursesPage() {
  return (
      <main className="container mx-auto max-w-2xl px-6 py-16">
        <h1>รายวิชาทั้งหมด</h1>
        <section className="mt-3 divide-y divide-neutral-200 dark:divide-neutral-800">
            {course.map((c) => (
            <article key={c.id} className="py-2">
                <h3 className="text-lg font-medium">{c.title}</h3>
                <p>รหัสวิชา: {c.code}</p>
                <p>{c.credits} หน่วยกิต</p>
                <p>{c.isOpen ? "เปิดลงทะเบียน" : "ปิดลงทะเบียน"}</p>
            </article>
            ))}
        </section>
      </main>
  );
}
