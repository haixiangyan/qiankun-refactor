import { Layout as AntLayout } from "antd";
import styles from './styles.module.less';

const { Header: AntHeader } = AntLayout;

const Header = () => {
  return (
    <AntHeader className={styles.header}>
      Header
    </AntHeader>
  )
}

export default Header;
