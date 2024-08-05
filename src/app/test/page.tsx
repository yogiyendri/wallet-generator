"use client";

import { Button } from "@/components/ui/button";
import { generateWallet } from "@/lib/generate-wallet";

export default function PageTest() {
  function onClick() {
    const wallet = generateWallet();
    console.log(wallet);
  }

  return (
    <div>
      <h1>PageTest</h1>
      <Button onClick={onClick}>Test</Button>
    </div>
  );
}
