import React, { useContext, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import api from '../api/axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActions, Input, Button, Typography, Box } from '@mui/material';




function AddIssue() {
    const [issueName, setIssueName] = useState('');
    const [issueDescription, setIssueDescription] = useState('');

    const [error, setError] = useState('');

    const navigate = useNavigate();

    const onClickAdd = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('IssueAPI/add/', {
                "issue_name": issueName,
                "issue_description": issueDescription,
            });

            navigate('/home');
        } catch (err) {
            setError('Invalid issue details. Please try again')
        }
    };

    return (
            <Card>
                <CardContent style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    width: '320px'
                }}>
                    <Typography variant='h5' component='div' sx={{color: '#ffffff'}}>
                        Add issue
                    </Typography>
                    <Input
                        required
                        placeholder='Issue name'
                        label="Issue name"
                        variant="filled"
                        value={issueName}
                        onChange={(e) => setIssueName(e.target.value)} />
                    <Input
                        required
                        placeholder='Issue description'
                        label="Issue description"
                        variant="filled"
                        value={issueDescription}
                        onChange={(e) => setIssueDescription(e.target.value)} />
                </CardContent>
                <CardActions style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                }}>

                    <Button size='small' variant='contained' onClick={onClickAdd} style={{width: '48%'}} sx={{backgroundColor:"#070734", color:"#ffffff"}}>
                        Add issue
                    </Button>
                    <Link to="/home">
                        <Button size='small' variant='outlined' color='error' style={{width: '48%'}}>
                            Cancel
                        </Button>
                    </Link>
                </CardActions>
            </Card>
    )
}

export default AddIssue;
