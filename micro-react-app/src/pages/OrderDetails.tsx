import {FC} from "react";
import {Link} from "react-router-dom";

const OrderDetails: FC = () => {
  return (
    <div>
      <h1>【微应用】订单详情</h1>
      <p>
        <Link to="/order/list">返回订单列表</Link>
      </p>
    </div>
  )
}

export default OrderDetails;
