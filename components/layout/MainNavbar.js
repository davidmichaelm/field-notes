import React, { useState } from 'react';
import MainSidebar from './MainSidebar';

export default function MainNavbar() {
  // eslint-disable-next-line no-unused-vars
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <>
      {/* <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}> */}
      {/*  <Toolbar> */}
      {/*    <Typography variant="h6" noWrap component="div"> */}
      {/*      Field Notes */}
      {/*    </Typography> */}
      {/*  </Toolbar> */}
      {/* </AppBar> */}
      <MainSidebar open={sidebarOpen} />
    </>
  );
}
