"use client";

import { useEffect, useState } from "react";

type Data = {
  userId: number;
  id: number;
  title: string;
};

export default function Home() {
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      {data.map((x) => (
        <div key={x.id} style={{ background: "skyblue" }}>
          <p>{x.id}</p>
          <p>{x.title}</p>
          <p>{x.userId}</p>
        </div>
      ))}
    </>
  );
}
