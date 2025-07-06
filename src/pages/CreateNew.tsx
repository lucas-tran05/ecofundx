import { useSearchParams } from "react-router-dom";

export default function CreateNewPage() {
    const [searchParams] = useSearchParams();
    const step = searchParams.get("step");

    return (
        <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4 mt-8">Create new project</h1>
            <p className="text-gray-600 mb-6">Create a new project and raise funds for it.</p>
            <p>Step {step}</p>
        </div>
    );
}
