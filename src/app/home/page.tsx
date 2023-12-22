"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../../components/shared/Card";
import Link from "next/link";
import { useUser } from "@clerk/clerk-react";

export default function Home() {
  // const user = useUser();
  const [dataArray, setDataArray] = useState([
    { _id: "", title: "", description: "", createdAt: Date.now(), isPending: false },
  ]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get("/api/home");
      const datajson = response.data;
      setDataArray(() => datajson);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

const getData=()=>{
  fetchData()
}

  const handleCardDelete = function (): void {
    fetchData();
  };

  return (
    <main className="py-14 relative">
      <button onClick={getData}>get data</button>
      {
        loading ? (
          <div className="flex  justify-center animate-spin duration-1000">
            <img src="/loading.svg" alt="Loading" />
          </div>
        ) : (
          <>
            <h1 className="w-8/12 mx-auto mb-12 rounded-lg text-center p-1 text-2xl bg-blue-200 text-gray-800 font-extrabold">{`You have ${dataArray.length} Pending Tasks !!`}</h1>
            {dataArray.length === 0 && (
              <div className="flex justify-center">
                <Link className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded" href="/addwork">
                  Add Work
                </Link>
              </div>
            )}
            {dataArray.length > 0 &&
              dataArray.map((task) => (
                <Card
                  key={task._id}
                  id={task._id}
                  title={task.title}
                  description={task.description}
                  createdAt={task.createdAt}
                  isPending={task.isPending}
                  handleCardDelete={handleCardDelete}
                />
              ))}
          </>
        )
      }
    </main>
  );
}
