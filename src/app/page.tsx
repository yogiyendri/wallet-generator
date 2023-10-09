"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { copyText } from "@/lib/copy";
import { ethers } from "ethers";
import * as React from "react";

export default function HomePage() {
  const [address, setAddress] = React.useState("");
  const [privateKey, setPrivateKey] = React.useState("");
  const [pharse, setPharse] = React.useState("");
  const { toast } = useToast();

  function generateWallet() {
    const getmnemonic: any = ethers.HDNodeWallet.createRandom().mnemonic;
    const getWallet = ethers.HDNodeWallet.fromMnemonic(getmnemonic);
    setAddress(getWallet.address);
    setPrivateKey(getWallet.privateKey);
    setPharse(getWallet.mnemonic?.phrase ?? "");
  }

  const downloadTxtFile = () => {
    const texts = [address, privateKey, pharse];
    const file = new Blob([texts.join("\n")], { type: "text/plain" });

    const element = document.createElement("a");
    element.href = URL.createObjectURL(file);
    element.download = address + ".txt";

    document.body.appendChild(element);
    element.click();
  };

  return (
    <>
      <div className="max-w-3xl mx-auto py-28">
        <div className="flex flex-col items-center">
          <div className="text-center">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-gray-900">
              EVM Wallet Generator
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              maxime facere placeat natus inventore impedit in voluptatum hic
              animi est.
            </p>
          </div>
          <Button onClick={generateWallet} className="mt-6">
            Generate
          </Button>
        </div>
        <div className="mt-12">
          <div className="space-y-1">
            <div>
              <Label htmlFor="walletAddress">Wallet Address</Label>
              <div className="flex w-full items-center space-x-2">
                <Input id="walletAddress" readOnly value={address} />
                <Button
                  variant={"secondary"}
                  onClick={() => {
                    copyText(address);
                    toast({ description: "Copied to clipboard." });
                  }}
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
                  variant={"secondary"}
                  onClick={() => {
                    copyText(privateKey);
                    toast({ description: "Copied to clipboard." });
                  }}
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
                  variant={"secondary"}
                  onClick={() => {
                    copyText(pharse);
                    toast({ description: "Copied to clipboard." });
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <Button onClick={downloadTxtFile} className="mt-8">
              Download as txt
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
