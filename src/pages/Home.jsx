import React, { useContext } from "react";
import { IssuesContext } from "../contexts/IssuesContext";
import StickyHeadTable from "../components/table";
import Header from "../components/Header";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import {BrowserRouter as Router, Link} from 'react-router-dom';

function Home() {
    const { issues, getAllIssues } = useContext(IssuesContext);

    const table = StickyHeadTable()


    return (
        <div>
            <Header />
            <div style= {{ marginTop:"32px" }} />
            <Link to="/addissue">
                <Fab variant="extended" color="primary" style={{ margin:"10px"}}>
                    <AddCircleIcon sx={{ mr: 1 }} />
                        Add issue
                </Fab>
            </Link>
            { table }
        </div>
    )
}

export default Home;
