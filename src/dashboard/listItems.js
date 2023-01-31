import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import { useSelector, useDispatch } from "react-redux";
import { dashboardActions } from "../store/dashboardRedux";

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import MonetizationOnRoundedIcon from '@mui/icons-material/MonetizationOnRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import TocRoundedIcon from '@mui/icons-material/TocRounded';
import AdminPanelSettingsRoundedIcon from '@mui/icons-material/AdminPanelSettingsRounded';

const MainListItems = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.dashboard.category);
  // console.log(category);

  const onCategoryChange = (categoryName) => {
    dispatch(dashboardActions.setCategory(categoryName));
    console.log(categoryName);
  };
  return (
    <React.Fragment>
      <ListSubheader component="div" inset>
        Profit Simulator
      </ListSubheader>
      <ListItemButton onClick={() => onCategoryChange("Home")}>
        <ListItemIcon>
          <HomeRoundedIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItemButton>
      <ListItemButton onClick={() => onCategoryChange("National Pricing")}>
        <ListItemIcon>
          <MonetizationOnRoundedIcon />
        </ListItemIcon>
        <ListItemText primary="National Pricing" />
      </ListItemButton>
      <ListItemButton onClick={() => onCategoryChange("Account Plan")}>
        <ListItemIcon>
          <PeopleAltRoundedIcon />
        </ListItemIcon>
        <ListItemText primary="Account Plan" />
      </ListItemButton>
      <ListItemButton onClick={() => onCategoryChange("Tableau-National Pricing")}>
        <ListItemIcon>
          <TocRoundedIcon />
        </ListItemIcon>
        <ListItemText primary="Tableau-National Pricing" />
      </ListItemButton>
      <ListItemButton onClick={() => onCategoryChange("Admin")}>
        <ListItemIcon>
          <AdminPanelSettingsRoundedIcon />
        </ListItemIcon>
        <ListItemText primary="Admin" />
      </ListItemButton>
    </React.Fragment>
  );
};

// export const secondaryListItems = (
//   <React.Fragment>
//     <ListSubheader component="div" inset>
//       Veterinarian reports
//     </ListSubheader>
//     <ListItemButton>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Microbiome Metrics" />
//     </ListItemButton>
//     <ListItemButton>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Overall Recommendations" />
//     </ListItemButton>
//     <ListItemButton>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Potential Pathogen" />
//     </ListItemButton>
//   </React.Fragment>
// );

export default MainListItems;
