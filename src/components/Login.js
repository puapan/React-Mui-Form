import React, {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LoginIcon from '@mui/icons-material/Login';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert';

const Login = () => {
    const [error, setError] = useState({
      status: false,
      msg: "",
      type: ""
    })
    const handleSubmit = (e) => {
      e.preventDefault();
      const data = new FormData(e.currentTarget);
      const actualData = {
        email: data.get('email'),
        password: data.get('password'),
      }
      if (actualData.email && actualData.password) {
        console.log(actualData);
  
        document.getElementById('login-form').reset()
        setError({ status: true, msg: "Login Success", type: 'success' })
      } else {
        setError({ status: true, msg: "All Fields are Required", type: 'error' })
      }
    }   
    return <>

    <Container component ="main" maxWidth="xs">
        <CssBaseline/>
        <Box 
        sx={{
            marginTop: 10,
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
        }}>
<Avatar sx={{m:1, bgcolor:'secondary.main'}}>
<LoginIcon/>
</Avatar>
<Typography component ="h1" variant="h6">
    Log In 
</Typography>
<Box component ="form" id="login-form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}>
<TextField 
margin="normal"
required
fullWidth
id="email"
label="Enter your Email Address"
name="email"
autoComplete="email"
autoFocus
/>
<TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Enter your Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember Email & Password"
            />
              <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Log In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
</Box>
{error.status ? <Alert severity={error.type} sx={{ mt: 3 }}>{error.msg}</Alert> : ''}
        </Box>
    </Container>
    </>
}

export default Login;