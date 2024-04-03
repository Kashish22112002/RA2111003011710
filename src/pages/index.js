import Image from "next/image";
import axios from "axios"
import { useState , useEffect } from "react";
export default function Home() {
  
  const [data , setData] = useState([])

  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzEyMTUzNTkzLCJpYXQiOjE3MTIxNTMyOTMsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjE4NWY1ZjVjLTRhNTUtNDI1OC1hNGNkLTE1MTc4ODAyMjIyZSIsInN1YiI6ImtzOTk3OEBzcm1pc3QuZWR1LmluIn0sImNvbXBhbnlOYW1lIjoia2FzaHVtYXJ0IiwiY2xpZW50SUQiOiIxODVmNWY1Yy00YTU1LTQyNTgtYTRjZC0xNTE3ODgwMjIyMmUiLCJjbGllbnRTZWNyZXQiOiJMTVpyQlNiWGpGYXVWR0tHIiwib3duZXJOYW1lIjoiS0FTSElTSCBTSU5IQSIsIm93bmVyRW1haWwiOiJrczk5NzhAc3JtaXN0LmVkdS5pbiIsInJvbGxObyI6IlJBMjExMTAwMzAxMTcxMCJ9.mOro9EXZ_M-32odDNtKStLBJG5Ua8DwxxI-i36mzTec"

  const fetchData = async ()=>{


    let res = axios.get("http://20.244.56.144/test/companies/AMZ/categories/TV/products?top=10&minPrice=1000&maxPrice=200000",{ 
      headers: {
        'Authorization': 'Bearer ' + token
      } 
    })

    console.log(res.data)
    
  }
  useEffect(()=>{

fetchData()

  },[])
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
meow
    </main>
  );
}
