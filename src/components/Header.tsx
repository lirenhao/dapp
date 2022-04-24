import React from 'react';
import { PageHeader } from 'antd';
import Wallet from './Wallet';
import logo from '../logo.svg';

type HeaderProps = {
  
}

const Header: React.FC<HeaderProps> = () => {

  return (
    <PageHeader
      title="LrhMeta"
      subTitle="This is a decimal app about LRHMETA contract"
      extra={<Wallet />}
      avatar={{ src: logo }}
    />
  )
}

export default Header;