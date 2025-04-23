import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder,    private http: HttpClient      // ← injection
  ) {
    this.form = this.fb.group({
      prénom: ['', Validators.required],
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mot_de_passe: ['', Validators.required],
      confirmmot_de_passe: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^[2459][0-9]{7}$/)]],
      gouvernorat: ['', Validators.required],
      terms: [false, Validators.requiredTrue]
    }, { validators: this.mot_de_passeMatchValidator });
  }

  mot_de_passeMatchValidator(form: FormGroup) {
    const mot_de_passe = form.get('mot_de_passe')?.value;
    const confirmmot_de_passe = form.get('confirmmot_de_passe')?.value;
    return mot_de_passe === confirmmot_de_passe ? null : { mismatch: true };
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files ? input.files[0] : null;
    this.form.get('logo')?.setValue(file);
  }

  onSubmit() {
    if (this.form.valid) {
      // 1️⃣ Construis le payload avec les clefs exactes
      const payload = {
        "prénom":       this.form.value.prénom,
        "nom":          this.form.value.nom,
        "email":        this.form.value.email,
        "mot_de_passe": this.form.value.mot_de_passe,
        "phone":        this.form.value.phone,
        "gouvernorat":  this.form.value.gouvernorat
      };

      // 2️⃣ Appel HTTP POST
      console.log('Envoi des données', payload);
      this.http.post('http://127.0.0.1:8000/api/register', payload)
        .subscribe({
          next: (res) => {
            console.log('Inscription réussie', res);
             // ✅ Vider les champs
          this.form.reset();

          // 📝 Optionnel : réinitialiser le champ 'terms' à false
          this.form.patchValue({ terms: false });

          // 🔄 Tu peux aussi rediriger ici si besoin
            // par exemple rediriger vers la page de connexion
          },
          error: (err) => {
            console.error('Erreur d’inscription', err);
          }
        });
    }
  }
}