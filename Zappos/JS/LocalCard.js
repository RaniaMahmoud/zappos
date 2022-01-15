/*
const person = {
    id:1,
    firstName:"John", 
    age:46
};

const person2 = {
    id:2,
    firstName:"John", 
    age:46
};
const item={
    id:1,
    image:"source/productImages/P1.jpg",
    price:"123$"
}
var Items = [];
Items.push(item);

for (const iterator of Items) {
    localStorage.setItem(iterator.id,JSON.stringify(iterator));   
}*/
// Items.push()
// var persons = [];
// persons.push(person2);
// persons.push(person);
// for (const iterator of item) {
//     sessionStorage.setItem(iterator.id,JSON.stringify(iterator));   
// }
/*
for (let index = 0; index < 3; index++) {
    console.log(index);
    localStorage.setItem(index,JSON.stringify(person));   
}*/

for(var [key,value] of Object.entries(localStorage)){
        if(key != 'randid'){
            var obj=JSON.parse(value);
            //console.log(obj);
            //console.log(`${key}: ${localStorage.getItem(key)}`);
            document.getElementById("TableItems").innerHTML+=`<tr>
            <th scope="row g-0 m-0">
                <div class="row g-0 m-0">
                    <div class="col-6">
                        <div class="card" style="width: 10rem;">
                            <img src=${obj.image} class="card-img-top" alt="...">
                            <div class="card-body">
                            </div>
                          </div>
            
                    </div>
                    <div class="col-6">
                        <a href="" class="Linktext">${obj.id}</a>
                    </div>
                </div>
            </th>
            <td>
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      Quantity
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><a class="dropdown-item active" href="#">Remove</a></li>
                      <li><a class="dropdown-item" href="#">1</a></li>
                      <li><a class="dropdown-item" href="#">2</a></li>
                      <li><a class="dropdown-item" href="#">3</a></li>
                      <li><a class="dropdown-item" href="#">4</a></li>
                    </ul>
                </div>
                <div class="Moveto pt-3">
                    <a href="" class="Linktext" style="border-bottom: 1px solid #003953 ;"> Moveto<i class="far fa-heart" aria-hidden="true"></i> </a><br>
                    <br>
                    <a href="" class="Linktext" style="border-bottom: 1px solid #003953 ;"> Remove </a>
                </div>
            </td>
            <td>${obj.price}</td>
            </tr>`;
        }
}

/*
for (const key in localStorage) {
    if(key != 'randid'){
        var obj=JSON.parse(localStorage.getItem(key));
        console.log(obj);
        console.log(key)
        //console.log(`${key}: ${localStorage.getItem(key)}`);
        document.getElementById("TableItems").innerHTML+=`<tr>
        <th scope="row g-0 m-0">
            <div class="row g-0 m-0">
                <div class="col-6">
                    <div class="card" style="width: 10rem;">
                        <img src=${obj.image} class="card-img-top" alt="...">
                        <div class="card-body">
                        </div>
                      </div>
        
                </div>
                <div class="col-6">
                    <a href="" class="Linktext">${obj.id}</a>
                </div>
            </div>
        </th>
        <td>
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  Quantity
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><a class="dropdown-item active" href="#">Remove</a></li>
                  <li><a class="dropdown-item" href="#">1</a></li>
                  <li><a class="dropdown-item" href="#">2</a></li>
                  <li><a class="dropdown-item" href="#">3</a></li>
                  <li><a class="dropdown-item" href="#">4</a></li>
                </ul>
            </div>
            <div class="Moveto pt-3">
                <a href="" class="Linktext" style="border-bottom: 1px solid #003953 ;"> Moveto<i class="far fa-heart" aria-hidden="true"></i> </a><br>
                <br>
                <a href="" class="Linktext" style="border-bottom: 1px solid #003953 ;"> Remove </a>
            </div>
        </td>
        <td>${obj.price}</td>
        </tr>`;
    }

}
*/