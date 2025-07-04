import {App} from 'wasp-config'

function newPublicRoute(called: string, at: string, serve: `@src/${string}`) {
    app.route(called, {
        path: at,
        to: app.page(`${called}Page`, {component: {importDefault: `${called}Page`, from: serve}})
    })
}
// @ts-ignore (you can delete this comment once the function is used below!)
function newAuthedRoute(called: string, at: string, serve: `@src/${string}`) {
    app.route(called, {
        path: at,
        to: app.page(`${called}Page`, {
            component: {importDefault: `${called}Page`, from: serve},
            authRequired: true
        })
    })
}
// @ts-ignore (you can delete this comment once the function is used below!)
function newAuthedQuery(query: string, entities: string[] = []) {
    app.query(query, {
        fn: {import: query, from: `@src/queries/${query}`},
        auth: true,
        entities,
    })
}
// @ts-ignore (you can delete this comment once the function is used below!)
function newAuthedAction(action: string, entities: string[] = []) {
    app.action(action, {
        fn: {import: action, from: `@src/actions/${action}`},
        auth: true,
        entities,
    })
}


// App Configurations
// TODO: Change this to your own app info!
const app = new App('wasp-sensible-starter', {
    title: "New Wasp App",
    wasp: {version: '^0.16.0'},
    head: [
        '<meta name="description" content="Your app description!">', // <- TODO: Change this to your own description!
        '<meta name="viewport" content="width=device-width, initial-scale=1.0">',
        '<meta charset="UTF-8">',
    ]
})
app.client({
    rootComponent: {importDefault: 'Layout', from: '@src/pages/Layout'}
})


// How does newPublicRoute/newAuthedRoute work?
// It'll automatically create a Page and Route for you!
// Just input the page name, the path, and the file path to the page!
// The page should be default-exported. E.g. for a newPublicRoute('Home'), it'll do the equivalent of:
// import HomePage from '@src/pages/HomePage''
newPublicRoute('Home', '/', '@src/pages/HomePage')

// How does newPublicQuery/newAuthedQuery/newPublicAction/newAuthedAction work?
// It'll automatically create a Query/Action for you!
// Just input the query name and the entities it uses.
// The operation name and file name should be the same and should
// be in @src/queries/:queryName or @src/actions/:actionName
// E.g. for a newPublicQuery('myQuery'), it'll do the equivalent of:
// import {myQuery} from @src/queries/myQuery.


// Auth
// TODO: Add auth! Follow Wasp docs for more info.


// 404
newPublicRoute('NotFoundRedirect', '*', '@src/pages/NotFoundRedirectPage')
newPublicRoute('NotFound', '/404', '@src/pages/NotFoundPage')

export default app;