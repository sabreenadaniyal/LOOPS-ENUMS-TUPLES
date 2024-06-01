//============================================LOOPS=============================================================
//------------------------------------------ FOR LOOP----------------------------------------------------------
//******************(This loop repeats a portion of code a specified number of times)**************************
let hobbies:string[]=["Painting", "Fashion_Designing", "Traveling", "Baking"]
//let message:string=""
for(let i=0; i<hobbies.length; i++){
    console.log(`He studied ${hobbies[i]} in Paris`);
}

//------------------------------------------FOR OF LOOP------------------------------------------------------------
//************(Loop operates on the values sourced from an iterable one by one in sequential order)**************
let Directions:string[]=["North","South","East","West"]
for(let direction of Directions){
  if(direction === Directions[0])
  console.log("My house is north of the city");
else if(direction === Directions[1]){
  console.log("The army attacked from south directions");
}else if(direction === Directions[2]){
  console.log("Rows of vegetables should be planted in an east direction");
}else
  console.log("Avoid using large glass designs in the west");
}

//------------------------------------------WHILE LOOP-----------------------------------------------------------
//*********(When the While condition is true, then the loop repeatedly executes a portion of code)**************
let age:number=25
while(age <= 30){
 console.log(age);
  age++
}
//--------OR---------
while(age >= 5){
 console.log(age);
 age--
}

//===========================================ENUMS==============================================================
//***********An enum is a special "class" that represents a group of constants(unchangeable variables)************
enum Slip{
    CustomerName="Sadia",
    CustomerId="abc3569",
    Cash="Twenty_Five Thousand",
    CardCharge="yes"
}
console.log(Slip);
//-------OR--------
console.log(Slip.Cash);

//===================================TUPLES(Sequentially value in an array)====================================
//****************A tuple is a typed array with a pre-defined length and types for each index*******************
//name,age,is studied
type Student=[string,number,boolean]
let university:Student[]=[
    ["My name is Hiba", 25, true],
    ["Kashaf is very genious student", 20, true ],
    ["Sana like painting", 15, false]
]
console.log(university);
//-----------OR-----------
console.log(university[1][0]);
