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

const CLARITY_ID = 'vupd82dak0';

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {CLARITY_ID && (
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${CLARITY_ID}");`,
            }}
          />
        )}
      </head>
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
