import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wallet Generator by yogiyendri",
  description:
    "Helps you get wallets with mnemonic and private keys very quickly",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  keywords: [
    "Wallet",
    "Mnemonic",
    "Pharse",
    "Private Key",
    "Metamask",
    "Ethereum",
  ],
  authors: [{ name: "yogiyendri" }],
  creator: "yogiyendri",
  publisher: "yogiyendri",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
