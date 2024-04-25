//Ejercicios
function MathMin (...args){
    const argsSize = args.length
    let minValue = args[0]
    for(let i = 1; i < argsSize; i++){
      if(args[i] < minValue){
        minValue = args[i]
      }
    }
    return minValue
  }
  function esPar(number){
    const esParMsg = "es par"
    const noEsParMsg = "No es par"
    const errorMsg = "Por favor ingresa un numero entero positivo"
     if(number < 0){
      return errorMsg
    }else if(number < 1){
      return esParMsg
    }else if(number === 1){
      return noEsParMsg
    }
    return esPar(number - 2)
  }
  function contarFs(string){
    return contarCaracteres(string, "F")
  }
  function contarCaracteres(string, value){
    const stringSize = string.length
    let contador = 0
    for(let i = 0; i < stringSize; i++){
      if(string[i] === value){
        contador++
      }
    }
    return contador
  }