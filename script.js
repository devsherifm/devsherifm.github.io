const curtain=document.getElementById('introCurtain');
document.getElementById('openInvitation').addEventListener('click',()=>{
  curtain.classList.add('open');
  document.body.classList.remove('locked');
  startLeaves();
  setTimeout(()=>curtain.remove(),2100);
});
const eventDate=new Date('2026-11-15T10:00:00');
function updateCountdown(){
  let diff=eventDate.getTime()-Date.now();
  const ids={days:86400000,hours:3600000,minutes:60000,seconds:1000};
  if(diff<=0){for(const id of Object.keys(ids))document.getElementById(id).textContent=id==='days'?'000':'00';return;}
  for(const [id,unit] of Object.entries(ids)){
    document.getElementById(id).textContent=String(Math.floor(diff/unit)).padStart(id==='days'?3:2,'0');
    diff%=unit;
  }
}
updateCountdown();setInterval(updateCountdown,1000);
const revealEls=document.querySelectorAll('.reveal');
if('IntersectionObserver' in window){
 const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.12});
 revealEls.forEach(el=>io.observe(el));
}else revealEls.forEach(el=>el.classList.add('visible'));

const lightbox=document.getElementById('lightbox'), lightboxImage=document.getElementById('lightboxImage');
document.querySelectorAll('.gallery-card').forEach(card=>card.addEventListener('click',()=>{
 lightboxImage.src=card.dataset.image;lightboxImage.alt=card.querySelector('img').alt;
 lightbox.classList.add('active');lightbox.setAttribute('aria-hidden','false');document.body.classList.add('locked');
}));
function closeLightbox(){lightbox.classList.remove('active');lightbox.setAttribute('aria-hidden','true');document.body.classList.remove('locked');}
document.getElementById('closeLightbox').addEventListener('click',closeLightbox);
lightbox.addEventListener('click',e=>{if(e.target===lightbox)closeLightbox()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeLightbox()});

let leafTimer=null;
function makeLeaf(){
 if(document.hidden)return;
 const leaf=document.createElement('span');leaf.className='leaf';
 leaf.textContent=['🍁','🍂','❧'][Math.floor(Math.random()*3)];
 leaf.style.left=(Math.random()*100)+'vw';
 leaf.style.fontSize=(15+Math.random()*17)+'px';
 leaf.style.setProperty('--drift',((Math.random()*2-1)*100)+'px');
 leaf.style.animationDuration=(8+Math.random()*7)+'s';
 document.body.appendChild(leaf);
 setTimeout(()=>leaf.remove(),16000);
}
function startLeaves(){
 if(leafTimer)return;
 for(let i=0;i<7;i++)setTimeout(makeLeaf,i*220);
 leafTimer=setInterval(makeLeaf,950);
}
window.addEventListener('pagehide',()=>{if(leafTimer)clearInterval(leafTimer)});
