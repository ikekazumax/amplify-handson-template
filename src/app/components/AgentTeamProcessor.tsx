import { Users, Lightbulb, Code, FileText, Presentation } from "lucide-react";
import { Card, CardContent } from "./ui/card";

interface AgentStage {
  id: string;
  name: string;
  icon: React.ReactNode;
  status: "pending" | "processing" | "completed";
}

interface AgentTeamProcessorProps {
  currentStage: number;
}

export function AgentTeamProcessor({ currentStage }: AgentTeamProcessorProps) {
  const stages: AgentStage[] = [
    {
      id: "ideation",
      name: "アイデア具体化",
      icon: <Lightbulb className="size-6" />,
      status: currentStage > 0 ? "completed" : currentStage === 0 ? "processing" : "pending",
    },
    {
      id: "implementation",
      name: "実装",
      icon: <Code className="size-6" />,
      status: currentStage > 1 ? "completed" : currentStage === 1 ? "processing" : "pending",
    },
    {
      id: "documentation",
      name: "資料作成",
      icon: <FileText className="size-6" />,
      status: currentStage > 2 ? "completed" : currentStage === 2 ? "processing" : "pending",
    },
    {
      id: "presentation",
      name: "プレゼン",
      icon: <Presentation className="size-6" />,
      status: currentStage > 3 ? "completed" : currentStage === 3 ? "processing" : "pending",
    },
  ];

  return (
    <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-2">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <Users className="size-8 text-blue-600" />
          <div>
            <h3 className="font-bold text-xl">AIエージェントチーム</h3>
            <p className="text-sm text-muted-foreground">処理を実行中...</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {stages.map((stage, index) => (
            <div
              key={stage.id}
              className={`flex flex-col items-center gap-2 p-4 rounded-lg transition-all ${
                stage.status === "completed"
                  ? "bg-green-100 border-2 border-green-400"
                  : stage.status === "processing"
                  ? "bg-blue-100 border-2 border-blue-400 animate-pulse"
                  : "bg-gray-100 border-2 border-gray-300"
              }`}
            >
              <div
                className={`${
                  stage.status === "completed"
                    ? "text-green-600"
                    : stage.status === "processing"
                    ? "text-blue-600"
                    : "text-gray-400"
                }`}
              >
                {stage.icon}
              </div>
              <span className="text-sm font-medium text-center">{stage.name}</span>
              {stage.status === "processing" && (
                <div className="flex gap-1 mt-1">
                  <div className="size-2 rounded-full bg-blue-600 animate-bounce" style={{ animationDelay: "0ms" }} />
                  <div className="size-2 rounded-full bg-blue-600 animate-bounce" style={{ animationDelay: "150ms" }} />
                  <div className="size-2 rounded-full bg-blue-600 animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
