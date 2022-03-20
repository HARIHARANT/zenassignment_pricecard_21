import './App.css';
import {
    Card,
    CardActions,
    CardContent,
    Button,
    Typography,
    Box,
} from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
export function CardDesignOne() {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: '14', textAlign: 'center', fontWeight: 'bold', opacity: '0.5' }} color="text.secondary" gutterBottom>
                    FREE
                </Typography>

                <Typography sx={{ mb: 1.5, textAlign: 'center' }} color="text.secondary">
                    <span style={{ fontWeight: 'bold', fontSize: '45px' }}>$0</span>
                    <span style={{ fontWeight: 'bold', fontSize: '12px' }}>/month</span>
                </Typography>
                <hr />

                <Typography variant="body2">
                    <Box component="span" >
                        <DoneIcon fontSize="small"></DoneIcon>
                        Single User
                    </Box>
                </Typography>
                <Typography variant="body2">
                    <Box component="span" >
                        <DoneIcon  fontSize="small"></DoneIcon>
                        5GB Storage
                    </Box>
                </Typography>
                <Typography variant="body2">
                    <Box component="span" >
                        <DoneIcon fontSize="small"></DoneIcon>
                        Unlimited Public Projects
                    </Box>
                </Typography>
                <Typography variant="body2" sx={{ opacity: '0.5' }}>
                    <Box component="span" >
                        <CloseIcon fontSize="small"></CloseIcon>
                        Unlimited Private Projects
                    </Box>
                </Typography>
                <Typography variant="body2" sx={{ opacity: '0.5' }}>
                    <Box component="span" >
                        <CloseIcon fontSize="small"></CloseIcon>
                        Dedicated Phone Support
                    </Box>
                </Typography>
                <Typography variant="body2" sx={{ opacity: '0.5' }}>
                    <Box component="span" >
                        <CloseIcon fontSize="small"></CloseIcon>
                        Free Subdomain
                    </Box>
                </Typography>
                <Typography variant="body2" sx={{ opacity: '0.5' }}>
                    <Box component="span" >
                        <CloseIcon fontSize="small"></CloseIcon>
                        Monthly Status Reports
                    </Box>
                </Typography>
            </CardContent>
            <CardActions sx={{ textAlign:'center' }}>
                <Button size='large' variant="contained" disableElevation sx={{ opacity: '0.5', margin: '0 auto', borderRadius: '30px', width:'100%' }}>
                    Button
                </Button>               
            </CardActions>
        </Card>
    );
}

export function CardDesignTwo() {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: '14', textAlign: 'center', fontWeight: 'bold', opacity: '0.5' }} color="text.secondary" gutterBottom>
                    PLUS
                </Typography>

                <Typography sx={{ mb: 1.5, textAlign: 'center' }} color="text.secondary">
                    <span style={{ fontWeight: 'bold', fontSize: '45px' }}>$5</span>
                    <span style={{ fontWeight: 'bold', fontSize: '12px' }}>/month</span>
                </Typography>
                <hr />

                <Typography variant="body2">
                    <Box component="span" >
                        <DoneIcon fontSize="small"></DoneIcon>
                        5 Users
                    </Box>
                </Typography>
                <Typography variant="body2">
                    <Box component="span" >
                        <DoneIcon fontSize="small"></DoneIcon>
                        50GB Storage
                    </Box>
                </Typography>
                <Typography variant="body2">
                    <Box component="span" >
                        <DoneIcon fontSize="small"></DoneIcon>
                        Unlimited Public Projects
                    </Box>
                </Typography>
                <Typography variant="body2" sx={{ opacity: '0.5' }}>
                    <Box component="span" >
                        <CloseIcon fontSize="small"></CloseIcon>
                        Unlimited Private Projects
                    </Box>
                </Typography>
                <Typography variant="body2" sx={{ opacity: '0.5' }}>
                    <Box component="span" >
                        <CloseIcon fontSize="small"></CloseIcon>
                        Dedicated Phone Support
                    </Box>
                </Typography>
                <Typography variant="body2" sx={{ opacity: '0.5' }}>
                    <Box component="span" >
                        <CloseIcon fontSize="small"></CloseIcon>
                        Free Subdomain
                    </Box>
                </Typography>
                <Typography variant="body2" sx={{ opacity: '0.5' }}>
                    <Box component="span" >
                        <CloseIcon fontSize="small"></CloseIcon>
                        Monthly Status Reports
                    </Box>
                </Typography>
            </CardContent>
            <CardActions sx={{ textAlign:'center' }}>
                <Button size='large' variant="contained" disableElevation sx={{ opacity: '0.5', margin: '0 auto', borderRadius: '30px', width:'100%' }}>
                    Button
                </Button>               
            </CardActions>
        </Card>
    );
}

export function CardDesignThree() {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: '14', textAlign: 'center', fontWeight: 'bold', opacity: '0.5' }} color="text.secondary" gutterBottom>
                    PRO
                </Typography>

                <Typography sx={{ mb: 1.5, textAlign: 'center' }} color="text.secondary">
                    <span style={{ fontWeight: 'bold', fontSize: '45px' }}>$49</span>
                    <span style={{ fontWeight: 'bold', fontSize: '12px' }}>/month</span>
                </Typography>
                <hr />

                <Typography variant="body2">
                    <Box component="span" >
                        <DoneIcon fontSize="small"></DoneIcon>
                        Unilimited Users
                    </Box>
                </Typography>
                <Typography variant="body2">
                    <Box component="span" >
                        <DoneIcon fontSize="small"></DoneIcon>
                        150GB Storage
                    </Box>
                </Typography>
                <Typography variant="body2">
                    <Box component="span" >
                        <DoneIcon fontSize="small"></DoneIcon>
                        Unlimited Public Projects
                    </Box>
                </Typography>
                <Typography variant="body2" sx={{ opacity: '0.5' }}>
                    <Box component="span" >
                        <CloseIcon fontSize="small"></CloseIcon>
                        Unlimited Private Projects
                    </Box>
                </Typography>
                <Typography variant="body2" sx={{ opacity: '0.5' }}>
                    <Box component="span" >
                        <CloseIcon fontSize="small"></CloseIcon>
                        Dedicated Phone Support
                    </Box>
                </Typography>
                <Typography variant="body2" sx={{ opacity: '0.5' }}>
                    <Box component="span" >
                        <CloseIcon fontSize="small"></CloseIcon>
                        Free Subdomain
                    </Box>
                </Typography>
                <Typography variant="body2" sx={{ opacity: '0.5' }}>
                    <Box component="span" >
                        <CloseIcon fontSize="small"></CloseIcon>
                        Monthly Status Reports
                    </Box>
                </Typography>
            </CardContent>
            <CardActions sx={{ textAlign:'center' }}>
                <Button size='large' variant="contained" disableElevation sx={{ opacity: '0.5', margin: '0 auto', borderRadius: '30px', width:'100%' }}>
                    Button
                </Button>               
            </CardActions>
        </Card>
    );
}

export default { CardDesignOne, CardDesignTwo, CardDesignThree };