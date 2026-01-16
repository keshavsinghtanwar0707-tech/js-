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
console.log("======================================" )

//stack primitive 
//heap memory non primitive
let myname = "keshav singh tanwar"
let myname1 = myname
myname1 = "singhsaab"

console.log( myname )
console.log( myname1 )

let user = {
    email:"wqdlkdlkal@gmail",
    upi:"kkendndnjdnd@upi"
}

let usertwo  =  user
    usertwo.email= "kdkndlndlndndwndld"
    let userthree  =  usertwo
    usertwo.email= "kdkndlndlndndsadasddwndld"

console.log( user )
console.log( usertwo )
console.log( userthree )
console.log( "==================================================" )

const name = "keshav"
const repocoun = 50
console.log( name + repocoun );
console.log( `hello my name is ${name} and my repo count ${repocoun}` );

const gamename = new String ("keshav")

console.log(gamename[0]);
console.log(gamename.__proto__);
console.log(gamename.length);
console.log(gamename.toLocaleLowerCase());
console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));
console.log(gamename.indexOf("v"));

const newstring = gamename.substring(0,4)
console.log(newstring);


const anotherstring= gamename.slice(-2,3)


console.log(anotherstring);

console.log("anotherstring");





