//primitive data type 
//string , number ,boolean, null (empty), undefined,symbol, bigint

// non primitive
//array, object, function

const num  = 30 
const outsidetemp = null
let email = undefined
const id = Symbol('123')
const otherid = Symbol('123')

console.log(id == otherid )
console.log(id === otherid )
console.log(typeof num);

 const bignumber = 45782333333333138129030219n
 const bignumber2 = 45782333333333138129030219
console.log( bignumber);
console.log( bignumber);

const hero = ["ram", "kishan", "shiv", "humumaan "]
console.log(hero)
const myobj = {
    name: "raja",
    age :"22",
}
console.log(myobj)

const myfunction = Function()
{
    console.log('hello sir')
}

console.log(typeof myfunction )
console.log(typeof hero )
console.log(typeof myobj )