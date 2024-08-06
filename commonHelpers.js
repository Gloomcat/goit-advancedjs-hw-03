var q=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)};var r=(e,t,s)=>(q(e,t,"read from private field"),s?s.call(e):t.get(e)),u=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},a=(e,t,s,o)=>(q(e,t,"write to private field"),o?o.call(e,s):t.set(e,s),s);var v=(e,t,s,o)=>({set _(i){a(e,t,i,s)},get _(){return r(e,t,o)}}),w=(e,t,s)=>(q(e,t,"access private method"),s);import{i as C,S as E}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const h of i)if(h.type==="childList")for(const A of h.addedNodes)A.tagName==="LINK"&&A.rel==="modulepreload"&&o(A)}).observe(document,{childList:!0,subtree:!0});function s(i){const h={};return i.integrity&&(h.integrity=i.integrity),i.referrerPolicy&&(h.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?h.credentials="include":i.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function o(i){if(i.ep)return;i.ep=!0;const h=s(i);fetch(i.href,h)}})();let x=null;const P=()=>{x||(x=new E(".gallery a",{captionsData:"alt",captionDelay:250})),x.refresh()},$=e=>{e.classList.contains("hidden")?l(e,!0):l(e,!1)},l=(e,t)=>{t?e.classList.remove("hidden"):e.classList.add("hidden")},S=e=>{let t={titleSize:"16px",titleLineHeight:"24px",titleColor:"#FFF",messageSize:"16px",messageLineHeight:"24px",messageColor:"#FFF",theme:"dark",position:"topRight",title:"Error",backgroundColor:"#EF4040",message:e};C.error(t)},b=(e,t)=>{const s=t.map(o=>`
        <div class='gallery-item'>
            <a href="${o.largeImageURL}" class="gallery-link">
                <img src="${o.previewURL}" alt="${o.tags}" loading="lazy" width="360" height="150"/>
            </a>
            <ul class="info">
                <li class="info-item">
                    <p class="info-category">Likes</p>
                    <p class=>${o.likes}</p>
                </li>
                <li class="info-item">
                    <p class="info-category">Views</p>
                    <p class=>${o.views}</p>
                </li>
                <li class="info-item">
                    <p class="info-category">Comments</p>
                    <p class=>${o.comments}</p>
                </li>
                <li class="info-item">
                    <p class="info-category">Downloads</p>
                    <p class=>${o.downloads}</p>
                </li>
            </ul>
        </div>
        `);e.innerHTML=s.join(`
`),P()},F=e=>{e.innerHTML="",P()},I="45271330-704da2140a32d702981ddfad2",N=(e,t)=>fetch(`https://pixabay.com/api/?key=${I}&q=${encodeURIComponent(e)}&orientation=horizontal&safesearch=true&per_page=9&page=${t}`).then(s=>{if(!s.ok)throw new Error(`Failed to load images, error code: ${s.status}`);return s.json()}).catch(s=>{S(s.message)});var n,c,g,m,p,f,y,L;class O{constructor(){u(this,y);u(this,n,void 0);u(this,c,void 0);u(this,g,void 0);u(this,m,void 0);u(this,p,void 0);u(this,f,void 0);this.form=document.querySelector(".form"),this.leftArrow=document.querySelector(".left"),this.rightArrow=document.querySelector(".right"),a(this,m,document.querySelector(".gallery")),a(this,p,document.querySelector(".loader")),a(this,f,document.querySelector(".page")),a(this,n,0),a(this,c,0),a(this,g,"")}fetchNext(){r(this,c)||(a(this,n,1),w(this,y,L).call(this)),r(this,n)<=r(this,c)&&(v(this,n)._++,w(this,y,L).call(this))}fetchPrevious(){r(this,c)&&r(this,n)>1&&(v(this,n)._--,w(this,y,L).call(this))}setupQuery(){const t=this.form.querySelector('input[name="query"]').value.trim();return this.form.reset(),t?(a(this,g,t),!0):(S("Search request should not be empty. Please try again!"),!1)}reset(){l(this.leftArrow,!1),l(this.rightArrow,!1),l(r(this,f),!1),r(this,f).textContent="",a(this,g,""),a(this,n,0),a(this,c,0)}}n=new WeakMap,c=new WeakMap,g=new WeakMap,m=new WeakMap,p=new WeakMap,f=new WeakMap,y=new WeakSet,L=function(){l(this.leftArrow,!1),l(this.rightArrow,!1),l(r(this,f),!1),r(this,f).textContent="",F(r(this,m)),$(r(this,p)),N(r(this,g),r(this,n)).then(t=>{if($(r(this,p)),!r(this,c)){const s=parseInt(t.totalHits);a(this,c,Math.floor(s/9)+(s%9>0?1:0))}if(r(this,c)>0)b(r(this,m),t.hits);else throw new Error("Sorry, there are no images matching your search query. Please try again!");r(this,f).textContent=`${r(this,n)}  of  ${r(this,c)}`,l(r(this,f),!0),r(this,c)>1&&(r(this,n)===r(this,c)?(l(this.rightArrow,!1),l(this.leftArrow,!0)):r(this,n)===1?(l(this.leftArrow,!1),l(this.rightArrow,!0)):(l(this.rightArrow,!0),l(this.leftArrow,!0)))}).catch(t=>{S(t.message)})};const d=new O;d.form.addEventListener("submit",e=>{e.preventDefault(),d.reset(),d.setupQuery()&&d.fetchNext()});d.rightArrow.addEventListener("click",e=>{d.fetchNext()});d.leftArrow.addEventListener("click",e=>{d.fetchPrevious()});
//# sourceMappingURL=commonHelpers.js.map
