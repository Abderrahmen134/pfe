import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-gestion',
  templateUrl: './admin-gestion.component.html',
  styleUrls: ['./admin-gestion.component.scss']
})
export class AdminGestionComponent implements OnInit {
  admins: any[] = [];
  adminForm: FormGroup;
  adminDialog: boolean = false;
  submitted: boolean = false;
  selectedAdmin: any = null;
  apiUrl = "http://127.0.0.1:8000/api/admins" // adapte si besoin

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.adminForm = this.fb.group({
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mot_de_passe: ['', [Validators.required, Validators.minLength(6)]],
      phone: [''],
      gouvernorat: ['']
    });
  }

  ngOnInit(): void {
    this.loadAdmins();
  }

  loadAdmins() {
    this.http.get<any[]>('http://127.0.0.1:8000/api/admins').subscribe({
      next: data => this.admins = data,
      error: err => console.error(err)
    });
  }
  changerStatut(id: number, nouveauStatut: string) {
  const url = `http://127.0.0.1:8000/api/admins/${id}/statut`;
  this.http.put(url, { statutad: nouveauStatut }).subscribe({
    next: () => this.loadAdmins(),
    error: err => console.error('Erreur lors du changement de statut:', err)
  });
}

  

  openNew() {
    this.adminForm.reset();
    this.selectedAdmin = null;
    this.adminDialog = true;
    this.submitted = false;
  }

  editAdmin(admin: any) {
    this.selectedAdmin = admin;
    this.adminForm.patchValue(admin);
    this.adminDialog = true;
  }

  deleteAdmin(admin: any) {
    if (confirm('Voulez-vous vraiment supprimer cet admin ?')) {
      this.http.delete(`${'http://127.0.0.1:8000/api/admins'}/${admin.id}`).subscribe(() => {
        this.loadAdmins();
      });
    }
  }

  hideDialog() {
    this.adminDialog = false;
    this.submitted = false;
  }

  saveAdmin() {
    this.submitted = true;
    if (this.adminForm.invalid) return;

    const adminData = this.adminForm.value;

    if (this.selectedAdmin) {
      this.http.put(`${'http://127.0.0.1:8000/api/admins'}/${this.selectedAdmin.id}`, adminData).subscribe(() => {
        this.loadAdmins();
        this.hideDialog();
      });
    } else {
      this.http.post(this.apiUrl, adminData).subscribe(() => {
        this.loadAdmins();
        this.hideDialog();
      });
    }
  }
  
   notifications = {
    devis: 0,
    confirmation: 0,
    confirme: 0,
    livraison: 0,
    livre: 0,
    dashboard: 0,
    produits: 0,
    clients: 0,
    admins: 0
  };
  

  get totalNotifications(): number {
    return this.notifications.devis + 
           this.notifications.confirmation +
           this.notifications.confirme +
           this.notifications.livraison +
           this.notifications.livre;
  }
}
