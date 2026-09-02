import { Course } from "@/types/courses";

export const courses: Course[] = [
  {
    id: 1,
    code: "10301222",
    title: "โครงสร้างข้อมูลและอัลกอริทึม",
    credits: 3,
    isOpen: true,
  },
  {
    id: 2,
    code: "10301223",
    title: "ฐานข้อมูลโครงสร้างเชิงสัมพันธ์",
    credits: 3,
    isOpen: false,
  },
  {
    id: 3,
    code: "10301225",
    title: "วิศวกรรมซอฟต์แวร์",
    credits: 3,
    isOpen: true,
  },
  {
    id: 4,
    code: "10301231",
    title: "เว็บเทคโนโลยี",
    credits: 3,
    isOpen: false,
  },
];