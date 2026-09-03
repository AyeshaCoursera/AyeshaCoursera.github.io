
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");observer.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

const card=document.querySelector(".visual-card");
if(card && window.matchMedia("(pointer:fine)").matches){
card.addEventListener("mousemove",e=>{const r=card.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;card.style.transform=`perspective(900px) rotateY(${x*5}deg) rotateX(${-y*5}deg)`});
card.addEventListener("mouseleave",()=>card.style.transform="");
}

if(window.matchMedia("(pointer:fine)").matches){
const dot=document.querySelector(".cursor-dot"),ring=document.querySelector(".cursor-ring"),label=document.querySelector(".cursor-label");let mx=innerWidth/2,my=innerHeight/2,rx=mx,ry=my;
addEventListener("mousemove",e=>{mx=e.clientX;my=e.clientY;dot.style.left=mx+"px";dot.style.top=my+"px"});
(function loop(){rx+=(mx-rx)*.16;ry+=(my-ry)*.16;ring.style.left=rx+"px";ring.style.top=ry+"px";label.style.left=rx+"px";label.style.top=ry+"px";requestAnimationFrame(loop)})();
document.querySelectorAll("a,button").forEach(el=>{el.addEventListener("mouseenter",()=>ring.classList.add("active"));el.addEventListener("mouseleave",()=>{ring.classList.remove("active");ring.classList.remove("view");label.classList.remove("show")})});
document.querySelectorAll(".project").forEach(el=>{el.addEventListener("mouseenter",()=>{ring.classList.add("view");label.textContent="View ↗";label.classList.add("show")})});
}

document.querySelector(".menu")?.addEventListener("click",()=>document.querySelector(".nav-links").classList.toggle("mobile-open"));
