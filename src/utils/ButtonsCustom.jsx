import Button from "@mui/material/Button";
import { styled} from "@mui/material/styles";


export const BotonPrimario = styled(Button)(({ theme }) => ({
    borderColor:"#a9cf55",
    color:"#a9cf55",
    fontWeight: "bold",
    
    "&:hover": {
      backgroundColor:"#55cfb8",
      borderColor:"#55cfb8",
      color:"#FFFF",
    },
}));

export const BotonSecundario = styled(Button)(({ theme }) => ({
  borderColor:"#55cfb8",
  color:"#55cfb8",
  fontWeight: "bold",
  
  "&:hover": {
    backgroundColor:"#7b55cf"  ,
    borderColor:"#7b55cf",
    color:"#FFFF",
  },
}));

