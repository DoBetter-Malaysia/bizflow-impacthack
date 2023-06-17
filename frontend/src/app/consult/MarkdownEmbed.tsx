import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const MarkdownEmbed = ({ markdown }: { markdown: string }) => {
  return (
    <div className="my-2 w-4/6 rounded-lg  bg-slate-50 p-8 shadow-lg outline outline-1 outline-gray-300">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
    </div>
  );
};

export default MarkdownEmbed;
