import {createTheme} from "@mui/material";
import PokemonHollowTTF from "shared/assets/fonts/pokemon_hollow.ttf";
import PokemonSolidTTF from "shared/assets/fonts/pokemon_solid.ttf";


export const theme = createTheme({
    typography: {
        fontFamily: "Pokemon Hollow",
        fontSize: 36,
    },
    palette: {
        primary: {
            main: "#0075BE"
        },
        secondary: {
            main: "#FFCC00"
        }
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
                @font-face {
                  font-family: 'Pokemon Hollow';
                  font-style: normal;
                  font-display: swap;
                  font-weight: 400;
                  src: url(${PokemonHollowTTF}) format('truetype');
                }
                
                @font-face {
                  font-family: 'Pokemon Solid';
                  font-style: normal;
                  font-display: swap;
                  font-weight: 400;
                  src: url(${PokemonSolidTTF}) format('truetype');
        }
             `,
        }
    }
});