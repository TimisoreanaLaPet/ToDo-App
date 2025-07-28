import {Skeleton} from "@mui/material";

function NotesSkeleton() {
    return (
        Array.from(Array(10)).map((_, i) => (
            <Skeleton key={i} variant={'rounded'} width={270} height={270} />
        ))
    );
}

export default NotesSkeleton;