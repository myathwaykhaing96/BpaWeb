declare module 'MyModels' {
  export interface RouteProps {
    index?: boolean
    key: number
    name: string
    props: {
      path: string
    }
    element: React.LazyExoticComponent<React.ComponentPropsWithRef<any>> | Function
    elementProps?: { to: string; replace: boolean }
  }
}
