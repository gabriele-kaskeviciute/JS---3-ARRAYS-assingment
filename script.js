// ==== ARRAY =======

// Pirma užduotis

// Sukurkite naują array su žemiau pateiktais personažų pavadinimais.
// Naudodami 'console.log()' atspausdinkite pirmą ir paskutinį elementą.
// Naudodami prompt("Įveskite skaičių nuo 1 iki 6"), atspausdinkite personažą, kurio eilės numeris buvo įvestas

// Jon Snow
// Cersei Lannister
// Daenerys Targaryen
// Theon Greyjoy
// Tyrion Lannister
// Arya Stark



// var names = ["Jon Snow", "Cersei Lannister", "Daenerys Targaryen", "Theon Greyjoy", "Tyrion Lannister", "Arya Stark"];

// console.log(names[0])
// console.log(names[names.length - 1])

// var numberSelection = prompt("Įveskite skaičių nuo 1 iki 6")
// console.log(i = numberSelection)


// Antra užduotis

// Išsaugokite įvestus skaičius į skaiciuMasyvas
// Atspausdinkite tokį rezultatą:

// Skaičių suma: x
// Skaičių vidurkis: x
// Didžiausias skaičius: x
// Mažiausias skaičius: x
// P.S.
// Kad surasti sumą - panaudokite for / while ciklą. To pačio ciklo viduje taip pat galite ieškoti didžiausio/mažiausio skaičiaus ir jį saugoti.


var skaiciuMasyvas = [23, 12, 564, 78, 10]

var sum =0;



skaiciuMasyvas.forEach( num => {
  sum += num;
})

console.log(sum)


