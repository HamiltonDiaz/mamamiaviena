import NumberFormat from 'react-number-format'
import { getCookie } from './CookiesUtil'
import { admin } from './Routes'
import { global } from "./utils";

export const convertNumber =(num)=>{
    return (
        <>
            <NumberFormat value={num} displayType={'text'} thousandSeparator={true} prefix={'$'} />     
        </>
    )
}


const replaceWhatsApp=(msg, number)=>{
   
    let textFinal= msg.replace(/á/g, "%C3%A1")
    textFinal = textFinal.replace(/é/g, "%C3%A9")
    textFinal = textFinal.replace(/í/g, "%C3%AD")
    textFinal = textFinal.replace(/ó/g, "%C3%B3")
    textFinal = textFinal.replace(/ú/g, "%C3%BA")
    textFinal = textFinal.replace(/ñ/g, "%C3%B1")
    textFinal = textFinal.replace(/ /g, "%20")
    textFinal = textFinal.replace(/Á/g, "%C3%81")
    textFinal = textFinal.replace(/É/g, "%C3%89")
    textFinal = textFinal.replace(/Í/g, "%C3%8D")
    textFinal = textFinal.replace(/Ó/g, "%C3%93")
    textFinal = textFinal.replace(/Ú/g, "%C3%9A")
    textFinal = textFinal.replace(/Ñ/g, "%C3%91")
    const apiWhatsApp = "https://api.whatsapp.com/send?phone=+" + number + "&text=" + textFinal
    return apiWhatsApp

}

export const msgWhatsapp = (msg)=>{    
    return replaceWhatsApp(msg,"573132055928")
}


const isLogin= getCookie("TOKENAUTH")
export const protectAdmin=(routeName)=>{
    //console.log("ruta:"+routeName)
    if (isLogin){
        return routeName=="" ? admin : `${admin}/${routeName}`
    }
    return "/protectedRoute"
}

export const routeImg=(nameImg)=>{
    return global.routeserver + "/storage/img/" + nameImg
}
