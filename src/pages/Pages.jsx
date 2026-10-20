import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight, X } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { about, brand, projects, services, values } from '../film/content.ts';
import './Pages.css';
import { Nav } from '../film/Film.jsx';

gsap.registerPlugin(ScrollTrigger);

const photos = {
  architecture: '/images/IMG_1645.PNG',
  tower: '/images/IMG_1642.PNG',
  plans: '/images/IMG_1666.PNG',
  site: '/images/IMG_1662.PNG',
  completedHome: '/images/IMG_1641.PNG',
  engineer: '/images/IMG_1640.PNG',
  team: '/images/IMG_1638.PNG',
  machinery: '/images/IMG_1663.PNG',
  development: '/images/IMG_1651.PNG',
  constructionTeam: '/images/IMG_1644.PNG',
};
function SiteFooter(){return <footer className="kb-site-footer"><div className="kb-footer-top"><span className="kb-eyebrow">KAIZERBRIX CONSULTS / PORT HARCOURT</span><p>Let's make something<br/><em>that lasts.</em></p><Link to="/contact" className="kb-round-link" aria-label="Contact KaizerBrix"><ArrowUpRight/></Link></div><div className="kb-footer-bottom"><Link to="/" className="kb-footer-brand">KB<span>.</span> CONSULTS</Link><a href={'mailto:'+brand.email}>{brand.email}</a><a href="tel:+2347073847960">+234 707 384 7960</a><div className="kb-footer-qr"><img src="/images/IMG_1637.PNG" alt="KaizerBrix supplied QR code"/><span>SCAN TO CONNECT</span></div><span>© {new Date().getFullYear()} KAIZERBRIX CONSULTS</span></div></footer>}
function PageFrame({children}){
  const frame=useRef(null);
  useEffect(()=>{
    const root=frame.current;
    if(!root)return;
    const selector='.kb-page-intro-copy,.kb-page-intro-image,.kb-about-statement>p,.kb-about-statement-foot,.kb-vision-image,.kb-vision-copy article,.kb-section-heading,.kb-values-grid article,.kb-expertise-lead p,.kb-service-row,.kb-service-end,.kb-projects-intro>p,.kb-project-card,.kb-projects-note,.kb-contact-copy,.kb-contact-form,.kb-footer-top';
    const targets=[...root.querySelectorAll(selector)];
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches||!('IntersectionObserver' in window)){targets.forEach(el=>el.classList.add('is-in-view'));return;}
    // Opt into hidden reveal states only after the page and observer are mounted.
    root.classList.add('kb-motion-ready');
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
      if(entry.isIntersecting){entry.target.classList.add('is-in-view');observer.unobserve(entry.target);}
    }),{threshold:0.12,rootMargin:'0px 0px -7% 0px'});
    targets.forEach((el,index)=>{el.style.transitionDelay=((index%4)*75)+'ms';observer.observe(el);});
    // Fail open if a browser or route transition misses the observer's initial notification.
    const revealFailsafe=window.setTimeout(()=>targets.forEach(el=>el.classList.add('is-in-view')),1800);
    return()=>{window.clearTimeout(revealFailsafe);observer.disconnect();root.classList.remove('kb-motion-ready');};
  },[]);
  return <div className="kb-page" ref={frame}><Nav external />{children}<SiteFooter/></div>
}
function Eyebrow({children}){return <span className="kb-eyebrow"><i/>{children}</span>}
function PageIntro({number,kicker,title,accent,body,image}){return <section className="kb-page-intro"><div className="kb-page-intro-copy"><Eyebrow>{number} / {kicker}</Eyebrow><h1>{title} <em>{accent}</em></h1>{body&&<p>{body}</p>}</div>{image&&<div className="kb-page-intro-image"><img src={image} alt="" fetchPriority="high"/><span>KAIZERBRIX CONSULTS <i>— {number}</i></span></div>}<span className="kb-intro-index">{number}</span></section>}
export function AboutPage(){return <PageFrame><PageIntro number="01" kicker="THE COMPANY" title="Built on purpose." accent="Made to endure." body={about.paragraphs[0]+' '+about.paragraphs[1]} image={photos.architecture}/><section className="kb-about-statement"><Eyebrow>OUR POINT OF VIEW</Eyebrow><p>Good buildings don't happen by accident. They are the result of <em>clear thinking, considered design,</em> and care at every stage.</p><div className="kb-about-statement-foot"><span>DESIGN / ENGINEERING / DELIVERY</span><span>01 — 03</span></div></section><section className="kb-about-vision"><div className="kb-vision-image"><img src={photos.plans} alt="Design plans being reviewed" loading="lazy"/><span>THE WORK BEGINS BEFORE THE BUILD.</span></div><div className="kb-vision-copy"><article><Eyebrow>OUR VISION</Eyebrow><h2>{about.vision}</h2></article><article><Eyebrow>OUR MISSION</Eyebrow><h2>{about.mission}</h2></article></div></section><section className="kb-values-section"><div className="kb-section-heading"><Eyebrow>WHAT GUIDES US</Eyebrow><h2>Principles that shape<br/><em>every decision.</em></h2></div><div className="kb-values-grid">{values.map((v,i)=><article key={v.name}><span>0{i+1}</span><h3>{v.name}</h3><p>{v.text}</p><i/></article>)}</div></section></PageFrame>}
export function ExpertisePage(){return <PageFrame><PageIntro number="02" kicker="OUR EXPERTISE" title="Five disciplines." accent="One vision." body="Integrated consultancy across the built environment, bringing design, technical rigour and delivery into one considered process." image={photos.tower}/><section className="kb-expertise-lead"><Eyebrow>FROM FIRST IDEA TO FINISHED PLACE</Eyebrow><p>Each discipline brings a different perspective. Together, they make the whole project stronger.</p></section><section className="kb-service-list">{services.map((s,i)=><article className="kb-service-row" key={s.name}><div className="kb-service-meta"><span>0{i+1}</span><span>DISCIPLINE</span></div><div className="kb-service-copy"><h2>{s.name}<ArrowUpRight/></h2><ul>{s.lines.map(line=><li key={line}>{line}</li>)}</ul></div><div className="kb-service-image"><img src={i===0?photos.architecture:i===1?photos.constructionTeam:i===2?photos.machinery:i===3?photos.development:i===4?photos.team:photos.site} alt={'KaizerBrix supplied image illustrating '+s.name} loading="lazy"/><span>KAIZERBRIX / {s.name.toUpperCase()}</span></div></article>)}</section></PageFrame>}
export function ProjectsPage(){
  const rail=useRef(null);
  const track=useRef(null);
  const progress=useRef(null);
  const [activeImage,setActiveImage]=useState(null);
  const threeDImages=Array.from({length:15},(_,index)=>({
    src:'/images/IMG_'+(1646+index)+'.PNG',
    number:String(index+1).padStart(2,'0'),
    filename:'IMG_'+(1646+index)+'.PNG'
  }));

  useEffect(()=>{
    const media=gsap.matchMedia();
    media.add('(min-width: 851px) and (prefers-reduced-motion: no-preference)',()=>{
      const section=rail.current;
      const gallery=track.current;
      if(!section||!gallery||gallery.scrollWidth<=window.innerWidth)return;
      const distance=()=>Math.max(0,gallery.scrollWidth-window.innerWidth);
      gsap.to(gallery,{x:()=>-distance(),ease:'none',scrollTrigger:{trigger:section,start:'top top',end:()=>'+='+distance(),pin:true,scrub:0.9,anticipatePin:1,invalidateOnRefresh:true}});
      if(progress.current)gsap.fromTo(progress.current,{scaleX:0},{scaleX:1,ease:'none',scrollTrigger:{trigger:section,start:'top top',end:()=>'+='+distance(),scrub:true,invalidateOnRefresh:true}});
      return()=>{};
    });
    return()=>media.revert();
  },[]);

  useEffect(()=>{
    if(activeImage===null)return;
    const previousOverflow=document.body.style.overflow;
    document.body.style.overflow='hidden';
    function handleKeyDown(event){
      if(event.key==='Escape')setActiveImage(null);
      if(event.key==='ArrowRight')setActiveImage(current=>(current+1)%threeDImages.length);
      if(event.key==='ArrowLeft')setActiveImage(current=>(current-1+threeDImages.length)%threeDImages.length);
    }
    window.addEventListener('keydown',handleKeyDown);
    return()=>{
      document.body.style.overflow=previousOverflow;
      window.removeEventListener('keydown',handleKeyDown);
    };
  },[activeImage,threeDImages.length]);

  return <PageFrame>
    <PageIntro number="03" kicker="SELECTED PROJECTS" title="Work with" accent="purpose." body="A selection of residential design and construction work from the KaizerBrix image archive." image={photos.site}/>
    <section className="kb-projects-intro"><Eyebrow>PROJECT RECORD / 03</Eyebrow><p>Every project is a commitment to function, craft and the people who will use the space.</p></section>
    <section className="kb-project-rail" ref={rail} aria-label="Selected project filmstrip">
      <div className="kb-project-grid" ref={track}>{projects.map((p,i)=><article className={'kb-project-card '+(i===0?'is-featured':'')} key={p.location}>
        <div className="kb-project-card-image"><img src={i===0?photos.completedHome:i===1?photos.tower:photos.site} alt={'KaizerBrix supplied project image for '+p.name+' in '+p.location} loading="lazy"/><span className={p.status==='ONGOING'?'kb-status is-ongoing':'kb-status'}>{p.status}</span><span className="kb-project-number">0{i+1}</span></div>
        <div className="kb-project-card-info"><span>{p.location} <i> / </i> {p.year}</span><h2>{p.name}</h2>{p.detail&&<p>{p.detail}</p>}<div className="kb-project-scope"><span>SCOPE</span><p>{p.scope.join(' · ')}</p></div></div>
      </article>)}</div>
      <div className="kb-rail-progress" aria-hidden="true"><i ref={progress}/></div>
      <span className="kb-rail-caption">SCROLL TO EXPLORE <b>—</b> 03 PROJECTS</span>
    </section>
    <section className="kb-projects-note"><span>* IMAGE NOTE</span><p>Project imagery has been selected from the supplied KaizerBrix image archive. The archive includes both on-site photographs and architectural visualisations; visualisations represent design concepts rather than completed-site photography.</p></section>

    <section className="kb-3d-gallery" id="3d-images" aria-labelledby="kb-3d-gallery-title">
      <div className="kb-3d-gallery-heading">
        <div>
          <Eyebrow>DESIGN ARCHIVE / 15 VISUALISATIONS</Eyebrow>
          <h2 id="kb-3d-gallery-title">3D <em>Images.</em></h2>
        </div>
        <p>Explore the buildings before they’re built. A collection of architectural visualisations from the KaizerBrix design archive.</p>
      </div>
      <div className="kb-3d-gallery-grid">
        {threeDImages.map((image,index)=><article className={'kb-3d-card kb-3d-card--'+(index%5+1)} key={image.filename} style={{'--kb-card-index':index}}>
          <button type="button" className="kb-3d-card-trigger" onClick={()=>setActiveImage(index)} aria-label={'Open architectural visualisation '+image.number}>
            <span className="kb-3d-card-image"><img src={image.src} alt={'KaizerBrix architectural 3D visualisation '+image.number} loading="lazy" decoding="async"/><span className="kb-3d-card-shade"/></span>
            <span className="kb-3d-card-meta"><span><i>{image.number}</i> / 15</span><span className="kb-3d-card-open">VIEW DESIGN <ArrowUpRight size={17}/></span></span>
          </button>
        </article>)}
      </div>
      <div className="kb-3d-gallery-foot"><span>KAIZERBRIX CONSULTS</span><span>ARCHITECTURE / VISUALISATION</span><span>15 DESIGNS <i>↗</i></span></div>
    </section>

    {activeImage!==null&&<div className="kb-3d-lightbox" role="dialog" aria-modal="true" aria-label={'Architectural visualisation '+threeDImages[activeImage].number} onClick={()=>setActiveImage(null)}>
      <button type="button" className="kb-3d-lightbox-close" onClick={()=>setActiveImage(null)} aria-label="Close image viewer"><X size={24}/><span>ESC</span></button>
      <button type="button" className="kb-3d-lightbox-nav kb-3d-lightbox-prev" onClick={event=>{event.stopPropagation();setActiveImage(current=>(current-1+threeDImages.length)%threeDImages.length)}} aria-label="Previous design"><ArrowLeft size={22}/></button>
      <div className="kb-3d-lightbox-content" onClick={event=>event.stopPropagation()}>
        <img src={threeDImages[activeImage].src} alt={'KaizerBrix architectural 3D visualisation '+threeDImages[activeImage].number}/>
        <div className="kb-3d-lightbox-caption"><span>KAIZERBRIX / 3D IMAGES</span><strong>{threeDImages[activeImage].number} <i>/ 15</i></strong><span>{threeDImages[activeImage].filename}</span></div>
      </div>
      <button type="button" className="kb-3d-lightbox-nav kb-3d-lightbox-next" onClick={event=>{event.stopPropagation();setActiveImage(current=>(current+1)%threeDImages.length)}} aria-label="Next design"><ArrowRight size={22}/></button>
    </div>}
  </PageFrame>
}
export function ContactPage(){
  const [status,setStatus]=useState('idle');
  const [statusMessage,setStatusMessage]=useState('');

  async function handleEnquirySubmit(event){
    event.preventDefault();
    if(status==='sending')return;
    const form=event.currentTarget;
    const data=new FormData(form);
    const payload={
      name:String(data.get('name')||'').trim(),
      email:String(data.get('email')||'').trim(),
      project_type:String(data.get('type')||'').trim(),
      message:String(data.get('message')||'').trim()
    };

    setStatus('sending');
    setStatusMessage('');
    try{
      const response=await fetch('https://pqaxmjckirtxnihvxavq.supabase.co/rest/v1/kaizerbrix_enquiries',{
        method:'POST',
        headers:{
          apikey:'sb_publishable_DHtpTZ0bLT0oCd1OCJxE-w_QuopmU7m',
          Authorization:'Bearer sb_publishable_DHtpTZ0bLT0oCd1OCJxE-w_QuopmU7m',
          'Content-Type':'application/json',
          Prefer:'return=minimal'
        },
        body:JSON.stringify(payload)
      });
      if(!response.ok){
        const detail=await response.text().catch(()=> '');
        throw new Error(detail||'The enquiry could not be saved.');
      }
      form.reset();
      setStatus('success');
      setStatusMessage('Your enquiry has been sent successfully. Thank you for contacting KaizerBrix.');
    }catch(error){
      console.error('[KaizerBrix] Enquiry submission failed:',error);
      setStatus('error');
      setStatusMessage('We could not send your enquiry right now. Please try again, or contact us directly at '+brand.email+'.');
    }
  }

  return <PageFrame><PageIntro number="04" kicker="LET'S TALK" title="Start with" accent="a conversation." body="Tell us a little about what you want to build, plan or improve. We’ll take it from there." image={photos.plans}/><section className="kb-contact-layout"><div className="kb-contact-copy"><Eyebrow>GET IN TOUCH</Eyebrow><h2>Good work begins with a <em>good conversation.</em></h2><p>Reach out directly or send a project enquiry using the form. Your message is sent securely to our enquiry records so our team can follow up.</p><a className="kb-contact-direct" href={'mailto:'+brand.email}>{brand.email}<ArrowUpRight/></a><a className="kb-contact-direct" href="tel:+2347073847960">+234 707 384 7960<ArrowUpRight/></a><div className="kb-contact-address"><span>VISIT US</span><p>{brand.address}</p><a href="https://maps.google.com/?q=67+Mgbuoshimini+Road,+Rumueme,+Port+Harcourt,+Rivers+State" target="_blank" rel="noreferrer">Open in Maps <ArrowUpRight size={15}/></a></div></div><form className="kb-contact-form" onSubmit={handleEnquirySubmit}><Eyebrow>PROJECT ENQUIRY</Eyebrow><label>Your name<input name="name" autoComplete="name" required maxLength={120} placeholder="Full name"/></label><label>Email address<input name="email" type="email" autoComplete="email" required maxLength={320} placeholder="you@example.com"/></label><label>What are you planning?<select name="type" defaultValue="" required><option value="" disabled>Select a project type</option>{services.map(s=><option key={s.name}>{s.name}</option>)}<option>Other / not sure yet</option></select></label><label>Tell us about it<textarea name="message" required minLength={1} maxLength={5000} rows="5" placeholder="Location, scope, timeline — anything helpful."/></label><button type="submit" disabled={status==='sending'}>{status==='sending'?'Sending enquiry…':status==='success'?'Enquiry sent':'Send enquiry'} <ArrowUpRight/></button>{statusMessage&&<p className={'kb-form-note '+(status==='error'?'is-error':'is-success')} role="status" aria-live="polite">{statusMessage}</p>}<small>Your details are used only to respond to this enquiry.</small></form></section></PageFrame>
}