"use client";
import React, { useState } from "react";
import { ethers } from "ethers";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

export default function App() {
  const [address, setAddress] = useState("");
  const [privateKey, setPrivateKey] = useState("");
  const [pharse, setPharse] = useState("");
  const { toast } = useToast();

  function copyText(entryText: string) {
    navigator.clipboard.writeText(entryText);
    return console.log("copied");
  }

  function generateWallet() {
    const getmnemonic: any = ethers.HDNodeWallet.createRandom().mnemonic;
    const getWallet = ethers.HDNodeWallet.fromMnemonic(getmnemonic);
    setAddress(getWallet.address);
    setPrivateKey(getWallet.privateKey);
    setPharse(getWallet.mnemonic?.phrase ?? "");
  }

  return (
    <main className="mx-4 py-10 lg:py-0 lg:mx-auto h-screen max-w-7xl">
      <div className="flex flex-col lg:flex-row lg:h-full items-center justify-between">
        <div className="w-full max-w-lg text-center lg:text-left">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-gray-900 lg:text-5xl">
            EVM Wallet Generator
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            maxime facere placeat natus inventore impedit in voluptatum hic
            animi est.
          </p>
          <Button onClick={generateWallet} className="mt-6">
            Generate
          </Button>
        </div>
        <div className="w-full mt-6 lg:mt-0 ml-0 lg:ml-16">
          <h2 className="text-lg text-center lg:text-left font-semibold">
            Result
          </h2>
          <div>
            <Label htmlFor="walletAddress">Wallet Address</Label>
            <div className="flex w-full items-center space-x-2">
              <Input id="walletAddress" readOnly value={address} />
              <Button
                onClick={() => {
                  copyText(address);
                  toast({ description: "Copied to clipboard." });
                }}
                variant={"secondary"}
              >
                Copy
              </Button>
            </div>
          </div>
          <div>
            <Label htmlFor="privateKey">Private Key</Label>
            <div className="flex w-full items-center space-x-2">
              <Input id="privateKey" readOnly value={privateKey} />
              <Button
                onClick={() => {
                  copyText(privateKey);
                  toast({ description: "Copied to clipboard." });
                }}
                variant={"secondary"}
              >
                Copy
              </Button>
            </div>
          </div>
          <div>
            <Label htmlFor="mnemonic">Mnemonic</Label>
            <div className="flex w-full items-center space-x-2">
              <Input id="mnemonic" readOnly value={pharse} />
              <Button
                onClick={() => {
                  copyText(pharse);
                  toast({ description: "Copied to clipboard." });
                }}
                variant={"secondary"}
              >
                Copy
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
