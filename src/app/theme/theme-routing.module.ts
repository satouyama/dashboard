import {NgModule} from '@angular/core';
import { ThemeComponent } from './theme.component';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuard} from "../auth/_guards/auth.guard";

const routes: Routes = [
    {
        "path": "",
        "component": ThemeComponent,
        "canActivate": [AuthGuard],
        "children": [
            {
                "path": "index",
                "loadChildren": ".\/pages\/default\/index\/index.module#IndexModule"
            },
            {
                "path": "inner",
                "loadChildren": ".\/pages\/default\/inner\/inner.module#InnerModule"
            },
            {
                "path": "inner2",
                "loadChildren": ".\/pages\/default\/inner2\/inner2.module#Inner2Module"
            },
            {
                "path": "profile",
                "loadChildren": ".\/pages\/default\/profile\/profile.module#ProfileModule"
            },
            {
                "path": "actions",
                "loadChildren": ".\/pages\/default\/actions\/actions.module#ActionsModule"
            },
            {
                "path": "404",
                "loadChildren": ".\/pages\/default\/not-found\/not-found.module#NotFoundModule"
            },
            {
                "path": "",
                "redirectTo": "index",
                "pathMatch": "full"
            }
        ]
    },
    {
        "path": "**",
        "redirectTo": "404",
        "pathMatch": "full"
    }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ThemeRoutingModule {}