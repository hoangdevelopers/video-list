import { Popover, Button, Typography } from "antd";
import React, { useMemo } from "react";
import "./PopoverMenu.less";

export interface IPopoverMenuItem {
  name: string;
  key: string | null;
}
export interface IPopoverMenuProps {
  items: IPopoverMenuItem[];
  selected: string | null;
}
const PopoverMenu: React.FC<
  IPopoverMenuProps & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const currentName = useMemo(() => {
    const item = props.items.find((item) => item.key == props.selected);
    return item ? item.name : "";
  }, [props.items, props.selected]);
  return (
    <>
      <Popover
        content={
          <>
            {props.items.map((item, key) => (
              <p key={key}>
                <Typography.Text>{item.name}</Typography.Text>
              </p>
            ))}
          </>
        }
        title={null}
        trigger="click"
      >
        <Button className="popover-btn">{currentName}</Button>
      </Popover>
    </>
  );
};

export default PopoverMenu;
