import {Button, IconButton, Stack, Typography} from "@mui/material";
import Note from "./components/Note";
import AddIcon from '@mui/icons-material/Add';
import {useState} from "react";
import AddNoteDialog from "./components/dialog/AddNoteDialog.jsx";

function Notes() {
    const [openAdd, setOpenAdd] = useState(false);

    return (
        <Stack>
            <Stack direction="row" gap={0.5}>
                <Typography variant={"h4"} fontWeight={600} color={'#505050'}>Notes</Typography>
                <IconButton onClick={() => setOpenAdd(true)}>
                    <AddIcon />
                </IconButton>
            </Stack>
            <Stack direction={"row"} mt={2}>
                <Note note={{title: "Note 1", content: "texty texty texty text yeepy yeepy pl pl pl pl polonia This node is pretty i like oranges and bananas and i want a puppy and a cat katzen temple has shit food frfr"}} />
            </Stack>

            <AddNoteDialog open={openAdd} onClose={() => setOpenAdd(false)} />
        </Stack>
    );
}

export default Notes;