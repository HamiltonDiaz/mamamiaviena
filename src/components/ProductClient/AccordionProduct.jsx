import React, { useState, useEffect } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import {
    FormControlLabel,
    Typography,
    Checkbox,
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const AccordionProduct = ({ sublines, line, handleChange, selecteditem }) => {
    const [expanded, setExpanded] = useState(false);
    const panel = `panel${line.id}`
    const itemSelected = (id) => {
        const idSublines = sublines.map((item) => item.id)
        const item =idSublines.indexOf(id)
        return item
    }

    useEffect(() => {
        sublines.map((item)=>{
            //Verifica si en la misma posición se indico true para informar que esta seleccionado
            //indexOf devuelve la posición dond esta ubicado el item
            //selecteditem se agrego true en componente padre en la misma posición que estan asignadas las sublines
            if (selecteditem[sublines.indexOf(item)]===true && item.lineid== line.id){
                setExpanded(panel)
            }            
        })        
    }, [])



    const handelExpand = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (

        <Accordion
            expanded={expanded === panel} onChange={handelExpand(panel)}
        >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`${panel}a-content`}
                id={`${panel}a-header`}
            >
                <Typography>{line.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                {sublines &&
                    sublines.map((item, id) => (

                        item.lineid == line.id ?
                            <FormControlLabel
                                key={`${item}${id}`}
                                control={
                                    <Checkbox
                                        onChange={(e) => handleChange(e, itemSelected(item.id))}
                                        inputProps={{
                                            'aria-label': 'controlled'
                                        }}
                                        name="sublinesid"
                                        value={item.id}
                                        checked={selecteditem[itemSelected(item.id)]}
                                    />
                                }
                                label={item.id + item.name + itemSelected(item.id)}
                            />
                            :
                            ""
                    ))

                }

            </AccordionDetails>
        </Accordion>





    )
}

export default AccordionProduct