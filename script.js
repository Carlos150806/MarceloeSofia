/* ===========================================================
   🎨 1. CORES DO SITE
=========================================================== */
const CORES = {
  primaria:  '#e50914',
  fundo:     '#0a0a0a',
  card:      '#1a1a1a',
  textomudo: '#999999',
};

/* ===========================================================
   💑 2. NOMES DO CASAL
=========================================================== */
const CASAL = {
  nome1: 'Sofia',
  nome2: 'Marcelo',
  logo:  '♥ M&S',
};

/* ===========================================================
   🖼️ 3. FOTOS DOS PERFIS
=========================================================== */
const FOTOS_PERFIL = {
  foto1: 'https://i.ibb.co/YTW43kBS/Gemini-Generated-Image-lxltuqlxltuqlxlt.png',
};

/* ===========================================================
   🎬 4. HERO (banner principal)
=========================================================== */
const HERO = {
  foto:      'https://i.ibb.co/VYhJMrD7/Chat-GPT-Image-4-de-jun-de-2026-13-15-26.png',
  badge:     '♥ Original · Para sempre',
  titulo:    'Nossa História',
  descricao: 'A série mais linda e apaixonante do catálogo, que já renovou para infinitas temporadas. Dividindo os mesmos episódios cotidianos, as maiores risadas e a certeza de que a nossa melhor fase é sempre a que estamos vivendo agora.',
};

/* ===========================================================
   📅 5. CONTADOR DE DIAS
=========================================================== */
const CONTADOR = {
  dataInicio:  '2026-02-13',
  textoRodape: '13 de fevereiro · para sempre',
};

/* ===========================================================
   🎞️ 6. CARROSSEL DE MOMENTOS
=========================================================== */
const MOMENTOS = [
  {
    titulo: 'Nosso Primeiro Encontro',
    desc:   'Nossa primeira vez saindo juntos como um casal, lembro de cada detalhe daquele dia, desde o nervosismo que senti quando te esperava na frente do shopping, da sua cara de surpresa e vergonha quando te entreguei o buquê e da felicidade que senti por saber que estava com o amor da minha vida.',
    data:   'Episódio 01',
    dur:    'O início',
    img:    'https://i.ibb.co/MkYQdgzb/Chat-GPT-Image-4-de-jun-de-2026-13-10-27.png',
    video:  '',
  },
  {
    titulo: 'Primeira vez na sua casa',
    desc:   'A primeira vez que fui a sua casa foi numa véspera de Páscoa, eu fui muito bem tratado pela sua família e me senti automaticamente aceito pelos seus pais, você estava muito linda como sempre, foi um dias mais felizes da minha vida.',
    data:   'Episódio 02',
    dur:    'Inesquecível',
    img:    'https://i.ibb.co/DPfZfvB7/Chat-GPT-Image-4-de-jun-de-2026-13-15-26.png',
    video:  '',
  },
  {
    titulo: 'Encontro no parque',
    desc:   'Primeira vez que fomos a um parque juntos, eu me lembro de cada detalhe seu, desde o seu sorrisinho lindo até o seu vestido vermelho que usava, passamos umas duas horas sentados no banco do parque apenas aproveitando a natureza e curtindo a presença um do outro. Nesse dia eu senti uma paz tão grande e profunda ao seu lado, paz essa que me fez ter a completa certeza de que eu desejo passar os resto da minha vida ao seu lado.',
    data:   'Episódio 03',
    dur:    'Tarde perfeita',
    img:    'https://i.ibb.co/1GJZ6rS4/Chat-GPT-Image-4-de-jun-de-2026-13-12-47.png',
    video:  '',
  },
  {
    titulo: 'O primeiro wallpaper que você me fez',
    desc:   'Esse foi o primeiro wallpaper que você me fez, quando você me mandou eu me senti muito especial e muito grato por ter você na minha vida, pois assim sempre que eu abrisse o meu celular eu poderia te ver e lembrar mais um pouco o quanto eu te amo.',
    data:   'Episódio 04',
    dur:    'Força & Amor',
    img:    'https://i.ibb.co/DPSTjMqb/Chat-GPT-Image-4-de-jun-de-2026-13-18-06.png',
    video:  '',
  },
];

/* ===========================================================
   📖 7. LINHA DO TEMPO
=========================================================== */
const TIMELINE = [
  {
    frase: 'Os olhos pelos quais me apaixonei.',
    img:   'https://i.ibb.co/KJG8N0N/Chat-GPT-Image-6-de-jun-de-2026-01-04-40.png',
  },
  {
    frase: 'O rostinho no qual eu perco horas apenas admirando.',
    img:   'https://i.ibb.co/9kYvyxr6/Chat-GPT-Image-4-de-jun-de-2026-13-41-24.png',
  },
  {
    frase: 'A coisa que eu mais gosto de fazer quando estamos juntos, te amar.',
    img:   'https://i.ibb.co/rRVq9RdY/Chat-GPT-Image-6-de-jun-de-2026-01-05-21.png',
  },
  {
    frase: 'A gatinha mais bela de todas.',
    img:   'https://i.ibb.co/13Q7wVv/Chat-GPT-Image-6-de-jun-de-2026-01-04-53.png',
  },
];

/* ===========================================================
   💬 8. MENSAGEM FINAL
=========================================================== */
const FINAL = {
  frase:   'Você é a minha',
  fraseEm: 'história favorita.',
  rodape:  'Sofia & Marcelo · Para sempre',
  footer:  'Uma produção original · Com todo o meu amor',
};

/* ===========================================================
   🎵 9. MÚSICAS
=========================================================== */
const MUSICAS = [
  {
    nome: 'Nossa Música',
    url:  'girl in red - we fell in love in october - girl in red (youtube).mp3',
  },
];

const MUSICA_VOLUME = 0.4;

/* ===========================================================
   🛒 10. BOTÃO DE VENDA (opcional)
=========================================================== */
const CTA_VENDA = {
  url:   '',
  texto: '🎁 Quero o meu!',
};

// ============================================================
//  FIM DAS CONFIGURAÇÕES
// ============================================================


/* ═══ INIT ═══ */
function applyConfig(){
  document.documentElement.style.setProperty('--primary', CORES.primaria);
  document.documentElement.style.setProperty('--bg',      CORES.fundo);
  document.documentElement.style.setProperty('--card',    CORES.card);
  document.documentElement.style.setProperty('--muted',   CORES.textomudo);

  document.getElementById('page-title').textContent = CASAL.nome1+' & '+CASAL.nome2+' · Nossa História';
  document.getElementById('logo-profile').textContent = CASAL.logo;
  document.getElementById('logo-browse').textContent  = CASAL.logo;

  setupPerfil(0, CASAL.nome1, FOTOS_PERFIL.foto1);

  var hi = document.getElementById('hero-img');
  hi.src = HERO.foto; hi.alt = CASAL.nome1+' & '+CASAL.nome2;
  document.getElementById('hero-badge').textContent = HERO.badge;
  document.getElementById('hero-titulo').textContent = HERO.titulo;
  document.getElementById('hero-sub').innerHTML = CASAL.nome1+' <span style="color:var(--primary)">&</span> '+CASAL.nome2;
  document.getElementById('hero-desc').textContent = HERO.descricao;

  document.getElementById('counter-date-lbl').textContent = CONTADOR.textoRodape;
  updateCounter(); setInterval(updateCounter,60000);

  buildCarousel();
  buildTimeline();
  buildMusicPanel();

  document.getElementById('final-quote').innerHTML = FINAL.frase+'<br><em>'+FINAL.fraseEm+'</em>';
  document.getElementById('final-sub').textContent = FINAL.rodape;
  document.getElementById('footer-txt').textContent = FINAL.footer;

  if(CTA_VENDA.url){
    var cta = document.getElementById('cta-venda');
    var ctaA = document.getElementById('cta-link');
    cta.classList.add('vis'); ctaA.href = CTA_VENDA.url; ctaA.textContent = CTA_VENDA.texto;
  }

  if(!MUSICAS || MUSICAS.length === 0){
    document.getElementById('music-controls').style.display = 'none';
  }
}

function setupPerfil(idx, nome, url){
  var wrap = document.getElementById('pfp-'+idx);
  var ph   = document.getElementById('pfp-ph-'+idx);
  document.getElementById('pfp-n-'+idx).textContent = nome;
  if(url){
    var img = new Image();
    img.src = url; img.alt = nome;
    img.style.cssText='width:100%;height:100%;object-fit:cover;position:absolute;inset:0;transition:transform .5s ease';
    img.onerror = function(){ this.remove(); ph.textContent = nome[0]; };
    wrap.style.position='relative'; wrap.appendChild(img); ph.style.display='none';
    wrap.parentElement.addEventListener('mouseenter',function(){img.style.transform='scale(1.08)'});
    wrap.parentElement.addEventListener('mouseleave',function(){img.style.transform='scale(1)'});
  } else { ph.textContent = nome[0]; }
}

function updateCounter(){
  var start = new Date(CONTADOR.dataInicio), now = new Date();
  var diff = Math.max(0, Math.floor((now-start)/86400000));
  var el = document.getElementById('days-counter');
  if(el) el.textContent = diff.toLocaleString('pt-BR');
}

function buildCarousel(){
  var track = document.getElementById('carousel-main');
  MOMENTOS.forEach(function(m,i){
    var btn = document.createElement('button');
    btn.className='card'; btn.setAttribute('aria-label',m.titulo);
    btn.onclick=function(){openModal(i)};
    btn.innerHTML='<img src="'+m.img+'" alt="'+m.titulo+'" loading="lazy">'
      +'<div class="card-overlay"></div>'
      +'<div class="card-info"><div class="card-play-row"><div class="card-play-btn"><svg viewBox="0 0 24 24" width="12" height="12"><polygon points="5,3 19,12 5,21"/></svg></div><span class="card-dur">'+m.dur+'</span></div><div class="card-name">'+m.titulo+'</div></div>'
      +'<div class="card-badge">'+m.data+'</div>';
    track.appendChild(btn);
  });
}

function scrollCarousel(dir){
  document.getElementById('carousel-main').scrollBy({left:dir*340,behavior:'smooth'});
}

function buildTimeline(){
  var container = document.getElementById('timeline-items');
  TIMELINE.forEach(function(t){
    var item = document.createElement('div');
    item.className='timeline-item';
    item.innerHTML='<div class="timeline-dot"></div>'
      +'<div class="timeline-text"><p class="timeline-frase">'+t.frase+'</p></div>'
      +'<div class="timeline-img" onclick="openLightbox(\''+t.img+'\')"><img src="'+t.img+'" alt="" loading="lazy"></div>';
    container.appendChild(item);
  });
}

/* ═══ NAVEGAÇÃO ═══ */
var nomes=[CASAL.nome1], fotos=[FOTOS_PERFIL.foto1];

function enterProfile(idx){
  var pp=document.getElementById('profile-page');
  pp.style.opacity='0'; pp.style.transform='scale(1.04)';
  var wrap=document.getElementById('avatar-wrap'); wrap.innerHTML='';
  if(fotos[idx]){
    var img=new Image(); img.src=fotos[idx]; img.alt=nomes[idx];
    img.style.cssText='width:22px;height:22px;border-radius:4px;object-fit:cover;';
    img.onerror=function(){this.replaceWith(mkPh(idx))};
    wrap.appendChild(img);
  } else { wrap.appendChild(mkPh(idx)); }
  document.getElementById('avatar-name').textContent=nomes[idx];
  setTimeout(function(){
    pp.style.display='none';
    var bp=document.getElementById('browse-page');
    bp.style.display='block'; bp.style.opacity='0'; bp.style.transform='translateY(16px)';
    requestAnimationFrame(function(){requestAnimationFrame(function(){
      bp.style.transition='opacity .7s ease,transform .7s ease';
      bp.style.opacity='1'; bp.style.transform='translateY(0)';
    })});
  },380);
  spawnHearts();
  if(MUSICAS && MUSICAS.length > 0) selectSong(0);
}

function mkPh(idx){
  var s=document.createElement('span'); s.className='back-avatar-ph'; s.textContent=nomes[idx][0]; return s;
}

function goBack(){
  var bp=document.getElementById('browse-page'), pp=document.getElementById('profile-page');
  bp.style.transition='opacity .35s ease'; bp.style.opacity='0';
  stopMusic(); closeModal();
  setTimeout(function(){
    bp.style.display='none'; bp.style.opacity='1'; bp.style.transform='none'; bp.style.transition='';
    pp.style.opacity='0'; pp.style.transform='scale(.97)'; pp.style.display='flex';
    requestAnimationFrame(function(){requestAnimationFrame(function(){
      pp.style.transition='opacity .5s ease,transform .5s ease';
      pp.style.opacity='1'; pp.style.transform='scale(1)';
    })});
  },350);
}

window.addEventListener('scroll',function(){
  document.getElementById('header').classList.toggle('scrolled',window.scrollY>40);
});

/* ═══ MODAL ═══ */
var isPlaying=true;

function openModal(i){
  var m=MOMENTOS[i];
  var media=document.getElementById('modal-media');
  var oldImg=media.querySelector('img'), oldIframe=media.querySelector('iframe'), oldPh=media.querySelector('.modal-media-ph');
  if(oldImg) oldImg.remove(); if(oldIframe) oldIframe.remove(); if(oldPh) oldPh.remove();
  var ctrl=document.getElementById('modal-ctrl-bar'), grad=media.querySelector('.modal-grad');

  if(m.video){
    var iframe=document.createElement('iframe');
    iframe.src=m.video+'?autoplay=1&rel=0'; iframe.allow='autoplay; fullscreen';
    iframe.style.cssText='width:100%;height:100%;border:none;';
    media.insertBefore(iframe,grad); ctrl.style.display='none'; grad.style.display='none';
  } else if(m.img){
    var img=document.createElement('img'); img.src=m.img; img.alt=m.titulo;
    img.style.cssText='width:100%;height:100%;object-fit:cover;';
    media.insertBefore(img,grad); ctrl.style.display='block'; grad.style.display='block';
  } else {
    var ph=document.createElement('div'); ph.className='modal-media-ph';
    ph.innerHTML='<span style="font-size:2rem">♥</span><span>'+m.titulo+'</span>';
    media.insertBefore(ph,grad); ctrl.style.display='none';
  }

  document.getElementById('modal-title').textContent=m.titulo;
  document.getElementById('modal-desc').textContent=m.desc;
  document.getElementById('modal-date').textContent=m.data;
  document.getElementById('modal-dur').textContent=m.dur;
  document.getElementById('modal').classList.add('open');
  document.body.style.overflow='hidden';
  isPlaying=true; updatePlayBtn();
}

function handleModalClick(e){ if(e.target===document.getElementById('modal')) closeModal(); }

function closeModal(){
  document.getElementById('modal').classList.remove('open');
  document.body.style.overflow='';
  var iframe=document.querySelector('#modal-media iframe');
  if(iframe){ var src=iframe.src; iframe.src=''; iframe.src=src; }
}

function togglePlay(){ isPlaying=!isPlaying; updatePlayBtn(); }
function updatePlayBtn(){
  document.getElementById('play-icon').textContent=isPlaying?'⏸':'▶';
  document.getElementById('play-text').textContent=isPlaying?'Pausar':'Reproduzir';
}

/* ═══ MÚSICA ═══ */
var musicPlaying = false;
var currentSongIdx = -1;
var panelOpen = false;

function buildMusicPanel(){
  var list = document.getElementById('music-song-list');
  list.innerHTML = '';
  MUSICAS.forEach(function(m, i){
    var btn = document.createElement('button');
    btn.className = 'music-song-btn';
    btn.id = 'song-btn-' + i;
    btn.innerHTML = '<span class="song-dot"></span><span>' + m.nome + '</span>';
    btn.onclick = function(){ selectSong(i); };
    list.appendChild(btn);
  });
  document.getElementById('vol-slider').value = MUSICA_VOLUME * 100;
  document.getElementById('bg-music').volume = MUSICA_VOLUME;
}

function toggleMusicPanel(){
  panelOpen = !panelOpen;
  var panel = document.getElementById('music-panel');
  var btn = document.getElementById('music-toggle-btn');
  if(panelOpen){
    panel.classList.add('open');
    btn.classList.add('on');
  } else {
    panel.classList.remove('open');
    btn.classList.remove('on');
  }
}

function selectSong(i){
  var audio = document.getElementById('bg-music');
  document.querySelectorAll('.music-song-btn').forEach(function(b){ b.classList.remove('active'); });
  document.getElementById('song-btn-' + i).classList.add('active');
  audio.src = MUSICAS[i].url;
  audio.volume = document.getElementById('vol-slider').value / 100;
  audio.play().catch(function(){});
  currentSongIdx = i;
  musicPlaying = true;
  updatePPBtn();
}

function toggleMusicPlay(){
  if(currentSongIdx < 0){
    selectSong(0);
    return;
  }
  var audio = document.getElementById('bg-music');
  if(musicPlaying){
    audio.pause();
    musicPlaying = false;
  } else {
    audio.play().catch(function(){});
    musicPlaying = true;
  }
  updatePPBtn();
}

function updatePPBtn(){
  document.getElementById('music-pp-btn').textContent = musicPlaying ? '⏸' : '▶';
}

function setVolume(v){
  document.getElementById('bg-music').volume = v / 100;
}

function stopMusic(){
  var audio = document.getElementById('bg-music');
  audio.pause();
  musicPlaying = false;
  updatePPBtn();
}

document.addEventListener('click', function(e){
  if(!e.target.closest('#music-controls')) {
    if(panelOpen){
      panelOpen = false;
      document.getElementById('music-panel').classList.remove('open');
      document.getElementById('music-toggle-btn').classList.remove('on');
    }
  }
});

/* ═══ LIGHTBOX ═══ */
function openLightbox(src){ document.getElementById('lightbox-img').src=src; document.getElementById('lightbox').classList.add('open'); document.body.style.overflow='hidden'; }
function closeLightbox(){ document.getElementById('lightbox').classList.remove('open'); document.body.style.overflow=''; }

/* ═══ CORAÇÕES ═══ */
function spawnHearts(){
  var c=document.getElementById('hearts'), n=0;
  var iv=setInterval(function(){
    if(n++>14) return clearInterval(iv);
    var h=document.createElement('div'); h.className='heart-particle'; h.textContent='♥';
    h.style.left=Math.random()*100+'vw'; h.style.animationDuration=(3+Math.random()*4)+'s';
    h.style.fontSize=(.8+Math.random()*1.5)+'rem'; h.style.color=Math.random()>.5?CORES.primaria:'#ff6b8a';
    c.appendChild(h); setTimeout(function(){h.remove()},7000);
  },500);
}

document.addEventListener('click',function(e){
  if(e.target.closest('button')||e.target.closest('.modal')||e.target.closest('.lightbox')||e.target.closest('#music-controls')) return;
  for(var i=0;i<6;i++){
    var h=document.createElement('div'), angle=(i/6)*360, dist=40+Math.random()*40;
    h.style.cssText='position:fixed;left:'+e.clientX+'px;top:'+e.clientY+'px;pointer-events:none;z-index:300;font-size:'+(0.8+Math.random())+'rem;color:'+(Math.random()>.5?CORES.primaria:'#ff6b8a')+';transform:translate(-50%,-50%);animation:burstHeart .8s ease forwards;--tx:'+Math.cos(angle*Math.PI/180)*dist+'px;--ty:'+Math.sin(angle*Math.PI/180)*dist+'px;';
    h.textContent='♥'; document.body.appendChild(h); setTimeout(function(){h.remove()},800);
  }
});

document.addEventListener('keydown',function(e){ if(e.key==='Escape'){closeModal();closeLightbox();} });

applyConfig();