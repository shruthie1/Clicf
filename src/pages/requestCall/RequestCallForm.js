import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  TextField,
  Button,
  Typography,
  CircularProgress,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  IconButton,
} from '@mui/material';
import { RemoveCircleOutline } from '@mui/icons-material';

const baseurl = 'https://shruthie1.onrender.com';

const userKeys = [
  'clientId',
  'chatId',
  'type'
];

const RequestCallForm = () => {
  const [selectedKeys, setSelectedKeys] = useState(['']); // Start with one empty field
  const [keyValues, setKeyValues] = useState(['']);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setUser(null); // Reset user when keys/values change
  }, [selectedKeys, keyValues]);

  const requestCall = async () => {
    setIsLoading(true);
    try {
      const queryParams = selectedKeys.map((key, index) => `${key}=${keyValues[index]}`);
      const queryString = queryParams.join('&');
      const response = await axios.get(`${baseurl}/requestCall?${queryString}`);

      if (response.data.length === 0) {
        setUser(null); // Reset user state
        setError('No user found matching the search criteria.');
      } else {
        setUser(response.data[0]); // Assuming the response data is an array of users
        setError(null);
      }
    } catch (error) {
      setUser(null);
      setError('Error fetching user. Please try again.'); // General error message
      console.error('Error fetching user:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyChange = (e, index) => {
    const newSelectedKeys = [...selectedKeys];
    newSelectedKeys[index] = e.target.value;
    setSelectedKeys(newSelectedKeys);
    setKeyValues((prevValues) =>
      prevValues.length > index ? [...prevValues.slice(0, index), ''] : prevValues
    );
  };

  const handleValueChange = (e, index) => {
    setKeyValues((prevValues) =>
      prevValues.length > index ? [...prevValues.slice(0, index), e.target.value] : [...prevValues, e.target.value]
    );
  };

  const handleAddInput = () => {
    if (keyValues[selectedKeys.length - 1] !== '') {
      setSelectedKeys([...selectedKeys, '']);
      setKeyValues([...keyValues, '']);
    }
  };

  const handleRemoveInput = (index) => {
    const newSelectedKeys = selectedKeys.filter((_, idx) => idx !== index);
    const newKeyValues = keyValues.filter((_, idx) => idx !== index);
    setSelectedKeys(newSelectedKeys);
    setKeyValues(newKeyValues);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedKeys.every((key, index) => key && keyValues[index])) {
      try {
        setIsLoading(true);
        await requestCall();
        setIsLoading(false);
        alert('Call Requested successfully!');
        setSelectedKeys(['']); // Reset form after successful update
        setKeyValues(['']);
        setUser(null);
      } catch (error) {
        setIsLoading(false);
        console.error('Error Requesting call:', error);
        alert('Failed to update user. Please try again.');
      }
    } else {
      setError('Please select keys and enter values for all fields.');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (

    <div style={{ padding: '10px' }}>
      <Typography variant="h5" gutterBottom>
        Edit User
      </Typography>
      <form onSubmit={handleSubmit}>
        {selectedKeys.map((key, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <FormControl fullWidth margin="normal">
              <InputLabel>Search Key</InputLabel>
              <Select
                value={key}
                onChange={(e) => handleKeyChange(e, index)}
                label="Search Key"
              >
                {userKeys.map((keyOption) => (
                  <MenuItem key={keyOption} value={keyOption}>
                    {keyOption}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              fullWidth
              label="Value"
              name={`keyValue-${index}`}
              value={keyValues[index]}
              onChange={(e) => handleValueChange(e, index)}
              margin="normal"
              variant="outlined"
              style={{ marginRight: '10px' }}
            />
            {index > 0 && (
              <IconButton onClick={() => handleRemoveInput(index)}>
                <RemoveCircleOutline color="error" />
              </IconButton>
            )}
          </div>
        ))}
        <Button
          variant="outlined"
          color="primary"
          onClick={handleAddInput}
          disabled={keyValues[selectedKeys.length - 1] === ''}
        >
          Add Field
        </Button>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ marginLeft: '10px' }}
          disabled={selectedKeys.length === 0}
        >
          Search
        </Button>
      </form>
    </div>

  );
};

export default RequestCallForm;
