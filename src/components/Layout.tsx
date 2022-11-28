import React, { ReactNode } from 'react';
type LayoutProps = {
  className?: string,
  children?: ReactNode
}
function Layout(props: LayoutProps) {
  const {children} = props;
  return (
    <div>
      {children}
    </div>
  );
}

export default Layout;
