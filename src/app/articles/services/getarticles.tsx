export async function getArticles() {
  try {
    const response = await fetch("http://localhost:8001/api/test/getarticle");
    
    if (!response.ok) {
      throw new Error("Gagal mengambil data artikel");
    }
    
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error("Error fetching articles:", error);
    return [];
  }
}