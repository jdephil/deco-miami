document.addEventListener('DOMContentLoaded', function() {
  let stickersImg = document.getElementById('stickersImg')
  let lacquerImg = document.getElementById('lacquerImg')
  let papaDiv = document.getElementById('papaDiv')
  let stickerOptionsDiv = document.getElementById('stickerOptions')
  let babasKitchen = document.getElementById('babasKitchen')
  let bohemia = document.getElementById('bohemia')
  let artTherapy = document.getElementById('artTherapy')
  let purpleLacquer = document.getElementById('purpleLacquer')
  let pinkLacquer = document.getElementById('pinkLacquer')
  let tealLacquer = document.getElementById('tealLacquer')

  let optionsArray = [babasKitchen, bohemia, artTherapy, 
    purpleLacquer, pinkLacquer, tealLacquer]


  let switchImg = (e) => {
    if (e.target === optionsArray[optionsArray.indexOf(e.target)] && optionsArray.indexOf(e.target) <= 2) {
      stickersImg.src = e.target.src
    } else if (e.target === optionsArray[optionsArray.indexOf(e.target)] && optionsArray.indexOf(e.target) <= 5) {
      lacquerImg.src = e.target.src
    }
  } 
  
  let returnImg = () => {
    stickersImg.src = '../assets/StarsInYourEyes-1.png'
  }

  papaDiv.addEventListener('mouseover', switchImg)
  stickerOptionsDiv.addEventListener('mouseout', returnImg)
})