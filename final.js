
function calcular(ejercicio, datos1, datos2) {
    if (ejercicio == 'suma') {
        return datos1+ datos2
    } else if (ejercicio == 'resta') {
        return datos1- datos2
    } else if (ejercicio == 'multiplicacion') {
        return datos1* datos2
    } else if (ejercicio == 'division') {
        return datos1/ datos2
    }  else {
        return ( 'SYNTAX ERROR')
    }
        
    }
    


console.log(calcular('FELIPE', 20, 100)) 