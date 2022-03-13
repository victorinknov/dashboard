let gear = document.getElementById('gear')
let userImg = document.getElementById('user-picture')
let modalConfig = document.getElementById('modal-config')
let closeModal = document.getElementById('close-button')

userImg.addEventListener('mouseover', ()=>{
    gear.style.visibility = 'visible'
})

gear.addEventListener('mouseover', ()=>{
    gear.style.visibility = 'visible'
})

userImg.addEventListener('mouseleave', ()=>{
    gear.style.visibility = 'hidden'
})

gear.addEventListener('click', ()=>{
    modalConfig.style.visibility = 'visible'
})

closeModal.addEventListener('click', ()=>{
    modalConfig.style.visibility = 'hidden'
})