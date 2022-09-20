
const options = {
	method: 'GET',
	// headers: {
	// 	'X-RapidAPI-Key': 'd5dea32923msh8d81690768cfa38p196029jsn213fae4fe29d',
	// 	'X-RapidAPI-Host': 'melted-polar-ice-cap.p.rapidapi.com'
	// }
};

// fetch('https://melted-polar-ice-cap.p.rapidapi.com/api/arctic-api', options)//fetching from api
	fetch('arctic-api.json', options)
	.then(response => response.json())             //converting json to object format
	.then((response) => {                         //passing the data 
		console.log(response);                    //consoling the data to console




        // the plan here is to execute a for loop or a map loop using a sliced function and initiating its valk
		
		let data1="";
		 var x=4;
         var y=8;
	    response.arcticData.slice(x,y).map((values)=>{
            
			data1+=`
			<div class="card" style="width: 18rem;">
			<img src="${values.image}" class="card-img-top incard" alt="...">
            <div class="card-body">
              <h5 class="card-title">Glacier Rank${values.rank}</h5>
			  <p class="card-text">year :-${values.year} <br> month :-${values.month}</p>
              <a href="#" class="btn btn-primary">Go to glacier </a>
            </div>
			</div>
			`
            
		});
		document.getElementById("card1st").innerHTML=data1;

	})
    // .catch((err) => {console.log(err);})




    


	