import React, { useState } from "react";
import styles from "../../style";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [serviceRequirements, setServiceRequirements] = useState("");
  const [ownershipStatus, setOwnershipStatus] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      serviceRequirements,
      ownershipStatus,
      firstName,
      lastName,
      address,
      state,
      country,
    };

    fetch("http://localhost:8000/api/submit-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Form submitted successfully");
          // Reset form fields if needed
        } else {
          console.error("Failed to submit form");
        }
      })
      .catch((error) => {
        console.error("Error submitting form", error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      <div className="flex md:flex-row flex-col justify-between gap-12">
        <input
          type="text"
          placeholder="Service Requirements"
          value={serviceRequirements}
          name="serviceRequirements"
          onChange={(e) => setServiceRequirements(e.target.value)}
          required
          className={`${styles.para} h-[40px] w-full bg-transparent border-b-[1px] border-highlight placeholder:text-highlight outline-none`}
        />
        <input
          type="text"
          placeholder="Ownership Status"
          value={ownershipStatus}
          name="ownershipStatus"
          onChange={(e) => setOwnershipStatus(e.target.value)}
          required
          className={`${styles.para} h-[40px] w-full bg-transparent border-b-[1px] border-highlight placeholder:text-highlight outline-none`}
        />
      </div>
      <div className="flex md:flex-row flex-col justify-between gap-12">
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          name="firstName"
          onChange={(e) => setFirstName(e.target.value)}
          required
          className={`${styles.para} h-[40px] w-full bg-transparent border-b-[1px] border-highlight placeholder:text-highlight outline-none`}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          name="lastName"
          onChange={(e) => setLastName(e.target.value)}
          required
          className={`${styles.para} h-[40px] w-full bg-transparent border-b-[1px] border-highlight placeholder:text-highlight outline-none`}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Address"
          value={address}
          name="address"
          onChange={(e) => setAddress(e.target.value)}
          required
          className={`${styles.para} h-[40px] w-full bg-transparent border-b-[1px] border-highlight placeholder:text-highlight outline-none`}
        />
      </div>
      <div className="flex  md:flex-row flex-col justify-between gap-12">
        <input
          type="text"
          placeholder="State"
          value={state}
          name="state"
          onChange={(e) => setState(e.target.value)}
          required
          className={`${styles.para} h-[40px] w-full bg-transparent border-b-[1px] border-highlight placeholder:text-highlight outline-none`}
        />
        <input
          type="text"
          placeholder="Country"
          value={country}
          name="country"
          onChange={(e) => setCountry(e.target.value)}
          required
          className={`${styles.para} h-[40px] w-full bg-transparent border-b-[1px] border-highlight placeholder:text-highlight outline-none`}
        />
      </div>

      <div className="flex justify-end">
        <input
          type="submit"
          className="w-[220px] py-[15px] text-background bg-accent"
          value="Request a Quote"
        />
      </div>
    </form>
  );
};

export default Form;
