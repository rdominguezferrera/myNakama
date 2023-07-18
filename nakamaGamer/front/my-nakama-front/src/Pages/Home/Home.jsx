import { Avatar, Box, Card, CardContent, CardHeader, Paper, Stack, Typography } from '@mui/material'
import React from 'react'

function Home() {

  return (
    <>
      <Box
        className="home"
        sx={{
          backgroundColor: 'yellow',
          height: '100vh',
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flrx-start',
          marginRight: '500px',
          color: 'white',
        }}
      >
        <Box
          sx={{
            width: '25%',
            border: '1px solid white',
          }}
        >
          <Typography>NAKAMA GAMER</Typography>
          <Typography>
            Is a new application to find online playmates in a practical and
            simple way. In a few clicks you will get the results you are looking
            for.
          </Typography>
        </Box>

       
      </Box>
    </>
  )
}

export default Home