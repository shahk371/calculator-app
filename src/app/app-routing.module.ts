import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { PatternsComponent } from './components/patterns/patterns.component';


const routes: Routes  = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'calculator',
        component: CalculatorComponent
    },
    {
        path: 'patterns',
        component: PatternsComponent
    },
    {
        path: '',
        redirectTo: '/home', 
        pathMatch: 'full'
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})


export class AppRoutingModule { }