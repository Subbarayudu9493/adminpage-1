import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.webp';
import { MdMenuBook, MdOutlineMenu, MdNotifications, MdTask, MdPerson, MdCheckCircle } from 'react-icons/md';
import profilePic from '../../assets/images/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg'; // Import the image

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false); // State to manage profile dropdown visibility

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  // Toggle notification popup
  const toggleNotificationPopup = () => {
    setNotificationOpen(!notificationOpen);
  };

  // Handle menu toggle
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  // Handle search change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle search submit
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Search Query:', searchQuery);
  };

  // Toggle profile dropdown menu
  const toggleProfileMenu = () => {
    setProfileMenuOpen(!profileMenuOpen);
  };

  return (
    <header className={`d-flex align-items-center ${darkMode ? 'dark-mode' : ''}`} style={{ padding: '10px', background: darkMode ? '#333' : '#fff' }}>
      <div className="container-fluid w-100">
        <div className="row d-flex align-items-center justify-content-between">
          {/* First Column: Logo */}
          <div className="col-auto d-flex align-items-center">
            <Link to="/" className="d-flex align-items-center logowrapper">
              <img src={logo} alt="RM Software Technologies Logo" className="logo-img" style={{ width: '50px', height: 'auto' }} />
            </Link>
          </div>

          {/* Second Column: Company Name */}
          <div className="col-auto d-flex align-items-center">
            <span className="company-name" style={{ fontWeight: 'bold', color: darkMode ? '#fff' : '#000' }}>
              <strong>R|M</strong> SOFTWARE TECHNOLOGIES
            </span>
          </div>

          {/* Third Column: Menu Icon */}
          <div className="col-auto d-flex align-items-center">
            <div onClick={handleMenuToggle} className="menu-icon" style={{ cursor: 'pointer' }}>
              {menuOpen ? <MdMenuBook size={20} /> : <MdOutlineMenu size={20} />}
            </div>
          </div>

          {/* Fourth Column: Search Bar */}
          <div className="col-auto d-flex align-items-center">
            <form onSubmit={handleSearchSubmit} className="search-form">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search..."
                className="search-input"
                style={{ padding: '5px 10px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
            </form>
          </div>

          {/* Dark Mode Toggle */}
          <div className="col-auto d-flex align-items-center">
            <button onClick={toggleDarkMode} className="dark-mode-toggle" style={{ background: 'none', border: 'none', color: darkMode ? '#fff' : '#000', cursor: 'pointer' }}>
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>

          {/* Bell Icon for Notifications */}
          <div className="col-auto d-flex align-items-center">
            <div onClick={toggleNotificationPopup} style={{ cursor: 'pointer' }}>
              <MdNotifications size={24} color={darkMode ? '#fff' : '#000'} />
            </div>
          </div>

          {/* User Profile Section */}
          <div className="col-auto d-flex align-items-center">
            <div className="profile-container" style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={toggleProfileMenu}>
              <img 
                src={profilePic}  // Use the imported image
                alt="Profile" 
                className="profile-img" 
                style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '10px' }} 
              />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontWeight: 'bold', color: darkMode ? '#fff' : '#000' }}>John Doe</span>
                <span style={{ fontSize: '12px', color: darkMode ? '#ccc' : '#333' }}>johndoe@example.com</span>
                <div style={{
                  width: '10px', 
                  height: '10px', 
                  borderRadius: '50%', 
                  backgroundColor: 'green', 
                  marginTop: '5px'
                }}></div> {/* Online Status */}
              </div>
            </div>

            {/* Profile Dropdown */}
            {profileMenuOpen && (
              <div className="profile-menu" style={{
                position: 'absolute',
                top: '50px',
                right: '10px',
                width: '200px',
                backgroundColor: '#fff',
                padding: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                borderRadius: '8px',
                zIndex: 100
              }}>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '10px' }}><Link to="/add-profile" style={{ color: '#333', textDecoration: 'none' }}>Add Profile</Link></li>
                  <li style={{ marginBottom: '10px' }}><Link to="/logout" style={{ color: '#333', textDecoration: 'none' }}>Log Out</Link></li>
                  <li style={{ marginBottom: '10px' }}><Link to="/reset-password" style={{ color: '#333', textDecoration: 'none' }}>Reset Password</Link></li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Notification Popup when notificationOpen is true */}
        {notificationOpen && (
          <div className="notification-popup" style={{
            position: 'absolute',
            top: '50px',
            right: '10px',
            width: '250px',
            backgroundColor: '#fff',
            padding: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            borderRadius: '8px',
            zIndex: 100
          }}>
            <h4 style={{ fontSize: '16px', marginBottom: '10px' }}>Notifications</h4>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              {/* Notification 1 */}
              <li style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                <MdTask size={24} style={{ marginRight: '10px', color: darkMode ? '#fff' : '#000' }} />
                <div>
                  <strong style={{ color: '#333' }}>John Doe</strong>
                  <p style={{ fontSize: '12px', color: '#666', margin: '4px 0' }}>
                    You have a new task assigned to you.
                  </p>
                </div>
              </li>
              
              {/* Notification 2 */}
              <li style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                <MdPerson size={24} style={{ marginRight: '10px', color: darkMode ? '#fff' : '#000' }} />
                <div>
                  <strong style={{ color: '#333' }}>Jane Smith</strong>
                  <p style={{ fontSize: '12px', color: '#666', margin: '4px 0' }}>
                    Your profile has been updated successfully.
                  </p>
                </div>
              </li>
              
              {/* Notification 3 */}
              <li style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                <MdCheckCircle size={24} style={{ marginRight: '10px', color: darkMode ? '#fff' : '#000' }} />
                <div>
                  <strong style={{ color: '#333' }}>Michael Johnson</strong>
                  <p style={{ fontSize: '12px', color: '#666', margin: '4px 0' }}>
                    Your recent request has been approved.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
