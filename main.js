let lista = ['miguel', 'diana', 'diego', 'willmer', 'adrian',
'andres', 'emmanuel', 'loza', 'andrea'];
let lista2 = {ids: 123};

let resultado =  lista.pop();
let resultado2 = lista.push(100);
let resultado3 = lista.shift();
let resultado4 = lista.unshift({nombre: 'profesor'});
let resultado5 = lista.splice(3, 1, {id: 123});
let resultado6 = lista.sort();
let resultado7 = lista.reverse();
let resultado8 = lista.join('/');
let resultado9 = lista.concat(lista2);
let resultado10 = lista.slice(3, 6);
let resultado11 = lista.some((data, i, lista) => {
    //console.log(i);
    //console.log(data);
    //console.log(lista);
    console.log(data == 'adrian');
});


console.log(`Lista Original`);
console.log(lista);
console.log(`Afectada por pop`);
console.log(resultado);
console.log(`Afectada por push`);
console.log(resultado2);
console.log(`Afectada por shift`);
console.log(resultado3);
console.log(`Afectada por unshift`);
console.log(resultado4);
console.log(`Afectada por splice`);
console.log(resultado5);
console.log(`Afectada por sort`);
console.log(resultado6);
console.log(`Afectada por reverse`);
console.log(resultado7);
console.log(`Afectada por join`);
console.log(resultado8);
console.log(`Afectada por concat`);
console.log(resultado9);
console.log(`Afectada por slice`);
console.log(resultado10);
