(() => {
 const config=window.IROHA_CONFIG||{};
 document.querySelectorAll('[data-contact]').forEach(el=>{
  if(config.contactUrl){el.href=config.contactUrl;}
  else el.addEventListener('click',e=>{e.preventDefault();document.getElementById('contact-dialog').showModal();});
 });
 document.querySelectorAll('[data-dialog]').forEach(el=>el.addEventListener('click',()=>{
  if(el.dataset.dialog==='privacy-dialog'&&config.privacyUrl){location.href=config.privacyUrl;return;}
  document.getElementById(el.dataset.dialog).showModal();
 }));
 document.querySelectorAll('dialog').forEach(d=>{
  d.querySelector('[data-close]').addEventListener('click',()=>d.close());
  d.addEventListener('click',e=>{if(e.target===d){const r=d.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)d.close();}});
 });
 const info=document.getElementById('operator-info');if(info) info.textContent=config.operatorText;
})();
