window.onscroll = () => {
    document.querySelector(".mountain").style.marginTop = scrollY + "px";
    document.querySelector(".trees").style.marginTop = scrollY /  + "px";
    document.querySelector(".star").style.marginTop = scrollY * 2 + "px";
    document.querySelector(".star").style.marginRight = scrollY / 2 + "px";
    document.querySelector(".rainbow").style.transform ="rotate(-" + (scrollY / 5.5) + "deg)";

};