/* 은파팰리스호텔 웨딩홀 공통 메뉴 (menu.js)
   - 이 파일 하나에 메뉴 디자인(CSS)과 동작이 모두 들어 있습니다.
   - 메뉴 항목·링크·안내글은 아래 CFG 부분만 고치면 사이트 전체에 반영됩니다.
   - 로고: ysgon27-debug/eunpa 저장소의 logo.png */
(function(){
  if(window.__epMenuLoaded)return;window.__epMenuLoaded=true;
  var CSS=".ep-nav,.ep-drawer{\n  --ep-black:#0a0a0a;--ep-white:#fff;--ep-grey:#6b6b6b;--ep-line:rgba(10,10,10,.12);\n  font-family:\"Pretendard Variable\",Pretendard,Inter,\"Noto Sans KR\",-apple-system,BlinkMacSystemFont,\"Apple SD Gothic Neo\",\"Malgun Gothic\",sans-serif;\n  -webkit-font-smoothing:antialiased;box-sizing:border-box;\n}\n.ep-nav *,.ep-drawer *{box-sizing:border-box}\n.ep-nav a,.ep-drawer a{color:inherit;text-decoration:none}\n.ep-nav button,.ep-drawer button{font:inherit;color:inherit;background:none;border:0;padding:0;cursor:pointer}\n.ep-nav :focus-visible,.ep-drawer :focus-visible{outline:1px solid currentColor;outline-offset:4px}\n\n.ep-nav{position:fixed;top:0;left:0;right:0;z-index:9990;color:#fff;transition:background .45s ease,color .45s ease,box-shadow .45s ease}\n.ep-nav::before{content:\"\";position:absolute;left:0;right:0;top:0;height:190px;z-index:-1;pointer-events:none;background:linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,0));transition:opacity .45s ease}\n.ep-nav.ep-solid{background:var(--ep-white);color:var(--ep-black);box-shadow:0 1px 0 var(--ep-line)}\n.ep-nav.ep-solid::before{opacity:0}\n\n.ep-bar{display:grid;grid-template-columns:auto 1fr auto;align-items:center;height:128px;padding:0 44px;transition:height .45s ease}\n.ep-nav.ep-scrolled .ep-bar{height:72px}\n.ep-side{display:flex;align-items:center;justify-content:flex-end;gap:36px;height:100%;padding:0 44px 0 40px}\n.ep-util{display:flex;align-items:center;gap:24px}\n.ep-insta{display:flex;align-items:center;justify-content:center;width:32px;height:32px;transition:opacity .3s ease}\n.ep-insta:hover{opacity:.6}\n.ep-insta svg{width:23px;height:23px;display:block}\n.ep-tel{font-size:13px;font-weight:500;letter-spacing:.14em;white-space:nowrap}\n.ep-item{position:relative;height:100%;display:flex;align-items:center}\n.ep-link{position:relative;padding:8px 0;font-size:15px;font-weight:500;letter-spacing:.02em;white-space:nowrap}\n.ep-link::after{content:\"\";position:absolute;left:50%;right:50%;bottom:0;height:1px;background:currentColor;transition:left .35s ease,right .35s ease}\n.ep-item:hover .ep-link::after,.ep-item.ep-active .ep-link::after{left:0;right:0}\n.ep-cta{border:1px solid #fff;padding:11px 22px;font-size:13px;font-weight:600;letter-spacing:.08em;white-space:nowrap;transition:background .3s ease,border-color .3s ease,color .3s ease}\n.ep-cta:hover{background:#fff;color:var(--ep-black)}\n.ep-nav.ep-solid .ep-cta{background:var(--ep-black);border-color:var(--ep-black);color:#fff}\n.ep-nav.ep-solid .ep-cta:hover{background:transparent;color:var(--ep-black)}\n\n.ep-logo{display:flex;align-items:center;justify-content:flex-start}\n.ep-logo img{display:block;width:auto}\n.ep-logo img,.ep-logo-mark{filter:brightness(0) invert(1);transition:filter .45s ease}\n.ep-nav.ep-solid .ep-logo img,.ep-nav.ep-solid .ep-logo-mark{filter:none}\n.ep-logo-full{height:78px}\n.ep-logo-mark{height:34px;aspect-ratio:207/156;background-repeat:no-repeat;background-size:248.31% auto;background-position:49.84% 0;display:none!important}\n.ep-nav.ep-scrolled .ep-logo-full{display:none}\n.ep-nav.ep-scrolled .ep-logo-mark{display:block!important;animation:ep-fade .5s ease both}\n.ep-logo-text{font-size:20px;font-weight:600;letter-spacing:.3em;padding-left:.3em;white-space:nowrap}\n@keyframes ep-fade{from{opacity:0}to{opacity:1}}\n\n.ep-panel{display:grid;grid-template-rows:0fr;background:var(--ep-white);color:var(--ep-black);transition:grid-template-rows .5s cubic-bezier(.2,.7,.2,1)}\n.ep-nav.ep-open .ep-panel{grid-template-rows:1fr;border-top:1px solid var(--ep-line)}\n.ep-panel-in{overflow:hidden;min-height:0}\n.ep-pane{display:none;grid-template-columns:minmax(240px,1fr) 2.2fr;gap:64px;max-width:1180px;margin:0 auto;padding:46px 44px 56px}\n.ep-pane.ep-on{display:grid;animation:ep-rise .5s ease both}\n@keyframes ep-rise{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}\n.ep-pane-en{font-size:11px;font-weight:500;letter-spacing:.28em;text-transform:uppercase;color:var(--ep-grey)}\n.ep-pane-ko{margin-top:14px;font-size:34px;font-weight:600;letter-spacing:-.02em;line-height:1.15}\n.ep-pane-desc{margin:14px 0 0;font-size:14px;line-height:1.75;color:var(--ep-grey)}\n.ep-pane-all{display:inline-block;margin-top:24px;padding-bottom:4px;font-size:13px;font-weight:500;letter-spacing:.04em;border-bottom:1px solid currentColor}\n.ep-subs{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(3,1fr);gap:0 36px;align-content:start}\n.ep-subs a{display:flex;justify-content:space-between;align-items:baseline;gap:12px;padding:17px 0;border-bottom:1px solid var(--ep-line);font-size:16px;font-weight:500;letter-spacing:-.005em;transition:border-color .3s ease,padding .3s ease}\n.ep-subs a:hover{border-color:var(--ep-black);padding-left:8px}\n.ep-note{align-self:center;max-width:34em}\n.ep-pane-note{margin:0;font-size:21px;font-weight:400;line-height:1.65;letter-spacing:-.015em}\n.ep-subs small{font-size:11px;font-weight:500;letter-spacing:.12em;color:var(--ep-grey);white-space:nowrap}\n\n.ep-burger,.ep-mcta,.ep-mright{display:none}\n@media (max-width:1320px){.ep-tel{display:none}}\n.ep-drawer{display:none}\n\n@media (max-width:1100px),(hover:none) and (pointer:coarse){\n  .ep-side,.ep-util,.ep-panel{display:none}\n  .ep-bar{height:92px;padding:0 18px;grid-template-columns:1fr auto 1fr}\n  .ep-nav.ep-scrolled .ep-bar{height:66px}\n  .ep-logo{order:2;justify-content:center}\n  .ep-mright{display:flex;order:3;justify-self:end;align-items:center;gap:4px}\n  .ep-mright .ep-insta{width:40px;height:44px}\n  .ep-mright .ep-insta svg{width:22px;height:22px}\n  .ep-logo-full{height:64px}\n  .ep-logo-mark{height:32px}\n  .ep-logo-text{font-size:15px}\n  .ep-mcta{display:inline-flex;order:1;justify-self:start;align-items:center;min-height:44px;font-size:13px;font-weight:600;letter-spacing:.04em}\n  .ep-mcta span{border-bottom:1px solid currentColor;padding-bottom:3px}\n  .ep-burger{display:flex;order:3;justify-self:end;flex-direction:column;justify-content:center;align-items:flex-end;gap:6px;width:44px;height:44px}\n  .ep-burger i{display:block;height:1px;width:24px;background:currentColor;transition:transform .4s ease,opacity .3s ease}\n  .ep-nav.ep-drawer-open .ep-burger i:nth-child(1){transform:translateY(7px) rotate(45deg)}\n  .ep-nav.ep-drawer-open .ep-burger i:nth-child(2){opacity:0}\n  .ep-nav.ep-drawer-open .ep-burger i:nth-child(3){transform:translateY(-7px) rotate(-45deg)}\n  .ep-nav.ep-drawer-open{background:transparent;color:#fff;box-shadow:none}\n  .ep-nav.ep-drawer-open::before{opacity:0}\n  .ep-nav.ep-drawer-open .ep-logo img,.ep-nav.ep-drawer-open .ep-logo-mark{filter:brightness(0) invert(1)}\n\n  .ep-drawer{display:flex;flex-direction:column;position:fixed;top:0;left:0;right:0;bottom:0;z-index:9980;background:var(--ep-black);color:#fff;padding:112px 26px 34px;overflow-y:auto;opacity:0;visibility:hidden;transition:opacity .45s ease,visibility .45s ease}\n  .ep-drawer.ep-show{opacity:1;visibility:visible}\n  .ep-m-list{list-style:none;margin:0;padding:0}\n  .ep-m-list>li{border-bottom:1px solid rgba(255,255,255,.16);opacity:0;transform:translateY(10px);transition:opacity .5s ease,transform .5s ease}\n  .ep-drawer.ep-show .ep-m-list>li{opacity:1;transform:none}\n  .ep-m-row{display:flex;align-items:center}\n  .ep-m-row>a{flex:1;display:flex;align-items:baseline;gap:12px;padding:18px 0;font-size:21px;font-weight:600;letter-spacing:-.01em}\n  .ep-m-row>a em{font-style:normal;font-size:10px;font-weight:500;letter-spacing:.24em;text-transform:uppercase;color:rgba(255,255,255,.55)}\n  .ep-m-tog{position:relative;width:44px;height:44px;flex:none}\n  .ep-m-tog::before,.ep-m-tog::after{content:\"\";position:absolute;left:50%;top:50%;width:14px;height:1px;margin-left:-7px;background:currentColor;transition:transform .35s ease}\n  .ep-m-tog::after{transform:rotate(90deg)}\n  .ep-exp .ep-m-tog::after{transform:rotate(0)}\n  .ep-m-sub{display:grid;grid-template-rows:0fr;transition:grid-template-rows .4s ease}\n  .ep-exp .ep-m-sub{grid-template-rows:1fr}\n  .ep-m-sub ul{list-style:none;margin:0;padding:0;overflow:hidden;min-height:0}\n  .ep-m-sub li:last-child{padding-bottom:16px}\n  .ep-m-sub a{display:block;padding:10px 0 10px 2px;font-size:15px;color:rgba(255,255,255,.78)}\n  .ep-m-foot{margin-top:auto;padding-top:34px;display:flex;flex-direction:column;gap:20px}\n  .ep-m-cta{display:block;text-align:center;background:#fff;color:var(--ep-black)!important;padding:17px;font-size:14px;font-weight:600;letter-spacing:.1em}\n  .ep-m-meta{display:flex;justify-content:space-between;align-items:baseline;font-size:13px;font-weight:500;letter-spacing:.12em}\n  .ep-m-meta a:last-child{color:rgba(255,255,255,.6)}\n  html.ep-lock,html.ep-lock body{overflow:hidden}\n}\n@media (prefers-reduced-motion:reduce){\n  .ep-nav,.ep-nav *,.ep-drawer,.ep-drawer *{transition:none!important;animation:none!important}\n}";
  function init(){
    if(document.getElementById('ep-nav'))return;
    var st=document.createElement('style');st.id='ep-menu-style';st.textContent=CSS;document.head.appendChild(st);
    var B='';  /* 같은 사이트 안에서 이동하므로 주소 앞부분은 비워 둠 */
    var CFG={
      home:'/',
      tel:'063-461-7000',
      cta:{ko:'상담신청',href:B+'/reservations'},
      insta:'https://www.instagram.com/eunpa_palacewedding/',
      /* 로고는 검정 파일 하나만 사용. 히어로 위에서는 코드가 흰색으로 바꾸고,
         스크롤 후에는 같은 파일에서 EP 심볼 부분만 잘라 보여 줍니다. */
      logo:'https://cdn.jsdelivr.net/gh/ysgon27-debug/eunpa@main/logo.png',
      left:[
        {ko:'은파팰리스',en:'About',href:B+'/eunpapalace',desc:'은파호수 곁에 자리한 군산의 호텔 웨딩홀, 은파팰리스를 소개합니다.',sub:[
          {ko:'브랜드스토리',href:B+'/brandstory'},
          {ko:'오시는길',href:B+'/location'}]},
        {ko:'웨딩홀',en:'Wedding Hall',href:B+'/weddinghall',desc:'세 곳의 예식홀과 신부대기실, 부대시설을 둘러보세요.',sub:[
          {ko:'라끄베르',href:B+'/laquebert'},
          {ko:'벨라지오',href:B+'/bellagio'},
          {ko:'컨벤션홀',href:B+'/convention'},
          {ko:'신부대기실',href:B+'/brideroom'},
          {ko:'부대시설',href:B+'/facilities'}]},
        {ko:'연회장',en:'Banquet',href:B+'/banquetHall',desc:'예식을 마친 뒤 하객을 모시는 연회 공간을 안내합니다.'}
      ],
      right:[
        {ko:'파트너',en:'Partners',href:B+'/partners',desc:'은파팰리스와 함께하는 웨딩 파트너입니다.',sub:[
          {ko:'웨딩스퀘어',href:B+'/weddingsquare'},
          {ko:'청담스토리',href:B+'/chungdam'},
          {ko:'딥인투스냅',href:'https://www.instagram.com/deepinto_studio/',ext:1},
          {ko:'여밈선',href:'https://www.instagram.com/ymshanbok/',ext:1}]},
        {ko:'갤러리',en:'Gallery',href:B+'/gallery',desc:'은파팰리스의 공간과 예식 사진을 모았습니다.'},
        {ko:'EVENT',en:'',title:'이벤트',href:B+'/event',desc:'지금 진행 중인 이벤트와 혜택을 확인하세요.'}
      ]
    };

    if(!document.getElementById('ep-fonts')){
      var f=document.createElement('link');f.id='ep-fonts';f.rel='stylesheet';
      f.href='https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css';
      document.head.appendChild(f);
    }

    var all=CFG.left.concat(CFG.right);
    function ext(s){return s.ext?' target="_blank" rel="noopener"':'';}
    function item(m){
      var i=all.indexOf(m), has=m.sub&&m.sub.length;
      return '<div class="ep-item" data-k="'+i+'"><a class="ep-link" href="'+m.href+'" aria-haspopup="true" aria-expanded="false">'+m.ko+'</a></div>';
    }
    function pane(m,i){
      var has=m.sub&&m.sub.length, head='<div class="ep-pane-en">'+(m.en||m.ko)+'</div><div class="ep-pane-ko">'+(m.title||m.ko)+'</div>';
      if(!has){
        return '<div class="ep-pane" data-p="'+i+'"><div>'+head+'</div>'+
          '<div class="ep-note"><p class="ep-pane-note">'+m.desc+'</p>'+
          '<a class="ep-pane-all" href="'+m.href+'">'+(m.title||m.ko)+' 바로가기 →</a></div></div>';
      }
      return '<div class="ep-pane" data-p="'+i+'"><div>'+head+
        '<p class="ep-pane-desc">'+m.desc+'</p>'+
        '<a class="ep-pane-all" href="'+m.href+'">전체 보기 →</a></div>'+
        '<ul class="ep-subs">'+m.sub.map(function(s){
          return '<li><a href="'+s.href+'"'+ext(s)+'>'+s.ko+(s.ext?'<small>INSTAGRAM ↗</small>':'')+'</a></li>';
        }).join('')+'</ul></div>';
    }
    function mrow(m,i){
      var has=m.sub&&m.sub.length;
      return '<li style="transition-delay:'+(0.08+i*0.05)+'s"><div class="ep-m-row"><a href="'+m.href+'">'+m.ko+(m.en?'<em>'+m.en+'</em>':'')+'</a>'+
        (has?'<button class="ep-m-tog" type="button" aria-expanded="false" aria-label="'+m.ko+' 하위 메뉴"></button>':'')+'</div>'+
        (has?'<div class="ep-m-sub"><ul>'+m.sub.map(function(s){return '<li><a href="'+s.href+'"'+ext(s)+'>'+s.ko+(s.ext?' ↗':'')+'</a></li>';}).join('')+'</ul></div>':'')+'</li>';
    }
    var logoSrc=CFG.logo;
    var logo=logoSrc
      ? '<img class="ep-logo-full" src="'+logoSrc+'" alt="은파팰리스호텔 웨딩&amp;컨벤션"><span class="ep-logo-mark" style="background-image:url(\''+logoSrc+'\')"></span>'
      : '<span class="ep-logo-text">EUNPA PALACE</span>';
    var telHref='tel:'+CFG.tel.replace(/[^0-9]/g,'');

    var nav=document.createElement('header');
    nav.className='ep-nav';nav.id='ep-nav';
    nav.innerHTML='<div class="ep-bar">'+
      '<a class="ep-logo" href="'+CFG.home+'" aria-label="은파팰리스호텔 웨딩홀 홈">'+logo+'</a>'+
      '<nav class="ep-side" aria-label="주 메뉴">'+all.map(item).join('')+'</nav>'+
      '<div class="ep-util"><a class="ep-tel" href="'+telHref+'">T. '+CFG.tel+'</a><a class="ep-insta" href="'+CFG.insta+'" target="_blank" rel="noopener" aria-label="은파팰리스 인스타그램">'+
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none"/></svg></a>'+
      '<a class="ep-cta" href="'+CFG.cta.href+'">'+CFG.cta.ko+'</a></div>'+
      '<a class="ep-mcta" href="'+CFG.cta.href+'"><span>'+CFG.cta.ko+'</span></a>'+
      '<div class="ep-mright"><a class="ep-insta" href="'+CFG.insta+'" target="_blank" rel="noopener" aria-label="은파팰리스 인스타그램">'+
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none"/></svg></a>'+
      '<button class="ep-burger" type="button" aria-label="메뉴 열기" aria-expanded="false"><i></i><i></i><i></i></button></div>'+
      '</div><div class="ep-panel"><div class="ep-panel-in">'+all.map(pane).join('')+'</div></div>';

    var drawer=document.createElement('div');
    drawer.className='ep-drawer';drawer.id='ep-drawer';
    drawer.innerHTML='<ul class="ep-m-list">'+all.map(mrow).join('')+'</ul>'+
      '<div class="ep-m-foot"><a class="ep-m-cta" href="'+CFG.cta.href+'">'+CFG.cta.ko+'</a>'+
      '<div class="ep-m-meta"><a href="'+telHref+'">T. '+CFG.tel+'</a><a href="'+CFG.insta+'" target="_blank" rel="noopener">INSTAGRAM ↗</a></div></div>';

    document.body.appendChild(drawer);
    document.body.appendChild(nav);

    var openKey=null, timer=null;
    /* 어두운 히어로가 없는 페이지: 위젯에 <div data-ep-menu="solid"></div> 를 넣으면 처음부터 흰 바로 표시 */
    var forceSolid=!!document.querySelector('[data-ep-menu="solid"]');
    var items=nav.querySelectorAll('.ep-item'), panes=nav.querySelectorAll('.ep-pane');
    function paint(){
      var sc=(window.pageYOffset||document.documentElement.scrollTop)>30;
      nav.classList.toggle('ep-scrolled',sc);
      nav.classList.toggle('ep-solid',sc||openKey!==null||forceSolid);
      nav.classList.toggle('ep-open',openKey!==null);
    }
    function setOpen(k){
      clearTimeout(timer);
      openKey=(k===''||k==null)?null:k;
      for(var i=0;i<items.length;i++){
        var on=openKey!==null&&items[i].getAttribute('data-k')===openKey;
        items[i].classList.toggle('ep-active',on);
        var a=items[i].querySelector('[aria-haspopup]');
        if(a)a.setAttribute('aria-expanded',on?'true':'false');
      }
      for(var j=0;j<panes.length;j++)panes[j].classList.toggle('ep-on',panes[j].getAttribute('data-p')===openKey);
      paint();
    }
    for(var i=0;i<items.length;i++){
      (function(el){
        var k=el.getAttribute('data-k');
        el.addEventListener('mouseenter',function(){setOpen(k);});
        el.addEventListener('focusin',function(){setOpen(k);});
      })(items[i]);
    }
    nav.addEventListener('mouseenter',function(){clearTimeout(timer);});
    nav.addEventListener('mouseleave',function(){timer=setTimeout(function(){setOpen(null);},160);});
    nav.addEventListener('focusout',function(e){if(!nav.contains(e.relatedTarget))setOpen(null);});

    var burger=nav.querySelector('.ep-burger');
    function setDrawer(on){
      drawer.classList.toggle('ep-show',on);
      nav.classList.toggle('ep-drawer-open',on);
      document.documentElement.classList.toggle('ep-lock',on);
      burger.setAttribute('aria-expanded',on?'true':'false');
      burger.setAttribute('aria-label',on?'메뉴 닫기':'메뉴 열기');
    }
    burger.addEventListener('click',function(){setDrawer(!drawer.classList.contains('ep-show'));});
    var togs=drawer.querySelectorAll('.ep-m-tog');
    for(var t=0;t<togs.length;t++){
      togs[t].addEventListener('click',function(){
        var li=this.parentNode.parentNode, on=!li.classList.contains('ep-exp');
        li.classList.toggle('ep-exp',on);
        this.setAttribute('aria-expanded',on?'true':'false');
      });
    }
    document.addEventListener('keydown',function(e){if(e.key==='Escape'){setOpen(null);setDrawer(false);}});
    window.addEventListener('scroll',paint,{passive:true});
    window.addEventListener('resize',function(){
      if(window.getComputedStyle(burger).display==='none'&&drawer.classList.contains('ep-show'))setDrawer(false);
    });
    paint();
  }
  if(document.body)init();else document.addEventListener('DOMContentLoaded',init);
})();
