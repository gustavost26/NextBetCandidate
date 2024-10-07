import { Inter } from "next/font/google";
import "./globals.css";
import AuthWrapper from '@/components/AuthWrapper';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BetCandidate",
  description: "Apostas on-chain das eleições americanas.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthWrapper>
          {children}
        </AuthWrapper>
      </body>
    </html>
  );
}