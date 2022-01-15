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
    console.log(key);
    var userData=localStorage.getItem(key);
        var obj=JSON.parse(userData);
        console.log(obj);
}