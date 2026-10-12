(function(){if(window.__am)return;window.__am=1;
var $=function(s,r){return[].slice.call((r||document).querySelectorAll(s))};
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');if(e.target.querySelector('[data-pct]'))cnt(e.target);io.unobserve(e.target)}})},{threshold:.12});
function cnt(r){[].forEach.call(r.querySelectorAll('[data-pct]'),function(el,i){var to=+el.dataset.pct,t0=performance.now()+i*110;(function f(n){var k=Math.max(0,Math.min(1,(n-t0)/1300));el.textContent=Math.round(to*(1-Math.pow(1-k,3)));if(k<1)requestAnimationFrame(f)})(performance.now())})}
function reveal(){$('[data-reveal]:not(.in)').forEach(function(e){io.observe(e)})}
function p2(x){return(x<10?'0':'')+x}
function cd(){$('[data-countdown]').forEach(function(el){var end=Date.parse(el.dataset.end),now=Date.now();if(!(end>now)){var d=new Date();d.setHours(23,59,59,999);end=d.getTime()}
var s=Math.max(0,Math.floor((end-now)/1000)),v=[Math.floor(s/86400),Math.floor(s%86400/3600),Math.floor(s%3600/60),s%60];
el.innerHTML=v.map(function(x,i){return'<b>'+p2(x)+'</b>'+(i<3?'<i>:</i>':'')}).join('')})}
document.addEventListener('click',function(e){var c=e.target.closest('[data-copy]');if(!c)return;try{navigator.clipboard.writeText(c.dataset.copy)}catch(x){}var o=c.textContent;c.textContent='Copied ✓';setTimeout(function(){c.textContent=o},1600)});
var ct,demo=0;
function showCart(total,count){$('[data-am-count]').forEach(function(e){e.textContent=count;e.style.display=count?'grid':'none'});
var ex=$('[data-am-proof]')[0],th=Number(ex&&ex.dataset.free||5000);if(!ct){ct=document.createElement('div');ct.className='am-ct';document.body.appendChild(ct)}
var rem=Math.max(0,th-total),pct=Math.min(100,total/th*100);
ct.innerHTML='<b>✓ Added to cart</b> · <a href="/cart">View cart</a><div style="margin-top:6px">'+(rem?'Add <b>Rs '+Math.round(rem).toLocaleString()+'</b> more for <b>FREE delivery</b> 🚚':'🎉 You unlocked <b>FREE delivery</b>!')+'</div><div class="am-bar"><u></u></div>';
ct.classList.add('on');setTimeout(function(){ct.querySelector('u').style.width=pct+'%'},60);clearTimeout(ct._t);ct._t=setTimeout(function(){ct.classList.remove('on')},5200)}
document.addEventListener('submit',function(e){var f=e.target.closest('[data-am-add]');if(!f)return;e.preventDefault();
if(!window.Shopify){var q=Number((f.querySelector('[name=quantity]')||{}).value||1);demo+=Number(f.dataset.price||0)*q;showCart(demo,Math.max(1,Math.round(demo/2000)));return}
fetch('/cart/add.js',{method:'POST',body:new FormData(f),headers:{Accept:'application/json'}}).then(function(r){if(!r.ok)throw 0;return r.json()}).then(function(){return fetch('/cart.js')}).then(function(r){return r.json()}).then(function(c){showCart(c.total_price/100,c.item_count)}).catch(function(){f.submit()})});
function proof(){var el=$('[data-am-proof]')[0];if(!el)return;var L=(el.dataset.list||'').split(/\n|;/).filter(Boolean).map(function(x){return x.split('|')});if(!L.length)return;
var t=document.createElement('div');t.className='am-toast';document.body.appendChild(t);var i=0;
function go(){var a=L[i++%L.length],m=2+Math.floor(Math.random()*40);t.innerHTML='<i>🛍️</i><div><b>'+a[0]+'</b> from '+a[1]+'<br>bought <b>'+a[2]+'</b> · '+m+' min ago</div>';t.classList.add('on');setTimeout(function(){t.classList.remove('on')},5000)}
setTimeout(function(){go();setInterval(go,16000)},6000)}
var sb=$('.am-sticky')[0];function sc(){if(!sb)return;var h=$('.ps')[0],on=h?h.getBoundingClientRect().bottom<innerHeight*.6:scrollY>innerHeight*.8;sb.classList.toggle('on',on);document.documentElement.style.setProperty('--sb',on?'74px':'0px')}
addEventListener('scroll',sc,{passive:true});
function boot(){reveal();cd();proof();sc()}
setInterval(cd,1000);document.addEventListener('shopify:section:load',reveal);
if(document.readyState!=='loading')boot();else document.addEventListener('DOMContentLoaded',boot);

$('[data-gal]').forEach(function(g){var sl=$('.pdp-slide',g),th=$('.pdp-th',g);th.forEach(function(t,i){t.addEventListener('click',function(){sl.forEach(function(s,k){s.classList.toggle('on',k===i)});th.forEach(function(x,k){x.classList.toggle('on',k===i)})})});
var m=g.querySelector('.pdp-main');m.addEventListener('pointermove',function(e){var r=m.getBoundingClientRect();m.style.setProperty('--zx',((e.clientX-r.left)/r.width*100)+'%');m.style.setProperty('--zy',((e.clientY-r.top)/r.height*100)+'%')})});
document.addEventListener('click',function(e){var b=e.target.closest('[data-qty] button');if(b){var i=b.parentNode.querySelector('input');i.value=Math.max(1,Number(i.value)+Number(b.dataset.d));return}
var y=e.target.closest('[data-vid-yt]');if(y){var f=document.createElement('iframe');f.src=y.dataset.src;f.allow='autoplay;fullscreen';f.allowFullscreen=true;f.style.cssText='position:absolute;inset:0;width:100%;height:100%;border:0';y.replaceWith(f);return}
var s=e.target.closest('[data-snd]');if(s){var v=s.parentNode.querySelector('video');v.muted=!v.muted;v.currentTime=0;v.play();s.textContent=v.muted?'🔊 Sound on':'🔇 Mute';return}
var a=e.target.closest('[data-pdp-bar-add]');if(a){var f2=$('[data-pdp-form]')[0];f2.requestSubmit?f2.requestSubmit():f2.submit()}});
document.addEventListener('change',function(e){var r=e.target.closest('.pdp-pill input');if(!r)return;$('[data-pdp-price]').forEach(function(x){x.textContent=r.dataset.price});$('[data-pdp-was]').forEach(function(x){x.textContent=r.dataset.was||''})});
function eta(){$('[data-eta]').forEach(function(el){var f=function(n){var d=new Date();d.setDate(d.getDate()+n);return d.toLocaleDateString('en-GB',{weekday:'short',day:'numeric',month:'short'})};el.textContent=f(Number(el.dataset.min))+' – '+f(Number(el.dataset.max))})}
function pbar(){var c=$('[data-pdp-cta]')[0],b=$('[data-pdp-bar]')[0];if(!c||!b)return;new IntersectionObserver(function(es){var r=es[0].boundingClientRect;b.classList.toggle('on',!es[0].isIntersecting&&r.top<0);document.documentElement.style.setProperty('--sb',b.classList.contains('on')?'66px':'0px')}).observe(c)}
window.__amPdp=function(){eta();pbar()};document.addEventListener('DOMContentLoaded',window.__amPdp);if(document.readyState!=='loading')window.__amPdp();
})();
