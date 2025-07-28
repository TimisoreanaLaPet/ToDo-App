import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, TextField} from "@mui/material";
import {useState} from "react";
import {useUpdateNoteMutation} from "../../../../state/api.js";

function EditNoteDialog({open, onClose, note}) {
    const [updateNote, {isLoading}] = useUpdateNoteMutation();

    const [title, setTitle] = useState(note.title);
    const [content, setContent] = useState(note.content);

    async function handleSubmit() {
        await updateNote({
            id: note.id,
            title,
            content,
        }).unwrap()
        onClose()
    }

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Edit Note</DialogTitle>
            <DialogContent
                style={{
                    width: 500,
                }}
            >
                <Stack direction="column" gap={1} pt={1}>
                    <TextField
                        label="Title"
                        placeholder="Enter Title"
                        multiline
                        minRows={1}
                        maxRows={10}
                        variant='outlined'
                        color="secondary"
                        value={title}
                        onChange={(event) => {
                            setTitle(event.target.value);
                        }}/>
                    <TextField
                        label="Content"
                        placeholder="Enter Content"
                        multiline
                        minRows={16}
                        maxRows={32}
                        variant='outlined'
                        color="secondary"
                        value={content}
                        onChange={(event) => {
                            setContent(event.target.value);
                        }}/>
                </Stack>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color={"black"}>Cancel</Button>
                <Button variant={"contained"} onClick={handleSubmit} loading={isLoading}>Save</Button>
            </DialogActions>
        </Dialog>);
}

export default EditNoteDialog;