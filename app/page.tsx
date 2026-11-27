"use client";

import { ArrowDownRight, ArrowUpRight, Menu, X, Sparkles, Layers3, Clapperboard, Cpu } from "lucide-react";
import { useState } from "react";

const services = [
  { n: "01", title: "Brand & identity", desc: "Positioning, visual identity, art direction and brand systems.", icon: Sparkles },
  { n: "02", title: "Web & digital", desc: "Distinctive websites and digital experiences built around your goals.", icon: Layers3 },
  { n: "03", title: "Motion & film", desc: "Campaign visuals, motion design and short-form storytelling.", icon: Clapperboard },
  { n: "04", title: "AI-powered creative", desc: "Smarter creative workflows, concept exploration and automation.", icon: Cpu }
];

const capabilities = ["BRAND STRATEGY", "VISUAL IDENTITY", "WEB DESIGN", "MOTION", "AI CREATIVE", "CONTENT"];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <nav className="nav wrap">
        <a className="brand" href="#top" aria-label="ARVA Multiverse home">ARVA<span>®</span></a>
        <div className="nav-links"><a href="#work">Work</a><a href="#services">Services</a><a href="#studio">Studio</a></div>
        <a className="nav-contact" href="#contact">Start a project <ArrowUpRight size={15}/></a>
        <button className="menu-toggle" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
      </nav>
      {menuOpen && <div className="mobile-menu"><a onClick={closeMenu} href="#work">Work</a><a onClick={closeMenu} href="#services">Services</a><a onClick={closeMenu} href="#studio">Studio</a><a onClick={closeMenu} href="#contact">Contact</a></div>}

      <section className="hero wrap" id="top">
        <div className="eyebrow"><span className="dot"/> INDEPENDENT CREATIVE STUDIO <span className="eyebrow-line"/> HYDERABAD · INDIA</div>
        <h1>Make your<br/><span className="outline">mark.</span></h1>
        <div className="hero-bottom">
          <div><p className="hero-copy">We turn ambitious ideas into identities, digital experiences and visual stories that make brands impossible to ignore.</p><div className="hero-actions"><a className="button-primary" href="#work">Explore our work <ArrowUpRight size={15}/></a><a className="text-link" href="#contact">Have a project? <span>Let’s talk</span></a></div></div>
          <div className="hero-index">DESIGN × TECHNOLOGY<br/>BUILT TO EVOLVE</div>
        </div>
        <div className="hero-art">
          <div className="art-glow"/><div className="art-grid"/>
          <div className="art-orbit orbit-one"/><div className="art-orbit orbit-two"/><div className="art-orbit orbit-three"/>
          <div className="art-core">A<span>✳</span>V</div>
          <div className="art-label label-left">THINK BEYOND<br/>THE EXPECTED</div>
          <div className="art-label label-right">CREATIVE DIRECTION<br/>WITH INTENTION</div>
          <div className="art-caption">ARVA MULTIVERSE / 001</div>
          <div className="art-side-note">A DIFFERENT POINT OF VIEW</div>
        </div>
        <div className="capability-strip"><span>WHAT WE BRING TO THE TABLE</span><div>{capabilities.map((item) => <b key={item}>{item}<i>✳</i></b>)}</div></div>
      </section>

      <section className="manifesto wrap" id="studio">
        <div className="section-kicker">[ 01 — THE STUDIO ]</div>
        <div className="manifesto-main"><h2>Good work<br/>starts with a<br/><span>different</span> <em>view.</em></h2><div className="manifesto-details"><p>ARVA is an independent creative studio at the intersection of design, technology and storytelling. We bring strategy and imagination together to make brands clearer, sharper and more memorable.</p><a className="underlined-link" href="#services">Explore our capabilities <ArrowUpRight size={15}/></a></div></div>
      </section>

      <section className="work-section" id="work">
        <div className="wrap section-head"><div><div className="section-kicker">[ 02 — SELECTED EXPLORATIONS ]</div><h2>Work with<br/><em>a point of view.</em></h2></div><p>Different formats.<br/>One clear intention.</p></div>
        <div className="work-grid wrap">
          <article className="work-card work-large"><div className="work-visual visual-one"><span className="visual-topline">ARVA / BRAND STUDY 01</span><span className="visual-word">FORM<br/>FOLLOWS<br/>FEELING.</span><span className="visual-mark">01</span><span className="visual-bottomline">IDENTITY SYSTEM — 2026</span></div><div className="work-meta"><div><h3>Identity in motion</h3><p>Brand direction · Visual system</p></div><span>01 / 03</span></div></article>
          <article className="work-card work-small"><div className="work-visual visual-two"><span className="visual-topline">ARVA / DIGITAL STUDY 02</span><div className="orb-shape"/><span className="visual-word">Beyond<br/>the usual.</span><span className="visual-mark">02</span><span className="visual-bottomline">DIGITAL EXPERIENCE — 2026</span></div><div className="work-meta"><div><h3>New perspectives</h3><p>Digital · Art direction</p></div><span>02 / 03</span></div></article>
          <article className="work-card work-small"><div className="work-visual visual-three"><span className="visual-topline">ARVA / MOTION STUDY 03</span><span className="visual-word">MAKE<br/>IT MOVE.</span><span className="visual-mark">03</span><span className="visual-bottomline">MOTION & FILM — 2026</span></div><div className="work-meta"><div><h3>Motion studies</h3><p>Film · Creative production</p></div><span>03 / 03</span></div></article>
        </div>
        <p className="work-note wrap">Selected visual explorations — a preview of the ARVA creative direction.</p>
      </section>

      <section className="services wrap" id="services">
        <div className="section-kicker">[ 03 — WHAT WE DO ]</div>
        <div className="services-content"><div><h2>From first<br/>thought to<br/><em>final form.</em></h2><p className="services-intro">A connected set of creative services to help your brand show up with clarity and confidence.</p></div><div className="service-list">{services.map((s) => { const Icon = s.icon; return <div className="service-row" key={s.n}><span>{s.n}</span><div className="service-icon"><Icon size={19}/></div><div className="service-copy"><h3>{s.title}</h3><p>{s.desc}</p></div><ArrowUpRight size={19}/></div>; })}</div></div>
      </section>

      <section className="approach">
        <div className="wrap approach-inner"><div className="section-kicker">[ 04 — WHY ARVA ]</div><div className="approach-grid"><h2>Small details.<br/><em>Big picture.</em></h2><div className="approach-copy"><p>We don’t believe in design for decoration. Every choice has a reason — from the first sketch to the final interaction.</p><div className="principles"><div><b>01</b><span>Think strategically</span></div><div><b>02</b><span>Make with intention</span></div><div><b>03</b><span>Build for what’s next</span></div></div></div></div></div>
      </section>

      <section className="process">
        <div className="wrap process-inner"><div className="section-kicker">[ 05 — HOW WE WORK ]</div><h2>Clear process.<br/><span>Room to explore.</span></h2><div className="process-steps"><div><b>01 / DISCOVER</b><p>Understand the challenge, the audience and the opportunity.</p></div><div><b>02 / EXPLORE</b><p>Test directions, challenge assumptions and find the signal.</p></div><div><b>03 / CREATE</b><p>Craft the solution with care, detail and a point of view.</p></div><div><b>04 / EVOLVE</b><p>Launch, learn and keep making things better.</p></div></div></div>
      </section>

      <section className="contact wrap" id="contact">
        <div className="section-kicker">[ 06 — START A CONVERSATION ]</div>
        <div className="contact-main"><div><h2>Let’s make<br/>something <em>matter.</em></h2><p>Have a brief, a big idea or just a starting point? We’re listening.</p></div><a className="contact-circle" href="mailto:hello@arvamultiverse.com" aria-label="Email ARVA"><ArrowUpRight size={34}/></a></div>
        <div className="contact-bottom"><p>Good things begin<br/>with a conversation.</p><a href="mailto:hello@arvamultiverse.com">HELLO@ARVAMULTIVERSE.COM <ArrowUpRight size={14}/></a></div>
      </section>

      <footer className="footer wrap"><a className="brand" href="#top">ARVA<span>®</span></a><p>INDEPENDENT BY NATURE. INFINITE BY DESIGN.</p><span>© 2026 ARVA MULTIVERSE</span></footer>
    </main>
  );
}
