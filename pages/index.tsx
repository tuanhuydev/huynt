import type { NextPage } from 'next'
import React, { Suspense } from 'react';
import PageSkeleton from 'components/commons/Seletions/PageSkeleton';

const LaziedHomePage = React.lazy(() => import('containers/HomeContainer'));

const Home: NextPage = () => {
  return (
    <Suspense fallback={(<PageSkeleton />)}>
      <LaziedHomePage />
    </Suspense>
  );
}
 
export default Home;
