import '../styles/normalize.css';
import '../styles/main.css';
import Navbar from '../components/Navbar';

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
        <div className="container">
          <Navbar />
          <main className="content">{children}</main>
        </div>
      </body>
    </html>
  );
}
