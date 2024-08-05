import{S as m,i as g}from"./assets/vendor-8c59ed88.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}})();let n=null;const u=()=>{n||(n=new m(".gallery a",{captionsData:"alt",captionDelay:250})),n.refresh()},a=t=>{t.classList.contains("hidden")?t.classList.remove("hidden"):t.classList.add("hidden")},p=t=>{console.log(t);let e={titleSize:"16px",titleLineHeight:"24px",titleColor:"#FFF",messageSize:"16px",messageLineHeight:"24px",messageColor:"#FFF",theme:"dark",position:"topRight",title:"Error",iconUrl:"../img/icon-error.svg",backgroundColor:"#EF4040",message:t};g.show(e)},y=(t,e)=>{console.log(e);const o=e.map(i=>`
        <div class='gallery-item'>
            <a href="${i.largeImageURL}" class="gallery-link">
                <img src="${i.previewURL}" alt="${i.tags}" loading="lazy" width="360" height="200"/>
            </a>
            <ul class="info">
                <li class="info-item">
                    <p class="info-category">Likes</p>
                    <p class=>${i.likes}</p>
                </li>
                <li class="info-item">
                    <p class="info-category">Views</p>
                    <p class=>${i.views}</p>
                </li>
                <li class="info-item">
                    <p class="info-category">Comments</p>
                    <p class=>${i.comments}</p>
                </li>
                <li class="info-item">
                    <p class="info-category">Downloads</p>
                    <p class=>${i.downloads}</p>
                </li>
            </ul>
        </div>
        `);t.innerHTML=o.join(`
`),u()},h=t=>{t.innerHTML="",u()},L="45271330-704da2140a32d702981ddfad2",w=t=>fetch(`https://pixabay.com/api/?key=${L}&q=${encodeURIComponent(t)}`).then(e=>{if(!e.ok)throw new Error(`Failed to load images, error code: ${e.status}`);return e.json()}).then(e=>{if(parseInt(e.totalHits)>0)return e.hits;throw new Error("Sorry, there are no images matching your search query. Please try again!")}).catch(e=>{p(e.message)}),c=document.querySelector(".gallery"),d=document.querySelector(".form"),f=document.querySelector(".loader");d.addEventListener("submit",t=>{t.preventDefault(),h(c),a(f);const e=d.querySelector('input[name="query"]').value.trim();w(e).then(o=>{a(f),o&&y(c,o)})});
//# sourceMappingURL=commonHelpers.js.map
