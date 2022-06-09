import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { PostagemEditarComponent } from './editar/postagem-editar/postagem-editar.component';
import { TemaEditarComponent } from './editar/tema-editar/tema-editar.component';
import { EntrarComponent } from './entrar/entrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { TemaComponent } from './tema/tema.component';


const routes: Routes = [

  {path: '', redirectTo: 'entrar', pathMatch:'full'},
  
  {path: 'entrar', component: EntrarComponent},
  {path: 'cadastrar' , component: CadastrarComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'tema' , component: TemaComponent},

  {path: 'tema-editar/:id', component: TemaEditarComponent },
  {path: 'tema-delete/:id', component: TemaDeleteComponent},
  {path: 'postagem-editar/:id', component: PostagemEditarComponent},
  {path: 'postagem-delete/:id', component: PostagemDeleteComponent}
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
