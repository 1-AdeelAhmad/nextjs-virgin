import { ReactNode } from 'react';
import styles from './layout.module.css';

type TLimitedWidthLayout = {
  children: ReactNode;
};

const LimitedWidthLayout = ({ children }: TLimitedWidthLayout) => {
  return <div className={styles.limitedWidth}>{children}</div>;
};

export default LimitedWidthLayout;
