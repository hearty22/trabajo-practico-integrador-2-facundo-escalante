import { useEffect, useState } from "react";
import { useProfile } from "../hooks/useProfile";

export const Home = () => {
  const { profile, setProfile, getProfile } = useProfile("");
  const [tasks, setTasks] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getProfile();
        // console.log(response.user.name);
        setProfile(response.user.name);
      } catch (error) {
        setProfile("Anonimo");
        console.log(error);
      }
    };
    fetchData();
  }, []);
  useEffect(()=>{
    const getTasks = async () =>{
      try {
        const res = await fetch("http://localhost:3000/api/tasks-by-user",{
          method: "GET",
          credentials: "include"
        });
        const dataTasks = await res.json();
        if(res.ok){
          console.log("mensaje de exito");
          setTasks(dataTasks)
        } else{
          console.log("mensaje de fracaso");
        }
      } catch (error) {
        console.log(error);
      }
    };
    getTasks();
  },[])
  

  return (
    <>
      <div>
        <h1>Bienvenido {JSON.stringify(profile)}</h1>
        <div class="bg-gray-100 min-h-screen p-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-6">
            Resumen Estadístico
          </h2>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wider">
                Total de Tareas
              </h3>
              <p class="mt-2 text-4xl font-bold text-gray-900"></p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wider">
                Tareas Completadas
              </h3>
              <p class="mt-2 text-4xl font-bold text-green-600"></p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wider">
                Tareas Pendientes
              </h3>
              <p class="mt-2 text-4xl font-bold text-amber-600"></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
