'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import './drumkit.css';

const keys = [
  { key: 'w', name: 'crash', sound: '/bonus/sounds/crash.mp3',    image: '/bonus/images/crash.png' },
  { key: 'a', name: 'kick',  sound: '/bonus/sounds/kick-bass.mp3', image: '/bonus/images/kick.png' },
  { key: 's', name: 'snare', sound: '/bonus/sounds/snare.mp3',     image: '/bonus/images/snare.png' },
  { key: 'd', name: 'tom 1', sound: '/bonus/sounds/tom-1.mp3',     image: '/bonus/images/tom1.png' },
  { key: 'j', name: 'tom 2', sound: '/bonus/sounds/tom-2.mp3',     image: '/bonus/images/tom2.png' },
  { key: 'k', name: 'tom 3', sound: '/bonus/sounds/tom-3.mp3',     image: '/bonus/images/tom3.png' },
  { key: 'l', name: 'tom 4', sound: '/bonus/sounds/tom-4.mp3',     image: '/bonus/images/tom4.png' },
];

function makeSound(key) {
  const match = keys.find((k) => k.key === key);
  if (!match) return;
  const audio = new Audio(match.sound);
  audio.play().catch(() => {});
}

function buttonAnimation(key) {
  const btn = document.querySelector(`.drum.${key}`);
  if (!btn) return;
  btn.classList.add('pressed');
  setTimeout(() => btn.classList.remove('pressed'), 100);
}

export default function DrumkitClient() {
  useEffect(() => {
    const handleKey = (e) => {
      makeSound(e.key);
      buttonAnimation(e.key);
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, []);

  const handleClick = (key) => {
    makeSound(key);
    buttonAnimation(key);
  };

  return (
    <section className="drumkit-page">
      <header className="dk-head">
        <span className="dk-kicker">✦ you found a hidden corner</span>
        <h1 id="title" className="dk-title">the drum kit</h1>
        <p className="dk-hint">
          tap a pad — or play it on your keyboard with <kbd>w</kbd> <kbd>a</kbd> <kbd>s</kbd> <kbd>d</kbd> <kbd>j</kbd> <kbd>k</kbd> <kbd>l</kbd>
        </p>
      </header>

      <div className="set">
        {keys.map(({ key, name, image }) => (
          <div className="drum-cell" key={key}>
            <button
              className={`drum ${key}`}
              style={{ backgroundImage: `url(${image})` }}
              onClick={() => handleClick(key)}
              aria-label={`Play ${name} (key ${key})`}
            >
              {key}
            </button>
            <span className="drum-cap">{name}</span>
          </div>
        ))}
      </div>

      <Link href="/" className="dk-back">← back to the calm stuff</Link>
    </section>
  );
}
