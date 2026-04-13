"use server";

export async function registerTeacher(formData: FormData) {
  try {
    console.log("Mock registerTeacher called with data:", Object.fromEntries(formData));
    return { success: true, message: "Enseignant inscrit avec succès (Mocked)" };
  } catch (error) {
    console.error("Erreur dans registerTeacher:", error);
    throw error;
  }
}
