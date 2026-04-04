'use client';

import { useEffect } from 'react';
import './drumkit.css';

const keys = [
  { key: 'w', sound: '/bonus/sounds/crash.mp3',    image: '/bonus/images/crash.png' },
  { key: 'a', sound: '/bonus/sounds/kick-bass.mp3', image: '/bonus/images/kick.png' },
  { key: 's', sound: '/bonus/sounds/snare.mp3',     image: '/bonus/images/snare.png' },
  { key: 'd', sound: '/bonus/sounds/tom-1.mp3',     image: '/bonus/images/tom1.png' },
  { key: 'j', sound: '/bonus/sounds/tom-2.mp3',     image: '/bonus/images/tom2.png' },
  { key: 'k', sound: '/bonus/sounds/tom-3.mp3',     image: '/bonus/images/tom3.png' },
  { key: 'l', sound: '/bonus/sounds/tom-4.mp3',     image: '/bonus/images/tom4.png' },
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
      <h1 id="title">Drum 🥁 Kit</h1>
      <div className="set">
        {keys.map(({ key, image }) => (
          <button
            key={key}
            className={`drum ${key}`}
            style={{ backgroundImage: `url(${image})` }}
            onClick={() => handleClick(key)}
          >
            {key}
          </button>
        ))}
      </div>
    </section>
  );
}
