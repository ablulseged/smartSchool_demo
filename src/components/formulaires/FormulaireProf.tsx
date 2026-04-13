import { registerTeacher } from "@/actions/signupprofesseur";
import { useState } from "react";

type RegisterFormProps = {
  onSubmit: (formData: FormData) => Promise<void>;
  title?: string;
};

const RegisterFormTeacher = ({ onSubmit, title = "Create a Teacher" }: RegisterFormProps) => {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setSuccess(null);

    const formData = new FormData(event.currentTarget);

    try {
      await registerTeacher(formData);
      setSuccess("Teacher created successfully!");
    } catch (err) {
      setError("Error creating teacher.");
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1 className="text-xl font-bold">Create a Teacher</h1>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}
        <div className="flex flex-col gap-1 mt-6">
          <div className="flex gap-4 mt-4">
            <div>
              <label className="block text-gray-700 mb-2">Last Name:</label>
              <input type="text" name="nom" className="w-[260px] px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">First Name:</label>
              <input type="text" name="prenom" className="w-[260px] px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email:</label>
              <input type="email" name="email" className="w-[260px] px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required />
            </div>
          </div>
          <div className="flex gap-4 mt-4">
            <div>
              <label className="block text-gray-700 mb-2">Password:</label>
              <input type="password" name="mot_de_passe" className="w-[260px] px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Gender:</label>
              <select name="sexe" className="w-[260px] px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required>
                <option value="M">Male</option>
                <option value="F">Female</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Phone:</label>
              <input type="text" name="telephone" className="w-[260px] px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
            </div>
          </div>

          <div className="flex gap-4 mt-4">
            <div>
              <label className="block text-gray-700 mb-2">Address:</label>
              <input type="text" name="adresse" className="w-[260px] px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Profile:</label>
              <input type="text" name="profil" className="w-[260px] px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Specialty:</label>
              <input type="text" name="specialite" className="w-[260px] px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required />
            </div>
          </div>

          <div className="flex gap-4 mt-4">
            <div>
              <label className="block text-gray-700 mb-2">Courses:</label>
              <input
                type="text"
                name="cours"
                placeholder="Enter courses separated by commas"
                className="w-[260px] px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Role:</label>
              <select name="id_role" className="w-[260px] px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required>
                <option value="1">Member</option>
                <option value="2">Union</option>
                <option value="3">Other</option>
              </select>
            </div>
          </div>

        </div>
        <div className="flex gap-4 mt-4">
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
export default RegisterFormTeacher;