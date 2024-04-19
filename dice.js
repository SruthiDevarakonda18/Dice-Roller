function rollDice(){
    const numDice=document.getElementById("numDice").value
    const diceRes=document.getElementById("diceRes")
    const diceImages=document.getElementById("diceImages")
    const values=[]
    const images=[]
    for(let i=0;i<numDice;i++){
        const value=Math.floor(Math.random()*6)+1
        values.push(value)
        images.push(`<img src="dice_images/${value}.jpg" alt="dice ${value}">`)
    }
    diceRes.textContent=`dice: ${values.join(', ')}`
    diceImages.innerHTML=images.join(' ')
}
