// UI
const filter = document.getElementById('filter');
// console.log(filter);

const ulresult = document.getElementById('result');
// console.log(result);

const url = 'https://randomuser.me/api/?results=';
const totalusers = 10;

const listitems = [];

//AJAX request
async function getdata(){

    const res = await fetch(`${url}${totalusers}`);
    // console.log(res);

    // const data = await res.json();
    // console.log(data);

    const {results} = await res.json();
    console.log(results);

    ulresult.innerHTML = '';

    results.forEach(result=>{
       // console.log(result);
       const li = document.createElement('li');

       li.innerHTML = ` 
             <img src="${result.picture.large}" alt="${result.name.first}"/>
                <div class="userinfo">
                    <h4>${result.name.first} ${result.name.last}</h4>
                    <p>${result.location.city} ${result.location.country}</p>
                </div>
       `;
        // console.log(li);
        ulresult.appendChild(li);
        listitems.push(li);
    });
}
getdata();

// Event Listener
filter.addEventListener('input',function(e){
    filterdata(e.target.value);
});


function filterdata(search){
    // console.log(search);

    listitems.forEach(listitem=>{
       // console.log(listitem);

        if(listitem.innerText.toLocaleLowerCase().includes(search.toLowerCase())){
            listitem.classList.remove('hide');
        }else{
            listitem.classList.add('hide');
        }
    });
}