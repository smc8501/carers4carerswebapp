'use client';

import { Box, Button, Container, Drawer, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import { useState } from "react";
import Link from "next/link";


export default function Page() {
  const [open, setOppen] = useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOppen(newOpen);
  }

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {[
          {text: 'Registration', path: '/RegistrationForm'},
          {text: 'Attendance', path: '/AttendanceSheet'},
          {text: 'Reports', path: '/create-new-report'}].map((item) => (
          <ListItem key={item.text} disablePadding>
            <Link href={item.path} passHref>
              <ListItemButton sx={{ textDecoration: 'none'}}>
                <ListItemText primary={item.text}/>
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (

    <>
      <Container>
        <Button onClick={toggleDrawer(true)}>
          <Typography align="center">Report Generation Web App</Typography>
          </Button>
      </Container>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer> 
    </>
  );
}
