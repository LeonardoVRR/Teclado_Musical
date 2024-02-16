const audios = document.querySelectorAll(`audio`)

window.document.addEventListener('keydown', function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const tecla = document.querySelector(`.keysContainer__key[data-key="${e.keyCode}"]`)
    
    if(!audio) return
    
    audios.forEach(audio => {
        if (!audio.paused){
            audio.pause()
            audio.currentTime = 0
        }
    })
    audio.play()
    tecla.classList.add('playing')
})

document.addEventListener('keyup', function(e){
    const tecla = document.querySelector(`.keysContainer__key[data-key="${e.keyCode}"]`)

    tecla.classList.remove('playing')
})