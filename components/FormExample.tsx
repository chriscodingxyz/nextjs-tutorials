import React from "react";
import { Button } from "./ui/button";

export default function FormExample() {
  return (
    <div>
      <form
        className="flex flex-col gap-3 p-4 bg-gray-100 border-2 border-primary"
        action=""
      >
        Pet form
        <input
          className="border-2 border-primary bg-purple-300"
          type="text"
          name="name"
          id="name"
          placeholder="name"
        />
        <input
          className="border-2 border-primary bg-purple-300"
          type="text"
          name="breed"
          id="breed"
          placeholder="breed"
        />
        <input
          className="border-2 border-primary bg-purple-300"
          type="number"
          name="age"
          id="age"
          placeholder="age"
        />
      </form>
      <Button type="submit">Submit form</Button>
    </div>
  );
}
