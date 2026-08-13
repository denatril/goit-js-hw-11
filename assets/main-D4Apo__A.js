import{n as e}from"./rolldown-runtime-CbXtAM7H.js";import{n as t,t as n}from"./vendor-D6Gmt0pB.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var r=e(t(),1),i=`38963544-7c343bd5df4ae8b0731ae7a7e`,a=`https://pixabay.com/api/`,o=document.querySelector(`.search-form`),s=document.querySelector(`.gallery`),c=document.querySelector(`.loader`),l;function u(){l&&l.destroy(),l=new n(`.gallery a`,{captionsData:`alt`,captionDelay:250})}o.addEventListener(`submit`,f);function d(e){let t=new URLSearchParams({key:i,q:e,image_type:`photo`,orientation:`horizontal`,safesearch:!0});return fetch(`${a}?${t}`)}function f(e){e.preventDefault();let t=e.target.elements.searchQuery.value.trim();t&&(p(),m(),d(t).then(e=>{if(!e.ok)throw Error(e.status);return e.json()}).then(e=>{if(e.hits.length===0){r.default.error({message:`Sorry, there are no images matching your search query. Please try again!`,position:`topRight`});return}s.innerHTML=g(e.hits),u()}).catch(()=>{r.default.error({message:`Something went wrong. Please try again later.`,position:`topRight`})}).finally(()=>{h()}))}function p(){s.innerHTML=``}function m(){c.classList.remove(`is-hidden`)}function h(){c.classList.add(`is-hidden`)}function g(e){return e.map(e=>`
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
      `).join(``)}
//# sourceMappingURL=main-D4Apo__A.js.map