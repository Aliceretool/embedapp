"use client";
import React from "react";
import RetoolWrapper from "./components/retoolWrapper";
import TextInput from "./components/textInput";

export default function Home() {
  const [searchTerm, setSearchTerm] = React.useState("");
  // onChange function to log the value
  const onChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <TextInput
        value={searchTerm}
        placeholder={"Search.."}
        onChange={onChange}
      />
      <RetoolWrapper searchTerm={searchTerm} />
    </main>
  );
}
