import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box } from '../components/Box';

function HomePage() {
  const { t } = useTranslation();
  return <Box className="home__container"></Box>;
}
export default HomePage;
