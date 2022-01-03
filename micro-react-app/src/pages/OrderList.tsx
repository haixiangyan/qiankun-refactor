import {FC} from "react";
import {Link} from "react-router-dom";

const OrderList: FC = () => {
  return (
    <div>
      <h1>订单列表</h1>
      <p>
        <Link to="/order/details">点击查看订单详情</Link>
      </p>
    </div>
  )
}

export default OrderList;
