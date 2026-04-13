"use server";

export async function registerUser(formData: FormData) { 
  try {
    // Mock success
    console.log("Mock registerUser called with data:", Object.fromEntries(formData));
    return { success: true, message: "Inscription réussie (Mocked)" };
  } catch (error) {
    console.error("Erreur dans registerUser:", error);
    throw error;
  }
}
