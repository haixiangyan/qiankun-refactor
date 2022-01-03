import {FC, useContext, useState} from "react";
import {Link} from "react-router-dom";
import {Button, Drawer, Modal} from "antd";
import MicroAppContext from "../context/MicroAppContext";

const OrderList: FC = () => {
  const { state, commit } = useContext(MicroAppContext);

  const [drawerVisible, setDrawerVisible] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <div>
      <h1 className="title">【微应用】订单列表</h1>
      <p className="content">
        <Link to="/order/details">点击查看订单详情</Link>
      </p>

      <div>
        <p>主应用 Counter: {state?.counter}</p>
        <Button type="primary" onClick={() => commit?.('increment')}>【微应用】+1</Button>
        <Button danger onClick={() => commit?.('decrement')}>【微应用】-1</Button>
      </div>

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
