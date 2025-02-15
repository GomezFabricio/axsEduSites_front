import React from 'react';
import SiteHeader from '../../siteComponents/SiteHeader/SiteHeader';
import SiteFooter from '../../siteComponents/SiteFooter/SiteFooter';
import './PublicLayout.css';

const PublicLayout = ({ children }) => {
  return (
    <div className="layout-container">
      <SiteHeader />
      <main className="layout-content">{children}</main>
      <SiteFooter />
    </div>
  );
};

export default PublicLayout;