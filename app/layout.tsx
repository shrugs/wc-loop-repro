import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Providers } from "./_components/Providers";
import "./globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <ConnectButton />
          {children}
        </Providers>
      </body>
    </html>
  );
}
