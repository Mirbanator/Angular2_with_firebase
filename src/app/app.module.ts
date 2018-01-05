import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { KeskusteluComponent } from './keskustelu/keskustelu.component';
import { KarttaComponent } from './kartta/kartta.component';

const appRoutes: Routes = [
  {
    path: 'view1',
    component: KeskusteluComponent
  },
  {
    path: 'view2',
    component: KarttaComponent
  },
  {
    path: '',
    redirectTo: '/view1',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: KeskusteluComponent
  }
];
export const firebaseConfig = {
  apiKey: 'AIzaSyAx4Sk7dzT-aVWgATsMkmYeb8WUF1umYF4',
  authDomain: 'tulikanta-b0a63.firebaseapp.com',
  databaseURL: 'https://tulikanta-b0a63.firebaseio.com',
  projectId: 'tulikanta-b0a63',
  storageBucket: '',
  messagingSenderId: '735330889876'
};
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    KeskusteluComponent,
    KarttaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
