import {Checkbox, FormControlLabel, FormGroup, InputBase, Stack, TextField, Typography} from "@mui/material";

function ToDo() {
    return (
        <Stack direction={'column'}>
            <Typography variant={"h4"} fontWeight={600} color={'#505050'}>To Do List</Typography>
            <Stack direction={'row'}>
                <Stack direction={'column'}>
                    <Typography variant={'h5'} fontWeight={500} color={'#505050'}>Monday</Typography>
                    <Stack direction={'row'}>
                        <Checkbox color={'#505050'}/>
                        <InputBase sx={{ ml: 1, flex: 1 }}/>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    );
}

export default ToDo;