import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";


function HeaderSignupAndLogin() {
  return (
    <Box
      
      sx={{
        
        backgroundColor: '#404040',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: '100vw',
        height: '10vh',
        padding: '0 0px',
      }}
    >
      <Link underline="none" className="enlace3" to={'/login'}>
        <Button
          variant="contained"
          color="primary"
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#FF5100',
            width: '150px',
            height: '35px',
            textAlign: 'center',
            lineHeight: '20px',
        
          }}
          
        >
          LOGIN
        </Button>
      </Link>

      <Link underline="none" className="enlace4" to={'/signup'}>
        <Button
          variant="contained"
          color="primary"
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            padding: '0 10px',
            backgroundColor: '#FF5100',
            width: '150px',
            height: '30px',
            textAlign: 'center',
            lineHeight: '20px',
            marginRight:'100px',
            marginLeft: '30px',
          }}

   
        >
          SIGNUP
        </Button>
      </Link>
    </Box>
  )
}

export default HeaderSignupAndLogin
