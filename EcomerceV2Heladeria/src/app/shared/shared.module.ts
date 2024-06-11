import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { ModalsComponent } from './modals/modals.component';
import { SidebarModule } from 'primeng/sidebar';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
   NavbarComponent,FooterComponent, ModalsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SidebarModule,
    DropdownModule,
    FormsModule
  ],
  exports: [
    NavbarComponent,FooterComponent, ModalsComponent
  ]
})
export class SharedModule { }
