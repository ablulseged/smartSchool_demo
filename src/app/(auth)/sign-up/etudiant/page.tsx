'use client'
import { registerUser } from "@/actions/signupetudiant";
import { useState } from "react";

export default function Register() {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setSuccess(null);

    const formData = new FormData(event.currentTarget);

    try {
      await registerUser(formData);
      setSuccess("Student created successfully!");
    } catch (err) {
      setError("Error creating student.");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <br /><br /><br /><br />
      <h1>Create a Student</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
      <div>
        <label>Last Name:</label>
        <input type="text" name="nom" required />
      </div>
      <div>
        <label>First Name:</label>
        <input type="text" name="prenom" required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" required />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" name="mot_de_passe" required />
      </div>
      <div>
        <label>Role ID:</label>
        <input type="number" name="id_role" required />
      </div>
      <div>
        <label>Gender:</label>
        <select name="sexe" required>
          <option value="M">Male</option>
          <option value="F">Female</option>
        </select>
      </div>
      <div>
        <label>Phone:</label>
        <input type="text" name="telephone" />
      </div>
      <div>
        <label>Address:</label>
        <input type="text" name="adresse" />
      </div>
      <div>
        <label>Profile:</label>
        <input type="text" name="profil" required />
      </div>
      <div>
        <label>Date of Birth:</label>
        <input type="date" name="date_naissance" required />
      </div>
      <div>
        <label>Program ID:</label>
        <input type="number" name="id_filiere" required />
      </div>
      <button type="submit">Create</button>
    </form>
  );
}
