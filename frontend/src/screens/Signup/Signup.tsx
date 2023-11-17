import { Box, Grid, Paper } from '@mui/material'
import SignupImg from '../../assets/Signup-image.svg'
import './Signup.scss'
import SignupForm from './SignupForm'
import SignupHeader from './SignupHeader'

const Signup = () => {
  return (
    <div className='signup__section'>
      <SignupHeader />
      <Grid
        container
        sx={{
          justifyContent: 'start',
          alignItems: 'start',
          minHeight: '55vh',
          marginTop: '15px',
        }}
      >
        <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
          <Box
            component='img'
            sx={{
              height: 233,
              width: 350,
              maxHeight: { xs: 233, md: 233 },
              maxWidth: { xs: 350, md: 350 },
              padding: '20px',
            }}
            alt='The house from the offer.'
            src={SignupImg}
          />
        </Grid>
        <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
          <SignupForm onSubmit={() => {}} />
        </Grid>
      </Grid>
    </div>
  )
}

export default Signup
