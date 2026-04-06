import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";

interface ThemeInputProps {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

export function ThemeInput({ value, onChange, disabled }: ThemeInputProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor="theme-input" className="text-lg">
        ハッカソンテーマ
      </Label>
      <Textarea
        id="theme-input"
        placeholder="例：地域の高齢者支援、SDGs達成のためのアプリ、学生向け学習支援ツール..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        className="min-h-[120px] resize-none"
      />
    </div>
  );
}
