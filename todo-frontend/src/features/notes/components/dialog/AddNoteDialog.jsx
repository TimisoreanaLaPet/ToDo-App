import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, TextField} from "@mui/material";
import {useState} from "react";
import {useCreateNoteMutation} from "../../../../state/api.js";

function AddNoteDialog({open, onClose}) {
    const [createNote, {isLoading}] = useCreateNoteMutation();

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    async function handleSubmit() {
        await createNote({
            title,
            content,
        }).unwrap()
        setTitle("")
        setContent("")
        onClose()
    }

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Add Note</DialogTitle>
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
                <Button variant={"contained"} onClick={handleSubmit} loading={isLoading}>Submit</Button>
            </DialogActions>
        </Dialog>);
}

export default AddNoteDialog;