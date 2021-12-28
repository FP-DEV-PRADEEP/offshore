import { createGlobalStyle } from "styled-components";
// fonts
import GillSansBoldwoff2 from './fonts/GillSans-Bold.woff2'
import GillSansBoldwoff from './fonts/GillSans-Bold.woff'

function Button(props) {
    return ( ` @font-face{ font-family:'Gill Sans'; 
src:url('${GillSansBoldwoff2}') format('woff2'),url('${GillSansBoldwoff}') format('woff');
font-weight:bold;font-style:normal;font-display:swap;}`
)
}

export default Font;