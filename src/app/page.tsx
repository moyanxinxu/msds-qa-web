"use client";

import { useCopilotAction } from "@copilotkit/react-core";
import {
  HeaderProps,
  useChatContext,
  CopilotChat,
  CopilotChatSuggestion,
  RenderSuggestion,
  UserMessageProps,
  useCopilotChatSuggestions,
  RenderSuggestionsListProps,
} from "@copilotkit/react-ui";
import { UserMessage, AssistantMessage } from "./components/message";
import { useState, useEffect } from "react";
const suggestions = [
  "查询化学品信息",
  "查看历史记录",
  // 你可以继续添加更多建议
];

export default function CopilotKitPage() {
  useCopilotAction({
    name: "ChemInfoRetriever",
    available: "disabled",
    render: ({ status, args }) => {
      return (
        <p className="text-gray-500 mt-2">
          {status !== "complete" && "Calling weather API..."}
          {status === "complete" &&
            `正在从国家危险化学品安全公共服务互联网平台查询: ${args.chem_name}`}
        </p>
      );
    },
  });

  return (
    <main>
      <CopilotChat
        UserMessage={UserMessage}
        AssistantMessage={AssistantMessage}
        instructions="Hello"
        labels={{
          title: "Your Assistant",
          initial: "Hi! 👋 How can I assist you today?",
        }}
      />
    </main>
  );
}
