import {FC} from "react";
import { Layout as AntLayout, Menu as AntMenu } from "antd";
import styles from './styles.less';
import {Link} from "react-router-dom";

const { Sider: AntSider } = AntLayout;

const Sider: FC = () => {
  return (
    <AntSider trigger={null} collapsible>
      <div className={styles.logo} >
        My Logo
      </div>
      <AntMenu theme="dark" mode="inline" defaultSelectedKeys={['orderList']}>
        <AntMenu.Item key="orderList">
          <Link to="/order/list">订单列表</Link>
        </AntMenu.Item>
        <AntMenu.Item key="orderDetails">
          <Link to="/order/details">订单详情</Link>
        </AntMenu.Item>
      </AntMenu>
    </AntSider>
  )
}

export default Sider
