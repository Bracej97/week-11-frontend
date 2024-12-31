import React from "react"
import { useParams, Link } from "react-router-dom"
import { Card, CardContent, Button, CardActions, Typography, Box } from "@mui/material"
import { useState, useEffect } from "react";
import api from "../api/axios";

function IssueDetails() {
    const { id } = useParams();
    const [issue, setIssue] = useState({});

    useEffect(() => {
        const getIssue = async () => {
            const response = await api.get(`IssueAPI/get/${id}/`)
            console.log(response)
            setIssue(response.data)
        }
        getIssue()
    }, []);

    console.log(issue);

    return(
        <>
            {/* Header Section */}
            <Box
                sx={{
                    textAlign: "center",
                    marginBottom: "30px",
                    padding: "20px",
                    background: "#070734", // Navy background
                    color: "#FFffff", // Gold text
                    borderRadius: "8px",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                }}
            >
                <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                    Issue details
                </Typography>
            </Box>

            {/* Events Section */}

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                }}
            >
                <Card sx={{ maxWidth: 345, minWidth: 300, backgroundColor: '#070734'}} key={issue.id}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{ color: '#ffffff' }}>
                            {issue.issue_name}
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#ffffff' }}>
                            {issue.issue_description}
                        </Typography>
                    </CardContent>
                    <CardActions style={{justifyContent: 'center'}}>
                        <Link to="/home">
                            <Button size='small' variant='outlined' color='error' style={{width: '48%'}}>
                                Back
                            </Button>
                        </Link>
                    </CardActions>
                </Card>
            </Box>
        </>
    )
}

export default IssueDetails
