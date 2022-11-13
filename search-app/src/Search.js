import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useQuery } from "react-query";
import { Header } from "./Components/Header";
import { ALL_DATA, SEARCH_API } from "./Apis";

function Search() {
  const [searchNew,setSearchNew] = useState('')
  
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState('')

  const [data,setData] = useState([]);

  const fetchData = async () => {
    setLoading(true)
    setSearchNew('')
    try{
    const response = await axios(ALL_DATA);
    if(response.status===200){
      setLoading(false)
      setData(response.data)
    }
    }catch(e){
      setLoading(false)
      setError(e)
      console.log('er',e);
    }

  }

  useEffect(()=>{
    fetchData()
  },[])

  

  async function searchData (e){
    e.preventDefault()
    setLoading(true)
    

    try{
    const response = await axios({
      method:'get',
      url:SEARCH_API+'?search='+searchNew
    })
    if(response.status===200){
      setLoading(false)
      setData(response.data)
    }
  }catch(e){
    setLoading(false)
    setError(e)
    console.log('error',e);
  }
  }
  
  return ( 
    <div className="fluid-container">
      <Header searchValue={searchNew} searchOnChange={e=>setSearchNew(e.target.value)} searchFun={searchData} deleteFun={fetchData} />
      {loading  && (<h1>Loading Please Wait...</h1>)}
        <div className="row">
            {data.map((item,index)=>(
                <div key={index} className='col-3 p-3 px-3 '>
                    <Card className="card-height">
                        <Card.Img className="img-fluid img-height" src={item.image} />
                        <Card.Header>{item.headline}</Card.Header>
                        <Card.Body>
                            <Card.Title>{item.companyName}</Card.Title>
                            <Card.Text>{item.description}</Card.Text>
                            <Card.Text>{item.primaryText}</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            ))
            }
        </div>
    </div>
   );
}

export { Search };
