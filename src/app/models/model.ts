
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
  export interface Devis {
    id?: number;
    status: string;
    société: string;
    id_client: number;
    created_at?: string;
    updated_at?: string;
  }
  export interface LigneDevis {
    id?: number;
    id_devis: number;
    id_product: number;
    quantite: number;
    remise?: number;
    total_ht: number;
    tva: number;
    total_ttc: number;
  }
  