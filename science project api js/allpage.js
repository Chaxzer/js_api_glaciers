

const option = {
	method: 'GET',
	// headers: {
	// 	'X-RapidAPI-Key': 'd5dea32923msh8d81690768cfa38p196029jsn213fae4fe29d',
	// 	'X-RapidAPI-Host': 'melted-polar-ice-cap.p.rapidapi.com'
	// }
};
fetch('bannerinfos.json', option)
.then(data => data.json())      
.then((alldata) => {                         //passing the data 
    console.log(alldata);                    //consoling the data to console

    // the plan here is to execute a for loop or a map loop using a sliced function and initiating its value
    
    let data2="";
     var x=0;
     var y=3;

    alldata.arctic.slice(x,y).map((value)=>{
        data2+=`
        <div class="card bigcard">
        <img src="${value.image}" class="card-img-top" alt="...">
        
      <div>
        <div class="card-body">
          <h5 class="card-title">${value.head}</h5>
          <p class="card-text">${value.p}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
       </div>
      </div>
        `
    });
    document.getElementById("bigbox").innerHTML=data2;
});


// .catch((err) => {console.log(err);})


const search = document.getElementById('search');
const matchlist = document.getElementById('match-list');


const searchice = async searchText =>{
  const res = await fetch('arctic-api.json');
  const ice = await res.json();
  
  
  let matches =ice.filter(molten =>{
    const regex =new RegExp(`^${searchText}`,`gi`);
    return molten.name.match(regex) || molten.abbr.match(regex);
  });
  if(searchText.length === 0) {
      matches = [];
      matchlist.innerHTML = '';
  }
  console.log(matches);
  outputHtml(matches);
};
  const outputHtml = matches => {
    if(matches.length > 0){
      const html = matches.arcticData.map(match => `<div class="card" style="width: 18rem;"><h1> Search Results </h1>
			<img src="${values.image}" class="card-img-top incard" alt="...">
            <div class="card-body">
              <h5 class="card-title">Glacier Rank${values.rank}</h5>
			  <p class="card-text">year :-${values.year} <br> month :-${values.month}</p>
              <a href="#" class="btn btn-primary">Go to glacier </a>
            </div>
			</div>`).join('');
      matchlist.innerHTML = html;
      console.log(html)
    }
  }

search.addEventListener('input', () => searchice(search.value));


//load elements from api 
