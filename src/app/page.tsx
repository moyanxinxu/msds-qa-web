"use client";

import { useCopilotAction } from "@copilotkit/react-core";
import { CopilotChat, CopilotChatSuggestion } from "@copilotkit/react-ui";
import {
  Footer,
  FooterProps,
  Header,
  Layout,
  Tabs,
  type TabsProps,
} from "@lobehub/ui";
import { LobeHub } from "@lobehub/ui/brand";
import { createStyles } from "antd-style";
import { SideMenuBar } from "./components/sidebar";
import { UserMessage, AssistantMessage } from "./components/message";
import PredictiveStateUpdates from "./predictive_state_updates";
import { useState } from "react";

// const columns: FooterProps["columns"] = [
// {
//   items: [
//     {
//       // description: "数据科学学院官网",
//       openExternal: true,
//       title: "🏫数据科学学院",
//       url: "https://sjkx.qust.edu.cn",
//     },
//   ],
//   title: "友链",
// },
// {
//   items: [
//     {
//       description: "AI Commit CLI",
//       openExternal: true,
//       title: "💌 Lobe Commit",
//       url: "https://github.com/lobehub/lobe-commit",
//     },
//   ],
//   title: "More Products",
// },
// ];

const useStyles = createStyles(({ css, token }) => ({
  footer: css`
    height: 36px;
    border-block-start: 1px solid ${token.colorBorder};
  `,
  header: css`
    height: 100%;
    background: ${token["cyan-5"]};
    border-block-end: 1px solid ${token.colorBorder};
  `,
}));

const suggestions: CopilotChatSuggestion[] = [
  {
    title: "查询化学品信息",
    message: "请提供化学品名称。",
    partial: false,
  },
  {
    title: "查询实验室安全手册",
    message: "请提供实验室名称或相关信息。",
    partial: false,
  },
];

export default function CopilotKitPage() {
  const [currentView, setCurrentView] = useState("default");

  const handleMenuClick = (view: string) => {
    setCurrentView(view);
  };

  useCopilotAction({
    name: "ChemInfoRetriever",
    available: "disabled",
    render: ({ status, args }) => {
      return (
        <p className="text-gray-500 mt-2">
          {status === "complete" &&
            `正在从国家危险化学品安全公共服务互联网平台查询: ${args.chem_name}`}
        </p>
      );
    },
  });
  useCopilotAction({
    name: "faiss_retriever",
    available: "disabled",
    render: ({ status, args }) => {
      return (
        <p className="text-gray-500 mt-2">
          {status === "complete" && `正在从实验室安全手册查询......`}
        </p>
      );
    },
  });

  return (
    <main>
      <Layout
        // footer={<Footer bottom="Copyright © 2022" columns={columns} />}
        header={
          <Header
            actions={"ACTIONS"}
            logo={<LobeHub type={"combine"} />}
            nav={["A", "B"]}
          />
        }
        sidebar={<SideMenuBar onMenuClick={handleMenuClick} />}
      >
        {currentView === "msds-qa-agent" && (
          <CopilotChat
            UserMessage={UserMessage}
            AssistantMessage={AssistantMessage}
            instructions="Hello"
            labels={{
              title: "Your Assistant",
              initial: "你好！👋 我是小谷。",
            }}
          />
        )}
        {currentView === "other" && <PredictiveStateUpdates />}
      </Layout>
    </main>
  );
}
