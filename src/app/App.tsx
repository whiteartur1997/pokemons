import {routes} from "app/config/routes/routes";
import {RouterProvider} from "react-router";

const App = () => {
    return(
        <RouterProvider router={routes} />
    )
};

export default App;