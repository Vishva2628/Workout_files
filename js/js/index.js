//addition & String Comments...//
var x=30; 
var y=20;
var z="50";
result= x+y+z;

//String Comments
var text ="This is My fist javascript Code...";

var text1="learning to javascript";

 var name=`vishva is ${text1} ,
 in w3School`;



console.log(text);

console.log(text1);

console.log(name);

console.log(result);

typeof name;
console.log(typeof name);

//NaN-Comment
console.log(100 /"ecvN");
console.log(100 / "20");

//Number - Methods//----------------------//

//pardeInt-Method  [String to Change Number]
var a = "55";
var b = "45";
console.log(parseInt(a)+parseInt(b));

//toFixed-Method---[nxt to Decimal .pont Number]
var a = 10.33999999;
var b = 20.55548532;
console.log(a.toFixed(1));
console.log(b.toFixed(2));
//toString----
var a1 = 10.33999999;
var b1 = 20.55548532;
console.log(a1.toString());
console.log(b1.toString());

//ArrayS-----------------------------------//
var pets = ["Dog", "Cat" ,"Bords"];
    pets[1]= 'peacock';
console.log(pets);

//Array--push---------------------------------

let firstName = "vishva";
let lastName = "ecv"; 

let firstName2 = new String(" n ")
let secondName= "vishva ecvn";

//--Merging (Concatenating) Arrays()-----------------
var rajmam = ["Nathiya", "sujith","prithivraj"];
    
    elumalai =["chennamal","vinoth","vishva","Narmatha"];

    tvm     = ["Nallavanpalayam ="];
    result = tvm.concat(rajmam,elumalai);

    console.log(result);
 //---------Date---------///

var d=new Date("2000-10-26");
console.log(d);


//-----------------------------Loops--------------
//------For--Loop-------------

for(var i = 1; i <= 14; i++){

    if(i % 2 !== 0){
    console.log("For and Odd Numbers:" ,i);
 
}
}

//--------while--Loop-----------
var i = 0;
while(i<= 15){ 
    
    if(i % 2 == 0)
    document.write("While and Even Number ",i + " <br> ");
    i++
}
//---------For--In----Object---IN--a-Loop------------------------
const courses={ 
//keys---values----------
  BCA : "SCS" ,
  MCA : "MATHS",  
  Bsc : "CS",  
  Bcom : "CA"
 };
//------key-name-is @--gate]
 for(let key in courses){
    console.log(courses[key]);
 }
 // Adding method Only---------------------------------------------------------------
 const people = {
  elumalai:50, 
  chennammal:47,
  vinoth    :22,
  vishva    :21,
  narmatha  :20,
  personAge: function(){
    return this.elumalai + " " + this.chennammal;
  }
};
  console.log(people.personAge());

 // Adding a Method to an Object----------------------------------------------------------------
 const person = {
            elumalai:50, 
            chennammal:47,
            vinoth    :22,
            vishva    :21,
            narmatha  :20,
        };    
     // Adding a New Methods
person.Age = function(){
    return this.vishva + " " + this.narmatha;  
};
console.log(person.Age());

//For-IN-Array[------------index-----------]-
var array=["Red" , "Blue", "green","Orenge"];
 for(var index in array){
    console.log("color:",array[index]);
     }
//For--OF-Array[---------index---------------]-      
   var arrayOf=["Orenge","Blue","green","Red"];
   for(value of arrayOf){
    //console.log(colors[color]);
    console.log("This color is:",value)
}
 //Assignment-----if-- conditions--

    var newOne = 20;  

    if(newOne >= 60){
      console.log("Buy iphone Mobile.");
    }

    else if(newOne >= 5 && newOne <= 10){
      console.log("Buy Basic Mobile.");
    } 
  
     else if(newOne >= 13){
      console.log("Buy Android Mobile.");
    }

    else{
      console.log("You can't afford Moblie Phone now!.");
    }

//---Switch-----conditions------
let amount = 70; 

switch(true){
    case (amount > 60):
    console.log("Buy iphone Mobile.");
    break;

    case (amount > 5 && amount < 10):
    console.log("Buy Basic Mobile.");
    break;

    case (amount >= 13):
    console.log("Buy Android Mobile.");
    break;

    default:
    console.log("you can't afford Mobile Phone now!");    
}
  //const carName = "volvo";

  function greetUser(){
   
        outPut="Hello World";
  
  for (let i=1; i<=10; i++){
//console.log(outPut);
   console.log(outPut+ " " + i);
  }    
}
greetUser();
  //----objects-------------\\\\
const home = {
            elumalai:"50", 
            chennammal:"47",
            vinoth    :"22",
            vishva    :"21",
            narmatha  :"20"
}
console.log(home.narmatha);

 //-- Query Selecter_------->
$(document).ready(() => {
  $('#Query').click(() =>{
    $(".title").hide();
  });
});
/* Filtering() Methods */

$(document).ready(() => {
  $("#filtering").click(() => {
     $('.box').filter(".ecvn").css({"background-color": "#28f728","border": "2px solid red"});
  });
});

 
//-- Query Selecter_------->

//---------Filter----------//
const mobile_item = [
  {id:1, item: "Android Mobile", cost: "9000"},
  {id:2, item: "iPhone Mobile", cost: "45000"},
  {id:3, item: "Wondow Mobile", cost: "14000"},
  {id:4, item: "Bassic mobile", cost: "1500"}
];
/* --------------------------------Using---Arrow--Function----------------------- */
let affordable = mobile_item.filter((value) => value.cost < 15000);
console.log("affordable Mobile :", affordable);
/* What is Multidimenional Array */
const arrayName  = [
  ['work' , 9],
  ['Eat' , 1],
  ['work' , 7],
  ['Compute' , 3],
  ['Play Game' , 69],
  ['Sleep' , 2],
  ];
  arrayName.splice(1,0,['Event' ,7]);
  
  arrayName.forEach(anyName => {
      
  let percentage = ((anyName[1] / 24) * 100).toFixed();
  anyName[2] = percentage + '%';

  });
  console.table(arrayName);
  /* What is Multidimenional Array */