const API_BASE_URL = "https://viacep.com.br/ws"; // URL base da API ViaCEP

// Função para realizar requisição à API de CEP
export const getAddressByCep = async (cep) => {
  console.log(`Consultando endereço para o CEP: ${cep}`);
  try {
    const response = await fetch(`${API_BASE_URL}/${cep}/json`, {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error("Erro ao buscar o CEP");
    }
    const data = await response.json();
    console.log("Endereço obtido:", data);
    return data;
  } catch (error) {
    console.error("Erro ao consultar o CEP:", error);
    throw error;
  }
};

export default {
  getAddressByCep,
};
