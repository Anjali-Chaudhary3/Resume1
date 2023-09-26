let rootEle=document.querySelector(":root");
let toggleBtn=document.querySelector(".toggleBtn");
rootEle.classList.add("light-mode");
toggleBtn.children[1].classList.add("displayNone");
function modeToggle()
{
    rootEle.classList.toggle("dark-mode");
    toggleBtn.children[0].classList.toggle("displayNone");
    toggleBtn.children[1].classList.toggle("displayBlock");
}

//set project thumbnail
let allProjectThumbnails=document.querySelectorAll(".thumbnail");
function setProjectThumbnails(allProjectThumbnail,projectName,color){
    allProjectThumbnail.style= `
    background:url(./Assets/projectthumbnails/${projectName}.png) no-repeat center;
    background-size:contain;
    background-color:${color};
    `
}
setProjectThumbnails(allProjectThumbnails[0],"project1","#27272c");
setProjectThumbnails(allProjectThumbnails[1],"project2","#27272c");
setProjectThumbnails(allProjectThumbnails[2],"project3","#863286");
setProjectThumbnails(allProjectThumbnails[3],"project4","#000");
setProjectThumbnails(allProjectThumbnails[4],"project5","#fff");
setProjectThumbnails(allProjectThumbnails[5],"project6","#202020");
setProjectThumbnails(allProjectThumbnails[6],"project7","#8339ec");
setProjectThumbnails(allProjectThumbnails[7],"project8","#27272");
setProjectThumbnails(allProjectThumbnails[8],"project9","#27272");

//navshadow
window.addEventListener("scroll",()=>{
 let navbar=document.querySelector("nav");
 if(window.scrollY>0)
 {
    navbar.classList.add("navShadow");
 }
 else{
    navbar.classList.remove("navShadow");
 }
});
//navmenu
let allNavMenuItems=document.querySelectorAll(".navMenuItem");
let navLogo=document.querySelector(".navLogo a");
let hireMe=document.querySelector(".hireMe");
function activeClassFunction(ClickEle,addClassEle)
{
    ClickEle.addEventListener("click",()=>{
        allNavMenuItems.forEach((e)=>{
            e.classList.remove("navActive");
        });
        addClassEle.classList.add("navActive");
    });
};
for(let i=0;i<allNavMenuItems.length;i++)
{
    activeClassFunction(allNavMenuItems[i],allNavMenuItems[i]);
};
activeClassFunction(navLogo,allNavMenuItems[0]);
activeClassFunction(hireMe,allNavMenuItems[4]);

//animate on scroll 
let revealAnimationElements =document.querySelectorAll("li, .name, .heading h1, .projectName");
revealAnimationElements.forEach((revealAnimationElement)=>{
    revealAnimationElement.style=`
    position:relative;
    overflow:hidden;
    `;
    revealAnimationElement.classList.add("hiddenRevealAnimation");
});

let leftAnimationElements=document.querySelectorAll(".position, #aboutSection .left");
leftAnimationElements.forEach((leftAnimationElement)=>{
    leftAnimationElement.classList.add("hiddenLeftAnimation")
})
let rightAnimationElements=document.querySelectorAll(".circle, #aboutSection .right");
rightAnimationElements.forEach((rightAnimationElement)=>{
    rightAnimationElement.classList.add("hiddenRightAnimation");
});
let upAnimationElements=document.querySelectorAll(".about,.btns button,.links,.skills h1,.projectDesc,input,textarea");
upAnimationElements.forEach((upAnimationElement)=>{
    upAnimationElement.classList.add("hiddenUpAnimation");
});
let progressBarAnimationElements=document.querySelectorAll(".progressBar");
 progressBarAnimationElements.forEach( (progressBarAnimationElement)=>{
 progressBarAnimationElement.classList.add("hiddenProgressBarAnimation");
});
let thumbnailAnimationElements=document.querySelectorAll(".thumbnail");
 thumbnailAnimationElements.forEach( (thumbnailAnimationElement)=>{
 thumbnailAnimationElement.classList.add("hiddenThumbnailAnimation");
});



function observeFunction(elements,className)
{
    const observer=new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            if(entry.isIntersecting){
                entry.target.classList.add(className);
            }
        });
    });
    elements.forEach((el)=>observer.observe(el));
};
observeFunction(revealAnimationElements,"showRevealAnimation");
observeFunction(leftAnimationElements,"showLeftAnimation");
observeFunction(rightAnimationElements,"showRightAnimation");
observeFunction(upAnimationElements,"showUpAnimation");
observeFunction(progressBarAnimationElements,"showProgressBarAnimation");
observeFunction(thumbnailAnimationElements,"showThumbnailAnimation");

//hamburger
let hamburger=document.querySelectorAll(".hamburger, .navMenu ,header");
let body=document.querySelector("body");
function hamburgerAnimation(){
    hamburger[2].classList.toggle("hamburgerAnimation");
    hamburger[1].classList.toggle("navMenuAnimation");
    hamburger[0].classList.toggle("navMenuBackgroundAnimation");
    body.classList.toggle("scrollOff");


};

allNavMenuItems.forEach((e)=>{
    e.addEventListener("click",()=>{
         hamburger[2].classList.toggle("hamburgerAnimation");
         hamburger[1].classList.toggle("navMenuAnimation");
         hamburger[0].classList.toggle("navMenuBackgroundAnimation");
          body.classList.toggle("scrollOff");

    });
});