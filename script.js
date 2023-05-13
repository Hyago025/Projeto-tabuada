function gerar(){
   let numero = window.document.getElementById('txtNumero')
   let tabuada = window.document.getElementById('selTabuada')
   let msg = window.document.getElementById('msg')

   if(numero.value.length == 0){
       msg.innerHTML='Digite um número'
   }
   else{
       let num =Number(numero.value)
       tabuada.innerHTML=""

       for(var cont=1; cont<=10; cont++){
            let item = document.createElement('option')
            item.text = `${num} X ${cont} = ${num*cont}`
            tabuada.appendChild(item)
        }
   }
}