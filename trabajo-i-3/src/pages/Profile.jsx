import React, { useEffect } from 'react'
import { useProfile } from '../hooks/useProfile'
import { useState } from 'react'
import { Loading } from '../components/Loading'
export const Profile = () => {
  const {profile, setProfile} = useProfile({
    id : "",
    name: "",
    lastname: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  useEffect(()=>{
    const fetchData = async () =>{
      try {
        setIsLoading(true)
        const res = await fetch("http://localhost:3000/api/profile",
          {method: "GET", credentials: "include"}
        )
        const data = await res.json()
        console.log(data.user);
        setProfile({
          id: data.user.id,
          name: data.user.name,
          lastname: data.user.lastname
        })
      } catch (error) {
        console.log(error);
        setIsLoading(false)
      } finally{
        setIsLoading(false)
      }
    };
    fetchData();
    
  },[]);


  if(isLoading){
    return(
      <Loading/>
    )
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Perfil de Usuario</h1>
        <div className="mb-4">
          <h2 className="text-xl text-gray-700">ID: {profile.id}</h2>
        </div>
        <div className="mb-4">
          <h2 className="text-xl text-gray-700">Nombre: {profile.name}</h2>
        </div>
        <div className="mb-4">
          <h2 className="text-xl text-gray-700">Apellido: {profile.lastname}</h2>
        </div>
      </div>
    </div>
  )
}
