import {FC, useState} from "react";
import {Link} from "react-router-dom";
import {Button, Drawer, Modal} from "antd";

const OrderList: FC = () => {
  const [drawerVisible, setDrawerVisible] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <div>
      <h1 className="title">【微应用】订单列表</h1>
      <p className="content">
        <Link to="/order/details">点击查看订单详情</Link>
      </p>

      <div>
        <Button type="primary" onClick={() => setDrawerVisible(true)}>
          【微应用】测试 Drawer 组件
        </Button>
        <Drawer title="Basic Drawer" placement="right" onClose={() => setDrawerVisible(false)} visible={drawerVisible}>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      </div>

      <div>
        <Button type="primary" onClick={() => setModalVisible(true)}>
          【微应用】测试 Modal 组件
        </Button>
        <Modal title="Basic Modal" onCancel={() => setModalVisible(false)} visible={modalVisible}>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    </div>
  )
}

export default OrderList;
