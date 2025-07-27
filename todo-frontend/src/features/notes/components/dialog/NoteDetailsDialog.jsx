import {Dialog, DialogContent, DialogTitle, Typography} from "@mui/material";

function NoteDetailsDialog({open, onClose, note}) {
    return (
        <Dialog
            open={open}
            onClose={onClose}
        >
            <DialogTitle>
                {note.title}
            </DialogTitle>
            <DialogContent>
                <Typography sx={{ mt: 2 }}>
                    {note.content}
                </Typography>
            </DialogContent>
        </Dialog>
    );
}

export default NoteDetailsDialog;