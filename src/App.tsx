import { useMemo } from 'react';
import { ConfigProvider, BackTop } from 'antd';
import { useEthers } from "@usedapp/core";
import { Contract } from "@ethersproject/contracts";
import { addresses, abis } from "./contracts";
import Header from './components/Header';
import LrhMeta from './components/LrhMeta';

import './App.css';

function App() {

  const { account, library } = useEthers();

  const lrhMetaContract = useMemo(() => {
    if (account && library) {
      return new Contract(addresses.lrhMeta, abis.lrhMeta, library.getSigner(account))
    } else {
      return undefined;
    }
  }, [account, library]);

  return (
    <ConfigProvider>
      <BackTop />
      <Header />
      {lrhMetaContract ? 
        <LrhMeta contract={lrhMetaContract} /> : 
        <div style={{textAlign: "center"}}>Please go to connect wallet!</div>
      }
    </ConfigProvider>
  );
}

export default App;
