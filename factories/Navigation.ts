import { Injectable } from '@angular/core';
import { NavigatorNode, NavigatorNodeFactory, _ } from '@c8y/ngx-components';

@Injectable()
export class ExampleNavigationFactory implements NavigatorNodeFactory {
  // Implement the get()-method, otherwise the ExampleNavigationFactory
  // implements the NavigatorNodeFactory interface incorrectly (!)
  get() {
    const nav: NavigatorNode[] = [];
    /**
     * mandantory for a NavigatorNode is:
     *  - label (string)
     *  - path (string)
     * A click on the NavigatorNode will load the given path and therefore 
     * angular loads the specified component (check: ../app.modules.ts)
     */
    nav.push(new NavigatorNode({
      label: _('Home'),
      icon: '',
      path: '/',
      priority: 100
    }));
    nav.push(new NavigatorNode({
      label: _('Asset Type'),
      icon: '',
      path: '/assettype',
      priority: 99,
      routerLinkExact: false
    }));
    nav.push(new NavigatorNode({
      label: _('Asset Hierarchy'),
      icon: '',
      path: '/assethierarchy',
      priority: 98
    }));
    nav.push(new NavigatorNode({
      label: _('Asset Audit'),
      icon: '',
      path: '/assetaudit',
      priority: 97
    }));
	nav.push(new NavigatorNode({
      label: _('Asset Map'),
      icon: '',
      path: '/assetmap',
      priority: 96
    }));
    return nav; 
  }
}
