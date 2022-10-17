import ReactDOM from 'react-dom/client';
import App from "./app/App";
import {StoreProvider} from "app/providers/StoreProvider/ui/StoreProvider";
import {MUIThemeProvider} from "app/providers/ThemeProvider";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StoreProvider>
        <MUIThemeProvider>
            <App />
        </MUIThemeProvider>
    </StoreProvider>
);