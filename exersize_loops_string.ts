//--------------------------------שאלה 1----------------------------

let first_latter=97
let last_latter = 122

let big_latter=65
let bigLast_latter = 90

let abcABC = ""


for(let i = first_latter ; i<=last_latter; i++){
    abcABC += String.fromCharCode(i)
}

for(let i = big_latter ; i<=bigLast_latter; i++){
    abcABC += String.fromCharCode(i)
}

console.log(abcABC);



//------------------------שאלה 2----------------------------------

let str7 = "olleh"
let  res7 = ""

for(let i = str7.length-1 ; i >= 0 ; i--){
res7 += str7[i]
}
console.log(res7);


//-------------------------שאלה 3-----------------------------------

let srting_a = "hello"
let string_b = "12345"
let string_res = ""

for(let i = 0 ; i<srting_a.length; i++){
    string_res+= srting_a[i]+string_b[i]
}

console.log(string_res);


//---------------------------שאלה 4---------------------

let maarch = [1,2,3,4,5]
let sum = 0

for(let i = 0; i<maarch.length ; i++){
    sum+=maarch[i]
}

console.log(sum/maarch.length);

//-------------------שאלה 5--------------------------------

let maarach5 = [1,2,3,4,5]
let sum5 = 0

for(let i = 0; i<maarch.length ; i++){
    if(i==0)
    sum5+=maarach5[i+1]

    else if(i==maarch.length-1)
    sum5 += maarach5[i-1]

    else{
        sum5 += maarach5[i-1]
        sum5 +=maarach5[i+1]
    }
}

console.log(sum5);


//-------------------------------שאלה 6---------------------------

let maarach6  = [7,2,6,1,4,3,5]
let saver = 0

console.log("first maarch: "+maarach6);

for(let i = 1 ; i<maarach6.length ; i++){
    for (let j = 0; j < i; j++)
     if(maarach6[i]<maarach6[j]){
        saver = maarach6[i]
        maarach6[i] = maarach6[j]
        maarach6 [j] = saver
    }
    
}

console.log("sort maarach: " + maarach6);

