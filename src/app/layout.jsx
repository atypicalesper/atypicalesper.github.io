import '../styles/normalize.css';
import '../styles/main.css';
import Navbar from '../components/Navbar';
import Background from '../components/Background';
import Cube from '../components/Cube';
import PageWrapper from '../components/PageWrapper';
import Cursor from '../components/Cursor';
import { ThemeProvider } from '../components/ThemeProvider';

export const metadata = {
  metadataBase: new URL('https://atypicalesper.github.io'),
  title: {
    default: 'Tarun Singh',
    template: '%s — Tarun Singh',
  },
  description:
    'Tarun Singh is a Software Developer based in Gurugram, India. Backend engineer specialising in NestJS, Node.js, microservices, and cloud architecture.',
  keywords: ['Tarun Singh', 'Software Developer', 'Backend Engineer', 'NestJS', 'Node.js', 'TypeScript', 'Microservices', 'AWS'],
  authors: [{ name: 'Tarun Singh', url: 'https://atypicalesper.github.io' }],
  openGraph: {
    type: 'website',
    url: 'https://atypicalesper.github.io',
    siteName: 'Tarun Singh',
    title: 'Tarun Singh — Software Developer',
    description: 'Backend engineer specialising in NestJS, Node.js, microservices, and cloud architecture.',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary',
    title: 'Tarun Singh — Software Developer',
    description: 'Backend engineer specialising in NestJS, Node.js, microservices, and cloud architecture.',
  },
  robots: { index: true, follow: true },
};

const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID;

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
        <ThemeProvider>
          <Cursor />
          <Background />
          <Cube />
          <div className="container">
            <Navbar />
            <main className="content">
              <PageWrapper>{children}</PageWrapper>
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
