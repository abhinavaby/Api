async function fetchData() {
    try{
        const pokemonName=document.getElementById("pokemon-name").value.toLowerCase();
        const response=await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if(!response.ok){
            throw new Error("Network response was not ok");

        }
        const data=await response.json();
        const pokemonSprite=data.sprites.front_default;
        const pokemonImage=document.getElementById("pokemonsprite");
        pokemonImage.src=pokemonSprite;
        pokemonImage.style.display="block";
        
    }
    catch(error){
        console.log(error);

    }
}
function mode(){
    const body=document.querySelector("body");
    if(body.style.backgroundColor==="black"){
        body.style.backgroundColor="white";
        
    }
    else{
        body.style.backgroundColor="black";
        const box=document.getElementById("a");
        box.style.backgroundColor="yellow";
    }
}

