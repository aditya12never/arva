"use client";

import { ArrowDownRight, ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

const services = [
  { n: "01", title: "Brand & identity", desc: "Distinctive identities built to be remembered." },
  { n: "02", title: "Digital experiences", desc: "Websites and interfaces that move businesses forward." },
  { n: "03", title: "Motion & film", desc: "Visual stories with rhythm, feeling and intent." },
  { n: "04", title: "AI-powered creative", desc: "New creative possibilities, made practical." }
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <nav className="nav wrap">
        <a className="brand" href="#top" aria-label="ARVA Multiverse home">ARVA<span>®</span></a>
        <div className="nav-links">
          <a href="#work">Work</a><a href="#services">Services</a><a href="#studio">Studio</a>
        </div>
        <a className="nav-contact" href="#contact">Let&apos;s talk <ArrowUpRight size={15}/></a>
        <button className="menu-toggle" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
      </nav>
      {menuOpen && <div className="mobile-menu"><a onClick={closeMenu} href="#work">Work</a><a onClick={closeMenu} href="#services">Services</a><a onClick={closeMenu} href="#studio">Studio</a><a onClick={closeMenu} href="#contact">Contact</a></div>}

      <section className="hero wrap" id="top">
        <div className="eyebrow"><span className="dot"/> INDEPENDENT CREATIVE STUDIO <span className="eyebrow-line"/></div>
        <h1>Ideas into<br/><span className="outline">impact.</span></h1>
        <div className="hero-bottom">
          <p className="hero-copy">We build bold identities, digital experiences and visual stories for brands moving culture forward.</p>
          <a className="round-link" href="#work" aria-label="Explore our work"><ArrowDownRight size={25}/></a>
          <div className="hero-index">HYDERABAD · INDIA<br/>AVAILABLE WORLDWIDE</div>
        </div>
        <div className="hero-art">
          <div className="art-glow"/><div className="art-grid"/>
          <div className="art-orbit orbit-one"/><div className="art-orbit orbit-two"/>
          <div className="art-core">A<span>✳</span>V</div>
          <div className="art-label label-left">CREATIVITY WITHOUT<br/>FIXED DIMENSIONS</div>
          <div className="art-label label-right">EST. 2026<br/>BUILT TO EVOLVE</div>
          <div className="art-caption">01 / THE MULTIVERSE</div>
        </div>
      </section>

      <section className="manifesto wrap" id="studio">
        <div className="section-kicker">[ 01 — THE STUDIO ]</div>
        <div><h2>We make the<br/><span>complex feel</span> <em>clear.</em></h2><p className="manifesto-copy">ARVA is an independent creative practice at the intersection of design, technology and storytelling. One curious team. Many dimensions. A singular focus on making meaningful work.</p></div>
      </section>

      <section className="work-section" id="work">
        <div className="wrap section-head"><div className="section-kicker">[ 02 — SELECTED WORK ]</div><p>Ideas, explored<br/>from every angle.</p></div>
        <div className="work-grid wrap">
          <article className="work-card work-large"><div className="work-visual visual-one"><span className="visual-word">FORM<br/>FOLLOWS<br/>FEELING.</span><span className="visual-mark">AR—01</span></div><div className="work-meta"><div><h3>Identity in motion</h3><p>Brand direction · Visual system</p></div><span>01 / 03</span></div></article>
          <article className="work-card work-small"><div className="work-visual visual-two"><div className="orb-shape"/><span className="visual-word">Beyond<br/>the usual.</span><span className="visual-mark">AR—02</span></div><div className="work-meta"><div><h3>New perspectives</h3><p>Digital · Art direction</p></div><span>02 / 03</span></div></article>
          <article className="work-card work-small"><div className="work-visual visual-three"><span className="visual-word">MAKE<br/>IT MOVE.</span><span className="visual-mark">AR—03</span></div><div className="work-meta"><div><h3>Motion studies</h3><p>Film · Creative production</p></div><span>03 / 03</span></div></article>
        </div>
        <p className="work-note wrap">A glimpse into our visual universe. More work coming into focus.</p>
      </section>

      <section className="services wrap" id="services">
        <div className="section-kicker">[ 03 — WHAT WE DO ]</div>
        <div className="services-content"><h2>Good ideas<br/>deserve <em>great</em><br/>execution.</h2><div className="service-list">{services.map((s) => <div className="service-row" key={s.n}><span>{s.n}</span><div><h3>{s.title}</h3><p>{s.desc}</p></div><ArrowUpRight size={20}/></div>)}</div></div>
      </section>

      <section className="process">
        <div className="wrap process-inner"><div className="section-kicker">[ 04 — HOW WE WORK ]</div><h2>Curiosity first.<br/><span>Clarity always.</span></h2><div className="process-steps"><div><b>01 / DISCOVER</b><p>Understand the challenge and find the real opportunity.</p></div><div><b>02 / EXPLORE</b><p>Test directions, challenge assumptions and find the signal.</p></div><div><b>03 / CREATE</b><p>Craft with care, detail and a point of view.</p></div><div><b>04 / EVOLVE</b><p>Launch, learn and keep making things better.</p></div></div></div>
      </section>

      <section className="contact wrap" id="contact">
        <div className="section-kicker">[ 05 — START A CONVERSATION ]</div>
        <div className="contact-main"><h2>Have a good<br/>one in <em>mind?</em></h2><a className="contact-circle" href="mailto:hello@arvamultiverse.com" aria-label="Email ARVA"><ArrowUpRight size={34}/></a></div>
        <div className="contact-bottom"><p>Let&apos;s turn that spark into something<br/>worth remembering.</p><a href="mailto:hello@arvamultiverse.com">HELLO@ARVAMULTIVERSE.COM <ArrowUpRight size={14}/></a></div>
      </section>

      <footer className="footer wrap"><a className="brand" href="#top">ARVA<span>®</span></a><p>INDEPENDENT BY NATURE. INFINITE BY DESIGN.</p><span>© 2026 ARVA MULTIVERSE</span></footer>
    </main>
  );
}
