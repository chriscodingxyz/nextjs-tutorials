import FormExample from "@/components/FormExample";
import PetsList from "@/components/PetsList";
import React from "react";

export default function PetsPage() {
  return (
    <div className="max-w-2xl">
      PetsPage
      <PetsList />
      <FormExample />
    </div>
  );
}
