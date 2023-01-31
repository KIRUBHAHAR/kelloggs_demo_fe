import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import { useSelector, useDispatch } from 'react-redux'
import {dashboardActions} from '../store/dashboardRedux';

 const SecondaryListItems =() =>{
    const dispatch = useDispatch();
  const category = useSelector((state) => state.dashboard.category);

  
  const onCategoryChange = (categoryName)=>{
    dispatch(dashboardActions.setCategory(categoryName));
    console.log(categoryName)
  }
    return(
  <React.Fragment>
    <ListSubheader component="div" inset>
    Account Profit Simulator 
    </ListSubheader>
    <ListItemButton onClick={() => onCategoryChange("Bacterial")}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItemButton>
      <ListItemButton onClick={() => onCategoryChange("Food")}>
        <ListItemIcon>
          <LocalDiningIcon />
        </ListItemIcon>
        <ListItemText primary="National Pricing" />
      </ListItemButton>
      <ListItemButton onClick={() => onCategoryChange("Gut")}>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Account Plan" />
      </ListItemButton>
      <ListItemButton onClick={() => onCategoryChange("Nutri")}>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Tableau-National Pricing" />
      </ListItemButton>
      <ListItemButton onClick={() => onCategoryChange("Pro")}>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Admin" />
      </ListItemButton>
  </React.Fragment>
)};

export default SecondaryListItems;