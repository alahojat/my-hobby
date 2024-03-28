(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const m=[{name:"Model 10",source:"./photography/model-10.jpg",alt:"Portrait of woman in black top with head stretched back",loading:"lazy",category:"photography"},{name:"model 5",source:"./photography/model-5.jpg",alt:"Portrait of model in white top in the woods",loading:"lazy",category:"photography"},{name:"band playing",source:"./photography/band-playing.jpg",alt:"Black and white picture of jazzband playing",loading:"lazy",category:"photography"},{name:"crowd",source:"./photography/crowd.jpg",alt:"Black and white picture of a crwd at a protest",loading:"lazy",category:"photography"},{name:"banana tree",source:"./photography/banana-tree.jpg",alt:"Black and white picture of a banana tree",loading:"lazy",category:"test"},{name:"model 1",source:"./photography/model-1.jpg",alt:"Portrait of model with burgundy lips",loading:"lazy",category:"photography"},{name:"model 2",source:"./photography/model-2.jpg",alt:"Portrait of model with curly blonde hair smiling",loading:"lazy",category:"photography"},{name:"model 3",source:"./photography/model-3.jpg",alt:"Portrait of model with blue light shining on face",loading:"lazy",category:"photography"},{name:"model 4",source:"./photography/model-4.jpg",alt:"Portrait of model in white top with green plants",loading:"lazy",category:"photography"},{name:"model 6",source:"./photography/model-6.jpg",alt:"Portrait of model in limegreen dress against blue backdrop",loading:"lazy",category:"photography"},{name:"model 7",source:"./photography/model-7.jpg",alt:"Black and white portrait of model in nature",loading:"lazy",category:"test"},{name:"woman on bike",source:"./photography/woman-on-bike.jpg",alt:"Cropped picture of a woman in black clothes on a moped",loading:"lazy",category:"photography"},{name:"model 9",source:"./photography/model-9.jpg",alt:"Black and white upclose portrait of woman with eyes closed",loading:"lazy",category:"photography"},{name:"Blue monstera",source:"./art/blue-monstera-leaf.jpg",alt:"Monstera leaf painted cobalt blue against white backdrop",loading:"lazy",category:"art"},{name:"Brown paint",source:"./art/brown-paints.jpg",alt:"Shades of brown ink paints against white backdrop",loading:"lazy",category:"art"},{name:"Illustration",source:"./art/face-illustration.jpg",alt:"Illustration in pencil of womans face",loading:"lazy",category:"art"},{name:"Orange paint",source:"./art/orange-paint.jpg",alt:"Illustration in pencil of womans face",loading:"lazy",category:"art"},{name:"White monstera leaf",source:"./art/white-monstera-leaf.jpg",alt:"Monstera leaf painted white against white backdrop",loading:"lazy",category:"art"}];let i=document.getElementById("homePageContainer"),c=document.getElementById("artContainer"),p=document.getElementById("photoContainer"),h=m;function u(){let a=document.createElement("div");a.classList.add("homePageContainer");let o=document.createElement("header"),n=document.createElement("nav"),r=document.createElement("h1");r.innerText="Ala Hojat";let e=document.createElement("button");e.innerText="mixed media",e.addEventListener("click",y);let t=document.createElement("button");t.innerText="photography",t.addEventListener("click",f),n.append(r,e,t),o.append(n),a.append(o),i.append(a)}function d(){s(),c.innerHTML="",p.innerHTML=""}function g(a){let o=h.filter(r=>r.category===a),n=document.createElement("div");return n.classList.add("container"),o.forEach(r=>{const e=document.createElement("div");e.classList.add("imgContainer");const t=document.createElement("img");t.src=r.source,t.alt=r.alt,e.appendChild(t),n.appendChild(e)}),n}function y(){console.log("printing artpage"),i.innerHTML="";let a=document.createElement("button");a.innerText="Home",a.classList.add("goBackBtn"),a.addEventListener("click",d);let o=document.createElement("div");o.classList.add("artPage");let n=document.createElement("h2");n.innerText="mixed media";let r=g("art");o.append(n,a,r),c.append(o)}function f(){console.log("printing photopage"),i.innerHTML="";let a=document.createElement("button");a.innerText="Home",a.classList.add("goBackBtn"),a.addEventListener("click",d);let o=document.createElement("div");o.classList.add("photoPage");let n=document.createElement("h2");n.innerText="photography";let r=g("photography");o.append(n,a,r),p.append(o)}function s(){c.innerHTML="",p.innerHTML="",u(),console.log("hej")}s();