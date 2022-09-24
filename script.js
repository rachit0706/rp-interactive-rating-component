const ratingSelectArea = document.querySelector(".select-rating");

function displayRatingButton(){
    for(let i = 1; i <= 5; i++) {
        const starDiv = document.createElement("span");
        starDiv.id = `star-${i}`;
        starDiv.className = `star-button`;
        starDiv.textContent=`${i}`;
        
        ratingSelectArea.append(starDiv);
    }
}

displayRatingButton();

let selectedStar;

ratingSelectArea.addEventListener('click', function(e) {
    selectedStar = Number(e.target.id.split('-')[1]);
    console.log(selectedStar)
    
    for(let i = 1; i <= 5; i++) {
        const highligtedButton = document.getElementById(`star-${i}`);
        
        highligtedButton.style.backgroundColor = i === selectedStar ? "hsl(25, 97%, 53%)" : "hsl(216, 38%, 31%)";
    }
})