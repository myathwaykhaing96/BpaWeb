import publicRoutes, { publicRoutePaths } from './PublicRoute/publicRoutes'
import privateRoutes, { privateRoutePaths } from './PrivateRoute/privateRoutes'

export { default as PrivateRoute } from './PrivateRoute/PrivateRoute'
export { default as PublicRoute } from './PublicRoute/PublicRoute'

export { publicRoutes, publicRoutePaths, privateRoutes, privateRoutePaths }
