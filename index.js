console.log('----1----');
const ciklas1 = ['Labas', 'Labas', 'Labas', 'Labas', 'Labas'];
for (let i = 0; i < 5; i++) {
    console.log(ciklas1[i]);
}

console.log('----2----');
const ciklas2 = [0, 1, 2, 3, 4,];

for (let i = 0; i < 5; i++) {
    console.log(ciklas2[i]);
}

console.log('----3----');
const ciklas3 = [0, 10, 20, 30, 40];

for (let i = 0; i < 5; i++) {
    console.log(ciklas3[i]);
}

console.log('----4----');
const ciklas4 = [49, 50, 51, 52, 53];

for (let i = 0 ; i < 5; i++) {
    console.log(ciklas4[i]);
}
 console.log('----5----');
const ciklas5 = [10, 8, 6, 2, 4];

for (let i = 0; i < 5; i++) {
    console.log(ciklas5[i]);
}

console.log('----6----');
const ciklas6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

for (let i = 0; i < 20; i+=3) {
    console.log(ciklas6[i]);
}

console.log('----7----');
const skaicius = 7

for (let i = 1; i <= 10; i++) {
  const lentele = i * skaicius;
  console.log(`${skaicius} * ${i} = ${lentele}`);
}

console.log('----8----');
const inch = 1 ;
const cm = 2.54;

for (let i = 1; i <= 10; i++) {
  const colis1 = cm * inch;
  const coliai = i * colis1;
  console.log(`${i} inch = ${coliai} cm`);
}

console.log('----9----');
const indelis = 100;
const palukanuNorma = 2;
const metai = [2021, 2022, 2023, 2024, 2025];

 for (let i = 1 ; i < metai.length; i++) {
     const proc = palukanuNorma / 100;
     const uzdNuoPalukanu = indelis * i * proc;
     console.log(`Palukanu norma: ${palukanuNorma}%. Uzdarbis uz ${metai[i]} metus : ${uzdNuoPalukanu} eur. Galutine metu suma: ${uzdNuoPalukanu + indelis} eur.`);
 }

console.log('----10----');
//galvosukis...

console.log('----Funkcijos----');
console.log('----1----');

const skaiciai = [2, 3];

 function skaiciuSuma(skaiciuSarasas) {
     let skaiciuSuma1 = 0;
     skaiciuSuma1 += skaiciuSarasas[0];
     skaiciuSuma1 += skaiciuSarasas[1];
    return skaiciuSuma1;
 }

const skaiciuSarasoSuma = skaiciuSuma(skaiciai);
console.log('Skaiciu suma:', skaiciuSarasoSuma);

console.log('----2----');

const num1 = 100;
const num2 = 530;


function palyginti(num1, num2) {
    if (num1 > num2) {
      return `${num1} yra daugiau negu ${num2}`;
    } else if (num2 > num1) {
        return `${num2} yra daugiau negu ${num1}`;
    } else if (num1 === num2) {
        return `${num1} yra lygus ${num2}`;
    } else {
        return 'komanda negalima';
    }
}
let rezultatas = palyginti(num1, num2);
console.log(rezultatas);

console.log('----3---?-');

const metaiKe = 1600;
const num3 = 4;
const num4 = 400;

function metaiKeliemieji(metaiKe) {
    if (Number.isInteger(metaiKe / num4 || metaiKe / num3)) {
        return `${metaiKe} yra keliemieji metai`
    } else {
        return `${metaiKe} Nekeliemieji metai`
    }
}
let kelemieji = metaiKeliemieji(metaiKe);
console.log(kelemieji);

const m = 1600;
function kelM(m) {
    if (m % 4 === 0) {
        return `${m} yra keliemieji metai`
    } if (m % 400 === 0) {
        return `${m} yra keliemieji metai`
    } else {
        return `${m} Nekeliemieji metai`
    }
}
let metKel = kelM(m)
console.log(metKel);

console.log('----4----');
const num5 = 11;

function numKvadr(num5) {
    return num5 ** 2 
}
let kvadrate = numKvadr(num5);
console.log(kvadrate);

console.log('----5----');
 
const iki = 5;

const nuo = 1;
function sumaIntervale(nuo, iki) {
    let suma = 0;
    for (let i = nuo; i <= iki; i++) {
        suma += i;
    } if ( iki > 1) {
        return suma;
    } else {
        return 'Irasykite skaiciu kuris didesnis uz 1 "iki" langelyje'
    }
}

console.log(sumaIntervale(nuo, iki));

console.log('----6----');
const skaicius1 = 10;
const daliklis = 2;
function liekana(nuo, skaiciusDalinimui, daliklis) {
    let count = 0;

    for (let i=nuo; i<skaicius1; i++) {
        if (i % daliklis === 0) {
            count++;
        }
    }

    return `Skaiciu intervale tarp ${nuo} ir ${skaicius1}, besidalijanciu be liekanos is ${daliklis} yra ${count} vienetai`
}

console.log(liekana(nuo, skaicius1, daliklis));

console.log('----7----');
 const tekstas = 'XSYTO';

 function tekstoIlgis(tekstas) {
     return `Tekstas '${tekstas}' yra ${tekstas.length} simboliu ilgio`;
 }
console.log(tekstoIlgis(tekstas));

console.log('----8----');
 const mob = [8, 6, 7, 7, 7, 7, 7, 7, 7, 7]

 function telefonoNumeris(mob) {
    if (mob.length < 10){
        return 'Irasikyte 10-ies skaitmenu numeri!';
    } if (mob.length === 10) {
        return "(XXX) XXX-XXXX";
    }
 }
 console.log(telefonoNumeris(mob));

console.log('----9----');

const tekstas1 = 'namu';
const tekstas2 = 'darbai';

function palygintiIlgi(tekstas1, tekstas2) {
    if (tekstas1.length > tekstas2.length) {
        return `Tekstas '${tekstas1}' yra ilgesnis uz teksta '${tekstas2}'`
    } if (tekstas1.length < tekstas2.length) {
        return `Tekstas '${tekstas2}' yra ilgesnis uz teksta '${tekstas1}'`
    } else {
        return `Tekstas '${tekstas1}' ir tekstas '${tekstas}' yra lygus  `
    }
}
console.log(palygintiIlgi(tekstas1, tekstas2));

console.log('----10----');

const tekstas3 = 'ararataaaaas';
const raide = 'a';
function raideA(tekstas3, raide) {
    let raidesSuma = 0; 
    for (let i = 0; i < tekstas3.length; i++){
        if (tekstas3.charAt(i) == raide){
            raidesSuma += 1;
        }
    }
    return raidesSuma
}
console.log(raideA(tekstas3, raide));