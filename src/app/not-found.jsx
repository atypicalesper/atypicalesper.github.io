'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';

const QUIPS = [
  // ── anime ──────────────────────────────────────────────────────────────────
  "this page got isekai'd and is living its best life in another world",
  "you wandered off the map like naruto in a filler arc",
  "this page pulled a light yagami and died from a heart attack",
  "page not found — it's on a 3-year training arc with jiraiya",
  "this url entered the time chamber and never came back",
  "404 — this page is as real as goku's dad being alive",
  "this page has the same energy as a bleach filler episode",
  "eren yeager saw this page and chose not to rumble here",
  "the page you're looking for got snapped like the infinity gauntlet",
  "this page went full sasuke and abandoned the leaf village",
  "sukuna ate this page and felt nothing",
  "this page is in the shadow garden with cid kageno",
  "you're lost like ash ketchum trying to become pokemon master",
  "this page skipped town faster than ging freecss left gon",
  "even l lawliet couldn't find this page",
  "this page is doing a ryuk impression — just floating in the void",
  "you've entered the hyperbolic time chamber. there's nothing here.",
  "this page achieved ultra instinct and dodged your request",
  "the page got sealed in tsukuyomi. it sees only darkness now.",
  "this url is a filler character. it was never meant to exist.",
  "your search triggered a genjutsu. none of this is real.",
  "this page ran away faster than minato's flying raijin",
  "page disintegrated — must've looked at medusa's eyes",
  "this page is in the phantom troupe's hideout. good luck.",
  "lelouch used geass on this page. it forgot it existed.",
  "this page is as missing as rem's memory in re:zero s2",
  "even saitama couldn't one-punch his way to this page",
  "this page joined the akatsuki. it's plotting something.",
  "the whole cake island arc was shorter than your wait for this page",
  "this page went nae nae on you. it's in digital limbo.",

  // ── desi hip hop ───────────────────────────────────────────────────────────
  "yaar, yeh page toh scene se gayab ho gaya — divine couldn't track it",
  "emiway bantai dropped 100 bars on this url and it still vanished",
  "this page is playing hide and seek — seedhe maut style",
  "bhai, page nahi mila. vivek kar nahi kar paya find.",
  "this url is a ghost. nawab wouldn't vibe with this energy.",
  "kya bolta hai bhai? page toh pura bakwaas nikla",
  "mcstān searched the whole internet. page is still missing.",
  "this page muted itself like a quiet raftaar track you forgot about",
  "yeh page toh gully ka real nikla — never seen, never found",
  "bohemia looked everywhere. page is a desert mirage.",
  "this url has more bars than the page itself — zero.",
  "desi rap scene is thriving. this page? not so much.",
  "yo, the page got lost in the crowd at vh4. nobody saw it leave.",
  "this page is as underground as the first nucleya set at magnetic fields",
  "naezy spit fire on this url. it burned to ashes.",

  // ── programming / coding ───────────────────────────────────────────────────
  "error 404: page.exe has stopped working",
  "undefined is not a function, and this page is not a page",
  "this route returned null. you cannot destructure null.",
  "git blame says nobody wrote this page. shocking.",
  "npm install this-page — package not found",
  "console.log(page) → undefined",
  "the senior dev said 'it works on my machine'. it does not work here.",
  "this page is in a branch that was never merged",
  "your request hit a 404 because the intern deleted prod",
  "this page is commented out in a file nobody can find",
  "TypeError: cannot read properties of undefined (reading 'page')",
  "404 — stack overflow doesn't have an answer for this either",
  "this page is stuck in an infinite loop. please hold.",
  "the page was deprecated in v0.0.1 and nobody noticed",
  "this url is a memory leak. it was never freed.",
  "segmentation fault (core dumped) — page was yeeted",
  "merge conflict: this page was deleted on both branches",
  "cd ../../this-page: no such file or directory",
  "the page is in node_modules. you'll never find it.",
  "we pushed this page to prod on a friday. it's gone.",
  "this page threw an uncaught exception at runtime",
  "404 — docker couldn't containerize this either",
  "this page failed the code review and was rejected by all 3 reviewers",
  "the cron job deleted this page at 3am. nobody noticed until now.",
  "this page has 0 tests. it was always going to fail.",
  "the page is on a feature branch from 2019. it will never be merged.",
  "AI generated this page. AI also deleted it. poetic.",
  "this route exists in the docs but not in the code. classic.",
  "the page was working fine until you touched it",
  "404 — kubernetes scaled this page to zero replicas",

  // ── music / general pop culture ────────────────────────────────────────────
  "the page left the band and went solo. nobody streamed it.",
  "this page is like a b-side nobody asked for — lost forever",
  "your url was cancelled mid-tour due to unforeseen circumstances",
  "this page went on a hiatus. indefinite. no statement given.",
  "frank ocean took less time to release blonde than it took you to find nothing",
  "this page is in the deluxe edition nobody bought",
  "the page skipped the rollout and dropped at 3am. you missed it.",
  "taylor swift re-recorded this page. the original is gone.",
  "this page is the feature verse that got cut from the final mix",
  "the album has 16 tracks. this page was track 17.",
  "the page ghosted you harder than an artist on release day",
  "this page is a skit between two bangers. skip.",
  "kendrick already found this page and made a diss track about it",
  "this page is still on apple music exclusivity. nobody has it.",
  "the page was in a collab that got shelved. forever.",
  "404 — this page retired from the internet",
  "you clicked a link. it led to the void. classic internet.",
  "this page is in a genre you've never heard of",
  "the page had a label deal, got dropped, and disappeared",
  "the hype for this page was real. the page was not.",

  // ── random chaotic energy ──────────────────────────────────────────────────
  "the multiverse collapsed. this page was in it.",
  "this page exists in a parallel universe where you made better choices",
  "you found the void. the void is unimpressed.",
  "your browser tried. your browser failed. your browser is sorry.",
  "404 — this is fine 🔥",
  "the page applied for a visa and is still waiting",
  "this page took a gap year and never came back",
  "we searched the dark web. the page wasn't there either.",
  "this url is a conspiracy theory. the page never existed.",
  "congratulations, you discovered the most useless corner of the internet",
  "even the 404 page is confused about why you're here",
  "this page is on a juice cleanse. no content. just vibes.",
  "you manifested a broken link. impressive.",
  "the page peaked in 2015 and has been offline since",
  "this page has been radio silent since the last group chat message",
  "not all who wander are lost, but you definitely are",
  "this page is on airplane mode. permanently.",
  "the page left to find itself. it's still searching.",
  "your request was valid. the universe said no.",
  "this page is as real as the wifi signal at a 3-day festival",
];

function getRandom() {
  return QUIPS[Math.floor(Math.random() * QUIPS.length)];
}

export default function NotFound() {
  const [quip] = useState(getRandom);

  const d1 = useRef(null);
  const d0 = useRef(null);
  const d2 = useRef(null);
  const taglineRef = useRef(null);
  const subRef = useRef(null);
  const btnWrapRef = useRef(null);
  const pulseRef = useRef(null);
  const scanlineRef = useRef(null);

  useEffect(() => {
    const digits = [d1.current, d0.current, d2.current];

    gsap.set(digits, { opacity: 0, y: -120 });
    gsap.set([taglineRef.current, subRef.current, btnWrapRef.current], { opacity: 0, y: 24 });
    gsap.set(pulseRef.current, { opacity: 0, scale: 0 });
    gsap.set(scanlineRef.current, { opacity: 0 });

    const tl = gsap.timeline({ defaults: { ease: 'bounce.out' } });

    tl.to(d1.current, { opacity: 1, y: 0, rotation: -6, duration: 0.4 })
      .to(d0.current, { opacity: 1, y: 0, rotation: 10, duration: 0.4 }, '-=0.25')
      .to(d2.current, { opacity: 1, y: 0, rotation: -4, duration: 0.4 }, '-=0.25')
      .to(digits, {
        skewX: 'random(-18, 18)',
        x: 'random(-10, 10)',
        color: '#ff4dff',
        duration: 0.03,
        repeat: 5,
        yoyo: true,
        ease: 'none',
        stagger: 0.01,
      })
      .to(digits, { skewX: 0, x: 0, color: '#ffffff', duration: 0.1, ease: 'power2.out' })
      .to(scanlineRef.current, { opacity: 1, duration: 0.04 }, '<')
      .to(scanlineRef.current, { opacity: 0, duration: 0.15 }, '+=0.04')
      .to(pulseRef.current, { opacity: 1, scale: 1, duration: 0.25, ease: 'back.out(2)' }, '+=0.02')
      .to(taglineRef.current, { opacity: 1, y: 0, duration: 0.25, ease: 'power3.out' }, '-=0.05')
      .to(subRef.current,   { opacity: 1, y: 0, duration: 0.22, ease: 'power3.out' }, '-=0.1')
      .to(btnWrapRef.current, { opacity: 1, y: 0, duration: 0.28, ease: 'back.out(2)' }, '-=0.08')
      .from(btnWrapRef.current, { scale: 0.6, duration: 0.28, ease: 'back.out(2)' }, '<');

    // repeating radar ping — scale up + fade out
    gsap.to(pulseRef.current, {
      scale: 2.6,
      opacity: 0,
      duration: 2,
      repeat: -1,
      ease: 'power2.out',
      delay: 0.8,
      onRepeat() { gsap.set(pulseRef.current, { scale: 1, opacity: 0.5 }); },
    });

    gsap.to(d1.current, { y: -10, rotation: -9, duration: 2.2, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 1.0 });
    gsap.to(d0.current, { y: -16, rotation: 14, duration: 2.8, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 1.2 });
    gsap.to(d2.current, { y: -8,  rotation: -6, duration: 2.5, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 1.1 });
  }, []);

  const onEnter = () => gsap.to(btnWrapRef.current, { scale: 1.06, duration: 0.2, ease: 'power2.out' });
  const onLeave = () => gsap.to(btnWrapRef.current, { scale: 1,    duration: 0.2, ease: 'power2.out' });

  return (
    <div style={s.page}>
      <div ref={scanlineRef} style={s.scanline} />

      <div style={s.digits}>
        <span ref={d1} style={s.digit}>4</span>
        <span ref={d0} style={{ ...s.digit, color: '#b999ff', WebkitTextStroke: '2px #b999ff' }}>0</span>
        <span ref={d2} style={s.digit}>4</span>
      </div>

      <div ref={pulseRef} style={s.pulse} />

      <p ref={taglineRef} style={s.tagline}>page not found</p>

      <p ref={subRef} style={s.sub}>{quip}</p>

      <div ref={btnWrapRef} onMouseEnter={onEnter} onMouseLeave={onLeave} style={s.btnWrap}>
        <Link href="/" style={s.btn}>← beam me home</Link>
      </div>
    </div>
  );
}

const s = {
  page: {
    minHeight: '72vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: 'clamp(1.5rem, 5vw, 2.5rem) clamp(1rem, 5vw, 2rem)',
    gap: 'clamp(0.8rem, 2vw, 1.2rem)',
    position: 'relative',
    overflow: 'hidden',
  },
  scanline: {
    position: 'absolute',
    inset: 0,
    background: 'repeating-linear-gradient(0deg, rgba(185,153,255,0.06) 0px, rgba(185,153,255,0.06) 1px, transparent 1px, transparent 4px)',
    pointerEvents: 'none',
    zIndex: 1,
  },
  digits: {
    display: 'flex',
    gap: '0.15rem',
    alignItems: 'baseline',
    position: 'relative',
    zIndex: 2,
  },
  digit: {
    display: 'inline-block',
    fontFamily: 'Jost, sans-serif',
    fontWeight: 900,
    fontSize: 'clamp(5rem, 22vw, 11rem)',
    lineHeight: 1,
    color: '#ffffff',
    WebkitTextStroke: '2px rgba(255,255,255,0.15)',
    textShadow: '0 0 40px rgba(185,153,255,0.35)',
    userSelect: 'none',
  },
  pulse: {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    border: '1.5px solid #b999ff',
    boxShadow: '0 0 12px rgba(185,153,255,0.4)',
    position: 'relative',
    zIndex: 2,
    flexShrink: 0,
  },
  tagline: {
    fontFamily: 'Jost, sans-serif',
    fontWeight: 600,
    fontSize: 'clamp(1rem, 3.5vw, 1.6rem)',
    color: 'rgba(255,255,255,0.55)',
    margin: 0,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    position: 'relative',
    zIndex: 2,
  },
  sub: {
    fontFamily: 'Work Sans, sans-serif',
    fontWeight: 300,
    fontSize: 'clamp(0.85rem, 2.5vw, 1rem)',
    color: 'rgba(255,255,255,0.5)',
    margin: 0,
    lineHeight: 1.75,
    maxWidth: 'min(520px, 90vw)',
    padding: '0 0.5rem',
    position: 'relative',
    zIndex: 2,
  },
  btnWrap: {
    position: 'relative',
    zIndex: 2,
    marginTop: '0.6rem',
  },
  btn: {
    display: 'inline-block',
    padding: 'clamp(0.55rem, 2vw, 0.7rem) clamp(1.2rem, 4vw, 2rem)',
    border: '1.5px solid #b999ff',
    borderRadius: '6px',
    color: '#b999ff',
    fontFamily: 'Work Sans, sans-serif',
    fontWeight: 300,
    fontSize: 'clamp(0.85rem, 2.5vw, 0.95rem)',
    letterSpacing: '0.04em',
    textDecoration: 'none',
    background: 'transparent',
    WebkitTapHighlightColor: 'transparent',
  },
};
