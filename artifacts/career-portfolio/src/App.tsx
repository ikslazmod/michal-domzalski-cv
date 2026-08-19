import { useState, type AnchorHTMLAttributes, type ReactNode } from 'react';
import { ArrowDownRight, ArrowUpRight, Award, BriefcaseBusiness, CalendarDays, CheckCircle2, ChevronRight, CircleDot, Clock3, Download, FileText, Github, Layers3, Linkedin, Mail, MapPin, Menu, Target, X } from 'lucide-react';

const skills = [
  { name: 'Product strategy', level: 'Lead', score: 94, evidence: '#project-northstar', tone: 'bg-[#9a4439]' },
  { name: 'Research & discovery', level: 'Lead', score: 91, evidence: '#project-fieldnotes', tone: 'bg-[#173548]' },
  { name: 'Systems thinking', level: 'Strong', score: 87, evidence: '#project-northstar', tone: 'bg-[#d7a83d]' },
  { name: 'Content design', level: 'Strong', score: 84, evidence: '#project-fieldnotes', tone: 'bg-[#5e8278]' },
  { name: 'Prototyping', level: 'Strong', score: 82, evidence: '#project-atlas', tone: 'bg-[#9a4439]' },
  { name: 'Workshop facilitation', level: 'Working', score: 76, evidence: '#project-atlas', tone: 'bg-[#173548]' },
];

const projects = [
  {
    id: 'project-northstar',
    index: '01',
    type: 'Product strategy · 2024',
    title: 'Northstar',
    description: 'A clearer operating model for a 200-person climate platform — from scattered priorities to one shared product bet.',
    result: '31% faster decision cycles',
    tags: ['Strategy', 'B2B', '0→1'],
    accent: 'navy',
  },
  {
    id: 'project-fieldnotes',
    index: '02',
    type: 'Research system · 2023',
    title: 'Field Notes',
    description: 'Turning 46 customer conversations into a living research practice that gave every team a closer seat to the problem.',
    result: '4.6× more insight reuse',
    tags: ['Research', 'Systems', 'Team enablement'],
    accent: 'red',
  },
  {
    id: 'project-atlas',
    index: '03',
    type: 'Service design · 2022',
    title: 'Atlas',
    description: 'A small, opinionated toolkit for making complex onboarding feel like progress rather than paperwork.',
    result: '−18% time to first value',
    tags: ['Service design', 'UX', 'Prototyping'],
    accent: 'gold',
  },
];

function Anchor({ href, children, className = '', onClick, ...props }: AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; children: ReactNode }) {
  return <a href={href} onClick={onClick} className={className} {...props}>{children}</a>;
}

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio-shell min-h-[100dvh] bg-[#f3efe6] text-[#173548]">
      <header className="sticky top-0 z-30 border-b border-[#d5cbbb]/80 bg-[#f3efe6]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between px-5 py-4 md:px-8">
          <Anchor href="#top" onClick={closeMenu} className="group flex items-center gap-3" data-testid="link-home">
            <span className="flex h-9 w-9 items-center justify-center bg-[#173548] font-data text-[11px] font-medium text-[#f3efe6]">AR</span>
            <span className="hidden text-[12px] font-semibold uppercase tracking-[.17em] text-[#173548] sm:block">Ari Reyes</span>
          </Anchor>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
            <Anchor href="#work" className="text-[12px] font-semibold uppercase tracking-[.13em] text-[#5e6a69] transition-colors hover:text-[#9a4439]" data-testid="link-nav-work">Selected work</Anchor>
            <Anchor href="#capabilities" className="text-[12px] font-semibold uppercase tracking-[.13em] text-[#5e6a69] transition-colors hover:text-[#9a4439]" data-testid="link-nav-capabilities">Capabilities</Anchor>
            <Anchor href="#about" className="text-[12px] font-semibold uppercase tracking-[.13em] text-[#5e6a69] transition-colors hover:text-[#9a4439]" data-testid="link-nav-about">About</Anchor>
          </nav>
          <Anchor href="#contact" className="hidden items-center gap-2 border border-[#173548] px-4 py-2.5 text-[11px] font-bold uppercase tracking-[.13em] text-[#173548] transition hover:bg-[#173548] hover:text-[#f3efe6] sm:flex" data-testid="link-nav-contact">
            Let’s talk <ArrowUpRight size={14} strokeWidth={1.8} />
          </Anchor>
          <button type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} className="p-2 md:hidden" onClick={() => setMenuOpen((open) => !open)} data-testid="button-mobile-menu">
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
        {menuOpen && (
          <nav className="border-t border-[#d5cbbb] px-5 py-4 md:hidden" aria-label="Mobile navigation">
            <div className="flex flex-col gap-4">
              {['work', 'capabilities', 'about', 'contact'].map((item) => (
                <Anchor key={item} href={`#${item}`} onClick={closeMenu} className="text-[12px] font-bold uppercase tracking-[.15em]" data-testid={`link-mobile-${item}`}>{item === 'work' ? 'Selected work' : item}</Anchor>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main id="top">
        <section className="hero-grid relative border-b border-[#d5cbbb]">
          <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-14 px-5 py-16 md:grid-cols-[1.15fr_.85fr] md:px-8 md:py-24 lg:gap-24 lg:py-28">
            <div className="relative z-10">
              <div className="reveal-up mb-8 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#9a4439]" />
                <span className="font-data text-[10px] uppercase tracking-[.2em] text-[#9a4439]">Available for the right brief</span>
              </div>
              <p className="reveal-up reveal-delay-1 mb-5 font-data text-[11px] uppercase tracking-[.18em] text-[#687878]">Product-minded operator · New York / Remote</p>
              <h1 className="reveal-up reveal-delay-2 max-w-[790px] font-editorial text-[clamp(4.3rem,9.4vw,8.6rem)] leading-[.82] tracking-[-.045em] text-[#173548]">
                I make<br /><em className="text-[#9a4439]">important</em><br />things clear.
              </h1>
              <p className="reveal-up reveal-delay-3 mt-9 max-w-[560px] text-[17px] leading-[1.55] text-[#42565c] md:text-[19px]">
                I help teams find the sharpest version of a product, then make it real. Looking for product strategy, research, or design leadership roles where the problem is worth the work.
              </p>
              <div className="reveal-up reveal-delay-4 mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Anchor href="#work" className="group inline-flex items-center justify-center gap-3 bg-[#9a4439] px-5 py-3.5 text-[12px] font-bold uppercase tracking-[.12em] text-[#f7f2e8] transition hover:bg-[#173548]" data-testid="link-hero-work">
                  See the work <ArrowDownRight size={16} className="transition-transform group-hover:translate-y-1 group-hover:translate-x-1" />
                </Anchor>
                <Anchor href="#contact" className="inline-flex items-center justify-center gap-2 px-3 py-3.5 text-[12px] font-bold uppercase tracking-[.12em] text-[#173548] transition hover:text-[#9a4439]" data-testid="link-hero-contact">
                  Start a conversation <ArrowUpRight size={15} />
                </Anchor>
              </div>
            </div>

            <aside className="reveal-up reveal-delay-3 relative flex items-end md:pt-12" aria-label="Professional profile">
              <div className="absolute -right-4 top-2 hidden font-data text-[10px] uppercase tracking-[.16em] text-[#8b928d] lg:block">Portfolio / 2025</div>
              <div className="w-full border border-[#c9bda9] bg-[#e9e1d2] p-3 shadow-[10px_12px_0_#d5cbbb] md:ml-auto md:max-w-[390px]">
                <div className="portrait-mark relative flex aspect-[.88] items-end overflow-hidden p-6">
                  <div className="absolute left-6 top-6 font-data text-[10px] uppercase tracking-[.16em] text-[#f3efe6]/70">Case file no. 014</div>
                  <div className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-[#f3efe6]/40 text-[#f3efe6]"><CircleDot size={20} strokeWidth={1} /></div>
                  <div>
                    <p className="font-data text-[10px] uppercase tracking-[.16em] text-[#f3efe6]/70">Ari Reyes</p>
                    <p className="mt-1 font-editorial text-[41px] leading-[.84] text-[#f3efe6]">Product<br />partner.</p>
                  </div>
                  <span className="absolute bottom-6 right-6 h-8 w-8 border-b border-r border-[#f3efe6]/70" />
                </div>
                <div className="flex items-center justify-between px-2 pb-1 pt-4">
                  <div>
                    <p className="font-data text-[10px] uppercase tracking-[.14em] text-[#687878]">Currently</p>
                    <p className="mt-1 text-[13px] font-semibold">Independent · NYC</p>
                  </div>
                  <div className="text-right">
                    <p className="font-data text-[10px] uppercase tracking-[.14em] text-[#687878]">Focus</p>
                    <p className="mt-1 text-[13px] font-semibold">0→1 / systems</p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
          <div className="mx-auto flex max-w-[1240px] items-center gap-3 px-5 pb-5 md:px-8">
            <span className="font-data text-[10px] uppercase tracking-[.16em] text-[#8b928d]">Scroll to investigate</span>
            <span className="h-px w-20 bg-[#bcae9b]" />
            <ArrowDownRight size={14} className="text-[#9a4439]" />
          </div>
        </section>

        <section id="about" className="mx-auto grid max-w-[1240px] grid-cols-1 gap-12 px-5 py-20 md:grid-cols-[.8fr_1.2fr] md:px-8 md:py-28">
          <div>
            <p className="font-data text-[10px] uppercase tracking-[.2em] text-[#9a4439]">01 / The short version</p>
            <h2 className="mt-5 max-w-[350px] font-editorial text-[52px] leading-[.91] tracking-[-.03em] text-[#173548] md:text-[64px]">The useful<br /><em>middle.</em></h2>
          </div>
          <div className="max-w-[650px]">
            <p className="text-[22px] leading-[1.36] tracking-[-.02em] text-[#173548] md:text-[28px]">I sit between the big picture and the next meaningful move — translating ambiguity into decisions, decisions into momentum.</p>
            <p className="mt-7 max-w-[560px] text-[15px] leading-[1.7] text-[#5e6a69]">Over the past decade, I’ve worked with founders, researchers, engineers, and operators to shape products people can understand and teams can actually ship. My favorite work starts with a fuzzy question and ends with a room that knows what to do next.</p>
            <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-7 border-t border-[#c9bda9] pt-7 sm:grid-cols-3">
              <div><p className="font-data text-[10px] uppercase tracking-[.15em] text-[#8b928d]">Based in</p><p className="mt-2 text-[14px] font-semibold">Brooklyn, NY</p></div>
              <div><p className="font-data text-[10px] uppercase tracking-[.15em] text-[#8b928d]">Experience</p><p className="mt-2 text-[14px] font-semibold">10+ years</p></div>
              <div><p className="font-data text-[10px] uppercase tracking-[.15em] text-[#8b928d]">Open to</p><p className="mt-2 text-[14px] font-semibold">Product · Research</p></div>
            </div>
          </div>
        </section>

        <section id="capabilities" className="border-y border-[#c9bda9] bg-[#e9e1d2]">
          <div className="mx-auto max-w-[1240px] px-5 py-20 md:px-8 md:py-24">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="font-data text-[10px] uppercase tracking-[.2em] text-[#9a4439]">02 / Evidence index</p>
                <h2 className="mt-5 font-editorial text-[54px] leading-[.9] tracking-[-.03em] md:text-[72px]">What I bring<br /><em>to the table.</em></h2>
              </div>
              <p className="max-w-[300px] text-[13px] leading-[1.6] text-[#5e6a69]">A working map, not a list of buzzwords. Follow each thread into the work that backs it up.</p>
            </div>
            <div className="mt-14 border-t border-[#bcae9b]">
              {skills.map((skill, index) => (
                <div key={skill.name} className="group grid grid-cols-[28px_1fr_auto] items-center gap-3 border-b border-[#bcae9b] py-5 md:grid-cols-[48px_1fr_160px_130px] md:gap-5" data-testid={`row-skill-${index}`}>
                  <span className="font-data text-[10px] text-[#9a4439]">0{index + 1}</span>
                  <p className="text-[15px] font-semibold text-[#173548] md:text-[17px]">{skill.name}</p>
                  <div className="col-span-2 row-start-2 flex h-1.5 w-full items-center bg-[#d5cbbb] md:col-span-1 md:row-start-auto">
                    <span className={`block h-full ${skill.tone}`} style={{ width: `${skill.score}%` }} />
                  </div>
                  <Anchor href={skill.evidence} className="col-start-3 row-start-1 inline-flex items-center justify-end gap-1 text-right font-data text-[10px] uppercase tracking-[.08em] text-[#687878] evidence-link md:col-start-4 md:row-start-auto" data-testid={`link-evidence-${index}`}>
                    {skill.level} <ChevronRight size={13} />
                  </Anchor>
                </div>
              ))}
            </div>
            <div className="mt-9 flex flex-wrap gap-2">
              {['Product discovery', 'Narrative building', 'Roadmapping', 'Figma', 'Notion', 'Facilitation', 'SQL enough'].map((tag) => <span key={tag} className="border border-[#bcae9b] px-3 py-2 font-data text-[10px] uppercase tracking-[.1em] text-[#687878]">{tag}</span>)}
            </div>
          </div>
        </section>

        <section id="work" className="mx-auto max-w-[1240px] px-5 py-20 md:px-8 md:py-28">
          <div className="flex flex-col justify-between gap-6 border-b border-[#c9bda9] pb-8 md:flex-row md:items-end">
            <div>
              <p className="font-data text-[10px] uppercase tracking-[.2em] text-[#9a4439]">03 / Selected work</p>
              <h2 className="mt-5 font-editorial text-[54px] leading-[.9] tracking-[-.03em] md:text-[72px]">Proof, with<br /><em>the edges left in.</em></h2>
            </div>
            <p className="max-w-[290px] text-[13px] leading-[1.6] text-[#5e6a69]">Three different problems. Same instinct: make the useful thing easier to see.</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <article id={project.id} key={project.id} className={`project-card border border-[#c9bda9] bg-[#f8f4ec] p-6 md:p-8 ${index === 0 ? 'md:row-span-2' : ''}`} data-testid={`card-project-${index}`}>
                <div className={`mb-12 flex aspect-[1.55] flex-col justify-between p-5 ${project.accent === 'navy' ? 'bg-[#173548] text-[#f3efe6]' : project.accent === 'red' ? 'bg-[#9a4439] text-[#f3efe6]' : 'bg-[#d7a83d] text-[#173548]'}`}>
                  <div className="flex justify-between font-data text-[10px] uppercase tracking-[.14em]"><span>{project.type}</span><span>{project.index}</span></div>
                  <div className="flex items-end justify-between"><span className="font-editorial text-[47px] leading-[.82]">{project.title}</span><Layers3 size={25} strokeWidth={1.2} /></div>
                </div>
                <p className="max-w-[500px] text-[17px] leading-[1.45] text-[#173548]">{project.description}</p>
                <div className="mt-8 flex flex-col gap-5 border-t border-[#d5cbbb] pt-5 sm:flex-row sm:items-end sm:justify-between">
                  <div><p className="font-data text-[10px] uppercase tracking-[.13em] text-[#8b928d]">Outcome</p><p className="mt-1 text-[14px] font-semibold">{project.result}</p></div>
                  <Anchor href="#contact" className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[.12em] text-[#9a4439] transition hover:text-[#173548]" data-testid={`link-project-${index}`}>Read the case <ArrowUpRight size={14} /></Anchor>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="bg-[#e9e1d2] px-2.5 py-1.5 font-data text-[9px] uppercase tracking-[.08em] text-[#687878]">{tag}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-[#c9bda9] bg-[#173548] text-[#f3efe6]">
          <div className="mx-auto grid max-w-[1240px] gap-12 px-5 py-20 md:grid-cols-[1fr_1.1fr] md:px-8 md:py-24">
            <div>
              <p className="font-data text-[10px] uppercase tracking-[.2em] text-[#d7a83d]">04 / A little more context</p>
              <h2 className="mt-5 max-w-[470px] font-editorial text-[55px] leading-[.9] tracking-[-.03em] md:text-[72px]">Good work is<br /><em className="text-[#d7a83d]">a team sport.</em></h2>
            </div>
            <div className="grid gap-7 sm:grid-cols-2">
              <div className="border-l border-[#49616a] pl-5"><Award size={20} className="mb-5 text-[#d7a83d]" strokeWidth={1.5} /><p className="text-[15px] leading-[1.6] text-[#d8ded8]">I bring structure without bringing ceremony. The best frameworks are the ones a busy team keeps using after the workshop ends.</p></div>
              <div className="border-l border-[#49616a] pl-5"><Target size={20} className="mb-5 text-[#d7a83d]" strokeWidth={1.5} /><p className="text-[15px] leading-[1.6] text-[#d8ded8]">I’m drawn to meaningful constraints, honest trade-offs, and the small details that make a product feel like it knows who it’s for.</p></div>
              <div className="border-l border-[#49616a] pl-5 sm:col-span-2"><BriefcaseBusiness size={20} className="mb-5 text-[#d7a83d]" strokeWidth={1.5} /><p className="max-w-[590px] text-[15px] leading-[1.6] text-[#d8ded8]">Previously: product and research teams at Common Thread, Folio, and an early-stage climate startup. Always happiest at the intersection of customer truth and shipping reality.</p></div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-[1240px] px-5 py-20 md:px-8 md:py-28">
          <div className="availability-card relative overflow-hidden p-7 text-[#f3efe6] md:p-12">
            <div className="pointer-events-none absolute -right-12 -top-16 h-64 w-64 rounded-full border border-[#d7a83d]/30 md:h-96 md:w-96" />
            <div className="pointer-events-none absolute -right-2 -top-6 h-44 w-44 rounded-full border border-[#d7a83d]/20 md:h-64 md:w-64" />
            <div className="relative z-10 max-w-[720px]">
              <div className="flex items-center gap-3"><CalendarDays size={17} className="text-[#d7a83d]" strokeWidth={1.5} /><span className="font-data text-[10px] uppercase tracking-[.2em] text-[#d7a83d]">05 / Availability</span></div>
              <h2 className="mt-6 font-editorial text-[55px] leading-[.88] tracking-[-.03em] md:text-[78px]">Have a good<br /><em className="text-[#d7a83d]">question?</em></h2>
              <p className="mt-7 max-w-[500px] text-[16px] leading-[1.6] text-[#ced8d4]">I keep a few windows open each week for hiring conversations, project chemistry checks, and coffee with people building thoughtful things.</p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Anchor href="https://cal.com/ari-reyes/intro" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 bg-[#d7a83d] px-5 py-3.5 text-[12px] font-bold uppercase tracking-[.12em] text-[#173548] transition hover:bg-[#f3efe6]" data-testid="link-scheduler">
                  Find a time <CalendarDays size={15} />
                </Anchor>
                <Anchor href="mailto:hello@arireyes.work" className="inline-flex items-center gap-2 px-2 py-3.5 text-[12px] font-bold uppercase tracking-[.12em] text-[#f3efe6] transition hover:text-[#d7a83d]" data-testid="link-email">Or email me <Mail size={15} /></Anchor>
              </div>
              <div className="mt-11 grid grid-cols-2 gap-5 border-t border-[#49616a] pt-5 text-[12px] text-[#a9bbb5] sm:grid-cols-3">
                <div className="flex items-center gap-2"><Clock3 size={14} className="text-[#d7a83d]" /> Eastern time</div>
                <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#d7a83d]" /> 30 minutes</div>
                <div className="flex items-center gap-2"><MapPin size={14} className="text-[#d7a83d]" /> Remote-friendly</div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-[#c9bda9]">
          <div className="mx-auto grid max-w-[1240px] gap-10 px-5 py-16 md:grid-cols-[1fr_1.1fr] md:px-8 md:py-20">
            <div>
              <p className="font-data text-[10px] uppercase tracking-[.2em] text-[#9a4439]">Keep this close</p>
              <h2 className="mt-5 font-editorial text-[50px] leading-[.9] tracking-[-.03em]">The formal<br /><em>paperwork.</em></h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <Anchor href="/downloads/ari-reyes-resume.pdf" download className="group flex items-center justify-between border border-[#c9bda9] bg-[#f8f4ec] p-5 transition hover:border-[#9a4439] hover:bg-[#e9e1d2]" data-testid="link-resume-pdf">
                <span className="flex items-center gap-3"><FileText size={19} className="text-[#9a4439]" strokeWidth={1.5} /><span><span className="block text-[14px] font-bold">Resume / PDF</span><span className="mt-1 block font-data text-[10px] uppercase tracking-[.1em] text-[#8b928d]">2 pages · 412 KB</span></span></span><Download size={16} className="transition-transform group-hover:translate-y-1" />
              </Anchor>
              <Anchor href="/downloads/ari-reyes-resume.docx" download className="group flex items-center justify-between border border-[#c9bda9] bg-[#f8f4ec] p-5 transition hover:border-[#9a4439] hover:bg-[#e9e1d2]" data-testid="link-resume-docx">
                <span className="flex items-center gap-3"><FileText size={19} className="text-[#9a4439]" strokeWidth={1.5} /><span><span className="block text-[14px] font-bold">Resume / DOCX</span><span className="mt-1 block font-data text-[10px] uppercase tracking-[.1em] text-[#8b928d]">Editable · 38 KB</span></span></span><Download size={16} className="transition-transform group-hover:translate-y-1" />
              </Anchor>
              <p className="font-data text-[10px] leading-[1.6] text-[#8b928d] sm:col-span-2">Sample files for now — I’ll send the latest version directly when we talk.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#c9bda9] bg-[#e9e1d2]">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-6 px-5 py-8 md:flex-row md:items-center md:justify-between md:px-8">
          <div><p className="font-editorial text-[25px]">Ari Reyes</p><p className="mt-1 font-data text-[10px] uppercase tracking-[.14em] text-[#8b928d]">Make the useful thing clear.</p></div>
          <div className="flex items-center gap-5">
            <Anchor href="https://www.linkedin.com/in/ari-reyes" target="_blank" rel="noreferrer" aria-label="Ari Reyes on LinkedIn" className="text-[#687878] transition hover:text-[#9a4439]" data-testid="link-linkedin"><Linkedin size={17} /></Anchor>
            <Anchor href="https://github.com/arireyes" target="_blank" rel="noreferrer" aria-label="Ari Reyes on GitHub" className="text-[#687878] transition hover:text-[#9a4439]" data-testid="link-github"><Github size={17} /></Anchor>
            <Anchor href="mailto:hello@arireyes.work" aria-label="Email Ari Reyes" className="text-[#687878] transition hover:text-[#9a4439]" data-testid="link-footer-email"><Mail size={17} /></Anchor>
            <span className="ml-2 font-data text-[10px] uppercase tracking-[.12em] text-[#8b928d]">© 2025</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Router() {
  return <Home />;
}

function App() {
  return <Router />;
}

export default App;
