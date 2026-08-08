import { useEffect, useMemo, useRef, useState, type CSSProperties, type PointerEvent } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Copy,
  Mail,
  Menu,
  MousePointer2,
  Pause,
  X,
} from 'lucide-react'
import {
  aiTools,
  cardNews,
  cardNewsBlogUrl,
  detailProjects,
  games,
  landingProjects,
  posters,
  skills,
  webProjects,
  wideBanners,
  type DetailProject,
  type LandingProject,
  type WebProject,
} from './data/portfolio'

const assetPath = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`

const sectionLinks = [
  ['about', 'About'],
  ['web-projects', 'Web'],
  ['games', 'Games'],
  ['landing', 'Landing'],
  ['visual', 'Visual'],
  ['card-news', 'Card News'],
  ['detail', 'Detail'],
  ['contact', 'Contact'],
]

function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      <button className="brand" onClick={() => goTo('top')} aria-label="페이지 맨 위로 이동">
        SONHYEIN<span>.</span>
      </button>
      <nav className={`global-nav ${open ? 'global-nav--open' : ''}`} aria-label="주요 메뉴">
        {sectionLinks.map(([id, label]) => (
          <button key={id} onClick={() => goTo(id)}>{label}</button>
        ))}
      </nav>
      <button className="menu-button" onClick={() => setOpen((value) => !value)} aria-label="메뉴 열기" aria-expanded={open}>
        {open ? <X /> : <Menu />}
      </button>
    </header>
  )
}

function Hero() {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const timer = window.setTimeout(() => heroRef.current?.classList.add('hero--complete'), 4400)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <section className="hero section-snap" id="top" ref={heroRef} aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-meta hero-meta--top">
        <span>PORTFOLIO 2026</span>
        <span>SEOUL · KOREA</span>
      </div>

      <div className="hero-stage">
        <div className="prompt-window" aria-label="AI 프롬프트가 결과물로 변환되는 애니메이션">
          <div className="prompt-bar">
            <span className="prompt-dot" />
            <span className="prompt-label">AI WORKSPACE</span>
            <span className="prompt-status">GENERATING</span>
          </div>
          <div className="prompt-body">
            <span className="prompt-symbol">›</span>
            <p className="prompt-typing">아이디어를 유용하고 매력적인 결과물로 만들어 주세요.</p>
            <span className="prompt-cursor" />
          </div>
          <div className="prompt-progress"><span /></div>
        </div>

        <div className="assembly" aria-hidden="true">
          <span className="assembly-chip assembly-chip--idea">IDEA</span>
          <span className="assembly-chip assembly-chip--image">IMAGE</span>
          <span className="assembly-chip assembly-chip--code">CODE</span>
          <span className="assembly-line assembly-line--one" />
          <span className="assembly-line assembly-line--two" />
          <div className="assembly-frame">
            <span className="assembly-frame__nav" />
            <span className="assembly-frame__copy" />
            <span className="assembly-frame__copy assembly-frame__copy--short" />
            <span className="assembly-frame__button" />
            <span className="assembly-frame__visual" />
          </div>
        </div>

        <div className="hero-copy">
          <p className="hero-kicker">AI-ASSISTED WEB &amp; VISUAL DESIGNER</p>
          <h1 id="hero-title">
            AI로 가능성을 넓히고,<br />
            <span>디자인과 코드로 완성합니다.</span>
          </h1>
          <p className="hero-lead">
            문제를 이해하고, AI로 아이디어를 확장한 뒤<br className="desktop-only" />
            직접 판단하고 다듬어 목적에 맞는 결과물을 만듭니다.
          </p>
        </div>
      </div>

      <div className="hero-meta hero-meta--bottom">
        <span>WEB DESIGN · AI VISUAL · FRONTEND</span>
        <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
          SCROLL TO EXPLORE <ArrowDown size={14} />
        </button>
      </div>
    </section>
  )
}

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="section-heading reveal">
      <p className="section-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  )
}

function About() {
  const process = [
    ['01', '문제와 목적 파악', '무엇을 누구에게 전달해야 하는지 먼저 정리합니다.'],
    ['02', 'AI를 이용한 아이디어 및 시안 확장', '여러 도구를 목적에 맞게 조합해 가능성을 빠르게 넓힙니다.'],
    ['03', '디자인 판단 후 필요한 부분 수정', '정보의 우선순위와 화면의 완성도를 직접 판단하고 다듬습니다.'],
    ['04', '최종 결과물 완성', '디자인과 코드를 연결해 실제로 사용할 수 있는 결과물로 만듭니다.'],
  ]

  return (
    <section className="about section section-snap" id="about">
      <div className="section-inner">
        <SectionHeading
          eyebrow="01 · ABOUT & PROCESS"
          title="AI를 도구로, 판단을 기준으로"
          description="새로운 도구를 빠르게 익히고 목적에 맞게 조합합니다. 생성된 결과를 그대로 사용하는 대신 직접 비교하고 수정해 완성도를 높입니다."
        />

        <div className="process-grid">
          {process.map(([number, title, copy]) => (
            <article className="process-card reveal" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>

        <div className="tool-area">
          <div className="tool-heading reveal">
            <p>AI TOOLS</p>
            <h3>목적에 따라 다르게 활용합니다.</h3>
          </div>
          <div className="ai-tool-list">
            {aiTools.map((tool) => (
              <div className="ai-tool reveal" key={tool.name}>
                <span>{tool.index}</span>
                <strong>{tool.name}</strong>
                <p>{tool.role}</p>
                <ChevronRight aria-hidden="true" />
              </div>
            ))}
          </div>
          <div className="skill-marquee" aria-label="사용 기술">
            <div className="skill-marquee__track">
              {[...skills, ...skills].map((skill, index) => <span key={`${skill}-${index}`}>{skill}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectInfo({ project, close }: { project: WebProject; close: () => void }) {
  return (
    <aside
      className="project-info"
      aria-label={`${project.title} 프로젝트 설명`}
      onWheel={(event) => {
        event.preventDefault()
        event.stopPropagation()
        event.currentTarget.scrollTop += event.deltaY
      }}
    >
      <div className="project-info__sticky">
        <button className="icon-button project-info__close" onClick={close} aria-label="설명 닫기"><X /></button>
      </div>
      <p className="project-info__type">{project.type}</p>
      <h3>{project.title}</h3>
      <dl>
        <div><dt>Target</dt><dd>{project.target}</dd></div>
        <div><dt>Purpose</dt><dd>{project.purpose}</dd></div>
        <div><dt>Role</dt><dd>{project.role}</dd></div>
        <div><dt>Duration</dt><dd>{project.duration}</dd></div>
        <div><dt>AI Use</dt><dd>{project.ai}</dd></div>
      </dl>
      <div className="color-row" aria-label="메인 컬러">
        {project.colors.map((color) => <span key={color} style={{ backgroundColor: color }} title={color} />)}
      </div>
      <div className="tag-list">{project.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
      <a className="button button--dark" href={project.url} target="_blank" rel="noreferrer">
        사이트 방문 <ArrowUpRight size={17} />
      </a>
    </aside>
  )
}

function WebProjects() {
  const trackRef = useRef<HTMLDivElement>(null)
  const dragRef = useRef({ active: false, startX: 0, scrollLeft: 0 })
  const [selected, setSelected] = useState<number | null>(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    // 우측 프로젝트 영역 위에서만 세로 휠을 가로 이동으로 변환합니다.
    // 양 끝에서는 이벤트를 막지 않아 페이지의 세로 스크롤이 자연스럽게 이어집니다.
    const handleWheel = (event: WheelEvent) => {
      if (!window.matchMedia('(min-width: 1024px)').matches) return
      if ((event.target as HTMLElement).closest('.project-info')) return

      const movement = Math.abs(event.deltaY) >= Math.abs(event.deltaX) ? event.deltaY : event.deltaX
      if (movement === 0) return
      const maxScroll = track.scrollWidth - track.clientWidth
      const atStart = track.scrollLeft <= 1
      const atEnd = track.scrollLeft >= maxScroll - 1
      const shouldMoveInside = (movement > 0 && !atEnd) || (movement < 0 && !atStart)

      if (!shouldMoveInside) return
      event.preventDefault()
      const step = Math.sign(movement) * Math.min(Math.abs(movement), 96)
      track.scrollLeft = Math.min(maxScroll, Math.max(0, track.scrollLeft + step))
    }

    track.addEventListener('wheel', handleWheel, { passive: false })
    return () => track.removeEventListener('wheel', handleWheel)
  }, [])

  const startDrag = (event: PointerEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).closest('button, a, .project-info')) return
    const track = trackRef.current
    if (!track) return
    dragRef.current = { active: true, startX: event.clientX, scrollLeft: track.scrollLeft }
    track.setPointerCapture(event.pointerId)
    track.classList.add('is-dragging')
  }

  const moveDrag = (event: PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current
    if (!track || !dragRef.current.active) return
    track.scrollLeft = dragRef.current.scrollLeft - (event.clientX - dragRef.current.startX)
  }

  const endDrag = (event: PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current
    if (!track || !dragRef.current.active) return
    dragRef.current.active = false
    if (track.hasPointerCapture(event.pointerId)) track.releasePointerCapture(event.pointerId)
    track.classList.remove('is-dragging')
  }

  return (
    <section className="web-projects section-snap" id="web-projects">
      <div className="web-projects__intro">
        <p className="section-eyebrow">02 · WEB PROJECTS</p>
        <h2>브랜드의 분위기부터<br />사용 흐름까지 설계합니다.</h2>
        <p>오른쪽 영역에서 스크롤하거나 직접 드래그해 프로젝트를 확인해 보세요.</p>
      </div>
      <div className="project-viewport">
      <div
        className="project-track"
        ref={trackRef}
        onPointerDown={startDrag}
        onPointerMove={moveDrag}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        {webProjects.map((project, index) => (
          <article className="web-project-card" key={project.title}>
            <div className="web-project-card__visual">
              <img src={assetPath(project.image)} alt={`${project.title} 웹사이트 메인 화면`} loading={index > 1 ? 'lazy' : 'eager'} draggable="false" />
              <div className="web-project-card__topline">
                <span>{String(index + 1).padStart(2, '0')}</span>
              </div>
              <button className="project-detail-button" onClick={() => setSelected(index)}>
                프로젝트 정보 <ArrowRight size={15} />
              </button>
            </div>
            <div className="web-project-card__caption">
              <h3>{project.title}</h3>
              <p className="web-project-card__type">{project.type}</p>
              <p>{project.purpose}</p>
            </div>
            {selected === index && <ProjectInfo project={project} close={() => setSelected(null)} />}
          </article>
        ))}
      </div>
      </div>
    </section>
  )
}

function DeviceMockup({ game }: { game: (typeof games)[number] }) {
  return (
    <div className={`device-mockup device-mockup--${game.theme}`}>
      <span className="device-mockup__speaker" aria-hidden="true" />
      <div className="device-mockup__screen">
        <img src={assetPath(game.image)} alt={`${game.title} 모바일 게임 화면`} loading="lazy" />
      </div>
      <span className="device-mockup__home" aria-hidden="true" />
    </div>
  )
}

function Games() {
  return (
    <div id="games">
      {games.map((game) => (
        <section className={`game-section section section-snap ${game.reverse ? 'game-section--reverse' : ''}`} key={game.title}>
          <div className="section-inner game-layout">
            <div className="game-visual reveal"><DeviceMockup game={game} /></div>
            <div className="game-copy reveal">
              <p className="section-eyebrow">{game.eyebrow}</p>
              <h2>{game.title}</h2>
              <p className="game-description">{game.description}</p>
              <dl>
                <div><dt>Target</dt><dd>{game.target}</dd></div>
                <div><dt>Duration</dt><dd>{game.duration}</dd></div>
              </dl>
              <ul>{game.features.map((feature) => <li key={feature}><Check size={15} />{feature}</li>)}</ul>
              <div className="tag-list">{game.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
              <a className="button button--dark" href={game.url} target="_blank" rel="noreferrer">게임 실행 <ArrowUpRight size={17} /></a>
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}

function BrowserPreview({ project }: { project: LandingProject }) {
  return (
    <div className="landing-preview">
      <div className="browser-frame">
        <div className="browser-frame__bar">
          <span /><span /><span />
          <div>{project.url.replace('https://', '')}</div>
          <small><MousePointer2 size={12} /> SCROLL</small>
        </div>
        <div className="browser-frame__scroll">
          <div className="browser-frame__stack">
            {project.images.map((segment, index) => {
              const sourceWidth = segment.sourceWidth ?? 1280
              const sourceHeight = segment.sourceHeight ?? 900
              const cropTop = segment.cropTop ?? 0
              const cropBottom = segment.cropBottom ?? 0
              const visibleHeight = sourceHeight - cropTop - cropBottom
              return (
                <div
                  className={`browser-frame__segment${segment.fullPage ? ' browser-frame__segment--full-page' : ''}`}
                  key={segment.src}
                  style={{
                    '--segment-crop': `${-(cropTop / sourceWidth) * 100}%`,
                    aspectRatio: `${sourceWidth} / ${visibleHeight}`,
                  } as CSSProperties}
                >
                  <img src={assetPath(segment.src)} alt={index === 0 ? `${project.title} 전체 랜딩페이지` : ''} loading="lazy" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <p className="scroll-guide"><MousePointer2 size={15} /> 이미지 위에서 스크롤해 전체 페이지를 확인해 보세요.</p>
    </div>
  )
}

function LandingSlide({ project }: { project: LandingProject }) {
  return (
    <article className="carousel-slide">
      <div className="landing-layout">
        <BrowserPreview project={project} />
        <div className="landing-copy">
          <p className="section-eyebrow">LANDING PAGE</p>
          <h3>{project.title}</h3>
          <p className="landing-product">{project.product}</p>
          <dl>
            <div><dt>Target</dt><dd>{project.target}</dd></div>
            <div><dt>Goal</dt><dd>{project.goal}</dd></div>
            <div><dt>Concept</dt><dd>{project.concept}</dd></div>
            <div><dt>AI Use</dt><dd>{project.ai}</dd></div>
            <div><dt>Duration</dt><dd>{project.duration}</dd></div>
          </dl>
          <div className="flow-list">{project.flow.map((item, index) => <span key={item}>{index + 1}. {item}</span>)}</div>
          <a className="button button--dark" href={project.url} target="_blank" rel="noreferrer">랜딩페이지 방문 <ArrowUpRight size={17} /></a>
        </div>
      </div>
    </article>
  )
}

function LandingPages() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start' })
  const [selected, setSelected] = useState(0)
  useEffect(() => {
    if (!emblaApi) return
    const update = () => setSelected(emblaApi.selectedScrollSnap())
    update()
    emblaApi.on('select', update)
    return () => { emblaApi.off('select', update) }
  }, [emblaApi])

  return (
    <section className="landing section section-snap" id="landing">
      <div className="section-inner">
        <div className="carousel-header">
          <SectionHeading eyebrow="04 · LANDING PAGE" title="전환의 흐름을 설계합니다." description="제품의 차별점을 빠르게 이해시키고 다음 행동으로 자연스럽게 연결합니다." />
          <div className="carousel-controls">
            <button className="icon-button" onClick={() => emblaApi?.scrollPrev()} aria-label="이전 랜딩페이지"><ArrowLeft /></button>
            <span>{String(selected + 1).padStart(2, '0')} / {String(landingProjects.length).padStart(2, '0')}</span>
            <button className="icon-button" onClick={() => emblaApi?.scrollNext()} aria-label="다음 랜딩페이지"><ArrowRight /></button>
          </div>
        </div>
        <div className="carousel" ref={emblaRef}>
          <div className="carousel-container">{landingProjects.map((project) => <LandingSlide key={project.title} project={project} />)}</div>
        </div>
      </div>
    </section>
  )
}

function VisualGallery() {
  const wide = useMemo(() => [...wideBanners, ...wideBanners], [])
  const portrait = useMemo(() => [...posters, ...posters], [])
  const dragRef = useRef({ row: null as HTMLDivElement | null, startX: 0, scrollLeft: 0 })

  const startMarqueeDrag = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === 'mouse' && event.button !== 0) return
    const row = event.currentTarget
    dragRef.current = { row, startX: event.clientX, scrollLeft: row.scrollLeft }
    row.setPointerCapture(event.pointerId)
    row.classList.add('is-dragging')
  }

  const moveMarqueeDrag = (event: PointerEvent<HTMLDivElement>) => {
    const { row, startX, scrollLeft } = dragRef.current
    if (row !== event.currentTarget) return
    row.scrollLeft = scrollLeft - (event.clientX - startX)
  }

  const endMarqueeDrag = (event: PointerEvent<HTMLDivElement>) => {
    const row = dragRef.current.row
    if (row !== event.currentTarget) return
    if (row.hasPointerCapture(event.pointerId)) row.releasePointerCapture(event.pointerId)
    row.classList.remove('is-dragging')
    dragRef.current.row = null
  }

  return (
    <section className="visual section section-snap" id="visual">
      <div className="section-inner visual-heading">
        <SectionHeading eyebrow="05 · AI VISUAL" title="분야에 맞는 분위기를 빠르게 탐색합니다." description="여행, 교육, 라이프스타일, 금융, 식품, 패션과 테크 분야의 AI 배너 및 포스터 작업입니다." />
        <div className="pause-note"><Pause size={14} /> HOVER TO PAUSE · DRAG TO MOVE</div>
      </div>
      <div className="marquee-row marquee-row--wide" onPointerDown={startMarqueeDrag} onPointerMove={moveMarqueeDrag} onPointerUp={endMarqueeDrag} onPointerCancel={endMarqueeDrag}>
        <div className="marquee-track">
          {wide.map((file, index) => <img key={`${file}-${index}`} src={assetPath(`/images/banners/wide/${file}`)} alt={index < wideBanners.length ? file.replace(/^[A-Z]\d+_|_600x250\.png$/g, '') : ''} loading="lazy" draggable="false" />)}
        </div>
      </div>
      <div className="marquee-row marquee-row--poster" onPointerDown={startMarqueeDrag} onPointerMove={moveMarqueeDrag} onPointerUp={endMarqueeDrag} onPointerCancel={endMarqueeDrag}>
        <div className="marquee-track marquee-track--reverse">
          {portrait.map((file, index) => <img key={`${file}-${index}`} src={assetPath(`/images/banners/poster/${file}`)} alt={index < posters.length ? file.replace(/^[A-Z]\d+_|_500x600\.png$/g, '') : ''} loading="lazy" draggable="false" />)}
        </div>
      </div>
    </section>
  )
}

function CardNewsSection() {
  return (
    <section className="card-news section section-snap" id="card-news">
      <div className="section-inner">
        <SectionHeading eyebrow="06 · CARD NEWS" title="어려운 치과 정보를 쉽게 전달합니다." description="환자가 궁금해하는 주제를 명확한 제목과 친근한 비주얼로 구성한 치과 콘텐츠입니다." />
        <div className="card-news-grid">
          {cardNews.map((item) => (
            <a className="card-news-item reveal" key={item.title} href={cardNewsBlogUrl} target="_blank" rel="noreferrer" aria-label={`${item.title} 블로그에서 보기`}>
              <img src={assetPath(item.image)} alt={item.title} loading="lazy" />
            </a>
          ))}
        </div>
        <div className="card-news-actions">
          <a className="button button--dark" href={cardNewsBlogUrl} target="_blank" rel="noreferrer">블로그에서 전체 보기 <ArrowUpRight size={17} /></a>
        </div>
      </div>
    </section>
  )
}

function DetailSlide({ project }: { project: DetailProject }) {
  return (
    <article className="carousel-slide">
      <div className="detail-layout">
        <div className="detail-visual">
          <div className="detail-preview"><img src={assetPath(project.image)} alt={`${project.category} 전체 이미지`} loading="lazy" /></div>
          <p className="scroll-guide"><MousePointer2 size={15} /> 이미지 위에서 스크롤해 전체 페이지를 확인해 보세요.</p>
        </div>
        <div className="detail-copy">
          <p className="section-eyebrow">{project.category}</p>
          <h3>{project.title}</h3>
          <div className="ai-mode">{project.aiMode}</div>
          <dl>
            <div><dt>Target</dt><dd>{project.target}</dd></div>
            <div><dt>Intent</dt><dd>{project.intent}</dd></div>
            <div><dt>Duration</dt><dd>{project.duration}</dd></div>
          </dl>
          <div className="detail-subsection">
            <h4>PAGE FLOW</h4>
            <div className="flow-list">{project.flow.map((item, index) => <span key={item}>{index + 1}. {item}</span>)}</div>
          </div>
          <div className="detail-subsection">
            <h4>DIRECT WORK</h4>
            <ul>{project.directWork.map((item) => <li key={item}><Check size={15} />{item}</li>)}</ul>
          </div>
        </div>
      </div>
    </article>
  )
}

function DetailPages() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start' })
  const [selected, setSelected] = useState(0)
  useEffect(() => {
    if (!emblaApi) return
    const update = () => setSelected(emblaApi.selectedScrollSnap())
    update()
    emblaApi.on('select', update)
    return () => { emblaApi.off('select', update) }
  }, [emblaApi])

  return (
    <section className="detail section section-snap" id="detail">
      <div className="section-inner">
        <div className="carousel-header">
          <SectionHeading eyebrow="07 · DETAIL PAGE" title="AI 결과를 목적에 맞게 완성합니다." description="빠른 전체 생성부터 AI 초안 보완, Figma 재설계까지 서로 다른 협업 방식을 담았습니다." />
          <div className="carousel-controls">
            <button className="icon-button" onClick={() => emblaApi?.scrollPrev()} aria-label="이전 상세페이지"><ArrowLeft /></button>
            <span>{String(selected + 1).padStart(2, '0')} / {String(detailProjects.length).padStart(2, '0')}</span>
            <button className="icon-button" onClick={() => emblaApi?.scrollNext()} aria-label="다음 상세페이지"><ArrowRight /></button>
          </div>
        </div>
        <div className="carousel" ref={emblaRef}>
          <div className="carousel-container">{detailProjects.map((project) => <DetailSlide key={project.title} project={project} />)}</div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [copied, setCopied] = useState(false)
  const copyKakao = async () => {
    await navigator.clipboard.writeText('hihi9888')
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }
  return (
    <section className="contact section section-snap" id="contact">
      <div className="section-inner contact-layout">
        <div className="contact-copy reveal">
          <p className="section-eyebrow">08 · CONTACT</p>
          <h2>함께 만들 다음 결과물을<br />기다리고 있습니다.</h2>
          <p>도구는 빠르게 변하지만 목적을 이해하고 완성도를 판단하는 기준은 더 중요하다고 생각합니다.</p>
        </div>
        <div className="contact-links reveal">
          <a href="mailto:rv729@naver.com"><span><Mail /> EMAIL</span><strong>rv729@naver.com</strong><ArrowUpRight /></a>
          <button onClick={copyKakao}><span><Copy /> KAKAOTALK</span><strong>{copied ? 'ID가 복사되었습니다' : 'hihi9888'}</strong><ArrowUpRight /></button>
          <a href="https://blog.naver.com/study_log25" target="_blank" rel="noreferrer"><span>BLOG</span><strong>study_log25</strong><ArrowUpRight /></a>
        </div>
        <div className="contact-footer">
          <span>© 2026 SONHYEIN</span>
          <button onClick={() => document.getElementById('top')?.scrollIntoView({ behavior: 'smooth' })}>BACK TO TOP <ArrowUpRight size={14} /></button>
        </div>
      </div>
    </section>
  )
}

function RevealObserver() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      document.querySelectorAll('.reveal').forEach((item) => item.classList.add('is-visible'))
      return
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })
    document.querySelectorAll('.reveal').forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])
  return null
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#about">본문 바로가기</a>
      <Header />
      <main>
        <Hero />
        <About />
        <WebProjects />
        <Games />
        <LandingPages />
        <VisualGallery />
        <CardNewsSection />
        <DetailPages />
        <Contact />
      </main>
      <RevealObserver />
    </>
  )
}
