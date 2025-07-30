import { Menu, type MenuProps } from "@lobehub/ui";
import { useControls, useCreateStore } from "@lobehub/ui/storybook";
import { useState } from "react";
import { Flexbox } from "react-layout-kit";
import { agent_apps } from "./data";

export const SideMenuBar = ({
  onMenuClick,
}: {
  onMenuClick: (key: string) => void;
}) => {
  const [activeKey, setActiveKey] = useState<string>();
  const store = useCreateStore();
  const options = useControls(
    {
      compact: false,
      mode: "inline",
      shadow: false,
      variant: "borderless",
    },
    { store }
  ) as MenuProps;

  return (
    <Flexbox gap={24} width={"100%"}>
      <Menu
        {...options}
        items={agent_apps}
        onClick={({ key }) => {
          setActiveKey(key);
          onMenuClick(key);
        }}
        selectedKeys={activeKey ? [activeKey] : undefined}
      ></Menu>
    </Flexbox>
  );
};
