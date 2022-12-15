import { lazy } from 'react'
import { Navigate } from 'react-router-dom'
import { RouteProps } from 'MyModels'

const DefaultLayout = lazy(() => import('pages/layout/DefaultLayout'))
const Page400 = lazy(() => import('pages/error/Page400/Page400'))
const Page401 = lazy(() => import('pages/error/Page401/Page401'))
const Page404 = lazy(() => import('pages/error/Page404/Page404'))
const Page500 = lazy(() => import('pages/error/Page500/Page500'))
const Error = lazy(() => import('pages/error/Error/Error'))
const LaunchPage = lazy(() => import('pages/public/LaunchPage/LaunchPage'))

const urlPrefix = process.env.REACT_APP_URL_PREFIX

export const publicRoutes: Array<RouteProps> = [
  { key: 1, name: 'Launch', props: { path: '/launch-page' }, element: LaunchPage },
  { key: 2, name: 'Default', props: { path: `/${urlPrefix}/*` }, element: DefaultLayout, index: true },
  { key: 3, name: '400', props: { path: '/400' }, element: Page400 },
  { key: 4, name: '401', props: { path: '/401' }, element: Page401 },
  { key: 5, name: '404', props: { path: '/404' }, element: Page404 },
  { key: 6, name: '500', props: { path: '/500' }, element: Page500 },
  { key: 7, name: 'Error', props: { path: '/Error' }, element: Error },
  {
    key: 0,
    name: 'Redirect',
    props: { path: '/*' },
    element: Navigate,
    elementProps: { to: `/launch-page`, replace: true },
  },
]

export const publicRoutePaths: Record<string, string> = publicRoutes.reduce((accumulator, value) => {
  return { ...accumulator, [value.name]: value?.props?.path }
}, {})

export default publicRoutes
