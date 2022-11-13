import axios from 'axios';
import { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ALL_DATA } from './Apis';
import './App.css';
import { Search } from './Search';


const queryClient = new QueryClient({});

function App() {
  const [adsInfo,setAdsInfo] = useState([])
  const [loading,setLoading] = useState(false)
  
  

  useEffect(()=>{
    // getAllData()
  },[])

  

  // console.log('data',data);
  return (
    <Search />  
  );
}

export default App;
