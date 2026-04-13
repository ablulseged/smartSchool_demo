"use server";

export async function registerUser(formData: FormData) {
  try {
    console.log("Mock registerUser (General) called with data:", Object.fromEntries(formData));
    return { success: true, message: "Utilisateur inscrit avec succès (Mocked)" };
  } catch (error) {
    console.error("Erreur dans registerUser:", error);
    throw error;
  }
}
