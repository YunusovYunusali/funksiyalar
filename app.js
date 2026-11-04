// let email="  ali@gmail.com";
// if (email.includes('@') && email.endsWith('.com')) {
//     console.log("email togri");
    
    
// } else {

    
// }
// console.log(email.trim())
//  let fullname = "  ali valiyev   ";

//   fullname = fullname.trim().toUpperCase;
//   let newfullname = "";
//   for(let i of fullname){
//     if(i !== " "){
//         newfullname +=i;   
//     }else if(i === " "){
//         if(!newfullname.includes(" ")){
//             newfullname+=i;
//         }
//     }
//   }
//   console.log(newfullname);
function son(x, y){
    return x+y;
}
console.log(son(5,9));

console.log(son(-9,-7));


//Minutlarni butun son sifatida qabul qilib, uni sekundlarga
//o’girib beradigan funksiya yasang


function minut(sekund){
    return sekund*60;
}
console.log(minut(5));



function nextInteger(int) {
  return int+=1;
}
console.log(nextInteger(3));


console.log("4-masala");
// Funskiya uchburchakning asosi va balandligini qabul qiladi.
// Funksiya uchburchakning yuzini hisoblab qaytarsin. Uchburchak yuzini topish formulasi: S = (asos * balandlik) / 2


function uchburchakYuzi(asos, balandlik) {
console.log((asos*balandlik)/2);

}
uchburchakYuzi(2,3)


console.log("5-masala");
//Funksiya yoshni yil ko’rinishida qabul qiladi. ushbu funksiya
// yoshni kunlarda hisoblab natijani qaytarsin. Bir yil 365 kun deb
// oling.
function ageToDays(age) {
    if (age < 0) {
        console.log("Noto'g'ri yosh kiritdingiz");
    } else if(age > 0){
         yosh = age * 365;
    }
       return yosh
}
   let a = ageToDays(20)
   console.log(a)


   console.log("6-masala");

   //Quyidagi namunalarga muvofiq ravishda funksiyani tana
    //qismini yozing

    function kub(son){
        return son**3
    }
    console.log(kub(5))

    console.log("7-masala");

    //Massivni ichidan birinchi elementini qaytaradigan funksiya yasang.
function firstElement(arr) {
  return arr[0]
}
console.log(firstElement(["1","2","3","4"]));

console.log("8-masala");

//Funksiya 2ta argument qabul qilsin. Ushbu funksiya birinchi
//qiymatning ikkinchi qiymat bilan ko’paytmasini qaytarsin.
function power(x,y) {
return x*y;
}
console.log(power(5,6));

console.log("9-masala");
//Soat ko’rinishida qiymat kiritilsa, sekundlarda qaytaradigan funksiya yasang.
const hourToSekunds =(hour) => hour*3600;
console.log(hourToSekunds(5));

console.log("10-masala");

//.Uchburchakning uchinchi tomonining eng uzun qiymatini
// qaytaradigan funksiya yasang.
// Formula: Eng uzun uchinchi tomon = (tomon1 + tomon2) - 1
function uchinchiTomon(tomon1, tomon2) {
 return uchinchiTomon = (tomon1+tomon2)-1;
}
console.log(uchinchiTomon(10,7));



console.log("11-masala");

//Ikkita son argument sifatida kiritilsa, ushbu ikkala sonni birinchisini ikkinchisiga bo’lgandagi qoldiqni qaytarib beradigan
//funksiya yasang.
function qoldiq(son1, son2) {
return son1%son2;
}
console.log(qoldiq(17,5));


console.log("12-masala");

//Turtburchakning bo’yi va eni berilsa uning yuzini hisoblab
//qaytaradigan funksiya yasang. Formula S = bo’yi * eni
function turtburchakYuzi(boyi, eni) {
return boyi*eni;
}
console.log(turtburchakYuzi(5,4));


console.log("13-masala");

//.Funksiya “a” argument sifatida string ma’lumot qabul qiladi.
//ushbu funksiya “Something” stringiga ” ” bo’sh joy va “a”
//stringini birlashtirib qaytarsin.
function stringQoshish(a) {
return  "something" +" "+ a;
}
console.log(stringQoshish("Yunusov Yunusali"));

console.log("14-masala");
//Quyidagi namunalarga qaragan holatda funksiya yasang
const kvadrat = (raqam) => raqam**2;
console.log(kvadrat(6));









    
   





