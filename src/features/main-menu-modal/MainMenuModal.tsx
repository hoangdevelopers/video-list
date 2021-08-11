import { List, Modal, Select, Typography } from "antd";
import React from "react";
import { RightOutlined } from "@ant-design/icons";
import "./MainMenuModal.less";
const { Item } = List;
const { Option } = Select;

export interface IMainMenuModalProps {
  open: boolean;
  onOk: () => void;
  onCancel: () => void;
}
const MainMenuModal: React.FC<IMainMenuModalProps> = (props) => {
  return (
    <>
      <Modal
        visible={props.open}
        onOk={props.onOk}
        onCancel={props.onCancel}
        footer={null}
        title={null}
        closeIcon={null}
        closable={false}
        className="menu"
      >
        <List header={null} footer={null} className="menu__list">
          <Item style={{ borderBottom: "none" }} className="menu__list__item">
            <div>
              <img className="menu__list__item__icon" src={"/icons/box.png"} />
              <Typography.Text className="menu__list__item__title">
                Login
              </Typography.Text>
            </div>
            <RightOutlined />
          </Item>
          <Item style={{ borderBottom: "none" }} className="menu__list__item">
            <div>
              <img className="menu__list__item__icon" src={"/icons/pen.png"} />
              <Typography.Text className="menu__list__item__title">
                Sign up
              </Typography.Text>
            </div>
            <RightOutlined />
          </Item>
          <Item style={{ borderBottom: "none" }} className="menu__list__item">
            <div>
              <img
                className="menu__list__item__icon"
                src={"/icons/guides.png"}
              />
              <Typography.Text className="menu__list__item__title">
                Guides & FAQ
              </Typography.Text>
            </div>
            <RightOutlined />
          </Item>
          <Item className="menu__list__item">
            <div>
              <img
                className="menu__list__item__icon"
                src={"/icons/contact-us.png"}
              />
              <Typography.Text className="menu__list__item__title">
                Contact us
              </Typography.Text>
            </div>
            <RightOutlined />
          </Item>
          <Item className="menu__list__item">
            <div>
              <img
                className="menu__list__item__icon"
                src={"/icons/change-language.png"}
              />
              <Typography.Text className="menu__list__item__title">
                Change language
              </Typography.Text>
            </div>
            <div>
              <Select defaultValue="en">
                <Option value="en">English</Option>
              </Select>
              <RightOutlined />
            </div>
          </Item>
        </List>
      </Modal>
    </>
  );
};
export default MainMenuModal;
