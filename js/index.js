
// async function drinks() {
//     const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink')
//     const data = await response.json()
//     console.log(data)
// }
// drinks()

const container = document.querySelector('.container');

const fetchDATA = () => {
    fetch('https://api.npoint.io/bb65d4e631ccb6afc6f3/drinks/')
    .then(resp => resp.json())
    .then(data => 
        console.log(data));
        
        container.innerHTML = data.map(
            (cocktails) => 
            `<div class = "drink">
                <div class="drink-heading">
                    <h2>${drink.name}</h2>
                    <img src=${drink.image} alt="#" />

                    <div class="drink-details">
                    <p><span><i class="fa fa-glass" aria-hidden="true"></i></span>Drink:${drink.glass}</p>
                    </div>
                    <div class="Name of the drink">
                    <div class="Ingredients of the drink">
                    
                    </div>
                    </div>



                </div>
            </div>`
        )
  
       
       
        .catch((err) => console.log(err))
        
};
fetchDATA()
