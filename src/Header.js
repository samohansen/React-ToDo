import { Divider, Typography } from '@mui/material'

export default function Header() {
    return (
        <div className="header">
            <Typography
                variant="h3"
            >
                Sam's To Do List
            </Typography>
            <Typography
                variant="body2"
                sx={{ fontWeight: 'light', color: 'gray'}}
            >
                For Dr. Liddle's IS 542 Final
            </Typography>
            <br/>
            <Divider/>
        </div>
    );
}