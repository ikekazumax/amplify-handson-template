import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { ScrollArea } from "./ui/scroll-area";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { MessageSquare, FileText, ChevronLeft, ChevronRight, User, Bot } from "lucide-react";
import { useState } from "react";

export interface AgentDiscussion {
  agent: string;
  role: string;
  message: string;
  timestamp: string;
}

export interface ProcessResult {
  discussionSummary: {
    ideation: AgentDiscussion[];
    implementation: AgentDiscussion[];
    documentation: AgentDiscussion[];
    presentation: AgentDiscussion[];
  };
  presentation: {
    title: string;
    slides: Array<{
      title: string;
      content: string;
    }>;
  };
}

interface ResultsDisplayProps {
  results: ProcessResult;
}

// エージェントごとのアイコン色を定義
const getAgentColor = (agent: string): string => {
  const colors: { [key: string]: string } = {
    "プロダクトマネージャーAI": "bg-blue-500",
    "デザイナーAI": "bg-purple-500",
    "エンジニアAI": "bg-green-500",
    "ビジネスアナリストAI": "bg-orange-500",
    "フロントエンドAI": "bg-cyan-500",
    "バックエンドAI": "bg-indigo-500",
    "DevOpsAI": "bg-red-500",
    "QAエンジニアAI": "bg-pink-500",
    "テクニカルライターAI": "bg-teal-500",
    "マーケティングAI": "bg-yellow-500",
    "データアナリストAI": "bg-violet-500",
    "プレゼンターAI": "bg-rose-500",
    "ストラテジストAI": "bg-amber-500",
    "エバンジェリストAI": "bg-emerald-500",
  };
  return colors[agent] || "bg-gray-500";
};

export function ResultsDisplay({ results }: ResultsDisplayProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev < results.presentation.slides.length - 1 ? prev + 1 : prev
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="size-5" />
            AIエージェントチーム議論サマリー
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="ideation" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="ideation">アイデア具体化</TabsTrigger>
              <TabsTrigger value="implementation">実装</TabsTrigger>
              <TabsTrigger value="documentation">資料作成</TabsTrigger>
              <TabsTrigger value="presentation">プレゼン</TabsTrigger>
            </TabsList>

            {Object.entries(results.discussionSummary).map(([key, discussions]) => (
              <TabsContent key={key} value={key} className="mt-4">
                <ScrollArea className="h-[500px] pr-4">
                  <div className="space-y-3">
                    {discussions.map((discussion, index) => (
                      <div
                        key={index}
                        className="flex gap-3 items-start"
                      >
                        {/* アイコン */}
                        <div className={`size-10 rounded-full ${getAgentColor(discussion.agent)} flex items-center justify-center text-white flex-shrink-0 mt-1`}>
                          <Bot className="size-5" />
                        </div>
                        
                        {/* メッセージ本体 */}
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-semibold text-sm">{discussion.agent}</span>
                            <Badge variant="outline" className="text-xs">{discussion.role}</Badge>
                            <span className="text-xs text-muted-foreground ml-auto">
                              {discussion.timestamp}
                            </span>
                          </div>
                          <div className="bg-muted/50 rounded-lg rounded-tl-none p-3 border border-border">
                            <p className="text-sm leading-relaxed">{discussion.message}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="size-5" />
            プレゼンテーション資料
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* スライドビューア */}
          <div className="space-y-4">
            {/* タイトルスライド */}
            {currentSlide === 0 ? (
              <div className="aspect-video rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white flex items-center justify-center p-8">
                <h2 className="text-4xl font-bold text-center">
                  {results.presentation.title}
                </h2>
              </div>
            ) : (
              /* コンテンツスライド */
              <div className="aspect-video rounded-lg border-2 border-border bg-white p-8 flex flex-col">
                <div className="mb-6">
                  <Badge variant="secondary" className="mb-3">
                    スライド {currentSlide + 1} / {results.presentation.slides.length + 1}
                  </Badge>
                  <h3 className="text-3xl font-bold">
                    {results.presentation.slides[currentSlide - 1].title}
                  </h3>
                </div>
                <div className="flex-1 overflow-y-auto">
                  <p className="text-base leading-relaxed whitespace-pre-line">
                    {results.presentation.slides[currentSlide - 1].content}
                  </p>
                </div>
              </div>
            )}

            {/* ナビゲーションボタン */}
            <div className="flex items-center justify-between">
              <Button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                variant="outline"
                size="lg"
              >
                <ChevronLeft className="size-5 mr-2" />
                前へ
              </Button>

              <div className="text-sm text-muted-foreground">
                {currentSlide + 1} / {results.presentation.slides.length + 1}
              </div>

              <Button
                onClick={nextSlide}
                disabled={currentSlide === results.presentation.slides.length}
                variant="outline"
                size="lg"
              >
                次へ
                <ChevronRight className="size-5 ml-2" />
              </Button>
            </div>

            {/* スライドサムネイル */}
            <div className="flex gap-2 overflow-x-auto py-2">
              <button
                onClick={() => setCurrentSlide(0)}
                className={`flex-shrink-0 w-24 h-16 rounded border-2 transition-all ${
                  currentSlide === 0
                    ? "border-blue-600 ring-2 ring-blue-200"
                    : "border-border hover:border-blue-400"
                } bg-gradient-to-r from-blue-600 to-purple-600`}
              />
              {results.presentation.slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index + 1)}
                  className={`flex-shrink-0 w-24 h-16 rounded border-2 transition-all ${
                    currentSlide === index + 1
                      ? "border-blue-600 ring-2 ring-blue-200"
                      : "border-border hover:border-blue-400"
                  } bg-white flex items-center justify-center text-xs font-medium text-muted-foreground`}
                >
                  {index + 2}
                </button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}