import React from 'react';
import SiteHeader from '../../siteComponents/siteHeader/SiteHeader';
import SiteFooter from '../../siteComponents/SiteFooter/SiteFooter';

const PublicLayout = ({ children }) => {
  return (
    <div>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
};

export default PublicLayout;