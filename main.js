

/*
1.conmment://


2.cac lenh trong js:
    + Alert
    + console
    + confirm
    + prompt
    + set timeout
    + set interval
    + console.error:
    + console.null:

3.cac lenh if else
var kodms = 
    + undefined
    + 0
    + NaN
    + null
    + '', ""
==> gia tri sai
4.toan tu logic:
    + &&: va
    + ||: or
    + ! : NOT 
5. su dung ham`:
    + for of somthing:
    + template string : `${}` // dung de chen` js vao html
    + backslash (\)
    + find index: console.log(myString.indexOf(''))
                    console.log(myString.LastIndexOf(''))
                    console.log(myString.search(''))
    + cat tham so: console.log(myString.slice())
    + the cho tat ca: console.log(myString.replace(//g, ''))
    + the cho: console.log(myString.replace())
    + convert to Uppercase(viet hoa): console.log(myString.toUpperCase())
    + convert to Lowercase(viet thuong): console.log(myString.toLowerCase())
    + Trim: loai bo tat ca khoang trang (space)
        console.log(myString.trim().length)
    + cat thanh tung chuoi~ : 
     var an = 'javascript'
     console.log(an.split('')) 
    + neu muon cat thanh array console.log(an.split(', '))
6. ARRAY:
    + mang: 
    var something = [
        chua dc het cac kieu du lieu

    ]
    var something = new Array(
        giong voi var something = [

        ]
    _ cac console khi lam viec voi mang:
    + console.log(tenmang. 
        + to string : doi ve kieu string
        + join: chen` them ki tu 
        + pop: xoa phan tu cuoi mang va tra ve phan tu da xoa
        + push: them phan tu vao cuoi mang 
        + shift: xoa 1 phan tu o dau mang va tra ve phan tu da xoa
        + unshift: them phan tu vao dau mang 
        + splicing: xoa 1 phan tu bat ki + chen` 
        + concat : noi 2 mang
        + slicing(): cat
        tenham.prototype.tengan =  ''
                                = function(){
                                    return 
                                }
    goi DATE trong js : 
    function getNextYear(){
    const date = new Date;
    return date.getFullYear() + 1;
}
    console.log(getNextYear)

    MATH OBJECT:
    const random = 
    _ Math.PI // pi
    _ Math.round() // lam tron so
    _ Math.abs() // gia tri tuyet doi
    _ Math.celi()  // lam tron` tren
    _ Math.floor() // lam tron` duoi
    _ Math.random() // random so < 1, * them de chan cuoi
    _ Math.min()
    _ Math.max()
    ung dung:
    function getRandomItem(an){
    const random = Math.floor(Math.random() * an.length);
    return an[random];
    }
    End
    7.Object: 
    function Animal(name, leg, speed){
    this.name = name;
    this.leg = leg;
    this.speed = speed;
}
var parrot = new Animal('an', 2, 4);
console.log(parrot);

*student

function Student(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;

   

}
var student = new Student('Long', 'Bui');
Student.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;


toan tu 3 ngoi:
function getCanVoteMessage(age){
    var result = age > 18 ? "Bạn có thể bỏ phiếu" : 'Bạn chưa được bỏ phiếu'
    return result;
}
// tong cac phan tu cua mang: 
function getTotal(arr) {
    let sum = 0;
    for( let i=0;i < arr.length ; i++){
        sum+=arr[i];
    }
    return sum;
}


// tong gia tri don hang:
var orders = [
    {
        name: 'Khóa học HTML - CSS Pro',
        price: 3000000
    },
    {
        name: 'Khóa học Javascript Pro',
        price: 2500000
    },
    {
        name: 'Khóa học React Pro',
        price: 3200000
    }
]
function getTotal(orders){
    let total = 0
    for( let i = 0; i < orders.length; i++){
        total += orders[i].price;
    }
    return total;
}


//Bài tập sử dụng for...in 
function run(object) {
    let array = [];
    for(let key in object){
        let an = `Thuộc tính ${key} có giá trị ${object[key]}`;
        array.push(an)
    }
    return an;
}
console.log(run({ name: 'Nguyen Van A', age: 16 }));


// FILTER ( VERY IMPORTANT!!!!!!!!!!!!!!!!! )

const sports = [
    {
        name: 'Bóng rổ',
        like: 6
    },
    {
        name: 'Bơi lội',
        like: 5
    },
    {
        name: 'Bóng đá',
        like: 10
    },
]

function getMostFavoriteSport(sports){
    return sports.filter(function(sport){
        return sport.like > 5;
    }
    );
}


// Kỳ vọng
console.log(getMostFavoriteSport(sports)) 
// Output: [{ name: 'Bóng rổ, like: 6 }, { name: 'Bóng đá, like: 10 }]




// bai tap su dung reduce
var sports = [
    {
        name: 'Bơi lội',
        gold: 11
    },
    {
        name: 'Boxing',
        gold: 3
    },
    {
        name: 'Đạp xe',
        gold: 4
    },
    {
        name: 'Đấu kiếm',
        gold: 5
    },
]

function getTotalGold(sports){
    let sum = 0;
    for(let i = 0; i < sports.length; i++){
        sum += sports[i].gold;
    }
    return sum;

}

// Expected results:
console.log(getTotalGold(sports)) // Output: 23

//
HTML DOM: lay all kieu template string
function render(html) {
    const getUl = document.querySelector('ul')
    getUl.innerHTML = html;

};


// RENDER DUNG MAP HTML ( VERY IMPORTANT!!!!!!!!!!!!!!!!! )

var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java']

function render(courses) {
    const getUl = document.querySelector('ul')
    const html = courses.map(function(course){
        return `<li>${course}</li>`
    })
    getUl.innerHTML = html.join("")
}
console.log(render(courses))

// OOP: 
const getButton = document.querySelector('button')
getButton.onclick = function(){
    getButton.style.color = '#fff'
}

// CALL BACK:

// MAP ( tra ve 1 ham`) ( IMPORTANT)
Array.prototype.myMap = function(callback){
    let result = [];
    let arrayLength = this.length;
    for( let i = 0; i < arrayLength; ++i){
        let an = callback(this[i], i);
        result.push(an)

    }
    return result;
}

// FIlTER ( tra ve 1 ham`) ( IMPORTANT)
Array.prototype.myFilter = function(cb){
    let res = [];
    let arrayLength = this.length;
    for ( let i = 0; i < arrayLength; i++){
        let temp = cb(this[i],i)
        if( temp == true ){
            res.push(this[i],i);
        }
        
    }
    return res;
}

// SOME ( TRA VE` KIEU DU LIEU BOOLEAN ) // 1 cai dung thi dung het ( IMPORTANT)

Array.prototype.mySome = function(callback){
    for( let i = 0; i < this.length; i++){
        let cb = callback(this[i], i);
        if ( cb == true ) return true;
    }
    return false;
}

// EVERY ( tra ve kieu du lieu boolean) // 1 cai sai thi tat ca sai 

Array.prototype.myEvery = function(cb){
    for ( let i = 0; i < this.length; i++){
        let temp = cb ( this[i], i)
        if (temp == false) return false
    }
    return true;
}


*************************** PROMISE ********************************
( // SYNC, ASYNC ( is mean setTimeout là tác vụ bất động bộ (async))
// sync (Đây là tác vụ đồng bộ (sync))
 
EXAMPLE:

setTimeout(function() {
    console.log('Dòng này sẽ in ra sau')
}, 0)

// setTimeout là tác vụ bất động bộ (async)
console.log('Dòng này sẽ in ra trước') // Đây là tác vụ đồng bộ (sync)



// CALLBACK HELL 
_ EXAMPLE:

setTimeout = function (){
    console.log(1)
    setTimeout = function (){
        console.log(2)
        setTimeout = function (){
            console.log(3)
            setTimeout = function (){
                console.log(4)
                setTimeout = function (){
                    console.log(5)
                    setTimeout = function (){
                        console.log(6)   
                    , 1000}   
                , 1000}   
            , 1000}   
        , 1000}   
    , 1000}   
, 1000}

************************** BAI TAP CALLBACK ( TRONG HUYEN THOAI ) **************************
function hell(value, cb) {
    cb(value);
}

// Không sử dụng Promise dẫn đến tạo ra callback hell 
hell(1, function (valueFromA) {
    hell(valueFromA + 1, function (valueFromB) {
        hell(valueFromB + 1, function (valueFromC) {
            hell(valueFromC + 1, function (valueFromD) {
                console.log(valueFromD + 1);
            });
        });
    });
});

// Sử dụng Promise sẽ tạo ra đoạn code dễ đọc hơn và vẫn đảm bảo đúng logic
function notHell(value) {
    return new Promise(function (resolve) {
        resolve(value);
    });
}

notHell(1)
    .then(function (value) {
        return value + 1;
    })
    .then(function (value) {
        return value + 1;
    })
    .then(function (value) {
        return value + 1;
    })
    .then(function (value) {
        console.log(value + 1);
    });


***** PROMISE(CONCEPT) *****
_Promise có 3 trạng thái:
    + Pending  ( xu ly )
    + Fulfilled ( hoan thanh )
    + Rejected ( tu choi )

// BAI TAP
let promise = new Promise( 
    function( resolve, reject ){
        
    }
)
promise
    .then(function(){
        console.log ('dung')
})
    .catch(function(){
        console.log('sai')  
}) 
    .finally(function(){
        console.log('done')
})

// resolve: thanh cong thi se chay vao then va finally //
// reject: that bai cung se tra ve finally va catch //
++ API ( URL ) ==> Application programing interface

// Backend --> API --> Fetch --> JSON

++ Fetch tra ve promise


***************************** ECMASCRIPT 6 ********************************

++ Cach dung class trong es6:

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
// Expected results
const person = new Person('Long', 22);
console.log(`Tên: ${person.name}, tuổi: ${person.age}`);
// Output: 'Tên: Long, tuổi: 22'


++ ARROW FUNCTION
let sum = (a, b) => a + b;

++ TOAN TU DESTRUCTURING : 
+ lay ra 1 hay nhieu phan tu co trong mang
+ lay ra 1 hay nhieu phan tu co trong object

_EXAMPLES: 
var array = [Javascript, C++, Python , Ruby]
var [a,b,c,d] = array
console.log(a,b,c,d)


++ TOAN TU REST : 
+ lay ra phan tu con lai cua mang

EXAMPLES:
var array = [Javascript, C++, Python , Ruby]
var [a,b, ...rest] = array
console.log(rest) // hien thi ra Python, Ruby

++ TOAN TU DESTRUCTURING: goi ra 1 object
EXAMPLES:

var course = {
    name: JavaScript
    price: 1000
}
var {name, price} = course

console.log(name, price)

++ CACH DUNG SPREAD: hop nhat 2 mang, 2 objects; su dung voi doi so 

var object1 = {
    name: JavaScript
}

var object2 = {
    price: 1000;
}
var object3 = {
    ...object1
    ...object2
}

console.log(object3) // hien thi ra object1 va object2









// Expected results
console.log(sum(1, 2)) // Output: 3
console.log(sum(2, 2)) // Output: 4











*/
// khai bao bien
// toan tu so sanh 2: === { so sanh kieu du lieu ca type va value}, so sanh tuyet doi
// so sanh khac bang nhau: !==
// neu co !! la khang dinh 



// HTML DOM:
// + Element, Attribue, Text
// + get, in, document,...




let a = 1;
let b = 2;
let c = 3;

if(!(a >= 0)){
    console.log('chuan roi em ');
}
else{
    console.log('sai roi em');
}
const myObject = {
    name :'quoc an',
    hobby: ' suck the dick',
    age: 18,
    sex: 'boiz',

}
console.log(myObject);
const myArray = [
    'con cac an be ty',
    'an dau buoi qua ma',
];

console.log(myArray.join('-'));


console.log(Boolean(0));

function writelog(){
    let mystring = " "
    for(let myObject of arguments){
        mystring += `${myObject}, ` 
        console.log(mystring);
   }
}
writelog('con chym 1', 'con chym 2');
let fullname = 'con cu \'be b\''
console.log(fullname);




const an = 2 > 3 ? "dung roi em" : "sai roi em" // ve 1 auto // toan tu 3 ngoi ( ket hop if else )

const p = [1,2,3,4, 3, 4, 5,5 ,5, 6, 6 ,7];
console.log(p[p.length-1]) // mang ggggggg


const getInput = document.querySelector('input');

getInput.onchange = function(e){
    console.log(e);

}


setTimeout = function (){
    console.log(1)
    setTimeout = function (){
        console.log(2)
        setTimeout = function (){
            console.log(3)
            setTimeout = function (){
                console.log(4)
                setTimeout = function (){
                    console.log(5)
                    setTimeout = function (){
                        console.log(6)   
                    , 6000}   
                , 5000}   
            , 4000}   
        , 3000}   
    , 2000}   
, 1000}

const lines = 'line 1\n'
    + 'line 2\n'
    + 'line 3\n'
    + 'line 4\n'    
    + 'line 5\n'
    console.log(lines)