import {Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import FormatListBulletedSharpIcon from '@mui/icons-material/FormatListBulletedSharp';
import PostAddSharpIcon from '@mui/icons-material/PostAddSharp';
import {useNavigate} from "react-router-dom";

function Sidebar({width}) {
    const navigationButtons = [
        {
            icon: <FormatListBulletedSharpIcon/>,
            title: "To Do List",
            location: '/todo'
        },
        {
            icon: <PostAddSharpIcon/>,
            title: "Notes",
            location: '/notes'
        }
    ]

    const navigate = useNavigate();

    return (
        <Box width={width} height={'100%'} zIndex={1000} sx={{boxShadow: 10}}>
            <List>
                {navigationButtons.map(nav => (
                    <ListItem key={nav.title} disablePadding>
                        <ListItemButton onClick={() => navigate(nav.location)}>
                            <ListItemIcon>
                                {nav.icon}
                            </ListItemIcon>
                            <ListItemText primary={nav.title} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}

export default Sidebar;