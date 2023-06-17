import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const MarkdownEmbed = ({ markdown }: { markdown: string }) => {
  return (
    <div className="w-4/6 rounded-lg bg-slate-50 p-4 shadow-sm">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
    </div>
  );
};

export default MarkdownEmbed;
