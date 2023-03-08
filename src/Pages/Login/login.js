import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { updateUserName, updatePassword, updateUserDetails } from '../../Redux/loginSlice';
import { loginService } from '../../Services/loginAPI';

const Login =() => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const data = useSelector(state => state.login)
    
    const onLoginClick = () => {
        loginService(data).then(res => {
            console.log("res" ,res);
            dispatch(updateUserDetails(res?.data))
            navigate('/products')
        });
    };
    
    return (
        <Box
            sx={{
                width: 500,
                height: 300,
                border: "1px solid #ccc",
                borderRadius:"8px",
                padding:"20px",
                marginLeft:"30%",
                marginTop:"10%"
            }}
        >
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h6" gutterBottom align="center">
                        Login
                    </Typography></Grid>
                
                <Grid item xs={12}>
                    <TextField fullWidth label="Email" variant="outlined" size="small" onChange={e => dispatch(updateUserName(e.target.value))} />
                </Grid>
                <Grid item xs={12}>
                    <TextField fullWidth type="password" label="Password" variant="outlined" size="small" onChange={e => dispatch(updatePassword(e.target.value))} />
                
                <Grid item xs={12}>
                    <Button fullWidth variant="contained" onClick={onLoginClick}>Login</Button>
                </Grid>
                <Grid item xs={12}>
                    <Button fullWidth variant="outlined" onClick={() => navigate('/registration')}>Create Account</Button>
                </Grid>
            </Grid>
            </Grid>

        </Box>
    )
};

export default Login;