import {Card, CardContent, IconButton, Stack, Typography} from "@mui/material";
import {useState} from "react";
import NoteDetailsDialog from "./dialog/NoteDetailsDialog.jsx";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import EditNoteDialog from "./dialog/EditNoteDialog.jsx";

function Note({note}) {
    const [openDetails, setOpenDetails] = useState(false)
    const [openEdit, setOpenEdit] = useState(false)

    function handleEdit(e) {
        e.stopPropagation()
        setOpenEdit(true)
    }

    return (
        <>
            <Card
                sx={{
                    boxShadow: 5,
                    width: 250,
                    height: 250,
                    cursor: "pointer",
                    '&:hover': {
                        boxShadow: 10,
                    }
                }}
                onClick={() => setOpenDetails(true)}
            >
                <CardContent>
                    <Stack direction="row" justifyContent='space-between'>
                        <Typography variant="h5" color='#505050' fontWeight={500} noWrap>
                            {note.title}
                        </Typography>

                        <Stack direction="row">
                            <IconButton size="small" onClick={handleEdit}>
                                <EditIcon fontSize="small"/>
                            </IconButton>
                            <IconButton size="small">
                                <DeleteOutlineIcon fontSize="small"/>
                            </IconButton>
                        </Stack>
                    </Stack>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            display: '-webkit-box',
                            WebkitLineClamp: '10',
                            WebkitBoxOrient: 'vertical'
                        }}>
                        {note.content}
                    </Typography>
                </CardContent>
            </Card>

            <NoteDetailsDialog open={openDetails} onClose={() => setOpenDetails(false)} note={note}/>
            <EditNoteDialog open={openEdit} onClose={() => setOpenEdit(false)} note={note}/>
        </>
    );
}

export default Note;