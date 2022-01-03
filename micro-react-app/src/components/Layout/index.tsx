import {FC} from "react";
import {Layout as AntLayout} from "antd";
import Sider from "../Sider";
import Header from "../Header";
import Content from "../Content";

const Layout: FC = () => {
  return (
    <AntLayout>
      <Sider/>
      <AntLayout>
        <Header />
        <Content />
      </AntLayout>
    </AntLayout>
  )
}

export default Layout;

