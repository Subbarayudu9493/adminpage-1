import React, { useState } from 'react';
import { FaEllipsisH, FaClock, FaFileAlt } from "react-icons/fa"; // Import necessary icons
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';

const DashboardBox = (props) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const ITEM_HEIGHT = 48; // Define ITEM_HEIGHT here

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div 
            className="dashboardBox" 
            style={{
                backgroundImage: `linear-gradient(to right, ${props.color?.[0]}, ${props.color?.[1]})`
            }}
        >
            <div className="d-flex w-100">
                <div className="col1">
                    <h4 className="text-white mb-0">{props.title}</h4>
                    <span className="text-white">{props.value}</span>
                </div>
                <div className="ml-auto">
                    <span className="icon">
                        {props.icon}
                    </span>
                </div>
            </div>
            {props.extra && (
                <div className="extra-content mt-3">
                    {props.extra}
                </div>
            )}
            <div className="d-flex justify-content-end mt-2">
                <IconButton onClick={handleClick}>
                    <FaEllipsisH className="text-white" />
                </IconButton>
                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                        style: {
                            maxHeight: ITEM_HEIGHT * 4.5,
                            width: '20ch',
                        },
                    }}
                >
                    <MenuItem onClick={handleClose}>
                        <FaClock style={{ marginRight: 8 }} /> Last Week
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <FaFileAlt style={{ marginRight: 8 }} /> Last Month
                    </MenuItem>
                </Menu>
            </div>
        </div>
    );
};

export default DashboardBox;
