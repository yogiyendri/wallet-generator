import { ethers, randomBytes } from "ethers";

export function generateWallet(wordCount: 12 | 24 = 24) {
  if (wordCount !== 12 && wordCount !== 24) {
    throw new Error("Invalid word count. Only 12 or 24 words are supported.");
  }

  const random = randomBytes(wordCount === 12 ? 16 : 32);

  const mnemonic = ethers.Mnemonic.entropyToPhrase(random);
  const getWallet = ethers.HDNodeWallet.fromPhrase(mnemonic);

  return {
    address: getWallet.address,
    mnemonic: mnemonic,
    privateKey: getWallet.privateKey,
  };
}
