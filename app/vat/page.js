// app/vat/page.js
"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";

export default function VatPage() {
  const { register, handleSubmit, reset } = useForm();
  const [result, setResult] = useState(null);
  const vatRate = process.env.NEXT_PUBLIC_VAT_RATE;


  const onSubmit = (data) => {
    const { amount } = data;
    const vat = (amount * 0.07).toFixed(2); // Assuming a VAT rate of 7%
    setResult(vat);
    reset(); // Reset form fields after submission
  };

  return (
    <div>
      <h1>VAT Calculator</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="amount">Amount:</label>
          <input id="amount" type="number" {...register("amount", { required: true })} />
        </div>
        <button type="submit">Calculate VAT</button>
      </form>
      {result && (
        <div>
          <h2>VAT: ${result}</h2>
        </div>
      )}
    </div>
  );
}
