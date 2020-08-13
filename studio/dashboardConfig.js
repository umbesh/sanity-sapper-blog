export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5f359dcafbb7f794048411fc',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-gn1egqxx',
                  apiId: '80896ed7-cd52-4fc9-89f3-63164dffa595'
                },
                {
                  buildHookId: '5f359dca3eeebd71d95f80b1',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-v4cwmusq',
                  apiId: '1bc8105a-4160-4e86-8e6e-fcb8b45a93e2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/umbesh/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-v4cwmusq.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
