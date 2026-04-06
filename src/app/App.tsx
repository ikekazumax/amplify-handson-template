import { useState } from "react";
import { ThemeInput } from "./components/ThemeInput";
import { AgentTeamProcessor } from "./components/AgentTeamProcessor";
import { ResultsDisplay, ProcessResult } from "./components/ResultsDisplay";
import { Button } from "./components/ui/button";
import { simulateAgentProcess } from "./utils/mockData";
import { Sparkles, RotateCcw } from "lucide-react";

export default function App() {
  const [theme, setTheme] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentStage, setCurrentStage] = useState(-1);
  const [results, setResults] = useState<ProcessResult | null>(null);

  const handleStartProcess = async () => {
    if (!theme.trim()) return;

    setIsProcessing(true);
    setResults(null);
    setCurrentStage(0);

    try {
      const processResults = await simulateAgentProcess(theme, setCurrentStage);
      setResults(processResults);
    } catch (error) {
      console.error("処理中にエラーが発生しました:", error);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleReset = () => {
    setTheme("");
    setResults(null);
    setCurrentStage(-1);
    setIsProcessing(false);
  };

  return (
    <div className="size-full min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* ヘッダー */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="size-10 text-blue-600" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AIエージェントチーム・ハッカソンシミュレーター
            </h1>
          </div>
          <p className="text-muted-foreground">
            ハッカソンテーマを入力すると、AIエージェントチームが自動的にアイデア具体化、実装、資料作成、プレゼンを実行します
          </p>
        </div>

        {/* 入力セクション */}
        <div className="mb-8 bg-white rounded-lg shadow-lg p-6">
          <ThemeInput
            value={theme}
            onChange={setTheme}
            disabled={isProcessing}
          />

          <div className="flex gap-4 mt-6">
            <Button
              onClick={handleStartProcess}
              disabled={!theme.trim() || isProcessing}
              className="flex-1 h-12 text-lg"
              size="lg"
            >
              <Sparkles className="size-5 mr-2" />
              AIエージェントチーム実行
            </Button>

            {(results || isProcessing) && (
              <Button
                onClick={handleReset}
                variant="outline"
                disabled={isProcessing}
                className="h-12"
                size="lg"
              >
                <RotateCcw className="size-5 mr-2" />
                リセット
              </Button>
            )}
          </div>
        </div>

        {/* 処理中の表示 */}
        {isProcessing && (
          <div className="mb-8">
            <AgentTeamProcessor currentStage={currentStage} />
          </div>
        )}

        {/* 結果表示 */}
        {results && !isProcessing && (
          <div className="animate-in fade-in duration-500">
            <ResultsDisplay results={results} />
          </div>
        )}

        {/* フッター */}
        {!results && !isProcessing && (
          <div className="text-center mt-12 text-sm text-muted-foreground">
            <p>💡 テーマを入力して、AIエージェントチームの力を体験してください</p>
          </div>
        )}
      </div>
    </div>
  );
}