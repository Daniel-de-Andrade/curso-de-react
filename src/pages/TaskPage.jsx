import { useSearchParams } from "react-router-dom";
import { ChevronLeftIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Title from "../components/Title";

function TaskPage() {
  let [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen bg-slate-500 p-6 flex justify-center">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative mb-6">
          <button
            onClick={() => navigate(-1)}
            className="text-slate-100 absolute left-0 top-0 bottom-0"
          >
            <ChevronLeftIcon />
          </button>
          <Title>Detalhes da Tarefa</Title>
        </div>
        <div className="bg-slate-200 p-4 rounded-md shadow">
          <h2 className="text-slate-700 text-xl font-bold">{title}</h2>
          <p className="text-slate-700">{description}</p>
        </div>
      </div>
    </div>
  );
}
export default TaskPage;
