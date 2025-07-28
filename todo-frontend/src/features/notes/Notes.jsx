import {IconButton, Pagination, Stack, Typography} from "@mui/material";
import Note from "./components/Note";
import AddIcon from '@mui/icons-material/Add';
import {useState} from "react";
import AddNoteDialog from "./components/dialog/AddNoteDialog.jsx";
import {useGetNotesQuery} from "../../state/api.js";
import NotesSkeleton from "./components/NotesSkeleton.jsx";

function Notes() {
    const [page, setPage] = useState(1)

    const {data: notes, isLoading} = useGetNotesQuery({
        pageSize: 10,
        pageNumber: page,
    })

    const [openAdd, setOpenAdd] = useState(false);

    return (
        <Stack gap={2} height={'100%'}>
            <Stack direction="row" gap={0.5}>
                <Typography variant="h4" fontWeight={600} color={'#505050'}>
                    Notes
                </Typography>
                <IconButton onClick={() => setOpenAdd(true)}>
                    <AddIcon/>
                </IconButton>
            </Stack>

            <Stack direction="row" gap={3} flexWrap='wrap' height={'100%'}>
                {isLoading ? (
                    <NotesSkeleton/>
                ) : notes.content.map((note) => (
                    <Note note={note} key={note.id}/>
                ))}
            </Stack>
            {notes && <Pagination
                page={page}
                onChange={(e, page) => setPage(page)}
                count={notes.totalPages}
                color={'secondary'}
                style={{alignSelf: 'center', paddingBottom: '3px'}}/>}

            <AddNoteDialog open={openAdd} onClose={() => setOpenAdd(false)}/>
        </Stack>
    );
}

export default Notes;