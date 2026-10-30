// src/components/ui/KeepLastChars.tsx
// 段落の最後の行が1〜2文字だけにならないよう、文の最後の3文字を途中で折り返さないまとまりにする。
// 最後の3文字を white-space: nowrap の span で包む。文字はコードポイントで数える。

/** 文を「前の部分（head）」と「最後の count 文字（tail）」に分ける。count 文字以下の文は全体を tail にする */
function splitLastChars(text: string, count = 3): { head: string; tail: string } {
  const chars = Array.from(text);
  if (chars.length <= count) {
    return { head: "", tail: text };
  }
  return {
    head: chars.slice(0, -count).join(""),
    tail: chars.slice(-count).join(""),
  };
}

export default function KeepLastChars({ text }: { text: string }) {
  const { head, tail } = splitLastChars(text);
  return (
    <>
      {head}
      <span className="whitespace-nowrap">{tail}</span>
    </>
  );
}
