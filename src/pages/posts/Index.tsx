import { useEffect, useState } from "react";
import Layout from "../../components/layout/Index"
import Breadcrumbs from '../../components/breadcrumb/Index'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import EnhancedTable from "../../components/table/Index";

const PostsPage = () => {
  const breadcrumbsData = [
    {
      id:1,
      name: 'Home',
      url: '/'
    },
    {
      id:1,
      name: 'Posts',
      url: '/'
    },
    {
      id:1,
      name: 'Posts Table',
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
      key: 'title',
      disablePadding: false,
      label: 'Title',
    },
    {
      key: 'body',
      disablePadding: false,
      label: 'Content',
    }
  ];

  const rowCols = {id: true, title: true, body: true}

  const [rows, setRows] = useState<[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
      if(res.ok){
        return res.json()
      }
    })
    .then(data => {
      setRows(data)
      setIsLoading(false)           
    })
    .catch(e => console.log(e))
  },[]);

  return <Layout>
    <Box mb={2}>
      <Typography variant="h5" component="h1" gutterBottom>
          Posts Table
      </Typography>
    <Breadcrumbs data={breadcrumbsData}/>
    </Box>
    <EnhancedTable
      data={rows} 
      headColumns={headCols} 
      rowColumns={rowCols} 
      selectable={true}
      tableTitle="Posts"
      loading={isLoading}
    />
  </Layout>
}

export default PostsPage