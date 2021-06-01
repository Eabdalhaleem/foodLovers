'use strict';

let formEl= document.getElementById('Myform');
let tableEl=document.getElementById('foodTable');
let divEl =document.getElementById('formcontanier');
let tableHeaderEl= document.createElement('thead');
tableEl.appendChild (tableHeaderEl);
let tableBodyEl=document.createElement('tbody');
tableEl.appendChild(tableBodyEl);

let FoodLoversArray=[];

// costructor
function FoodLovers(costomerName,foodType,foodImg) {

 this.costomerName=costomerName;
 this.foodType=foodType;
 this.foodImg=foodImg;
 this.price=getRandomInt(20, 90)
 FoodLoversArray.push(this);

 tableBodylist();
 settingItem();
    
}

// random price
function getRandomInt(min, max) {

    return Math.floor(Math.random() * (max - min) + min);
}

// submit click event
formEl.addEventListener('submit', submitClick);

function submitClick(event) {
    event.preventDefault();

    let inputEl =event.target.costomerName.value;
    let selectEl= event.target.foodType.value;

    new FoodLovers(inputEl,selectEl);



    tableBodylist();
}

// list of food type

let foodType =['shawarma','burger','pizza'];

function renderList () {

let selectEl =document.getElementById('foodType');
 for (let i = 0; i < foodType.length; i++) {
 let optionEl= document.createElement('option');
 selectEl.appendChild(optionEl);
 optionEl.textContent=`${foodType[i]}`;
 optionEl.value=`${foodType[i]}` 
    
}

    
}
renderList ();

let tableHeaderText =['Order Image','Order Details'];

function tableHeader () {

    let tableHeaderRowEl =document.createElement('tr');
    tableHeaderEl.appendChild(tableHeaderRowEl);


    for (let index = 0; index < tableHeaderText.length; index++) {
        let tableDataEL =document.createElement('td');
        tableHeaderRowEl.appendChild(tableDataEL);
        tableDataEL.textContent=`${tableHeaderText[index]}`;
      
        
    }

    
}
tableHeader ();

let OrderImgArray =['background.jpg','burger.jpg','pizza.jpg'];

function orderImg() {
 let tableImgRowEL=document.createElement('tr');
 tableEl.appendChild(tableImgRowEL);
 for (let index = 0; index < OrderImgArray.length; index++) {
     let tableDataImgEl=document.createElement('td');
     tableImgRowEL.appendChild(tableDataImgEl);
     tableDataImgEl.setAttribute=` scr ${OrderImgArray[index]}`
     
 }

    
}
orderImg();

function tableBodylist() {
    
    tableEl.textContent='';

    for (let index = 0; index < FoodLoversArray.length; index++) {
        let tableBodyRowEl=document.createElement('tr');
        tableEl.appendChild(tableBodyRowEl); 


        let tableBodyDataEL=document.createElement('td');
        tableBodyRowEl.appendChild(tableBodyDataEL);
        tableBodyDataEL.textContent=` Costomer Name : ${FoodLoversArray[index].costomerName}`;

        let tableBodyDataEL2=document.createElement('td');
        tableBodyRowEl.appendChild(tableBodyDataEL2);
        tableBodyDataEL2.textContent=` food Type :  ${FoodLoversArray[index].foodType}`;

        let tableBodyDataEL3=document.createElement('td');
        tableBodyRowEl.appendChild(tableBodyDataEL3);
        tableBodyDataEL3.textContent=` Food Price : ${FoodLoversArray[index].price}`;




       
        
    }
    
} console.log(tableBodylist);


// local storage 
function settingItem() {

    let data =JSON.stringify(FoodLoversArray);
    localStorage.setItem('food',data);
    
}

function gettingItem() {
    let stringObj= localStorage.getItem('food');
    let normalObj= JSON.parse(stringObj);
    if (normalObj !== null){
        FoodLoversArray=normalObj;

    }
    tableBodylist();
    
}
gettingItem();