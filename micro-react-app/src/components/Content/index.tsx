import { Layout as AntLayout } from "antd";
import {Route, Routes} from "react-router-dom";
import OrderList from "../../pages/OrderList";
import OrderDetails from "../../pages/OrderDetails";

const { Content: AntContent } = AntLayout;

const Content = () => {
  return (
    <AntContent>
      <Routes>
        <Route path="/" element={<span>首页</span>} />
        <Route path="/order/list" element={<OrderList />} />
        <Route path="/order/details" element={<OrderDetails />} />
      </Routes>
    </AntContent>
  )
}

export default Content;
