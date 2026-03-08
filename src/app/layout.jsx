import '../styles/normalize.css';
import '../styles/main.css';
import Navbar from '../components/Navbar';
import Background from '../components/Background';
import PageWrapper from '../components/PageWrapper';
import Cursor from '../components/Cursor';

export const metadata = {
  title: 'Tarun Singh',
  description:
    "Tarun Singh's (aka atypicalesper) portfolio. He loves technology, music, and is a self proclaimed anime connoisseur.",
  authors: [{ name: 'Tarun Singh' }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Cursor />
        <Background />
        <div className="container">
          <Navbar />
          <main className="content">
            <PageWrapper>{children}</PageWrapper>
          </main>
        </div>
      </body>
    </html>
  );
}
