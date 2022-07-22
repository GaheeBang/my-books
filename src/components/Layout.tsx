import styles from './Layout.module.css'
import * as React from 'react';

type Props = {
  children?: React.ReactNode
};

const Layout: React.FC<Props> = ({ children }) => (
    <div className={styles.layout}>
        {children}
    </div>
);

export default Layout;