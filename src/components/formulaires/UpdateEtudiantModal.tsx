"use client";

import { useState } from "react";

type UpdateStudentModalProps = {
  etudiant: {
    id: number;
    utilisateurs: {
      nom: string;
      prenom: string;
      email: string;
      telephone: string;
      adresse: string;
      profil: string;
    };
    filieres: {
      nom: string;
    };
  };
  onClose: () => void;
  onUpdate: (id: number, updatedData: any) => Promise<void>;
};

export default function UpdateStudentModal({
  etudiant,
  onClose,
  onUpdate,
}: UpdateStudentModalProps) {
  const [formData, setFormData] = useState({
    nom: etudiant.utilisateurs.nom,
    prenom: etudiant.utilisateurs.prenom,
    email: etudiant.utilisateurs.email,
    telephone: etudiant.utilisateurs.telephone,
    adresse: etudiant.utilisateurs.adresse,
    filiere: etudiant.filieres.nom,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onUpdate(etudiant.id, formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div
        className="bg-white rounded-lg p-6 shadow-lg w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold mb-4">Edit Student</h2>
        <form onSubmit={handleSubmit}>
          {/* Last Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Last Name</label>
            <input
              type="text"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* First Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">First Name</label>
            <input
              type="text"
              name="prenom"
              value={formData.prenom}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* Phone */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Phone</label>
            <input
              type="text"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* Address */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Address</label>
            <input
              type="text"
              name="adresse"
              value={formData.adresse}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* Program */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Program</label>
            <input
              type="text"
              name="filiere"
              value={formData.filiere}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}