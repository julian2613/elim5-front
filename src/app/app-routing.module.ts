import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CustomizeMinionComponent } from "./components/customize-minion/customize-minion.component";
import { ErrorComponent } from "./components/error/error.component";
import { HomeComponent } from "./components/home/home.component";
import { SigninComponent } from "./components/signin/signin.component";
import { SignupComponent } from "./components/signup/signup.component";
import { GuardTokenService } from "./services/guard-token.service";

const routes: Routes = [
    { path: '', redirectTo: 'signin', pathMatch: 'full' },
    {
        path: 'signup',
        component: SignupComponent,
    },
    {
        path: 'signin',
        component: SigninComponent,
    },
    {
        path: 'test',
        canActivate: [GuardTokenService],
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'customize-minion', component: CustomizeMinionComponent },
        ],
    },
    { path: 'error', component: ErrorComponent },
    { path: '**', redirectTo: 'error' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
