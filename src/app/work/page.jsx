import WorkClient from './WorkClient';

export const metadata = {
  title: 'Work',
  description:
    'Projects and client work by Tarun Singh — a loan management system, IoT fire detection, healthcare staffing, real-time bidding, and open-source tools.',
  alternates: { canonical: '/work/' },
  openGraph: { url: 'https://atypicalesper.github.io/work/' },
};

export default function WorkPage() {
  return <WorkClient />;
}
