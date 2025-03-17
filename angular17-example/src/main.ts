import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import { defineCustomElements } from '@db-ux/wc-core-components';
defineCustomElements(undefined, {
  exclude: [
    'db-stack',
    'db-switch',
    'db-tab-panel',
    'db-tabs',
    'db-tab-list',
    'db-tab-item',
    'db-tab-bar',
    'db-popover',
    'db-textarea',
    'db-navigation',
    'db-accordion-item',
    'db-accordion',
    'db-badge',
    'db-navigation-item',
    'db-radio',
    'db-select',
    'db-notification',
    'db-brand',
    'db-card',
    'db-checkbox',
    'db-divider',
    'db-drawer',
    'db-header',
    'db-icon',
    'db-link',
    'db-page',
    'db-section',
    'db-tab',
  ],
});


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
