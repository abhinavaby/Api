async function fetchData() {
    try{
        const pokemonName=document.getElementById("pokemon-name").value.toLowerCase();
        const response=await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if(!response.ok){
            throw new Error("Network response was not ok");

        }
        const data=await response.json();
        console.log(data);
    }
    catch(error){
        console.log(error);

    }
}

