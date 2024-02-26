document.getElementById('btn').addEventListener('click', function(e){
    e.preventDefault();
    var pokemon = document.getElementById('pokemon').value;
    const url = `http://localhost:8080/${pokemon}`; 

    fetch(url).then(function(response){
        response.json().then(function(data){
            console.log(data);
            document.getElementById('name').innerHTML = "Nombre: "+ data.name;
            document.getElementById('experience').innerHTML = "base experience: "+data.base_experience;
            document.getElementById('height').innerHTML = "Height: "|+data.height;
            document.getElementById('weightt').innerHTML = "Weight: "+data.weight;

        })
    })

})
console.log("funciona")