import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Sahil Bhatt | Developer Portfolio',
  description: 'Frontend & Full-Stack Developer Portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className="bg-white text-black font-josefin overflow-x-hidden scroll-smooth">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
