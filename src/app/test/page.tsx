import CourseForm from "@/components/CourseForm";

export default function testPage() {
    const handleSave = () => {
        // no-op for test page
    };

    const handleCancel = () => {
        // no-op for test page
    };

    return (
        <div>
            <h1>Test Page</h1>
            <CourseForm onSave={handleSave} onCancel={handleCancel} />
        </div>
    );
}