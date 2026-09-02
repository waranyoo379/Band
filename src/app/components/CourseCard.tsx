import { Course } from "@/types/courses";

type CourseCardProps = {
  course: Course;
};

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <article className="border border-gray-200 p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col justify-between">
      <div>
        <span className="text-xs font-semibold px-2.5 py-1 bg-gray-100 rounded text-gray-700">
          {course.code}
        </span>
        <h2 className="text-lg font-bold text-gray-900 mt-3 mb-1">
          {course.title}
        </h2>
        <p className="text-gray-600 text-sm">{course.credits} หน่วยกิต</p>
      </div>
      <div className="mt-4 pt-3 border-t border-gray-100">
        <span
          className={`text-sm font-semibold ${
            course.isOpen ? "text-green-600" : "text-red-600"
          }`}
        >
          ● {course.isOpen ? "เปิดลงทะเบียน" : "ปิดลงทะเบียน"}
        </span>
      </div>
    </article>
  );
}