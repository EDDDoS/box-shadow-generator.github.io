// Creación de variables
const box = document.querySelector('.box-preview .preview');
const textarea = document.querySelector('.box-preview .preview .code-block textarea');
const right = document.querySelector('#right');
const subir = document.querySelector('#updown');
const spread = document.querySelector('#spread');
const blur = document.querySelector('#blur');
const opacity = document.querySelector('#opacity');
const inset = document.querySelector('#inset');

// Valores
const span_right = document.querySelector('label[for="right"] span');
const span_updown = document.querySelector('label[for="updown"] span');
const span_spread = document.querySelector('label[for="spread"] span');
const span_blur = document.querySelector('label[for="blur"] span');

// Creación del arreglo que contiene los input
const inputs = [right, subir, spread, blur, opacity, inset];

// Asignación del evento para el arreglo de Input

    inputs.forEach(elements =>{
        elements.addEventListener('input', ()=>{

            // Se extrae el valor que contienen
            const value_right = right.value;
            const value_up = subir.value;
            const value_spread = spread.value;
            const value_blur = blur.value;
            const color_opacity = opacity.value / 100;

            // Valores
            span_right.textContent = `${value_right}`;
            span_updown.textContent = `${value_up}`;
            span_spread.textContent = `${value_spread}`;
            span_blur.textContent = `${value_blur}`;
            

            // Se dibuja y asignan los valores
            if(inset.checked == true){
                box.style.boxShadow = `inset ${value_right}px ${value_up}px ${value_blur}px ${value_spread}px rgba(0,0,0,${color_opacity})`;
                textarea.textContent = `box-shadow: inset ${value_right}px ${value_up}px ${value_blur}px ${value_spread}px rgba(0,0,0,${color_opacity});`;
            } else {
                box.style.boxShadow = `${value_right}px ${value_up}px ${value_blur}px ${value_spread}px rgba(0,0,0,${color_opacity})`;
                textarea.textContent = `box-shadow: ${value_right}px ${value_up}px ${value_blur}px ${value_spread}px rgba(0,0,0,${color_opacity});`;
            }
        });
    });

function copyButton() {

    // Obtener el texto del campo
    var copyText = document.querySelector('textarea');

    // Seleccionar el texto del campo
    copyText.select();
    copyText.setSelectionRange(0, 99999); // Para dispositivos móviles

    // Copiar el texto dentro del campo
    navigator.clipboard.writeText(copyText.value);
}

// -------- Partí de este fragmento hecho con anterioridad --------
// right.addEventListener('input', ()=>{
//     const value_right = right.value;
//     const value_up = subir.value;

//     box.style.boxShadow = `${value_right}px ${value_up}px 0px -1px #000000`;
//     textarea.textContent = `${value_right}px ${value_up}px 0px -1px #000000`;
// });
