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


console.log("15-masala")

//.Funksiya raqam qabul qiladi. Agar ushbu raqam 0dan kichik
//yoki teng bo’lsa funksiya rost qaytarsin aks holda yolg’on.
function noldan(raqam) {
if(raqam<=0){
    console.log(Boolean(1)); 
}else {
    console.log(Boolean(0)); 
}
}
noldan(-2)

console.log("16-masala")
//Funksiya ko’p burchakli shaklning burchaklar sonini qabul
// qiladi. Natijada funksiya ushbu shaklning ichki burchaklar
// yig’indisini qaytarsin. Formula (n - 2) x 180
function ichkiBurchaklar(n) {
  console.log(`"Yig'indi : "${(n-2)*180}`);
}
ichkiBurchaklar(5)



console.log("17-masala");
//Basketbol o’yinida ikki ochkolik va uch ochkolik gollar
// mavjud. Agar funksiya 1-argument sifatida ikki ochkolik gollar
// sonini va 2-argument sifatida uch ochkolik gollar sonini qabul
// qilsa, jamoaning jami ochkosini qaytaradigan funksiya yasang.
function ochkolar(x,y) {
let achko2 = x*2;
let achko3 = y*3;
console.log(`"Yig'indi :" ${achko2+achko3}`)
}
ochkolar(5,3)

console.log("18-masala");
//.Quyidagi namunalarni kuzatgan holda unga muvofiq
// funksiya yasang.
// Namuna:
// nameString("Mubashir") ᔍ "MubashirEdabit"
// nameString("Matt")
function namString(name){
    console.log( name + "Edabit");
}
namString("Matt")

console.log("19-masala")
//Ikkita son kiritilsa, agar ularning yig’indisi 100dan kichkina
// bo’lsa rost, katta bo’lsa yolg’on qiymat qaytaradigan funksiya
// yasang.
function ikkitaSon(x,y) {
if (x+y < 100) {
    console.log(Boolean(1)); 
}else{
    console.log(Boolean(0));
    
}
}
ikkitaSon(25,85)

console.log("20-masala");
//Quyidagi namunalarni kuzatgan holda unga muvofiq keladigan funksiya yasang.
// Namuna:
// printArray(1) ᔍ [1]
// printArray(3) ᔍ [1, 2, 3]
// function printArray(num){
//     let result = [];
//     for(let i =0 ; i<=num; i++){
//         result[i]=i+1;
//     }
//     return result;
// }
// console.log(printArray(5))

console.log("21-masala");
//Fermada turli xildagi hayvonlar mavjud. Shunday funksiya
// yasangki, ushbu funksiya jami fermadagi hayvonlar oyoqlari
// nechta ekanligini hisoblab qaytarsin. Bunda funksiya birinchi
// argument sifatida tovuqlar sonini, ikkinchi argument sifatida
// qo’ylarni va uchinchi argument sifatida sigirlarning sonini
// qabul qiladi.
function oyoqlar(tovuq, qoy, sigir) {
    let tovuqlar = tovuq*2;
    let qoylar = qoy*4;
    let sigirlar = sigir*4;
    console.log(`"Jami :" ${tovuqlar + sigirlar + qoylar}`);
    
}
oyoqlar(2,5,8)


console.log("22-masala");

//Javascriptda “&&” matiqiy operatori mavjud. Ushbu operator ikkita mantiqiy ifoda qabul qiladi. Quyidagi namunaga
// muvofiq keladigan funskiya yasang. Ushbu operatordan foydalangan holda!
function  and(x,y){
    if(x==true && y==true){
        console.log(true);
        
    }else{
        console.log(false);
        
    }
}
and(true,false)

console.log("23-masala");
//Funksiya 2ta son qiymat qabul qiladi. Agar 1-son 2-songa
// teng bo’lsa rost, aks holda yolg’on qiymat qaytsin. Bunda ikkala
// qiymatning ma’lumot turi bir xil bo’lsin.
function tengMi(x, y) {
if(x==y){
    console.log(true);
}else{
    console.log(false);
}
}
tengMi(5,7)

console.log("24-masala");
//Futbolda ochkoni hisoblaydigan funksiya yasang. Bunda
// funksiya yutishlar soni, duranglar soni va mag’lubiyatlar sonini
// qabul qiladi. 1ta yutish = 3 ochko, 1ta durang = 1 ochko, 1ta
// mag’lubiyat = 0 ochko hisoblanadi.
function futbolOchko(yutishlar, duranglar, maglubiyatlar) {
let yutish = yutishlar*3;
let maglubiyat = maglubiyatlar*0;
console.log(`Hammasi :  ${yutish + duranglar + maglubiyat }`);

}
futbolOchko(5,8,3)

console.log("25-masala");

//Funskiya soatlar va minutlarni argument sifatida qabul
// qiladi. Ushbu funkisya soatlar va minutlarni sekundga o’girib
// ularning yig’indisini qaytarsin.
function sekundlar(soat, minut) {
console.log(`Sekund : ${ (soat*3600) + (minut*60)}`);

}
sekundlar(1,3)

console.log("26-masala");

//Quyidagi namunalarni kuzatgan holda funksiya yasang.
//Namuna:
// fun(4) ᔍ false
// fun(9) ᔍ false
// fun(7) ᔍ true
function fun(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= n / 2; i++) {
    if (n % i === 0) {
      return false; 
    }
  }
  return true; 
}
console.log(fun(7));


console.log("27-masala");
//Funskiay 2ta istalgan turdagi qiymatlar qabul qiladi. Agar
// ushbu 2ta qiymat ham qiymat jihatidan ham ma’lumot turi
// jihatidan teng bo’lsa rost, aks holda funkisya yolg’on qiymat
// qaytarsin.
function tengMi(x, y) {
if(x === y){
    console.log(true);
}else{
    console.log(false);
}
}
tengMi(1,true)








    
   





