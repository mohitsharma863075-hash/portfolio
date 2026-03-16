function contact(){

alert("Thanks for contacting Mohit Sharma!");

}

window.addEventListener("scroll",function(){

let skills=document.querySelectorAll(".skill");

skills.forEach(skill=>{
skill.style.opacity="1";
})

})
function openModal(src, alt) {
    let modal = document.getElementById("myModal");
    let modalImg = document.getElementById("modalImg");
    let captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = src;
    captionText.innerHTML = alt;
}

function closeModal() {
    let modal = document.getElementById("myModal");
    modal.style.display = "none";
}