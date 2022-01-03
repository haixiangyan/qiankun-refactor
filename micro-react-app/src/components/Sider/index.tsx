import {FC} from "react";
import { Layout as AntLayout, Menu as AntMenu } from "antd";
import styles from './styles.less';

const { Sider: AntSider } = AntLayout;

const Sider: FC = () => {
  return (
    <AntSider trigger={null} collapsible>
      <div className={styles.logo} >
        My Logo
      </div>
      <AntMenu theme="dark" mode="inline" defaultSelectedKeys={['orderList']}>
        <AntMenu.Item key="orderList">
          订单列表
        </AntMenu.Item>
        <AntMenu.Item key="orderDetails">
          订单详情
        </AntMenu.Item>
      </AntMenu>
    </AntSider>
  )
}

export default Sider
