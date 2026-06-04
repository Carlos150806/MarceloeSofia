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
  nome1: 'Luiz',
  nome2: 'Maria',
  logo:  '♥ L&M',
};

/* ===========================================================
   🖼️ 3. FOTOS DOS PERFIS
=========================================================== */
const FOTOS_PERFIL = {
  foto1: 'https://i.ibb.co/0SMkVYk/Edit-Luiz.png',
  foto2: 'https://i.ibb.co/WvypH90G/Edit-Maria.png',
};

/* ===========================================================
   🎬 4. HERO (banner principal)
=========================================================== */
const HERO = {
  foto:      'https://i.ibb.co/67zYLwRP/413ec321-8f7b-481d-858b-6d96b6842f93.png',
  badge:     '♥ Original · Para sempre',
  titulo:    'Nossa História',
  descricao: 'A série mais linda e apaixonante do catálogo, que já renovou para infinitas temporadas. Dividindo os mesmos episódios cotidianos, as maiores risadas e a certeza de que a nossa melhor fase é sempre a que estamos vivendo agora.',
};

/* ===========================================================
   📅 5. CONTADOR DE DIAS
=========================================================== */
const CONTADOR = {
  dataInicio:  '2026-02-13',
  textoRodape: '14 de março · para sempre',
};

/* ===========================================================
   🎞️ 6. CARROSSEL DE MOMENTOS
=========================================================== */
const MOMENTOS = [
  {
    titulo: 'Nosso Primeiro Encontro',
    desc:   'Quem diria que aquele frio na barriga daria início à nossa melhor história? Entre um sorriso tímido no rosto e aquela foto impressa na cabine, a certeza logo no primeiro dia de que esse seria o nosso episódio favorito.',
    data:   'Episódio 01',
    dur:    'O início',
    img:    'https://i.ibb.co/60tVP9mz/Edit-Primeiro-Encontro-evento1.png',
    video:  '',
  },
  {
    titulo: 'O Começo de Nós',
    desc:   'O dia em que o nosso carinho ganhou um novo sentido. Entre esse registro bobo no espelho e o primeiro beijo, terminamos a noite segurando firmemente a mão um do outro em frente à igreja, com a certeza de que fomos abençoados desde o início.',
    data:   'Episódio 02',
    dur:    'Inesquecível',
    img:    'https://i.ibb.co/KctKp24b/Edit-Primeiro-Beijo.png',
    video:  '',
  },
  {
    titulo: 'Bosque Maia',
    desc:   'Nada supera a calmaria de uma tarde de sol ao seu lado. Entre passos lentos sob as árvores do Bosque Maia e uma pausa para dividir um sorvete, descobri que os momentos mais simples ganham uma cor mágica quando você está por perto.',
    data:   'Episódio 03',
    dur:    'Tarde perfeita',
    img:    'https://i.ibb.co/5XRgGS15/Edit-Comendo-Sorvete.png',
    video:  '',
  },
  {
    titulo: 'Parceiros de Treino (e de Vida)',
    desc:   'Quem diria que até a rotina de treinar ganharia um novo significado ao seu lado? Entre uma selfie descontraída mostrando o muque e um beijo roubado no meio do treino, é o aconchego desse abraço — o nosso favorito — que me dá forças e mostra que a nossa parceria vai muito além da academia.',
    data:   'Episódio 04',
    dur:    'Força & Amor',
    img:    'https://i.ibb.co/XxGpPgp9/Edit-Melhor-Foto.png',
    video:  '',
  },
  {
    titulo: 'Onde o Tempo Para',
    desc:   'O nosso cantinho escondido no mundo, onde o tempo parecia parar depois de cada passeio. Este capítulo é a prova de que, além de namorados, somos melhores amigos que adoram fazer careta, dar risada de tudo e terminar o dia com a certeza de que o nosso melhor lugar é sempre o abraço um do outro.',
    data:   'Episódio 05',
    dur:    'Só nosso',
    img:    'https://i.ibb.co/6RCfsmgG/Edit-Foto-Para-Ficar-De-Casal.png',
    video:  '',
  },
  {
    titulo: 'Feito à Mão',
    desc:   'Abrir as portas da minha casa e ver você fazendo parte da minha rotina é a melhor sensação do mundo. Seja inventando trends com massinhas para moldar o nosso amor ou dividindo o seu prato favorito de mãos dadas, passar esses momentos com você me faz ter certeza de que o meu lugar favorito no mundo é onde você estiver.',
    data:   'Episódio 06',
    dur:    'Em casa',
    img:    'https://i.ibb.co/hJNC47Yj/Edit-Trend-Casal.png',
    video:  '',
  },
];

/* ===========================================================
   📖 7. LINHA DO TEMPO
=========================================================== */
const TIMELINE = [
  {
    frase: 'Muito antes de imaginarmos o nosso futuro, o destino já rascunhava o primeiro capítulo. Bastou um único encontro e o flash de uma cabine de fotos para dar a largada na história mais bonita, real e apaixonante das nossas vidas.',
    img:   'https://i.ibb.co/v4sNNN9c/foto-Cabine.jpg',
  },
  {
    frase: 'A calmaria de encontrar o meu porto seguro em você. Entre o primeiro beijo e a paz de segurar a sua mão em frente ao altar, a certeza de que os nossos caminhos foram desenhados e abençoados para caminharem juntos.',
    img:   'https://i.ibb.co/6RLRhfWk/Edit-Missa-De-Cinzas.png',
  },
  {
    frase: 'A calmaria de uma tarde sob o céu aberto e as árvores do parque. Com você, descobri que os momentos mais simples ganham uma cor mágica e que a paz que eu tanto procurava estava no encaixe perfeito da sua mão na minha.',
    img:   'https://i.ibb.co/Xx0TLWc7/Edit-Primeira-Vez-De-Casal-Bosque.png',
  },
  {
    frase: 'Onde o mundo inteiro silencia e só o que importa é a gente. Encontrar em você o meu porto seguro, o meu sorriso mais sincero e a certeza de que cada detalhe da nossa rotina ganha um brilho único quando estamos assim, bem pertinho.',
    img:   'https://i.ibb.co/prZwwCQ9/Edit-Beijo.jpg',
  },
];

/* ===========================================================
   💬 8. MENSAGEM FINAL
=========================================================== */
const FINAL = {
  frase:   'Você é a minha',
  fraseEm: 'história favorita.',
  rodape:  'Luiz & Maria · Para sempre',
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
  setupPerfil(1, CASAL.nome2, FOTOS_PERFIL.foto2);

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
var nomes=[CASAL.nome1,CASAL.nome2], fotos=[FOTOS_PERFIL.foto1,FOTOS_PERFIL.foto2];

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