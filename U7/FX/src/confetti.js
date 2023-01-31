import JSConfetti from 'js-confetti'



// function confetti() {

//     const jsConfetti = new JSConfetti()
//     jsConfetti.addConfetti({
//         emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
//     })
// }
function confetti() {
    return new Promise((resolve,reject)=>{

        const jsConfetti = new JSConfetti()
        jsConfetti.addConfetti({
            emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
        })
    })
  
}

async function confetti2() {
  await confetti()
}


window.confetti=confetti
window.confetti2=confetti2