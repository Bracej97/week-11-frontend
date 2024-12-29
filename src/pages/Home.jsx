import React, { useContext } from "react";
import { IssuesContext } from "../contexts/IssuesContext";
import StickyHeadTable from "../components/table";

function Home() {
    const { issues, getAllIssues } = useContext(IssuesContext);

    const table = StickyHeadTable()


    return (
        <div>
            { table }
        </div>
    )
}

export default Home;
