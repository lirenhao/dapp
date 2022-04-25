import { useState, useEffect } from 'react';
import { Button, Tag } from 'antd';
import { shortenAddress, useEthers, useConfig, useLookupAddress, Mainnet } from "@usedapp/core";

function Wallet() {

  const [rendered, setRendered] = useState("");
  const [chain, setChain] = useState(Mainnet);

  const ens = useLookupAddress();
  const { account, chainId, activateBrowserWallet, deactivate, error, isLoading } = useEthers();

  const networks =  useConfig().networks

  useEffect(() => {
    if (ens) {
      setRendered(ens);
    } else if (account) {
      setRendered(shortenAddress(account));
    } else {
      setRendered("");
    }
  }, [account, ens, setRendered]);

  useEffect(() => {
    if (account && networks) {
      const network = networks.find((network) => network.chainId === chainId);
      network && setChain(network);
    }
  }, [account, chainId, networks, setChain]);

  useEffect(() => {
    if (error) {
      console.error("Error while connecting wallet:", error.message);
    }
  }, [error]);

  if (rendered === "") {
    return (
      <Button type="primary" loading={isLoading} onClick={() => {
        if (!account) {
          activateBrowserWallet();
        } else {
          deactivate();
        }
      }}>
        Connect Wallet
      </Button>
    )
  } else {
    return (
      <>
        {chain.chainName}
        <Tag color="blue">{rendered}</Tag>
        <Button type="link" onClick={deactivate}>
          Logout
        </Button>
      </>
    )
  }
}

export default Wallet;