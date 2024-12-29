import React, {useContext, createContext, useState} from 'react';
import api from '../api/axios';

export const IssuesContext = createContext();

export function IssuesProvider({ children }) {
    const [issues, setIssues] = useState([])

    const getAllIssues = async () => {
        const response = await api.get('IssueAPI/')
        setIssues(response.data.data)

        return issues;
    }

    return (
        <IssuesContext.Provider value={{ issues, getAllIssues }}>
            {children}
        </IssuesContext.Provider>
    );
}
