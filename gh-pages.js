var ghpages = require('gh-pages')

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/PanicP/car-sharing-svelte.git', // Update to point to your repository
        user: {
            name: 'Thunthian Pornmuneewong', // update to use your name
            email: 'filmous2136@gmail.com', // Update to use your email
        },
    },
    () => {
        console.log('Deploy Complete!')
    }
)
