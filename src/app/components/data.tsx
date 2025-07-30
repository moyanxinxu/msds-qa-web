import { Icon, type ItemType } from "@lobehub/ui";
import { ArchiveIcon, BotIcon } from "lucide-react";

export const agent_apps: ItemType[] = [
  {
    icon: <Icon icon={BotIcon} />,
    key: "msds-qa-agent",
    label: "msds-qa-agent",
  },
  {
    icon: <Icon icon={ArchiveIcon} />,
    key: "other",
    label: "其他",
  },
  {
    type: "divider",
  },
];
