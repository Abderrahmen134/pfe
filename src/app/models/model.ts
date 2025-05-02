
export interface Product {
    id: number;
    name: string;
    description: string;
    quantity: number;
    price: number;
    image: string;
  }
  export interface User {
    id: number;
    prenom: string;
    nom: string;
    email: string;
    mot_de_passe: string;
    phone: string;
    gouvernorat: string;
  }
  export interface ClientData {
    prenom: string;
    nom: string;
    email: string;
    telephone: string;
    gouvernorat: string;
    societe: string;
  }
  export interface CreateDevisResponse {
    devis: {
      id: number;
      // autres champs si besoin
    };
  }
  