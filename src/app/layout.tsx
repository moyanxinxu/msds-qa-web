import type { Metadata } from "next";
import { CopilotKit } from "@copilotkit/react-core";
import "@copilotkit/react-ui/styles.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "DEMO",
  description: "DEMO",
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <body>
        <CopilotKit
          agent="msds-qa-agent"
          runtimeUrl="/api/copilotkit"
          showDevConsole={true}
        >
          {children}
        </CopilotKit>
      </body>
    </html>
  );
}
