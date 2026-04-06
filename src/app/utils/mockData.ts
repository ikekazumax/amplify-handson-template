import { ProcessResult, AgentDiscussion } from "../components/ResultsDisplay";

// モックデータ生成関数
export function generateMockResults(theme: string): ProcessResult {
  const getTimestamp = (offset: number = 0) => {
    const date = new Date();
    date.setMinutes(date.getMinutes() - offset);
    return date.toLocaleTimeString("ja-JP", { hour: "2-digit", minute: "2-digit" });
  };

  const ideationDiscussions: AgentDiscussion[] = [
    {
      agent: "プロダクトマネージャーAI",
      role: "戦略策定",
      message: `みなさん、今回のテーマ「${theme}」について議論を始めましょう。まず、このテーマの核心的な課題は何だと思いますか？ターゲットユーザーと解決すべき問題を明確にしたいです。`,
      timestamp: getTimestamp(15),
    },
    {
      agent: "ビジネスアナリストAI",
      role: "市場分析",
      message: `市場調査の結果を共有します。このテーマに関連する既存サービスは3つほど存在しますが、いずれもユーザー満足度が60%程度です。特に「使いにくさ」と「機能不足」が主な不満点として挙げられています。ここに大きなチャンスがありますね。`,
      timestamp: getTimestamp(14),
    },
    {
      agent: "デザイナーAI",
      role: "UX設計",
      message: `なるほど。既存サービスの「使いにくさ」という点は重要ですね。ユーザーインタビューのデータはありますか？具体的にどんな操作でつまずいているのか知りたいです。`,
      timestamp: getTimestamp(13),
    },
    {
      agent: "ビジネスアナリストAI",
      role: "市場分析",
      message: `はい、データがあります。主な問題は①複雑な登録プロセス（平均5分以上）、②情報が散在していて目的の機能にたどり着けない、③モバイル対応が不十分、の3点です。`,
      timestamp: getTimestamp(12),
    },
    {
      agent: "デザイナーAI",
      role: "UX設計",
      message: `完璧です。それなら、ソーシャルログイン対応で登録を30秒以内に、直感的なナビゲーションで2タップ以内に主要機能へアクセス、モバイルファーストのレスポンシブデザインを提案します。`,
      timestamp: getTimestamp(11),
    },
    {
      agent: "エンジニアAI",
      role: "技術検証",
      message: `技術的には問題ありません。ただ、「機能不足」という点について具体的に何が求められているのでしょうか？スコープを明確にしないと実装スケジュールに影響が出ます。`,
      timestamp: getTimestamp(10),
    },
    {
      agent: "プロダクトマネージャーAI",
      role: "戦略策定",
      message: `良い指摘です。MVP（Minimum Viable Product）として、まずはコア機能3つに絞りましょう。①ユーザー登録・認証、②メイン機能（テーマに応じた主要機能）、③データ分析・レポート機能。これで進めましょう。`,
      timestamp: getTimestamp(9),
    },
    {
      agent: "エンジニアAI",
      role: "技術検証",
      message: `了解しました。その範囲なら2週間でプロトタイプが作れます。バックエンドはNode.js + PostgreSQL、フロントエンドはReact + TypeScriptで進めます。リアルタイム性が必要ならWebSocketも追加できます。`,
      timestamp: getTimestamp(8),
    },
  ];

  const implementationDiscussions: AgentDiscussion[] = [
    {
      agent: "フロントエンドAI",
      role: "UI実装",
      message: `実装を開始します。デザインシステムをベースにコンポーネントライブラリを構築中です。再利用可能なUIコンポーネントを20個ほど作成予定です。`,
      timestamp: getTimestamp(15),
    },
    {
      agent: "バックエンドAI",
      role: "API開発",
      message: `APIエンドポイントの設計書を作成しました。RESTful APIで15エンドポイント、認証はJWTを使います。レビューをお願いできますか？`,
      timestamp: getTimestamp(14),
    },
    {
      agent: "エンジニアAI",
      role: "技術検証",
      message: `確認しました。ほぼ問題ないですが、ユーザーデータの取得APIにページネーションを追加してください。大量データに対応できるようにしましょう。`,
      timestamp: getTimestamp(13),
    },
    {
      agent: "バックエンドAI",
      role: "API開発",
      message: `承知しました。ページネーションとフィルタリング機能を追加します。1ページあたり20件、最大100ページまで対応します。`,
      timestamp: getTimestamp(12),
    },
    {
      agent: "フロントエンドAI",
      role: "UI実装",
      message: `それに合わせて、フロントエンド側も無限スクロールを実装しますね。ユーザーエクスペリエンスを損なわないよう、スケルトンローディングも追加します。`,
      timestamp: getTimestamp(11),
    },
    {
      agent: "DevOpsAI",
      role: "インフラ構築",
      message: `インフラ面での懸念点があります。画像やファイルのアップロードは予定されていますか？ストレージとCDNの設計を検討する必要があります。`,
      timestamp: getTimestamp(10),
    },
    {
      agent: "バックエンドAI",
      role: "API開発",
      message: `はい、プロフィール画像とドキュメントファイルのアップロードが必要です。AWS S3を使う予定ですが、どうでしょうか？`,
      timestamp: getTimestamp(9),
    },
    {
      agent: "DevOpsAI",
      role: "インフラ構築",
      message: `S3 + CloudFrontで問題ありません。CDNでグローバルに高速配信できます。コスト最適化のためライフサイクルポリシーも設定します。`,
      timestamp: getTimestamp(8),
    },
    {
      agent: "QAエンジニアAI",
      role: "品質保証",
      message: `テスト戦略について相談です。ユニットテストのカバレッジ目標は80%でよろしいですか？E2Eテストはどの範囲まで実施しますか？`,
      timestamp: getTimestamp(7),
    },
    {
      agent: "フロントエンドAI",
      role: "UI実装",
      message: `はい、80%で進めましょう。E2Eテストは主要なユーザーフロー5つ（サインアップ、ログイン、メイン機能の実行、データ表示、ログアウト）をカバーしてください。`,
      timestamp: getTimestamp(6),
    },
  ];

  const documentationDiscussions: AgentDiscussion[] = [
    {
      agent: "テクニカルライターAI",
      role: "ドキュメント作成",
      message: `ドキュメント作成を開始します。技術仕様書、API仕様書、ユーザーガイドの3つを作成予定です。優先順位はありますか？`,
      timestamp: getTimestamp(12),
    },
    {
      agent: "プロダクトマネージャーAI",
      role: "戦略策定",
      message: `まずはプレゼン用の資料を最優先でお願いします。審査員向けに技術的な深さと社会的インパクトの両方を伝えたいです。`,
      timestamp: getTimestamp(11),
    },
    {
      agent: "マーケティングAI",
      role: "プレゼン資料設計",
      message: `プレゼンは5分間を想定していますか？それとも10分？時間によって構成を変えたいと思います。`,
      timestamp: getTimestamp(10),
    },
    {
      agent: "プロダクトマネージャーAI",
      role: "戦略策定",
      message: `5分間のピッチ形式です。簡潔で印象的なストーリーにしましょう。デモ動画も2分程度用意したいです。`,
      timestamp: getTimestamp(9),
    },
    {
      agent: "マーケティングAI",
      role: "プレゼン資料設計",
      message: `了解です。構成は「問題提起30秒→ソリューション60秒→デモ120秒→ビジネスモデル60秒→インパクト90秒」で進めます。デモ動画はフロントエンドチームに依頼しますね。`,
      timestamp: getTimestamp(8),
    },
    {
      agent: "データアナリストAI",
      role: "データ可視化",
      message: `市場規模やコスト削減効果を示すデータビジュアライゼーションを作成しました。インフォグラフィック形式で視覚的にインパクトがあるものにしました。`,
      timestamp: getTimestamp(7),
    },
    {
      agent: "マーケティングAI",
      role: "プレゼン資料設計",
      message: `素晴らしい！それをスライドに組み込みます。数字で説得力を持たせるのは重要ですね。`,
      timestamp: getTimestamp(6),
    },
    {
      agent: "テクニカルライターAI",
      role: "ドキュメント作成",
      message: `プレゼン資料の初稿が完成しました。レビューをお願いします。特に技術用語が多すぎないか確認してください。`,
      timestamp: getTimestamp(5),
    },
  ];

  const presentationDiscussions: AgentDiscussion[] = [
    {
      agent: "プレゼンターAI",
      role: "発表準備",
      message: `プレゼンテーションのリハーサルを行いました。タイミングは問題ありませんが、デモ部分でもう少し「驚き」の要素が欲しいです。`,
      timestamp: getTimestamp(10),
    },
    {
      agent: "デザイナーAI",
      role: "UX設計",
      message: `デモでアニメーションやトランジション効果を追加しましょう。ユーザーがデータを入力すると、リアルタイムでグラフが更新される様子を見せるのはどうでしょう？`,
      timestamp: getTimestamp(9),
    },
    {
      agent: "プレゼンターAI",
      role: "発表準備",
      message: `いいアイデアですね！視覚的なインパクトがあります。それに加えて、AIが推奨を提示するシーンも見せたいです。`,
      timestamp: getTimestamp(8),
    },
    {
      agent: "ストラテジストAI",
      role: "質疑応答準備",
      message: `想定質問リストを作成しました。「競合との違いは？」「収益化の計画は？」「技術的な課題は？」など10問です。回答も準備しました。`,
      timestamp: getTimestamp(7),
    },
    {
      agent: "エバンジェリストAI",
      role: "ビジョン共有",
      message: `素晴らしい準備ですね。最後のスライドで長期的なロードマップを示しましょう。6ヶ月後、1年後、3年後のビジョンを簡潔に伝えます。`,
      timestamp: getTimestamp(6),
    },
    {
      agent: "ビジネスアナリストAI",
      role: "市場分析",
      message: `ロードマップには市場成長予測も含めてください。この市場は年率30%で成長しているので、説得力が増します。`,
      timestamp: getTimestamp(5),
    },
    {
      agent: "プレゼンターAI",
      role: "発表準備",
      message: `全ての要素が揃いました。最終リハーサルで時間調整をして完成です。チーム全員、素晴らしい仕事でした！`,
      timestamp: getTimestamp(4),
    },
  ];

  return {
    discussionSummary: {
      ideation: ideationDiscussions,
      implementation: implementationDiscussions,
      documentation: documentationDiscussions,
      presentation: presentationDiscussions,
    },
    presentation: {
      title: `${theme} - AIエージェントチーム提案`,
      slides: [
        {
          title: "問題提起",
          content: `現状の課題：
• 「${theme}」に関する社会的なペインポイントが存在
• 既存のソリューションでは解決できていない問題が多数
• より効率的で効果的なアプローチが求められている

私たちのアプローチ：
最新テクノロジーとユーザー中心設計を組み合わせ、
実用的で持続可能なソリューションを提供します。`,
        },
        {
          title: "ソリューション概要",
          content: `主な特徴：
• 直感的で使いやすいインターフェース
• リアルタイムでのデータ処理と分析
• 多様なユーザーニーズに対応可能な柔軟な設計
• セキュリティとプライバシーを重視

技術スタック：
• フロントエンド：React + TypeScript
• バックエンド：Node.js + Express
• データベース：PostgreSQL
• インフラ：クラウドベースの自動スケーリング`,
        },
        {
          title: "主要機能",
          content: `コア機能：
1. ユーザー登録・認証システム
2. データ入力と管理機能
3. リアルタイム分析とレポート生成
4. コラボレーション機能
5. モバイル対応のレスポンシブデザイン

差別化ポイント：
• AIによる推奨機能
• カスタマイズ可能なダッシュボード
• 他サービスとのAPI連携`,
        },
        {
          title: "ビジネスモデルと市場性",
          content: `収益モデル：
• フリーミアムモデル（基本機能無料、高度な機能は有料）
• エンタープライズプラン
• API利用料

市場機会：
• ターゲット市場規模：大規模かつ成長中
• 競合との差別化が明確
• スケーラブルなビジネスモデル

今後の展開：
• 段階的な機能追加
• グローバル展開の可能性
• パートナーシップの構築`,
        },
        {
          title: "社会的インパクト",
          content: `期待される効果：
• 作業効率の大幅な向上
• コスト削減の実現
• ユーザー満足度の向上
• 社会的課題の解決に貢献

持続可能性：
• 長期的に運用可能な設計
• コミュニティによる継続的な改善
• 環境への配慮

次のステップ：
• ベータ版のリリース
• ユーザーフィードバックの収集
• 継続的な改善と機能追加`,
        },
      ],
    },
  };
}

// 段階的な処理をシミュレート
export async function simulateAgentProcess(
  theme: string,
  onStageChange: (stage: number) => void
): Promise<ProcessResult> {
  const stages = 4; // アイデア具体化、実装、資料作成、プレゼン
  const stageDelay = 2000; // 各段階2秒

  for (let i = 0; i < stages; i++) {
    onStageChange(i);
    await new Promise((resolve) => setTimeout(resolve, stageDelay));
  }

  onStageChange(stages); // 完了状態
  return generateMockResults(theme);
}