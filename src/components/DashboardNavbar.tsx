import { Link, useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import { Col, Layout, Row } from 'antd';
import { MenuOutlined, BellOutlined } from '@ant-design/icons';
import './DashboardNavbar.less';
import { Typography } from 'antd';
import MainMenuModal from '../features/main-menu-modal/MainMenuModal';
const { Title } = Typography;

const NAVBAR_TEXTS = [{ page: '/event', text: 'Event' }];

const { Header } = Layout;

const DashboardNavbar: React.FC<{}> = (props) => {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(false);
  const onClickHamburger = () => setOpenMenu(true);
  const onMenuOk = () => setOpenMenu(false);
  const onMenuCancel = () => setOpenMenu(false);
  return (
    <>
      <Header className="dashboard-header">
        <Row className={'header'}>
          <Col>
            <Link to="/events">
              <BellOutlined
                style={{ color: '#333333' }}
                className={'header__icon'}
              />
            </Link>
          </Col>
          <Col className={'header__title'}>
            <Title level={4}>
              {
                NAVBAR_TEXTS.find((el) => location.pathname.startsWith(el.page))
                  ?.text
              }
            </Title>
          </Col>
          <Col>
            <MenuOutlined
              className={'header__icon'}
              onClick={onClickHamburger}
            />
          </Col>
        </Row>
      </Header>
      <MainMenuModal open={openMenu} onCancel={onMenuCancel} onOk={onMenuOk} />
    </>
  );
};

export default DashboardNavbar;
