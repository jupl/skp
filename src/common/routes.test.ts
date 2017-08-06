import {find} from 'globule'
import {resolve} from 'path'
import {Route} from 'redux-first-router'

interface Routes {
  [name: string]: Route
}

describe('Routes', () => {
  const files: string[] = find(resolve(__dirname, '../*/routes.ts'))
  const routesTable = files.map(file => require(file) as Routes)

  it('should match convention', () => {
    routesTable
      .map(routes => Object.keys(routes))
      .reduce((array, keys) => [...array, ...keys], [])
      .map(name => expect(name).toMatch(/[A-Z]_ROUTE$/))
  })
})
