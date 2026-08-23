import { useState, type AnchorHTMLAttributes, type ReactNode } from 'react';
import { ArrowDownRight, ArrowUpRight, Award, BriefcaseBusiness, CalendarDays, CheckCircle2, ChevronRight, CircleDot, Clock3, Download, FileText, Layers3, Mail, MapPin, Menu, Target, X } from 'lucide-react';

const skills = [
  { name: 'Strategiczne zakupy i sourcing', level: 'Zaawansowany', score: 96, evidence: '#project-atos', tone: 'bg-[#9a4439]' },
  { name: 'Negocjacje zakupowe i kontrakty', level: 'Zaawansowany', score: 94, evidence: '#project-atos', tone: 'bg-[#173548]' },
  { name: 'Zarządzanie kategorią Software', level: 'Zaawansowany', score: 92, evidence: '#project-category', tone: 'bg-[#d7a83d]' },
  { name: 'Analiza wydatków i zapasów', level: 'Zaawansowany', score: 90, evidence: '#project-neuca', tone: 'bg-[#5e8278]' },
  { name: 'Excel, SAP i systemy ERP', level: 'Zaawansowany', score: 88, evidence: '#project-sap', tone: 'bg-[#9a4439]' },
  { name: 'Optymalizacja procesów i raportowanie', level: 'Dobry', score: 82, evidence: '#project-neuca', tone: 'bg-[#173548]' },
];

const projects = [
  {
    id: 'project-atos',
    index: '01',
    type: 'Global procurement · 2022–2023',
    title: 'ATOS IT Services',
    description: 'Globalne zakupy oprogramowania dla grupy Atos: prowadzenie RFP, RFQ i aukcji, porównywanie warunków handlowych oraz negocjowanie kontraktów.',
    result: 'Globalny zakres odpowiedzialności',
    tags: ['Sourcing', 'RFP / RFQ', 'Negocjacje'],
    accent: 'navy',
  },
  {
    id: 'project-category',
    index: '02',
    type: 'Category management · 2017–2021',
    title: 'Category Expert',
    description: 'Zarządzanie kategorią Software UK&I: negocjacje cen i licencji, postępowania ofertowe, analiza wydatków, konsolidacja dostawców i zatwierdzanie zakupów o znacznej wartości.',
    result: 'Pełna odpowiedzialność za kategorię',
    tags: ['Category management', 'Software', 'UK&I'],
    accent: 'red',
  },
  {
    id: 'project-neuca',
    index: '03',
    type: 'Inventory management · 2012–2015',
    title: 'Grupa NEUCA',
    description: 'Zarządzanie zapasem od 2 000 do 3 000 preparatów, obsługa dostawców, prognozowanie sprzedaży i rozwój narzędzi do monitorowania zapasów.',
    result: '12 mln PLN zapasu · 5 magazynów',
    tags: ['Zapas', 'Prognozy', 'Raportowanie'],
    accent: 'gold',
  },
  {
    id: 'project-sap',
    index: '04',
    type: 'Logistics & ERP · 2010–2012',
    title: 'SHARP',
    description: 'Obsługa dokumentów materiałowych w SAP, kontrola zapasów i dostaw oraz organizacja dostaw JiT zgodnie z planem produkcji.',
    result: 'SAP R/3 · planowanie JiT',
    tags: ['SAP', 'Logistyka', 'Produkcja'],
    accent: 'navy',
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
            <span className="hidden text-[12px] font-semibold uppercase tracking-[.17em] text-[#173548] sm:block">Michał Domżalski</span>
          </Anchor>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
            <Anchor href="#work" className="text-[12px] font-semibold uppercase tracking-[.13em] text-[#5e6a69] transition-colors hover:text-[#9a4439]" data-testid="link-nav-work">Doświadczenie</Anchor>
            <Anchor href="#capabilities" className="text-[12px] font-semibold uppercase tracking-[.13em] text-[#5e6a69] transition-colors hover:text-[#9a4439]" data-testid="link-nav-capabilities">Kompetencje</Anchor>
            <Anchor href="#about" className="text-[12px] font-semibold uppercase tracking-[.13em] text-[#5e6a69] transition-colors hover:text-[#9a4439]" data-testid="link-nav-about">O mnie</Anchor>
          </nav>
          <Anchor href="#contact" className="hidden items-center gap-2 border border-[#173548] px-4 py-2.5 text-[11px] font-bold uppercase tracking-[.13em] text-[#173548] transition hover:bg-[#173548] hover:text-[#f3efe6] sm:flex" data-testid="link-nav-contact">
            Kontakt <ArrowUpRight size={14} strokeWidth={1.8} />
          </Anchor>
          <button type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} className="p-2 md:hidden" onClick={() => setMenuOpen((open) => !open)} data-testid="button-mobile-menu">
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
        {menuOpen && (
          <nav className="border-t border-[#d5cbbb] px-5 py-4 md:hidden" aria-label="Mobile navigation">
            <div className="flex flex-col gap-4">
                {['work', 'capabilities', 'about', 'contact'].map((item) => (
                  <Anchor key={item} href={`#${item}`} onClick={closeMenu} className="text-[12px] font-bold uppercase tracking-[.15em]" data-testid={`link-mobile-${item}`}>{item === 'work' ? 'Doświadczenie' : item === 'capabilities' ? 'Kompetencje' : item === 'about' ? 'O mnie' : 'Kontakt'}</Anchor>
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
                <span className="font-data text-[10px] uppercase tracking-[.2em] text-[#9a4439]">Otwarty na nowe możliwości</span>
              </div>
              <p className="reveal-up reveal-delay-1 mb-5 font-data text-[11px] uppercase tracking-[.18em] text-[#687878]">Kupiec strategiczny · Toruń / Polska</p>
              <h1 className="reveal-up reveal-delay-2 max-w-[790px] font-editorial text-[clamp(4.3rem,9.4vw,8.6rem)] leading-[.82] tracking-[-.045em] text-[#173548]">
                Łączę<br /><em className="text-[#9a4439]">zakupy</em><br />z wynikiem.
              </h1>
              <p className="reveal-up reveal-delay-3 mt-9 max-w-[560px] text-[17px] leading-[1.55] text-[#42565c] md:text-[19px]">
                Pomagam organizacjom podejmować lepsze decyzje zakupowe. Szukam roli w strategicznych zakupach, sourcingu lub zarządzaniu kategorią, w której analityka przekłada się na konkretny wynik biznesowy.
              </p>
              <div className="reveal-up reveal-delay-4 mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Anchor href="#work" className="group inline-flex items-center justify-center gap-3 bg-[#9a4439] px-5 py-3.5 text-[12px] font-bold uppercase tracking-[.12em] text-[#f7f2e8] transition hover:bg-[#173548]" data-testid="link-hero-work">
                  Zobacz doświadczenie <ArrowDownRight size={16} className="transition-transform group-hover:translate-y-1 group-hover:translate-x-1" />
                </Anchor>
                <Anchor href="#contact" className="inline-flex items-center justify-center gap-2 px-3 py-3.5 text-[12px] font-bold uppercase tracking-[.12em] text-[#173548] transition hover:text-[#9a4439]" data-testid="link-hero-contact">
                  Napisz do mnie <ArrowUpRight size={15} />
                </Anchor>
              </div>
            </div>

            <aside className="reveal-up reveal-delay-3 relative flex items-end md:pt-12" aria-label="Professional profile">
              <div className="absolute -right-4 top-2 hidden font-data text-[10px] uppercase tracking-[.16em] text-[#8b928d] lg:block">Portfolio / 2025</div>
              <div className="w-full border border-[#c9bda9] bg-[#e9e1d2] p-3 shadow-[10px_12px_0_#d5cbbb] md:ml-auto md:max-w-[390px]">
                <div className="portrait-mark relative flex aspect-[.88] items-end overflow-hidden p-6">
                  <div className="absolute left-6 top-6 font-data text-[10px] uppercase tracking-[.16em] text-[#f3efe6]/70">CV / 2026</div>
                  <div className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-[#f3efe6]/40 text-[#f3efe6]"><CircleDot size={20} strokeWidth={1} /></div>
                  <div>
                    <p className="font-data text-[10px] uppercase tracking-[.16em] text-[#f3efe6]/70">Michał Domżalski</p>
                    <p className="mt-1 font-editorial text-[41px] leading-[.84] text-[#f3efe6]">Strategic<br />buyer.</p>
                  </div>
                  <span className="absolute bottom-6 right-6 h-8 w-8 border-b border-r border-[#f3efe6]/70" />
                </div>
                <div className="flex items-center justify-between px-2 pb-1 pt-4">
                  <div>
                    <p className="font-data text-[10px] uppercase tracking-[.14em] text-[#687878]">Currently</p>
                    <p className="mt-1 text-[13px] font-semibold">Toruń · Polska</p>
                  </div>
                  <div className="text-right">
                    <p className="font-data text-[10px] uppercase tracking-[.14em] text-[#687878]">Focus</p>
                    <p className="mt-1 text-[13px] font-semibold">Zakupy · supply chain</p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
          <div className="mx-auto flex max-w-[1240px] items-center gap-3 px-5 pb-5 md:px-8">
            <span className="font-data text-[10px] uppercase tracking-[.16em] text-[#8b928d]">Przewiń, aby poznać doświadczenie</span>
            <span className="h-px w-20 bg-[#bcae9b]" />
            <ArrowDownRight size={14} className="text-[#9a4439]" />
          </div>
        </section>

        <section id="about" className="mx-auto grid max-w-[1240px] grid-cols-1 gap-12 px-5 py-20 md:grid-cols-[.8fr_1.2fr] md:px-8 md:py-28">
          <div>
            <p className="font-data text-[10px] uppercase tracking-[.2em] text-[#9a4439]">01 / W skrócie</p>
            <h2 className="mt-5 max-w-[350px] font-editorial text-[52px] leading-[.91] tracking-[-.03em] text-[#173548] md:text-[64px]">Zakupy<br /><em>z sensem.</em></h2>
          </div>
          <div className="max-w-[650px]">
            <p className="text-[22px] leading-[1.36] tracking-[-.02em] text-[#173548] md:text-[28px]">Łączę analizę, negocjacje i znajomość łańcucha dostaw, aby zamieniać potrzeby biznesu w dobre decyzje zakupowe.</p>
            <p className="mt-7 max-w-[560px] text-[15px] leading-[1.7] text-[#5e6a69]">Mam kilkuletnie doświadczenie w zakupach strategicznych, zarządzaniu kategorią Software oraz gospodarce zapasami. Pracowałem z dostawcami krajowymi i zagranicznymi, prowadziłem postępowania ofertowe i rozwijałem raporty wspierające pracę zespołów.</p>
            <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-7 border-t border-[#c9bda9] pt-7 sm:grid-cols-3">
              <div><p className="font-data text-[10px] uppercase tracking-[.15em] text-[#8b928d]">Lokalizacja</p><p className="mt-2 text-[14px] font-semibold">Toruń, Polska</p></div>
              <div><p className="font-data text-[10px] uppercase tracking-[.15em] text-[#8b928d]">Doświadczenie</p><p className="mt-2 text-[14px] font-semibold">15+ lat</p></div>
              <div><p className="font-data text-[10px] uppercase tracking-[.15em] text-[#8b928d]">Szukam</p><p className="mt-2 text-[14px] font-semibold">Zakupy · sourcing</p></div>
            </div>
          </div>
        </section>

        <section id="capabilities" className="border-y border-[#c9bda9] bg-[#e9e1d2]">
          <div className="mx-auto max-w-[1240px] px-5 py-20 md:px-8 md:py-24">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="font-data text-[10px] uppercase tracking-[.2em] text-[#9a4439]">02 / Mapa kompetencji</p>
                <h2 className="mt-5 font-editorial text-[54px] leading-[.9] tracking-[-.03em] md:text-[72px]">Co wnoszę<br /><em>do zespołu.</em></h2>
              </div>
              <p className="max-w-[300px] text-[13px] leading-[1.6] text-[#5e6a69]">Praktyczna mapa, nie lista haseł. Każda kompetencja prowadzi do konkretnego doświadczenia.</p>
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
              {['CIPS Level 4', 'SAP Ariba', 'Logintrade', 'IFS', 'VBA / Python', 'Angielski C1', 'Excel'].map((tag) => <span key={tag} className="border border-[#bcae9b] px-3 py-2 font-data text-[10px] uppercase tracking-[.1em] text-[#687878]">{tag}</span>)}
            </div>
          </div>
        </section>

        <section id="work" className="mx-auto max-w-[1240px] px-5 py-20 md:px-8 md:py-28">
          <div className="flex flex-col justify-between gap-6 border-b border-[#c9bda9] pb-8 md:flex-row md:items-end">
            <div>
              <p className="font-data text-[10px] uppercase tracking-[.2em] text-[#9a4439]">03 / Doświadczenie</p>
              <h2 className="mt-5 font-editorial text-[54px] leading-[.9] tracking-[-.03em] md:text-[72px]">Konkretne<br /><em>doświadczenie.</em></h2>
            </div>
            <p className="max-w-[290px] text-[13px] leading-[1.6] text-[#5e6a69]">Od zakupów software po planowanie materiałów. Wspólny mianownik: porządek, analiza i wynik.</p>
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
                  <Anchor href="#contact" className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[.12em] text-[#9a4439] transition hover:text-[#173548]" data-testid={`link-project-${index}`}>Porozmawiaj o roli <ArrowUpRight size={14} /></Anchor>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="bg-[#e9e1d2] px-2.5 py-1.5 font-data text-[9px] uppercase tracking-[.08em] text-[#687878]">{tag}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-[#c9bda9] bg-[#173548] text-[#f3efe6]">
          <div className="mx-auto grid max-w-[1240px] gap-12 px-5 py-20 md:grid-cols-[1fr_1.1fr] md:px-8 md:py-24">
            <div>
              <p className="font-data text-[10px] uppercase tracking-[.2em] text-[#d7a83d]">04 / Wykształcenie i narzędzia</p>
              <h2 className="mt-5 max-w-[470px] font-editorial text-[55px] leading-[.9] tracking-[-.03em] md:text-[72px]">Doświadczenie<br /><em className="text-[#d7a83d]">oparte na danych.</em></h2>
            </div>
            <div className="grid gap-7 sm:grid-cols-2">
              <div className="border-l border-[#49616a] pl-5"><Award size={20} className="mb-5 text-[#d7a83d]" strokeWidth={1.5} /><p className="text-[15px] leading-[1.6] text-[#d8ded8]">CIPS Level 4 – Diploma in Procurement and Supply oraz szkolenia z negocjacji zakupowych, zarządzania kategorią i Six Sigma.</p></div>
              <div className="border-l border-[#49616a] pl-5"><Target size={20} className="mb-5 text-[#d7a83d]" strokeWidth={1.5} /><p className="text-[15px] leading-[1.6] text-[#d8ded8]">Licencjat z zarządzania i marketingu na Uniwersytecie Mikołaja Kopernika oraz Erasmus na Central Ostrobothnia University of Applied Sciences.</p></div>
              <div className="border-l border-[#49616a] pl-5 sm:col-span-2"><BriefcaseBusiness size={20} className="mb-5 text-[#d7a83d]" strokeWidth={1.5} /><p className="max-w-[590px] text-[15px] leading-[1.6] text-[#d8ded8]">Excel, SAP R/3, SAP Ariba, Logintrade, IFS, Business Objects, Panorama Necto oraz podstawy VBA, Python, C++, HTML, Linux i narzędzi AI.</p></div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-[1240px] px-5 py-20 md:px-8 md:py-28">
          <div className="availability-card relative overflow-hidden p-7 text-[#f3efe6] md:p-12">
            <div className="pointer-events-none absolute -right-12 -top-16 h-64 w-64 rounded-full border border-[#d7a83d]/30 md:h-96 md:w-96" />
            <div className="pointer-events-none absolute -right-2 -top-6 h-44 w-44 rounded-full border border-[#d7a83d]/20 md:h-64 md:w-64" />
            <div className="relative z-10 max-w-[720px]">
              <div className="flex items-center gap-3"><CalendarDays size={17} className="text-[#d7a83d]" strokeWidth={1.5} /><span className="font-data text-[10px] uppercase tracking-[.2em] text-[#d7a83d]">05 / Dostępność</span></div>
              <h2 className="mt-6 font-editorial text-[55px] leading-[.88] tracking-[-.03em] md:text-[78px]">Porozmawiajmy<br /><em className="text-[#d7a83d]">o zakupach.</em></h2>
              <p className="mt-7 max-w-[500px] text-[16px] leading-[1.6] text-[#ced8d4]">Jestem otwarty na rozmowy o rolach w zakupach strategicznych, sourcingu, zarządzaniu kategorią i łańcuchu dostaw.</p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Anchor href="https://cal.com/michal-domzalski/rozmowa" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 bg-[#d7a83d] px-5 py-3.5 text-[12px] font-bold uppercase tracking-[.12em] text-[#173548] transition hover:bg-[#f3efe6]" data-testid="link-scheduler">
                  Umów rozmowę <CalendarDays size={15} />
                </Anchor>
                <Anchor href="mailto:michaldom@gmail.com" className="inline-flex items-center gap-2 px-2 py-3.5 text-[12px] font-bold uppercase tracking-[.12em] text-[#f3efe6] transition hover:text-[#d7a83d]" data-testid="link-email">Napisz e-mail <Mail size={15} /></Anchor>
              </div>
              <div className="mt-11 grid grid-cols-2 gap-5 border-t border-[#49616a] pt-5 text-[12px] text-[#a9bbb5] sm:grid-cols-3">
                <div className="flex items-center gap-2"><Clock3 size={14} className="text-[#d7a83d]" /> Europe / Warszawa</div>
                <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#d7a83d]" /> 30 minut</div>
                <div className="flex items-center gap-2"><MapPin size={14} className="text-[#d7a83d]" /> Toruń / zdalnie</div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-[#c9bda9]">
          <div className="mx-auto grid max-w-[1240px] gap-10 px-5 py-16 md:grid-cols-[1fr_1.1fr] md:px-8 md:py-20">
            <div>
              <p className="font-data text-[10px] uppercase tracking-[.2em] text-[#9a4439]">Zachowaj na później</p>
              <h2 className="mt-5 font-editorial text-[50px] leading-[.9] tracking-[-.03em]">Pełne<br /><em>CV.</em></h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <Anchor href="/downloads/michal-domzalski-cv.pdf" download className="group flex items-center justify-between border border-[#c9bda9] bg-[#f8f4ec] p-5 transition hover:border-[#9a4439] hover:bg-[#e9e1d2]" data-testid="link-resume-pdf">
                <span className="flex items-center gap-3"><FileText size={19} className="text-[#9a4439]" strokeWidth={1.5} /><span><span className="block text-[14px] font-bold">CV / PDF</span><span className="mt-1 block font-data text-[10px] uppercase tracking-[.1em] text-[#8b928d]">ATS-friendly · 2026</span></span></span><Download size={16} className="transition-transform group-hover:translate-y-1" />
              </Anchor>
              <Anchor href="/downloads/michal-domzalski-cv.docx" download className="group flex items-center justify-between border border-[#c9bda9] bg-[#f8f4ec] p-5 transition hover:border-[#9a4439] hover:bg-[#e9e1d2]" data-testid="link-resume-docx">
                <span className="flex items-center gap-3"><FileText size={19} className="text-[#9a4439]" strokeWidth={1.5} /><span><span className="block text-[14px] font-bold">CV / DOCX</span><span className="mt-1 block font-data text-[10px] uppercase tracking-[.1em] text-[#8b928d]">Edytowalne · 2026</span></span></span><Download size={16} className="transition-transform group-hover:translate-y-1" />
              </Anchor>
              <p className="font-data text-[10px] leading-[1.6] text-[#8b928d] sm:col-span-2">Dokumenty zawierają dane z CV Michała Domżalskiego i są gotowe do pobrania.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#c9bda9] bg-[#e9e1d2]">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-6 px-5 py-8 md:flex-row md:items-center md:justify-between md:px-8">
           <div><p className="font-editorial text-[25px]">Michał Domżalski</p><p className="mt-1 font-data text-[10px] uppercase tracking-[.14em] text-[#8b928d]">Dobre zakupy zaczynają się od dobrych decyzji.</p></div>
          <div className="flex items-center gap-5">
             <Anchor href="mailto:michaldom@gmail.com" aria-label="E-mail Michała Domżalskiego" className="text-[#687878] transition hover:text-[#9a4439]" data-testid="link-footer-email"><Mail size={17} /></Anchor>
             <span className="ml-2 font-data text-[10px] uppercase tracking-[.12em] text-[#8b928d]">© 2026</span>
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
