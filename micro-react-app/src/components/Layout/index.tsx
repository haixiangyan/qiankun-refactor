import {FC} from "react";
import {Layout as AntLayout} from "antd";
import Sider from "../Sider";
import Header from "../Header";
import Content from "../Content";
import styles from './styles.less';

const Layout: FC = () => {
  return (
    <AntLayout className={styles.layout}>
      <Sider/>
      <AntLayout>
        <Header />
        <Content />
      </AntLayout>
    </AntLayout>
  )
}

export default Layout;

