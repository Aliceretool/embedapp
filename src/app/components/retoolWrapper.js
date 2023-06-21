"use client";
import React from "react";
import Retool from "react-retool";

const retoolAppName = "";

export default function RetoolWrapper({ searchTerm }) {
  const [retoolEmbedUrl, setRetoolEmbedUrl] = React.useState("");
  console.log({ searchTerm });

  React.useEffect(() => {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ retoolAppName }),
    };
    fetch("/api/", options)
      .then((res) => res.json())
      .then((data) => {
        console.log({ data });
        setRetoolEmbedUrl(data);
      });
  }, [retoolAppName]);

  return (
    retoolEmbedUrl && (
      <div className="w-screen h-screen bg-white">
        <Retool
          url={retoolEmbedUrl}
          width="100%"
          height="100%"
          style="background: white"
          data={{ searchTerm }}
        />
      </div>
    )
  );
}
