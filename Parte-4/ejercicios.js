const aplanamiento = (arr) => {
   const MSG_ERROR = "Error"
  if(!arr.length) return MSG_ERROR
return arr.reduce((acc,value) => acc.concat(value),[])
} 
function cicloFor (inicio,condicion,actualizacion,cuerpo) {
   if (condicion(inicio)) {
    cuerpo(inicio);
    cicloFor(actualizacion(inicio), condicion, actualizacion, cuerpo);
  }
}
const every = (arr, cicloFor) => {
  const size = arr.length;
  let isTrue = true; 
  cicloFor(0, i => i < size, i => i + 1, (i) => {
      if (!predicado(arr[i])) { 
        isTrue = false; 
        return; 
      }
    }
  );
  return isTrue;
};