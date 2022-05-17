import { useEffect, useState } from "react";
import Layout from "../../components/layout/Index"
import Breadcrumbs from '../../components/breadcrumb/Index'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import EnhancedTable from "../../components/table/Index";

const UsersPage = () => {
  const breadcrumbsData = [
    {
      id:1,
      name: 'Home',
      url: '/'
    },
    {
      id:1,
      name: 'Tables',
      url: '/'
    },
    {
      id:1,
      name: 'Users Table',
      url: '/'
    }
  ]
  const headCols = [
    {
      key: 'id',
      disablePadding: true,
      label: 'ID',
    },
    {
      key: 'first_name',
      disablePadding: false,
      label: 'First Name',
    },
    {
      key: 'last_name',
      disablePadding: false,
      label: 'Last Name',
    },
    {
      key: 'username',
      disablePadding: false,
      label: 'Username',
    },
    {
      key: 'password',
      disablePadding: false,
      label: 'Password',
    },
  ];

  const rowCols = {id: true, first_name: true, last_name: true, username: true, password: true}

  const [rows, setRows] = useState<[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(()=>{
    fetch('http://165.232.74.27/api/v1/users')
    .then(res => {
      if(res.ok){
        return res.json()
      }
    })
    .then(data => {
      setRows(data.list)
      setIsLoading(false)           
    })
    .catch(e => console.log(e))
  },[]);

  return <Layout>
    <Box mb={2}>
      <Typography variant="h5" component="h1" gutterBottom>
          Users Table
      </Typography>
    <Breadcrumbs data={breadcrumbsData}/>
    </Box>
    <EnhancedTable
      data={rows} 
      headColumns={headCols} 
      rowColumns={rowCols} 
      selectable={true}
      tableTitle="Users"
      loading={isLoading}
    />
  </Layout>
}

export default UsersPage