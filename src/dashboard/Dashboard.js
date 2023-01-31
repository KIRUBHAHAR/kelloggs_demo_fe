import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MainListItems from "./listItems";
import SecondaryListItems from "./secondarylist";
//  import TableData from './MaterialTable';
import ReactDataTable from "../components/Table";

import NationalPricing from "../components/NationalPricing";

import { useSelector, useDispatch } from "react-redux";

import EnhancedTable from "../components/SampleTable";

import { Outlet } from "react-router-dom";
import StackedBar from "../components/StackedBar";
import AppUsageChart from "../components/DonutChart";
import AdoptionTrend from "../components/AdoptionTrend";
import ActivevsInactive from "../components/ActivevsInactive";
import BasicBar from "../components/BasicBar";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://www.petqcheck.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 275;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const mdTheme = createTheme();

function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const category = useSelector((state) => state.dashboard.category);
  const page = <></>;
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="absolute"
          open={open}
          sx={{
            background: "#d7282e",
          }}
        >
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Kellogg's PVP Tool
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List
            component="nav"
            sx={{ p: 2, display: "flex", flexDirection: "column" }}
          >
            <MainListItems />
            <Divider sx={{ my: 1 }} />
            <SecondaryListItems />
            {/* {secondaryListItems} */}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container sx={{ marginBottom: 2 }} spacing={3}>
              {/* Recent Orders */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                  {/* <Orders /> */}
                  <NationalPricing />
                  </Paper>
                  </Grid>
                  </Grid>

                  <Grid
                    container
                    rowSpacing={2}
                    columnSpacing={{ xs: 2, sm: 2, md: 3 }}
                  >
                    <Grid item xs={6}>
                      <Paper elevation={24}>
                        <StackedBar />
                      </Paper>
                    </Grid>
                    <Grid item xs={6}>
                      <Paper elevation={24}>
                        <BasicBar />
                      </Paper>
                    </Grid>
                    <Grid item xs={6}>
                      <Paper elevation={24}>
                        <AppUsageChart />
                      </Paper>
                    </Grid>
                    <Grid item xs={6}>
                      <Paper elevation={24}>
                        <ActivevsInactive />
                      </Paper>
                    </Grid>
                    <Grid item xs={12}>
                      <Paper elevation={24}>
                        <AdoptionTrend />
                      </Paper>
                    </Grid>
                    
                    <Grid item xs={6}>
                      <Paper elevation={24}></Paper>
                    </Grid>
                  </Grid>

                  {/* <EnhancedTable/> */}

                  {/* <BasicBar/> */}
                {/* </Paper>
              </Grid> */}
            
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
