
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
		
		let data1="";
		
	    response.arcticData.slice(0,4).map((values)=>{
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
	.catch((err) => {console.log(err);})
	// .catch(err => console.error(err));


		// response.arcticData.slice(1).map((values)=>{
		// 	data1+=` <img src="${values.image}" class="card-img-top" alt="...">
        //     <div class="card-body">
        //       <h5 class="card-title">Glacier Rank${values.rank}</h5>
		// 	  <p class="card-text">year :-${values.year} <br> month :-${values.month}</p>
        //       <a href="#" class="btn btn-primary">Go somewhere</a>
        //     </div>`
		// });
		// document.getElementById("2ndcard").innerHTML=data1;

		// response.arcticData.slice(2).map((values)=>{
		// 	data1+=` <img src="${values.image}" class="card-img-top" alt="...">
        //     <div class="card-body">
        //       <h5 class="card-title">Glacier Rank :-${values.rank}</h5>
        //       <p class="card-text">year :-${values.year} <br> month :-${values.month}</p>
        //       <a href="#" class="btn btn-primary">Go somewhere</a>
        //     </div>`
		// });
		// document.getElementById("3rdcard").innerHTML=data1;
		
	    // response.arcticData.slice(3).map((values)=>{
		// 	data1+=` <img src="${values.image}" class="card-img-top" alt="...">
        //     <div class="card-body">
        //       <h5 class="card-title">Glacier Rank${values.rank}</h5>
		// 	  <p class="card-text">year :-${values.year} <br> month :-${values.month}</p>
        //       <a href="#" class="btn btn-primary">Go somewhere</a>
        //     </div>`
		// });
		// document.getElementById("4thcard").innerHTML=data1;
		
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	// const form=document.getElementById("form")
	// const search=document.getElementById("search")
	// const main=document.getElementById("main")


	// // get glacier info
	// let seeglacier = async (url) =>{
	// 	const res= await fetch(url)
	// 	const data= red.json()
	// 	console.log
	// }
	// form.addEventListener('submit',(e)=>{
	// 	e.preventDefault()
	// 	Const searchValue=search.value
	// 	if(searchValue && searchValue !==''){
	// 		seeglacier(SEARCH_URL+searchValue)
	// 	}
	// }
	// )
	 