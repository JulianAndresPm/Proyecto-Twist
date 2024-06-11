import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { AuthService } from '../auth/services/auth.service';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'',
    children:[
      {
        path:'productos',
        loadChildren: () => import('../productos/productos.module').then(m => m.ProductosModule),
        canActivate:[AuthGuard]
      },
      {
        path:'login',
        loadChildren: () => import('../auth/auth.module').then(m => m.AuthModule)
      },
      {
        path:'perfil',
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfileModule),
        canActivate:[AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
