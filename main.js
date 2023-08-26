

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
    return cacan;
}
console.log(run({ name: 'Nguyen Van A', age: 16 }));

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
HTML DOM:








    
    

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
