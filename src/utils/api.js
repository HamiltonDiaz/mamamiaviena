import { getCookie } from "./CookiesUtil";
import { global } from "./utils";
//import axios from "axios"

async function request(endPoint, header, callback) {
    console.log("url api: " + global.api + endPoint);
    try {
        const token2 = await getCookie("TOKEN");
        //header.headers.Authorization = `{Baerer ${token}`;
        const response = await fetch(global.api + endPoint, header);
        const responseJson = await response.json();
        await callback(responseJson);
    } catch (error) {
        console.error(error.name + ": " + error.message);
    }
}

/**
 *  Metodo usado para hacer peticiones get
 * @param endPoint ruta a la cual apuntar
 * @param callback funcion a ejecutar despues de que termine la peticion
 */

//callback= corresponde a una función que se ejecuta depués de realizar la petición
//endPoint= corresponde a la parte final de la uRL de la ruta
//header= corresponde al método http

export async function getRequest(endPoint, callback) {
    const header = {
        method: "GET",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
    };
    await request(endPoint, header, callback);
}

export async function postRequest(endPoint, data, callback) {
    const header = {
        method: "POST",
        mode: "cors",
        body: JSON.stringify(data),
        headers: {
            'Accept': "application/json",
            "Accept-Encoding": "gzip, deflate, br",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "User-agent": "*",
            // 'X-CSRF-Token':?????,
        },
    };
    await request(endPoint, header, callback);
}

export async function putRequest(endPoint, data, callback) {
    const header = {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json; charset=utf-8",
        },
    };
    await request(endPoint, header, callback);
}

