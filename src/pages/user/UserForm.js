// UserForm.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    TextField,
    Button,
    Grid,
    Typography,
    Paper,
    CircularProgress,
    MenuItem,
    Select,
    InputLabel,
    FormControl,
} from '@mui/material';
const baseurl = 'https://shruthie.onrender.com'

// List of all possible keys from the user schema
const userKeys = [
    'tgId',
    'mobile',
    'firstName',
    'lastName',
    'userName',
    'channels',
    'personalChats',
    'demoGiven',
    'msgs',
    'totalChats',
    'lastActive',
    'date',
    'lastUpdated',
    'movieCount',
    'photoCount',
    'videoCount',
    'otherPhotoCount',
    'otherVideoCount',
    'ownPhotoCount',
    'ownVideoCount',
    'contacts',
    'calls',
];

const UserForm = () => {
    const [selectedKey, setSelectedKey] = useState('');
    const [keyValue, setKeyValue] = useState('');
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const fetchUser = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get(`${baseurl}/users/search?${selectedKey}=${keyValue}`);
            setUser(response.data[0]); // Assuming the response data is an array of users
            setError(null);
        } catch (error) {
            setUser(null);
            setError('User not found. Please enter valid search criteria.');
            console.error('Error fetching user:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyChange = (e) => {
        setSelectedKey(e.target.value);
        setKeyValue('');
    };

    const handleValueChange = (e) => {
        setKeyValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedKey && keyValue) {
            fetchUser();
        } else {
            setError('Please select a key and enter a value.');
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleUpdate = async () => {
        try {
            setIsLoading(true);
            await axios.patch(`${baseurl}/users/${user.tgId}`, user);
            setIsLoading(false);
            alert('User updated successfully!');
            // Reset form after successful update
            setSelectedKey('');
            setKeyValue('');
            setUser(null);
        } catch (error) {
            setIsLoading(false);
            console.error('Error updating user:', error);
            alert('Failed to update user. Please try again.');
        }
    };

    const renderFormFields = () => {
        if (!user) return null;

        return Object.keys(user).map((key) => (
            <TextField
                key={key}
                fullWidth
                label={key}
                name={key}
                value={user[key]}
                onChange={handleInputChange}
                margin="normal"
                variant="outlined"
            />
        ));
    };

    return (
        <Grid container justifyContent="center" spacing={2}>
            <Grid item xs={10} md={6}>
                <Paper elevation={3} style={{ padding: '20px' }}>
                    <Typography variant="h5" gutterBottom>
                        Edit User
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <FormControl fullWidth margin="normal">
                            <InputLabel>Search Key</InputLabel>
                            <Select
                                value={selectedKey}
                                onChange={handleKeyChange}
                                label="Search Key"
                            >
                                {userKeys.map((key) => (
                                    <MenuItem key={key} value={key}>
                                        {key}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <TextField
                            fullWidth
                            label="Value"
                            name="keyValue"
                            value={keyValue}
                            onChange={handleValueChange}
                            margin="normal"
                            variant="outlined"
                            disabled={!selectedKey}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            style={{ marginLeft: '10px' }}
                        >
                            Search
                        </Button>
                    </form>
                    {error && <Typography color="error">{error}</Typography>}
                    {isLoading && <CircularProgress style={{ marginTop: '10px' }} />}
                    {user && renderFormFields()}
                    {user && (
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleUpdate}
                            style={{ marginTop: '10px' }}
                        >
                            Update
                        </Button>
                    )}
                </Paper>
            </Grid>
        </Grid>
    );
};

export default UserForm;
