import React, { memo } from 'react';

const Header = () => {
  console.log({ component: 'HEADER', status: new Date().toLocaleTimeString() });
  return <><h1 className='main-heading tc'>Home Searcher</h1></>
}

export default memo(Header);