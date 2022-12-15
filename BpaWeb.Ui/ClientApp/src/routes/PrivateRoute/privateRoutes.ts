import { lazy } from 'react'
import { Navigate } from 'react-router-dom'
import { RouteProps } from 'MyModels'

const Home = lazy(() => import('pages/private/Home/Home'))
const ThankYou = lazy(() => import('pages/private/ThankYou/ThankYou'))
const Confirm = lazy(() => import('pages/private/Confirm/Confirm'))
const BillPayment = lazy(() => import('pages/private/BillPayment/BillPayment'))
const Category = lazy(() => import('pages/private/Category/Category'))

const Error = lazy(() => import('pages/error/Error/Error'))
// const Page400 = lazy(() => import('pages/error/Page400/Page400'))
const Page401 = lazy(() => import('pages/error/Page401/Page401'))
const Page404 = lazy(() => import('pages/error/Page404/Page404'))
const Page500 = lazy(() => import('pages/error/Page500/Page500'))

const urlPrefix = process.env.REACT_APP_URL_PREFIX

const privateRoutes: Array<RouteProps> = [
  { key: 1, name: 'Home', props: { path: '/' }, element: Home, index: true },
  { key: 2, name: 'ThankYou', props: { path: '/thank-you' }, element: ThankYou },
  { key: 3, name: 'Category', props: { path: '/:category' }, element: Category },
  { key: 4, name: 'Biller', props: { path: '/:category/:biller' }, element: BillPayment },
  { key: 5, name: 'Confirm', props: { path: '/:category/:biller/confirm' }, element: Confirm },
  // { key: 6, props: { path: '/400' }, element: Page400 },
  { key: 7, name: '401', props: { path: '/401' }, element: Page401 },
  { key: 8, name: '404', props: { path: '/404' }, element: Page404 },
  { key: 9, name: '500', props: { path: '/500' }, element: Page500 },
  { key: 10, name: 'Error', props: { path: '/Error' }, element: Error },
  {
    key: 0,
    name: 'Redirect',
    props: { path: '/*' },
    element: Navigate,
    elementProps: { to: `/${urlPrefix}/404`, replace: true },
  },
]

export const privateRoutePaths: Record<string, string> = privateRoutes.reduce((accumulator, value) => {
  return { ...accumulator, [value.name]: value?.props?.path }
}, {})

export default privateRoutes
