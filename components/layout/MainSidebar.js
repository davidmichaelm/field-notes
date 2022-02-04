import {
  Box, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography,
} from '@mui/material';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import BarChartIcon from '@mui/icons-material/BarChart';
import PropTypes from 'prop-types';
import Link from 'next/link';

export default function MainSidebar({ open }) {
  const drawerWidth = 256;

  const iconSx = {
    sx: { color: 'white' },
  };
  const links = [
    {
      title: 'Dashboard',
      href: '/dashboard',
      icon: <DashboardOutlinedIcon {...iconSx} />,
    },
    {
      title: 'Forms',
      href: '/forms',
      icon: <ArticleOutlinedIcon {...iconSx} />,
    },
    {
      title: 'Reports',
      href: '/reports',
      icon: <BarChartIcon {...iconSx} />,
    },
  ];

  return (
    <Drawer
      anchor="left"
      variant="permanent"
      open={open}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth, boxSizing: 'border-box', backgroundColor: (theme) => theme.palette.primary.main, color: 'white',
        },

      }}
    >

      <Box
        sx={{
          overflow: 'auto',
        }}
      >
        <Box sx={{ p: 2, backgroundColor: (theme) => theme.palette.primary.main, color: 'white' }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
          >
            Field Notes
          </Typography>
        </Box>

        <List>
          {links.map((link) => (
            <Link
              href={link.href}
              passHref
              key={link.title}
            >
              <ListItem button>
                <ListItemIcon>
                  {link.icon}
                </ListItemIcon>
                <ListItemText>
                  {link.title}
                </ListItemText>
              </ListItem>
            </Link>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}

MainSidebar.propTypes = {
  open: PropTypes.bool,
};
