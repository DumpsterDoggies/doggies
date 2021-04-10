export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '606bda25fe0d73934cc85cf1',
                  title: 'Sanity Studio',
                  name: 'doggies-studio',
                  apiId: 'fb7c30b7-376f-4d47-a4a0-df0fa8f6a128'
                },
                {
                  buildHookId: '606bda25a14683a77d77346a',
                  title: 'Portfolio Website',
                  name: 'doggies-web-9zx7bbvq',
                  apiId: '33eb2377-240b-40d9-b58e-c792958e33a8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/BoraALAP/doggies',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://doggies-web-9zx7bbvq.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
