import "./globals.scss";
import NavigationMenu from "./containers/NavigationMenu/NavigationMenu";
import Footer from "./containers/FooterContainer/Footer";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Headless Recipe Blog",
  description: "A Headless WordPress Recipe Blog Implementation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <NavigationMenu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
