import SearchIcon from '@mui/icons-material/Search';
import { Divider, IconButton, InputBase, Paper } from "@mui/material"

const NavSearch = () => {
    return (
        <Paper sx={{
            display: "flex",
            backgroundColor: "rgba(255, 0, 0, 0)",
            boxShadow: "1px 1px 1px 1px rgba(192 128 192 / 50%)"
        }}>
            <InputBase
                sx={{ ml: 1 }}
                placeholder="Rechercher"
            />
            <Divider sx={{ height: 44 }} orientation='vertical' />
            <IconButton className="searchBtn" type="submit" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
    )
}

export default NavSearch