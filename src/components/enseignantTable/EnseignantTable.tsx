"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { registerTeacher } from "@/actions/signupprofesseur";
import RegisterFormTeacher from "../formulaires/FormulaireProf";

type TeacherType = {
  id: number;
  utilisateurs: {
    nom: string;
    prenom: string;
    email: string;
    telephone: string;
    adresse: string;
    profil: string;
  };
  cours: {
    filieremodule: {
      syllabus: string;
      filieres: {
        nom: string;
      };
      modules: {
        nom: string;
      };
    };
  }[];
};

const EnseignantTable = ({ user: layoutUser }: { user?: any }) => {
  const [enseignants, setEnseignants] = useState<TeacherType[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isSur, setIsSur] = useState(false);

  const toggleIsSur = () => {
    setIsSur(!isSur);
  };

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleRegisterSubmit = async (formData: FormData) => {
    await registerTeacher(formData);
  };

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Filter teachers by search query
  const filteredTeachers = enseignants.filter(
    (enseignant) =>
      enseignant.utilisateurs.nom.toLowerCase().includes(search.toLowerCase()) ||
      enseignant.utilisateurs.email.toLowerCase().includes(search.toLowerCase()) ||
      enseignant.cours.some((cours) =>
        cours.filieremodule.filieres.nom.toLowerCase().includes(search.toLowerCase())
      ) ||
      enseignant.cours.some((cours) =>
        cours.filieremodule.syllabus?.toLowerCase().includes(search.toLowerCase())
      ) ||
      enseignant.cours.some((cours) =>
        cours.filieremodule.modules.nom.toLowerCase().includes(search.toLowerCase())
      ) ||
      enseignant.utilisateurs.adresse.toLowerCase().includes(search.toLowerCase()) ||
      enseignant.utilisateurs.telephone.includes(search)
  );

  // Pagination
  const totalPages = Math.ceil(filteredTeachers.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTeachers = filteredTeachers.slice(indexOfFirstItem, indexOfLastItem);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  useEffect(() => {
    const fetchTeachers = async () => {
      // Mock data instead of fetch
      setEnseignants([
        {
          id: 1,
          utilisateurs: {
            nom: "Mock", prenom: "Teacher", email: "mock@example.com",
            telephone: "12345678", adresse: "Mock Address", profil: ""
          },
          cours: []
        }
      ]);
    };

    fetchTeachers();
  }, []);

  return (
    <div className="w-full mt-16 gap-10 flex flex-col justify-start items-center">
      <div className="flex flex-col">
        <h1 className="text-xl font-bold mb-4">Teacher List</h1>
        <div className="flex items-center justify-between mb-4">
          <input
            type="text"
            placeholder="Search..."
            className="border rounded p-2 w-1/3"
            value={search}
            onChange={handleSearchChange}
          />
          <button className="text-green-500 text-2xl" onClick={toggleModal}>
            +
          </button>
        </div>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="p-2">Info</th>
              <th className="p-2">Teacher ID</th>
              <th className="p-2">Modules</th>
              <th className="p-2">Classes</th>
              <th className="p-2">Phone</th>
              <th className="p-2">Address</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentTeachers.map((enseignant) => (
              <tr key={enseignant.id} className="border-b-2 border-b-gray-400">
                <td className="p-2">
                  <div className="flex items-center gap-2">
                    {enseignant.utilisateurs.profil ? (
                      <img
                        src={enseignant.utilisateurs.profil}
                        alt=""
                        className="w-8 h-8 rounded-full"
                      />
                    ) : (
                      <img
                        src="/icons/default-avatar.png"
                        alt="Avatar"
                        className="w-8 h-8 rounded-full"
                      />
                    )}
                    <div>
                      <div>
                        {enseignant.utilisateurs.nom}{" "}
                        {enseignant.utilisateurs.prenom}
                      </div>
                      <div className="text-sm text-gray-500">
                        {enseignant.utilisateurs.email}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="p-2">{enseignant.id}</td>
                <td className="p-2">
                  {enseignant.cours.map((cours) => (
                    <div key={cours.filieremodule?.modules.nom}>
                      {cours.filieremodule?.modules.nom || "N/A"}
                    </div>
                  ))}
                </td>
                <td className="p-2">
                  {enseignant.cours.map((cours) => (
                    <div key={cours.filieremodule?.filieres.nom}>
                      {cours.filieremodule?.filieres.nom || "N/A"}
                    </div>
                  ))}
                </td>
                <td className="p-2">{enseignant.utilisateurs.telephone}</td>
                <td className="p-2">{enseignant.utilisateurs.adresse}</td>
                <td className="p-2">
                  <div className="flex gap-2">
                    <Image
                      src="/icons/pencil.png"
                      alt="edit"
                      width={20}
                      height={20}
                      onClick={toggleIsSur}
                    />
                    <Image
                      src="/icons/eye.png"
                      alt="view"
                      width={20}
                      height={20}
                    />
                    <Image
                      src="/icons/delete.png"
                      alt="delete"
                      width={20}
                      height={20}
                      onClick={toggleIsSur}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex items-center justify-between mt-4">
          <button
            className="px-4 py-2 bg-gray-200 rounded"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <div>
            Page {currentPage} of {totalPages}
          </div>
          <button
            className="px-4 py-2 bg-gray-200 rounded"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>

      {/* Teacher registration modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={toggleModal}
        >
          <div
            className="bg-white rounded-lg p-2 shadow-lg lg:px-8 lg:py-4 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <RegisterFormTeacher
              onSubmit={handleRegisterSubmit}
              title="Enroll a New Teacher"
            />
          </div>
        </div>
      )}

      {/* Confirmation modal */}
      {isSur && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={toggleIsSur}
        >
          <div
            className="bg-white rounded-lg p-2 shadow-lg lg:px-8 lg:py-4 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-3xl font-bold text-center">
              Delete Teacher
            </h2>
            <form>
              <div className="flex gap-2 text-center flex-col mt-6">
                <div className="text-lg flex justify-center font-medium w-[300px]">
                  Are you sure you want to perform this action?
                </div>
                <div className="flex justify-between items-center">
                  <button className="text-xl bg-green-500 rounded-xl px-10 py-2 text-white">
                    YES
                  </button>
                  <button className="text-xl bg-red-500 rounded-xl px-10 py-2 text-white">
                    NO
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EnseignantTable;
