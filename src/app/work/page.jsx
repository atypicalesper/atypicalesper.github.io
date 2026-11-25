import WorkClient from './WorkClient';

export const metadata = {
  title: 'Work',
  description:
    'Projects and client work by Tarun Singh, including lending systems, IoT fire detection, healthcare staffing, real-time bidding, RAG tools, and open-source projects.',
  alternates: { canonical: '/work/' },
  openGraph: { url: 'https://atypicalesper.github.io/work/' },
};

export default function WorkPage() {
  return <WorkClient />;
}
