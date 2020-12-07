import React, { useEffect, useState } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBDataTableV5 } from "mdbreact";
import axios from "axios";
import Jumbotron from "../components/Jumbotron";

function Homepage() {

    const [dataTable, setDataTable] = useState({
        columns: [
            {
                label: 'ID',
                field: 'id',
                width: 150,
                attributes: {
                'aria-controls': 'DataTable',
                'aria-label': 'id',
                },
            },
            {
                label: 'First Name',
                field: 'first_name',
                sort: 'asc',
                width: 270,
            },
            {
                label: 'Last Name',
                field: 'last_name',
                sort: 'asc',
                width: 270,
            },
            {
                label: 'Email',
                field: 'email',
                width: 200,
            },
            {
                label: 'Department',
                field: 'department',
                width: 100,
            },
            {
                label: 'Title',
                field: 'title',
                width: 150,
            },
            {
                label: 'Tenure',
                field: 'tenure',
                width: 100,
            },
        ],
        rows: []
    });

    useEffect(() => {
        axios
        .get("https://api.mockaroo.com/api/4a03a8f0?count=500&key=1d694940")
        .then(res => {
            setDataTable({...dataTable,rows: res.data});
        })
        .catch(err => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return (
        <div>
            <MDBContainer className="mw-100 containerWrap">
                <MDBRow>
                    <MDBCol>
                        <Jumbotron></Jumbotron>
                        <MDBDataTableV5 
                            hover 
                            entriesOptions={[5, 20, 25, 50]} 
                            entries={5} 
                            pagesAmount={4} 
                            data={dataTable}
                            className="elegant-color m-3" 
                        />
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    );
}

export default Homepage;