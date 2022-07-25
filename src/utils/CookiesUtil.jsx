/**
 * name= corresponde al nombre a asignar a la cookie
 * value= corresponde al valor a asginar a la cookie
 * days= corresponde al valor en días en que expira la cookie.
 */

//link https://medium.com/angular-chile/cookies-con-javascript-9160655d4160

export const setCookie = (name, value, hours) => {
    let expires = "";
    if (hours) {
        let date = new Date();
        
        console.log(hours,hours * 60 * 60 * 1000)
        date.setTime(date.getTime() + hours * 60 * 60 * 1000); //convierte los días en milisegundos
        let date2= new Date()
        date2.setTime(date.getTime())
        console.log("fecha inicial:" + date2.toUTCString())
        console.log("fecha final:" + date.toUTCString())

        expires = "; expires=" + date.toUTCString(); // para dar formato "Wed, 14 Jun 2017 07:00:00 GMT"
        //expires queda así "; expires=Fri, 22 Jul 2022 13:58:00 GMT"
        //console.log(expires)
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/; SameSite=none; Secure";

    console.log(name + "=" + (value || "") + expires + "; path=/");
    // la cookie que así: "name=value;  expires=Fri, 22 Jul 2022 13:58:00 GMT ; path=/"
};

/**
 *
 * @param {*} name contiene el nombre de la cookie a buscar
 * @returns retorna la cookie buscada
 */
export const getCookie = (name) => {
    let nameEQ = name + "=";
    let ca = document.cookie.split(";"); //se separan todas las cookies
    for (var i = 0; i < ca.length; i++) {
        //se recorren todas la cookies guardadas en la variable ca.
        let c = ca[i];
        while (c.charAt(0) === " ") {
            //charAt = para verificar si el primer caracter tiene espacio
            c = c.substring(1, c.length);
            //si tiene espacio toma la cadena desde el siguiente caracter hasta el final
        }
        
        if (c.indexOf(nameEQ) === 0) {
            //cuando es 0 significa que es igual
            //indexOf= busca dentro del texto almacena en "c" si se encuentra la cookie que se está buscando
            return c.substring(nameEQ.length, c.length);
        }
    }
    return null;
};
