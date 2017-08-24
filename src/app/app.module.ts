import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routes
import { APP_ROUTING } from './app.routes';

// Pages
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainComponent } from './components/main/main.component';
import { PendingsComponent } from './components/pendings/pendings.component';

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		SidebarComponent,
		MainComponent,
		PendingsComponent
		],
	imports: [
		BrowserModule,
		APP_ROUTING
	],
	providers: [
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
