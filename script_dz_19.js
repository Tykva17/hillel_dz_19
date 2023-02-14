
// function seyHello(...name){
//     if(name.length > 1){
//         alert('Hello guys ' + name)
//     }else {
//         alert( 'Hello,' + name)
//     }
// }

function seyHello(name){
    let args = Array.prototype.slice.call(arguments);
    console.log(args)
    if(args.length > 1){
        alert('Hello guys ' + args.join(','))
    }else {
        alert( 'Hello,' + args)
    }
}

seyHello('Petro');
seyHello('Petro', 'Ivan', 'Olga');