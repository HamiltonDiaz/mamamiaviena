import NumberFormat from 'react-number-format'

export const convertNumber =(num)=>{
    return (
        <>
            <NumberFormat value={num} displayType={'text'} thousandSeparator={true} prefix={'$'} />     
        </>
    )
}