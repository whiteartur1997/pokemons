import React, {FC, PropsWithChildren} from 'react';
import {theme} from "../config/theme";
import CssBaseline from "@mui/material/CssBaseline";
import ThemeProvider from '@mui/material/styles/ThemeProvider';

export const MUIThemeProvider:FC<PropsWithChildren> = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};