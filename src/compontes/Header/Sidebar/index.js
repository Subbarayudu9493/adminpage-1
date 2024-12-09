import React, { useState } from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { ExpandMore, ExpandLess, Home, ShoppingCart, Settings, Notifications, AccountCircle, ExitToApp } from '@mui/icons-material'; // Import relevant icons

const Sidebar = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [showProducts, setShowProducts] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const toggleProducts = () => {
    setShowProducts(!showProducts);
  };

  return (
    <div className={`Sidebar ${isSidebarCollapsed ? 'collapsed' : ''}`}>
      <ul>
        <li>
          <Button className="w-100">
            <Home /> Dashboard
          </Button>
        </li>
        <li>
          <Button className="w-100">
            <ShoppingCart /> Products
          </Button>
        </li>
        <li>
          <Button className="w-100">
            <ShoppingCart /> Orders
          </Button>
        </li>
        <li>
          <Button className="w-100">
            <Notifications /> Notifications
          </Button>
        </li>
        <li>
          <Button className="w-100">
            <Settings /> Settings
          </Button>
        </li>
        <li>
          <Button className="w-100">
            <AccountCircle /> Login
          </Button>
        </li>
        <li>
          <Button className="w-100">
            <ExitToApp /> Sign Up
          </Button>
        </li>

        {/* Products Section with Expand/Collapse */}
        <li>
          <Button className="w-100" onClick={toggleProducts}>
            Products
            <IconButton>
              {showProducts ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
          </Button>
          {showProducts && (
            <ul>
              <li>Product 1</li>
              <li>Product 2</li>
              <li>Product 3</li>
            </ul>
          )}
        </li>
      </ul>
      {/* Toggle Sidebar Button */}
      <Button onClick={toggleSidebar} className="toggle-btn">
        {isSidebarCollapsed ? 'Expand' : 'Collapse'}
      </Button>
    </div>
  );
};

export default Sidebar;
