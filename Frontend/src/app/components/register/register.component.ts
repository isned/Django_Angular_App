import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirm_password: ['', [Validators.required]]
    }, { validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(frm: FormGroup): { [key: string]: boolean } | null {
    return frm.get('password')?.value === frm.get('confirm_password')?.value
      ? null : { mismatch: true };
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      const userData = {
        first_name: this.registerForm.get('first_name')?.value,
        last_name: this.registerForm.get('last_name')?.value,
        email: this.registerForm.get('email')?.value,
        password: this.registerForm.get('password')?.value,
        password2: this.registerForm.get('confirm_password')?.value
      };
      console.log('Form Data:', userData);
      this.apiService.register(userData).subscribe(
        response => {
          console.log('Registration successful', response);
        },
        error => {
          console.error('Error registering', error);
          console.error('Error details:', error.error);  // Ajoutez ceci pour plus de détails
        }
      );
    } else {
      console.log('Form invalid:', this.registerForm.errors);
    }
  }
}
