"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../../components/shared/Card";

export default function home() {

  const [dataArray, setDataArray] = useState([
    { _id: "", title: "", description: "", createdAt: "", isPending: false },
  ]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{

  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/home");
        const datajson = response.data; //array
        setDataArray(() => datajson);
        // console.log(datajson);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  
  // console.log(dataArray);
  return (
    
    <main className="py-14   relative">
      {loading ? (
        <>
<div className="flex justify-center animate-spin  ">
      <img src="/loading.svg" alt="Loading" />
    </div>
            </>
      ) : (
        <>
          <h1 className="w-8/12 mx-auto mb-12 rounded-lg text-center p-1 text-2xl bg-blue-200 text-gray-800 font-extrabold ">{`You have ${dataArray.length} Pending Tasks !!`}</h1>

          {dataArray.map((task) => {
            return (
              <Card
                key={task._id}
                id={task._id}
                title={task.title}
                description={task.description}
                createdAt={task.createdAt}
                isPending={task.isPending}
              />
            );
          })}
        </>
      )}
    </main>
  );
}
