import "./globals.css";
import Header from "./header";
import Footer from "./footer";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-yellow-400">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
