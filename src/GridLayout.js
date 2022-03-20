import './App.css';
import {
    Box,
    Grid,
} from '@mui/material';
import CardDesign from './CardDesign.js';

function GridLayout() {
    return (
        <div style={{ padding: '10px' }}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={4}>
                        <CardDesign.CardDesignOne />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <CardDesign.CardDesignTwo />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <CardDesign.CardDesignThree />
                    </Grid>                    
                </Grid>
            </Box>
        </div>

    );
}

export default GridLayout;