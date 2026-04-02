import DrumkitClient from './DrumkitClient';

export const metadata = {
  title: 'Drumkit',
  description: 'An interactive browser drum kit. Map keyboard keys (W A S D J K L) to drum sounds.',
  alternates: { canonical: '/bonus/' },
  openGraph: { url: 'https://atypicalesper.github.io/bonus/' },
};

export default function DrumkitPage() {
  return <DrumkitClient />;
}
