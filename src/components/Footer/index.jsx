import { Footer } from 'antd/lib/layout/layout';
import React from 'react';
import { useTranslation } from 'react-i18next';

function FooterComponent() {
  const { t } = useTranslation();

  return <Footer></Footer>;
}

export default FooterComponent;
