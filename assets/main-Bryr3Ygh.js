import{r as e}from"./rolldown-runtime-hePW80VL.js";import{n as t,r as n,t as r}from"./vendor-0tNtVCy8.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var i=e(n(),1),a=`38963544-7c343bd5df4ae8b0731ae7a7e`,o=`https://pixabay.com/api/`,s=document.querySelector(`.search-form`),c=document.querySelector(`.gallery`),l=document.querySelector(`.loader-wrapper`),u=document.querySelector(`.load-more`),d,f=``,p=1,m=20,h=1e3,g=0;function _(){d=new r(`.gallery a`,{captionsData:`alt`,captionDelay:250})}function v(){if(!d){_();return}try{d.refresh()}catch{_()}}s.addEventListener(`submit`,b),u.addEventListener(`click`,D);async function y(e,n){return(await t.get(o,{params:{key:a,q:e,image_type:`photo`,orientation:`horizontal`,safesearch:!0,page:n,per_page:m}})).data}async function b(e){e.preventDefault();let t=e.target.elements.searchQuery.value.trim();if(t){f=t,p=1,x(),T(),S(),await k(h);try{let e=await y(f,p);if(g=e.totalHits,e.hits.length===0){i.default.error({message:`Sorry, there are no images matching your search query. Please try again!`,position:`topRight`});return}c.innerHTML=E(e.hits),_(),p<Math.ceil(g/m)?w():i.default.info({message:`We're sorry, but you've reached the end of search results`,position:`topRight`})}catch{i.default.error({message:`Something went wrong. Please try again later.`,position:`topRight`})}finally{C()}}}function x(){c.innerHTML=``}function S(){l.classList.remove(`is-hidden`)}function C(){l.classList.add(`is-hidden`)}function w(){u.classList.remove(`is-hidden`)}function T(){u.classList.add(`is-hidden`)}function E(e){return e.map(e=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${e.largeImageURL}">
            <img
              class="gallery-image"
              src="${e.webformatURL}"
              alt="${e.tags}"
            />
          </a>
          <ul class="image-info">
            <li>
              <span>Likes</span>
              <span>${e.likes}</span>
            </li>
            <li>
              <span>Views</span>
              <span>${e.views}</span>
            </li>
            <li>
              <span>Comments</span>
              <span>${e.comments}</span>
            </li>
            <li>
              <span>Downloads</span>
              <span>${e.downloads}</span>
            </li>
          </ul>
        </li>
      `).join(``)}async function D(){p+=1,T(),S(),await k(h);try{let e=E((await y(f,p)).hits);if(c.insertAdjacentHTML(`beforeend`,e),v(),O(),p>=Math.ceil(g/m)){T(),i.default.info({message:`We're sorry, but you've reached the end of search results`,position:`topRight`});return}w()}catch{i.default.error({message:`Something went wrong. Please try again later.`,position:`topRight`})}finally{C()}}function O(){let e=c.querySelector(`.gallery-item`);if(!e)return;let t=e.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:`smooth`})}function k(e){return new Promise(t=>setTimeout(t,e))}
//# sourceMappingURL=main-Bryr3Ygh.js.map