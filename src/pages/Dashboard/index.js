import React, { useState } from 'react'; 
import DashboardBox from "./components/dashboardBox"; 
import BarGraph from "./components/BarGraph"; 
import { FaUserCircle, FaShoppingCart, FaChartPie } from "react-icons/fa"; 
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';
import { FaEye } from 'react-icons/fa';
import { FaPencilAlt } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const Dashboard = () => {
    // State for managing the selected value in the select component
    const [showBy, setShowBy] = useState(''); 
    const [showBysetCatBy, setCatBy] = useState('');

    // Sample row data
    const initialRows = [
        { section: 'Tech', course: 'Java', passout: '2022', place: 'Hyderabad', branch: 'CSE', fee: '50000', trainerName: 'Sairam' },
        // Add more rows as needed
    ];

    // State to track the data and editing row
    const [rows, setRows] = useState(initialRows);
    const [editingRowIndex, setEditingRowIndex] = useState(null);
    const [formData, setFormData] = useState({});

    // Handle Edit Button Click
    const handleEdit = (index) => {
        setEditingRowIndex(index);
        setFormData(rows[index]);  // Pre-fill form data with the row values
    };

    // Handle Save Button Click
    const handleSave = () => {
        const updatedRows = [...rows];
        updatedRows[editingRowIndex] = formData;  // Update the row data
        setRows(updatedRows);  // Update state with new rows
        setEditingRowIndex(null);  // Exit edit mode
    };

    // Handle Cancel Button Click
    const handleCancel = () => {
        setEditingRowIndex(null);  // Exit edit mode without saving changes
        setFormData({});  // Clear form data
    };

    // Handle input changes for form fields
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className="right-content w-100">
            <div className="row dashboardBoxWapperRow botttomEle">
                <div className="col-md-8">
                    <div className="dashboardBoxWapper d-flex">
                        <DashboardBox 
                            color={["#1da256", "#48d483"]} 
                            title="Total Users"
                            value="5000"
                            icon={<FaUserCircle />}
                        />
                        <DashboardBox 
                            color={["#c012e2", "#eb64fe"]} 
                            title="Total Sales"
                            value="$20,000"
                            icon={<FaShoppingCart />}
                        />
                        <DashboardBox 
                            color={["#2c78e5", "#60aff5"]} 
                            title="Total Orders"
                            value="1,200"
                            icon={<FaShoppingCart />}
                        />
                        <DashboardBox 
                            color={["#e1950e", "#f3cd29"]} 
                            title="Total Revenue"
                            value="$150,000"
                            icon={<FaChartPie />}
                        />
                    </div>
                </div>
                <div className="col-md-4 pl-0">
                    <div className="box graphBox">
                        <h4>Total Sales</h4>
                        <BarGraph />
                    </div>
                </div>

                <div className="card shadow border-0 p-3 mt-3">
                    <h3 className='hd'>Best Selling Courses</h3>
                    <div className="row cardFilters">
                        <div className="col-md-3">
                            <h4>SHOW BY</h4>
                            <FormControl fullWidth sx={{ m: 1, minWidth: 100 }} size="small">
                                <Select
                                    value={showBysetCatBy}
                                    onChange={(e) => setShowBy(e.target.value)}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    labelId="demo-select-small-label"
                                    style={{ minWidth: 100 }}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value="java">JAVA</MenuItem>
                                    <MenuItem value="cpp">C++</MenuItem>
                                    <MenuItem value="react">React</MenuItem>
                                    <MenuItem value="sql">SQL</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className="col-md-3">
                            <h4>CATEGORY BY</h4>
                            <FormControl fullWidth sx={{ m: 1, minWidth: 100 }} size="small">
                                <Select
                                    value={showBy}
                                    onChange={(e) => setCatBy(e.target.value)}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    labelId="demo-select-small-label"
                                    style={{ minWidth: 100 }}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value="java">JAVA</MenuItem>
                                    <MenuItem value="cpp">C++</MenuItem>
                                    <MenuItem value="react">React</MenuItem>
                                    <MenuItem value="sql">SQL</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>

                    <div className="table-responsive mt-3">
                        <table className="table table-bordered">
                            <thead className="thead-dark">
                                <tr>
                                    <th> Section </th>
                                    <th> Course </th>
                                    <th> Passout </th>
                                    <th> Place </th>
                                    <th> Branch </th>
                                    <th> Fee </th>
                                    <th> Trainer Name </th>
                                    <th> Actions </th>
                                </tr>
                            </thead>
                            <tbody>
                                {rows.map((row, index) => (
                                    <tr key={index}>
                                        <td>
                                            {editingRowIndex === index ?
                                                <input
                                                    type="text"
                                                    name="section"
                                                    value={formData.section}
                                                    onChange={handleInputChange}
                                                />
                                                : row.section}
                                        </td>
                                        <td>
                                            {editingRowIndex === index ?
                                                <input
                                                    type="text"
                                                    name="course"
                                                    value={formData.course}
                                                    onChange={handleInputChange}
                                                />
                                                : row.course}
                                        </td>
                                        <td>
                                            {editingRowIndex === index ?
                                                <input
                                                    type="text"
                                                    name="passout"
                                                    value={formData.passout}
                                                    onChange={handleInputChange}
                                                />
                                                : row.passout}
                                        </td>
                                        <td>
                                            {editingRowIndex === index ?
                                                <input
                                                    type="text"
                                                    name="place"
                                                    value={formData.place}
                                                    onChange={handleInputChange}
                                                />
                                                : row.place}
                                        </td>
                                        <td>
                                            {editingRowIndex === index ?
                                                <input
                                                    type="text"
                                                    name="branch"
                                                    value={formData.branch}
                                                    onChange={handleInputChange}
                                                />
                                                : row.branch}
                                        </td>
                                        <td>
                                            {editingRowIndex === index ?
                                                <input
                                                    type="text"
                                                    name="fee"
                                                    value={formData.fee}
                                                    onChange={handleInputChange}
                                                />
                                                : row.fee}
                                        </td>
                                        <td>
                                            {editingRowIndex === index ?
                                                <input
                                                    type="text"
                                                    name="trainerName"
                                                    value={formData.trainerName}
                                                    onChange={handleInputChange}
                                                />
                                                : row.trainerName}
                                        </td>
                                        <td>
                                            <div className="actions d-flex align-items-center">
                                                <Button color="secondary"><FaEye /></Button>
                                                {editingRowIndex === index ?
                                                    <>
                                                        <Button onClick={handleSave}>Save</Button>
                                                        <Button onClick={handleCancel}>Cancel</Button>
                                                    </>
                                                    :
                                                    <Button onClick={() => handleEdit(index)}><FaPencilAlt /></Button>}
                                                <Button><MdDelete /></Button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                            <tbody>
                                {rows.map((row, index) => (
                                    <tr key={index}>
                                        <td>
                                            {editingRowIndex === index ?
                                                <input
                                                    type="text"
                                                    name="section"
                                                    value={formData.section}
                                                    onChange={handleInputChange}
                                                />
                                                : row.section}
                                        </td>
                                        <td>
                                            {editingRowIndex === index ?
                                                <input
                                                    type="text"
                                                    name="course"
                                                    value={formData.course}
                                                    onChange={handleInputChange}
                                                />
                                                : row.course}
                                        </td>
                                        <td>
                                            {editingRowIndex === index ?
                                                <input
                                                    type="text"
                                                    name="passout"
                                                    value={formData.passout}
                                                    onChange={handleInputChange}
                                                />
                                                : row.passout}
                                        </td>
                                        <td>
                                            {editingRowIndex === index ?
                                                <input
                                                    type="text"
                                                    name="place"
                                                    value={formData.place}
                                                    onChange={handleInputChange}
                                                />
                                                : row.place}
                                        </td>
                                        <td>
                                            {editingRowIndex === index ?
                                                <input
                                                    type="text"
                                                    name="branch"
                                                    value={formData.branch}
                                                    onChange={handleInputChange}
                                                />
                                                : row.branch}
                                        </td>
                                        <td>
                                            {editingRowIndex === index ?
                                                <input
                                                    type="text"
                                                    name="fee"
                                                    value={formData.fee}
                                                    onChange={handleInputChange}
                                                />
                                                : row.fee}
                                        </td>
                                        <td>
                                            {editingRowIndex === index ?
                                                <input
                                                    type="text"
                                                    name="trainerName"
                                                    value={formData.trainerName}
                                                    onChange={handleInputChange}
                                                />
                                                : row.trainerName}
                                        </td>
                                        <td>
                                            <div className="actions d-flex align-items-center">
                                                <Button color="secondary"><FaEye /></Button>
                                                {editingRowIndex === index ?
                                                    <>
                                                        <Button onClick={handleSave}>Save</Button>
                                                        <Button onClick={handleCancel}>Cancel</Button>
                                                    </>
                                                    :
                                                    <Button onClick={() => handleEdit(index)}><FaPencilAlt /></Button>}
                                                <Button><MdDelete /></Button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                            <tbody>
                                {rows.map((row, index) => (
                                    <tr key={index}>
                                        <td>
                                            {editingRowIndex === index ?
                                                <input
                                                    type="text"
                                                    name="section"
                                                    value={formData.section}
                                                    onChange={handleInputChange}
                                                />
                                                : row.section}
                                        </td>
                                        <td>
                                            {editingRowIndex === index ?
                                                <input
                                                    type="text"
                                                    name="course"
                                                    value={formData.course}
                                                    onChange={handleInputChange}
                                                />
                                                : row.course}
                                        </td>
                                        <td>
                                            {editingRowIndex === index ?
                                                <input
                                                    type="text"
                                                    name="passout"
                                                    value={formData.passout}
                                                    onChange={handleInputChange}
                                                />
                                                : row.passout}
                                        </td>
                                        <td>
                                            {editingRowIndex === index ?
                                                <input
                                                    type="text"
                                                    name="place"
                                                    value={formData.place}
                                                    onChange={handleInputChange}
                                                />
                                                : row.place}
                                        </td>
                                        <td>
                                            {editingRowIndex === index ?
                                                <input
                                                    type="text"
                                                    name="branch"
                                                    value={formData.branch}
                                                    onChange={handleInputChange}
                                                />
                                                : row.branch}
                                        </td>
                                        <td>
                                            {editingRowIndex === index ?
                                                <input
                                                    type="text"
                                                    name="fee"
                                                    value={formData.fee}
                                                    onChange={handleInputChange}
                                                />
                                                : row.fee}
                                        </td>
                                        <td>
                                            {editingRowIndex === index ?
                                                <input
                                                    type="text"
                                                    name="trainerName"
                                                    value={formData.trainerName}
                                                    onChange={handleInputChange}
                                                />
                                                : row.trainerName}
                                        </td>
                                        <td>
                                            <div className="actions d-flex align-items-center">
                                                <Button color="secondary"><FaEye /></Button>
                                                {editingRowIndex === index ?
                                                    <>
                                                        <Button onClick={handleSave}>Save</Button>
                                                        <Button onClick={handleCancel}>Cancel</Button>
                                                    </>
                                                    :
                                                    <Button onClick={() => handleEdit(index)}><FaPencilAlt /></Button>}
                                                <Button><MdDelete /></Button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                            <tbody>
                                {rows.map((row, index) => (
                                    <tr key={index}>
                                        <td>
                                            {editingRowIndex === index ?
                                                <input
                                                    type="text"
                                                    name="section"
                                                    value={formData.section}
                                                    onChange={handleInputChange}
                                                />
                                                : row.section}
                                        </td>
                                        <td>
                                            {editingRowIndex === index ?
                                                <input
                                                    type="text"
                                                    name="course"
                                                    value={formData.course}
                                                    onChange={handleInputChange}
                                                />
                                                : row.course}
                                        </td>
                                        <td>
                                            {editingRowIndex === index ?
                                                <input
                                                    type="text"
                                                    name="passout"
                                                    value={formData.passout}
                                                    onChange={handleInputChange}
                                                />
                                                : row.passout}
                                        </td>
                                        <td>
                                            {editingRowIndex === index ?
                                                <input
                                                    type="text"
                                                    name="place"
                                                    value={formData.place}
                                                    onChange={handleInputChange}
                                                />
                                                : row.place}
                                        </td>
                                        <td>
                                            {editingRowIndex === index ?
                                                <input
                                                    type="text"
                                                    name="branch"
                                                    value={formData.branch}
                                                    onChange={handleInputChange}
                                                />
                                                : row.branch}
                                        </td>
                                        <td>
                                            {editingRowIndex === index ?
                                                <input
                                                    type="text"
                                                    name="fee"
                                                    value={formData.fee}
                                                    onChange={handleInputChange}
                                                />
                                                : row.fee}
                                        </td>
                                        <td>
                                            {editingRowIndex === index ?
                                                <input
                                                    type="text"
                                                    name="trainerName"
                                                    value={formData.trainerName}
                                                    onChange={handleInputChange}
                                                />
                                                : row.trainerName}
                                        </td>
                                        <td>
                                            <div className="actions d-flex align-items-center">
                                                <Button color="secondary"><FaEye /></Button>
                                                {editingRowIndex === index ?
                                                    <>
                                                        <Button onClick={handleSave}>Save</Button>
                                                        <Button onClick={handleCancel}>Cancel</Button>
                                                    </>
                                                    :
                                                    <Button onClick={() => handleEdit(index)}><FaPencilAlt /></Button>}
                                                <Button><MdDelete /></Button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                            <tbody>
                                {rows.map((row, index) => (
                                    <tr key={index}>
                                        <td>
                                            {editingRowIndex === index ?
                                                <input
                                                    type="text"
                                                    name="section"
                                                    value={formData.section}
                                                    onChange={handleInputChange}
                                                />
                                                : row.section}
                                        </td>
                                        <td>
                                            {editingRowIndex === index ?
                                                <input
                                                    type="text"
                                                    name="course"
                                                    value={formData.course}
                                                    onChange={handleInputChange}
                                                />
                                                : row.course}
                                        </td>
                                        <td>
                                            {editingRowIndex === index ?
                                                <input
                                                    type="text"
                                                    name="passout"
                                                    value={formData.passout}
                                                    onChange={handleInputChange}
                                                />
                                                : row.passout}
                                        </td>
                                        <td>
                                            {editingRowIndex === index ?
                                                <input
                                                    type="text"
                                                    name="place"
                                                    value={formData.place}
                                                    onChange={handleInputChange}
                                                />
                                                : row.place}
                                        </td>
                                        <td>
                                            {editingRowIndex === index ?
                                                <input
                                                    type="text"
                                                    name="branch"
                                                    value={formData.branch}
                                                    onChange={handleInputChange}
                                                />
                                                : row.branch}
                                        </td>
                                        <td>
                                            {editingRowIndex === index ?
                                                <input
                                                    type="text"
                                                    name="fee"
                                                    value={formData.fee}
                                                    onChange={handleInputChange}
                                                />
                                                : row.fee}
                                        </td>
                                        <td>
                                            {editingRowIndex === index ?
                                                <input
                                                    type="text"
                                                    name="trainerName"
                                                    value={formData.trainerName}
                                                    onChange={handleInputChange}
                                                />
                                                : row.trainerName}
                                        </td>
                                        <td>
                                            <div className="actions d-flex align-items-center">
                                                <Button color="secondary"><FaEye /></Button>
                                                {editingRowIndex === index ?
                                                    <>
                                                        <Button onClick={handleSave}>Save</Button>
                                                        <Button onClick={handleCancel}>Cancel</Button>
                                                    </>
                                                    :
                                                    <Button onClick={() => handleEdit(index)}><FaPencilAlt /></Button>}
                                                <Button><MdDelete /></Button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                            <tbody>
                                {rows.map((row, index) => (
                                    <tr key={index}>
                                        <td>
                                            {editingRowIndex === index ?
                                                <input
                                                    type="text"
                                                    name="section"
                                                    value={formData.section}
                                                    onChange={handleInputChange}
                                                />
                                                : row.section}
                                        </td>
                                        <td>
                                            {editingRowIndex === index ?
                                                <input
                                                    type="text"
                                                    name="course"
                                                    value={formData.course}
                                                    onChange={handleInputChange}
                                                />
                                                : row.course}
                                        </td>
                                        <td>
                                            {editingRowIndex === index ?
                                                <input
                                                    type="text"
                                                    name="passout"
                                                    value={formData.passout}
                                                    onChange={handleInputChange}
                                                />
                                                : row.passout}
                                        </td>
                                        <td>
                                            {editingRowIndex === index ?
                                                <input
                                                    type="text"
                                                    name="place"
                                                    value={formData.place}
                                                    onChange={handleInputChange}
                                                />
                                                : row.place}
                                        </td>
                                        <td>
                                            {editingRowIndex === index ?
                                                <input
                                                    type="text"
                                                    name="branch"
                                                    value={formData.branch}
                                                    onChange={handleInputChange}
                                                />
                                                : row.branch}
                                        </td>
                                        <td>
                                            {editingRowIndex === index ?
                                                <input
                                                    type="text"
                                                    name="fee"
                                                    value={formData.fee}
                                                    onChange={handleInputChange}
                                                />
                                                : row.fee}
                                        </td>
                                        <td>
                                            {editingRowIndex === index ?
                                                <input
                                                    type="text"
                                                    name="trainerName"
                                                    value={formData.trainerName}
                                                    onChange={handleInputChange}
                                                />
                                                : row.trainerName}
                                        </td>
                                        <td>
                                            <div className="actions d-flex align-items-center">
                                                <Button color="secondary"><FaEye /></Button>
                                                {editingRowIndex === index ?
                                                    <>
                                                        <Button onClick={handleSave}>Save</Button>
                                                        <Button onClick={handleCancel}>Cancel</Button>
                                                    </>
                                                    :
                                                    <Button onClick={() => handleEdit(index)}><FaPencilAlt /></Button>}
                                                <Button><MdDelete /></Button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
