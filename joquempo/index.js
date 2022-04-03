const $stoneButton = document.querySelector('.button-stone-player-1') 
const $fieldPlayer1 = document.querySelector('.field-player-1')

function didTapStoneButton(){
    $fieldPlayer1.innerHTML = 'Pedra'
}

$stoneButton.addEventListener('click', didTapStoneButton)