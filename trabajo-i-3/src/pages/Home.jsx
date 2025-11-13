import { useEffect } from "react";
import { useProfile } from "../hooks/useProfile";


export const Home =   () => {
  const {profile, setProfile, getProfile} = useProfile("");
  useEffect( ()=>{
    const fetchData = async () =>{
      try {
        const response = await getProfile()
        // console.log(response.user.name);
        setProfile(response.user.name)
      } catch (error) {
        setProfile("Anonimo");
        console.log(error);

      }
    };
    fetchData();
  },[])
  return (
    <>
    <div>
      <h1>Bienvenido {JSON.stringify(profile)}</h1>
    </div>
    </>
  )
}
