import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '465'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'c0e'),
    routes: [
      {
        path: '/docs/github',
        component: ComponentCreator('/docs/github', 'adc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/installation',
        component: ComponentCreator('/docs/installation', '001'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/laravel',
        component: ComponentCreator('/docs/laravel', 'a81'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '9be'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
