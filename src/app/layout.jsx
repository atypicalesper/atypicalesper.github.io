import '../styles/normalize.css';
import '../styles/main.css';
import Navbar from '../components/Navbar';
import Background from '../components/Background';
import Cube from '../components/Cube';
import PageWrapper from '../components/PageWrapper';
import Cursor from '../components/Cursor';
import { ThemeProvider } from '../components/ThemeProvider';
import ControlsPanel from '../components/ControlsPanel';

export const metadata = {
  metadataBase: new URL('https://atypicalesper.github.io'),
  title: {
    default: 'Tarun Singh',
    template: '%s — Tarun Singh',
  },
  description:
    'Tarun Singh is a Software Engineer based in Faridabad, India. Backend & full-stack engineer specialising in NestJS, Node.js, TypeScript, microservices, cloud, and production GenAI/RAG.',
  keywords: ['Tarun Singh', 'Software Engineer', 'Backend Engineer', 'Full-Stack', 'NestJS', 'Node.js', 'TypeScript', 'Python', 'Microservices', 'GenAI', 'RAG', 'AWS'],
  authors: [{ name: 'Tarun Singh', url: 'https://atypicalesper.github.io' }],
  icons: { icon: '/favicon.png', shortcut: '/favicon.png' },
  openGraph: {
    type: 'website',
    url: 'https://atypicalesper.github.io',
    siteName: 'Tarun Singh',
    title: 'Tarun Singh — Software Engineer',
    description: 'Backend & full-stack engineer specialising in NestJS, Node.js, TypeScript, microservices, cloud, and production GenAI/RAG.',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary',
    title: 'Tarun Singh — Software Engineer',
    description: 'Backend & full-stack engineer specialising in NestJS, Node.js, TypeScript, microservices, cloud, and production GenAI/RAG.',
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
          <a href="#main-content" className="skip-link">Skip to content</a>
          <Cursor />
          <Background />
          <Cube />
          <div className="controls-bar">
            <ControlsPanel />
          </div>
          <div className="container">
            <Navbar />
            <main id="main-content" className="content">
              <PageWrapper>{children}</PageWrapper>
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
