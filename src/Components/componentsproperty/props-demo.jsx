import  { NavBar } from '../componentsproperty/navbar';
import  { DataGrid } from '../componentsproperty/data-grid';
import { useState } from 'react';
import { useEffect } from 'react';

export function PropsDemo(){

    const [columns, setColumns] = useState([]);
    const [rows, setRows] = useState([]);

    function LoadColumns(){
        fetch('http://fakestoreapi.com/products/1&#39')
        .then(res=> res.json())
        .then(product=> {
            delete product.rating;
            setColumns(Object.keys(product));
        })
    }

    function LoadData(){
        fetch('http://fakestoreapi.com/products&#39')
        .then(res=>res.json())
        .then(products=>{
            products.map(product=>{
                delete product.rating;
            })
            setRows(products);
        })
    }

    useEffect(()=>{
        LoadColumns();
        LoadData();
    },[]);


    return(
        <div className="container-fluid">
            <h3>Fake Store Data</h3>
            <DataGrid caption="Fakestore Data" fields={columns} data={rows} />
            <h3>Products Grid</h3>
            <DataGrid theme="table-primary" caption="Product Details" fields={['Name','Price','Stock']} data={[{'Name':'Samsung TV', 'Price':35000.44, 'Stock':'Available'},{'Name':'Mobile', 'Price':12000.33, 'Stock':'Out of Stock'}]} />
            <h3>Employees Grid</h3>
            <DataGrid theme="table-success" caption="Employee Details" fields={['First Name', 'Last Name', 'Designation', 'Salary']} data={[{'First Name':'Raj', 'Last Name':'Kumar', 'Designation':'Developer', 'Salary':50000.33}]} />
        </div>
    )
}
