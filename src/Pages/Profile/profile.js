import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { updateProfile } from '../../Redux/loginSlice';
import { registrationService } from '../../Services/registrationAPI';


const Profile = () => {
    const dispatch = useDispatch();
    const [isEditMode, setISEditMode] = useState(false);
    const data = useSelector(state => state.login.userDetails);
    const { firstName, lastName, gender, phone, email, password } = data;

    const updateTextfield = (e) => {
        const { name, value } = e.target
        dispatch(updateProfile({ [name]: value }));
        //console.log('e', name,value);
    }



    return (
        <Box
            sx={{
                width: 500,
                height: 300,
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "20px",
                marginLeft: "30%",
                marginTop: "1 0%"
            }}
        >
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <Typography variant="h6" gutterBottom>
                        Profile
                    </Typography></Grid>
                <Grid item xs={6}>
                    <Button fullWidth variant="outlined" size="small" onClick={() => setISEditMode(true)}>Edit profile </Button>
                </Grid>
                <Grid iten xs={6}>
                    <TextField name="firstName" disabled={!isEditMode} fullWidth value={firstName} label="First Name" variant="outlined" size="small" onChange={updateTextfield} />
                </Grid>
                <Grid item xs={6}>
                    <TextField name="lastName" disabled={!isEditMode} fullWidth value={lastName} label="Last Name" variant="outlined" size="small" onChange={updateTextfield} />
                </Grid>
                <Grid item xs={6}>
                    <TextField disabled value={email} fullWidth label="Email" variant="outlined" size="small" />
                </Grid>
                <Grid item xs={6}>
                    <TextField name="password" disabled={!isEditMode} fullWidth value={password} type="password" label="Password" variant="outlined" size="small" onChange={updateTextfield} />
                </Grid>
                <Grid item xs={6}>
                    <TextField name="phone" disabled={!isEditMode} fullWidth value={phone} type="number" label="phone" variant="outlined" size="small" onChange={updateTextfield} /></Grid>
                <Grid item xs={6}>
                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                        <RadioGroup
                            row
                            name="gender"
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            onChange={updateTextfield}
                            value={gender}
                            disabled={!isEditMode}
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />

                        </RadioGroup>
                    </FormControl>
                </Grid>

                {isEditMode &&
                    <Grid item xs={6}>
                        <Button fullWidth variant="contained" onClick={() => setISEditMode(false)} >Update</Button>
                    </Grid>
                }

            </Grid>

        </Box>
    );
}


export default Profile;