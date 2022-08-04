const mobileLink = document.querySelectorAll(".mob-nav-link");
document.getElementById("open").addEventListener('click', function(){
    document.getElementById("mob_nav_overlay").style.width = "80%";
    document.getElementById("close").style.display = "block";
    document.getElementById("open").style.display = "none";
})
document.getElementById("close").addEventListener('click', function(){
    document.getElementById("mob_nav_overlay").style.width = "0%";
    document.getElementById("close").style.display = "none";
    document.getElementById("open").style.display = "block";

})
/*document.querySelectorAll("a").addEventListener('click', function(){
    document.getElementById("mob_nav_overlay").style.width = "0%";
    document.getElementById("close").style.display = "none";
    document.getElementById("open").style.display = "block";
})
*/
mobileLink.forEach(link =>{
    link.addEventListener('click', () =>{
        document.getElementById("mob_nav_overlay").style.width = "0%";
        document.getElementById("close").style.display = "none";
        document.getElementById("open").style.display = "block";
    })
})
    