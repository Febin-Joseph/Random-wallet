import React from 'react'
import { VerifiedWallet } from '@verified-network/verified-sdk'

const Button = () => {
  const handleClick = async () => {
    try {
      const mnemonics = await VerifiedWallet.generateMnemonic();
      alert('Random wallet created with mnemonics: ' + mnemonics);
    } catch (error) {
      console.error('Error creating wallet:', error);
      alert('Error creating wallet. Please check console for details.');
    }
  };

  return (
    <button onClick={handleClick}>create Random Wallet</button>
  );
};

export default Button