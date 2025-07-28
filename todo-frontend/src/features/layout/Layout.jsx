import {Outlet} from "react-router-dom";
import {Stack} from "@mui/material";
import Sidebar from "./components/Sidebar.jsx";

function Layout() {

    return (
        <Stack direction="row" width={"100%"} height={"100%"}>

            <Stack
                width={"100%"}
                height={"100%"}
                padding={2}>
                <Outlet/>
            </Stack>
        </Stack>
    );
}

export default Layout;