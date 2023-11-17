import React from 'react'
import { Box, Grid, Paper } from '@mui/material'

const SignupHeader = () => {
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sx={{
          textAlign: 'center',
          fontSize: { xs: '20px', md: '38px' },
          fontWeight: 600,
        }}
      >
        Join Bootcampr today.
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          textAlign: 'center',
          fontSize: { xs: '15px', md: '24px' },
          fontWeight: 600,
        }}
      >
        Get the experience. Get the job.
      </Grid>
    </Grid>
  )
}

export default SignupHeader
