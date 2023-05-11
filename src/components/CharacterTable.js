import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCharacters } from '../reducers/character';
import { Button, Table, Tag } from 'antd';
import { Link } from 'react-router-dom';


function CharacterTable() {

    const characters = useSelector(state => state.characters.charactersList);
    const loading = useSelector(state => state.characters.loading);
    const error = useSelector(state => state.characters.error);
    const dispatch = useDispatch()

    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'Animal',
          dataIndex: 'animal',
          key: 'animal',
          ender: (text) => <a>{text}</a>
        },
        ]

    useEffect(() => {
        dispatch(fetchAllCharacters())
    }, [dispatch])

    if (loading) {
        return <p>Loading...</p>;
      }
    
      if (error) {
        return <p>Error: {error}</p>;
      }

    return (
        <div>
            <h2>Character List</h2>
           <Table dataSource={characters} columns={columns} />
            <Button type='link'>
                <Link to='/cartable'>Cars</Link>
            </Button>
        </div>
)}

export default CharacterTable;