import {Outlet} from "react-router-dom";
import {Stack} from "@mui/material";
import Sidebar from "./components/Sidebar.jsx";

function Layout() {
    const drawerWidth = 240

    return (
        <Stack direction="row" width={"100%"} height={"100%"}>
            <Sidebar width={drawerWidth}/>

            <Stack
                width={"100%"}
                height={"100%"}
                margin={2}>
                <Outlet/>
            </Stack>
        </Stack>
    );
}

export default Layout;