import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCars } from '../reducers/car';
import { Button, Table } from 'antd';
import { Link } from 'react-router-dom';


export default function CarTable() {

    const columns = [
        {
          title: 'Year',
          dataIndex: 'year',
          key: 'year',
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'Make',
          dataIndex: 'make',
          key: 'make',
          ender: (text) => <a>{text}</a>
        },
        {
            title: 'Model',
            dataIndex: 'model',
            key: 'model',
            ender: (text) => <a>{text}</a>
          },
        ]

    const cars = useSelector(state => state.cars.carsList);
    const loading = useSelector((state) => state.cars.loading);
    const error = useSelector((state) => state.cars.error);
    const dispatch = useDispatch();

    console.log(cars)

    useEffect(() => {
        dispatch(fetchAllCars())
    }, [dispatch])

    if (loading) {
        return <p>Loading...</p>;
      }
    
      if (error) {
        return <p>Error: {error}</p>;
      }

    return (
             <div>
                <h2>Car List</h2>
                <Table dataSource={cars} columns={columns} />
                <Button type='link'>
                <Link to='/charactertable'>Characters</Link>
             </Button>
            </div>
    );
}