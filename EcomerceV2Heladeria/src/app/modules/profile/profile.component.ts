import { Component } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent {
  SwAlert(){
    // Swal.fire({
    //   icon: 'error',
    //   title: 'Error',
    //   text: 'Campos obligatorios vacios',
    //   footer: 'Verifica nuevamente para registrarte'
    // })
  }
}
