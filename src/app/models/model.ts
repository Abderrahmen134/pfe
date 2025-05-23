
export interface Product {
    id: number;
    name: string;
    description: string;
    quantity: number;
    price: number;
    image: string;
    type?: number; // Ajout pour multiselect

  }
  export interface User {
    id: number;
    prenom: string;
    nom: string;
    email: string;
    mot_de_passe: string;
    phone: string;
    gouvernorat: string;
    statut: string; 
  }
  export interface ClientData {
    prenom: string;
    nom: string;
    email: string;
    telephone: string;
    gouvernorat: string;
    societe: string;
  }

  export interface Devis {
    id?: number;
    status: string;
    société: string;
    id_client: number;
    
  }
  
  export interface LigneDevis {
    id: number;
    id_product: number;
    quantite: number;
    remise: number;
    total_ht: number;
    tva: number;
    total_ttc: number;
    product?: Product; // ✅ Ajouter cette ligne
  }
  export interface Type {
    id: number;
    name: string;
     
  }
