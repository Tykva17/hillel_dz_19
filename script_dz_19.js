
function seyHello(...name){
    if(name.length > 1){
        alert('Hello guys ' + name)
    }else {
        alert( 'Hello,' + name)
    }
}

seyHello('Petro');
seyHello('Petro', 'Ivan', 'Olga');