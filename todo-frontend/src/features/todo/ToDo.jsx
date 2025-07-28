import {Button, Checkbox, InputBase, Stack, Typography} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

function ToDo() {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    return (
        <Stack direction={'column'}>
            <Typography variant={"h4"} fontWeight={600} color={'#505050'}>To Do List</Typography>
            <Stack direction={'row'}>
                {days.map((day) => (
                    <Stack key={day}>
                        <Typography variant={'h5'} fontWeight={500} color={'#505050'}>{day}</Typography>
                        <Stack direction={'row'}>
                            <Checkbox color={'#505050'}/>
                            <InputBase sx={{ml: 1, flex: 1}} multiline/>
                        </Stack>
                        <Button startIcon={<AddIcon/>} style={{color: "#505050"}}>
                            New
                        </Button>
                    </Stack>
                ))}
            </Stack>
        </Stack>
    );
}

export default ToDo;