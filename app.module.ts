import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import routes
import { RouterModule, Routes } from '@angular/router';

import { CoreModule, BootstrapComponent, CommonModule, HOOK_NAVIGATOR_NODES } from '@c8y/ngx-components';

// import custom components
import { HelloComponent } from './hello.component'; 
import { AssettypeComponent } from './components/AssetType/assettype.component';
import { AssethierarchyComponent } from './components/AssetHierarchy/assethierarchy.component';
import { AssetauditComponent } from './components/AssetAudit/assetaudit.component';
import { AssetmapComponent } from './components/AssetMap/assetmap.component';

// import navigation
import { ExampleNavigationFactory } from './factories/Navigation';

// Definition of the routes
const appRoutes: Routes = [
  {
      path: '',
      component: HelloComponent
  },
  {
      path: 'assettype',
      component: AssettypeComponent
  },
  {   path: 'assethierarchy',
      component: AssethierarchyComponent
  },
  {
      path: 'assetaudit',
      component: AssetauditComponent
  },
  {
     path: 'assetmap',
     component: AssetmapComponent
  }
];

@NgModule({
  imports: [
    BrowserModule,
    
    // add appRoutes 
    RouterModule.forRoot(appRoutes, { enableTracing: false, useHash: true }),

    CoreModule,
    CommonModule
  ],
  // add deceleration here
  declarations: [
    HelloComponent, 
    AssettypeComponent, 
    AssethierarchyComponent, 
    AssetauditComponent, 
    AssetmapComponent
  ],
   /**
   * Use our predefined InjectionTokens and provide your own classes to extend behaviour
   * and functionality of existing ones. Implement your own NavigationNodes, Tabs, Actions and Breadcrumbs
   */
  providers: [
    { provide: HOOK_NAVIGATOR_NODES, useClass: ExampleNavigationFactory, multi: true}
  ],

  bootstrap: [BootstrapComponent]
})
export class AppModule {}
