// import React from 'react'
// import { useAuth, useTheme } from 'contexts'
// // import { Button } from 'components'
// import { Header, Content, Footer } from './shared'
// import { Navigate, NavLink, useLocation } from 'react-router-dom'
// import { setUserSession, getUserSession } from 'services/api/sessionApi'

// type Props = {
//   children?: React.ReactNode
// }

// export function fetchCount(amount = 1, time = 2000) {
//   amount++
//   return new Promise((resolve) => setTimeout(() => resolve({ data: amount }), time))
// }

// const TestDefaultLayout: React.FC<Props> = (props) => {
//   const { auth } = useAuth()
//   const location = useLocation()
//   const { theme, changeTheme } = useTheme()

//   if (auth && !auth?.isAuthenticated) {
//     return <Navigate to="/launch-page" state={{ from: location.pathname }} />
//   }

//   return (
//     <div>
//       {/* <Sidebar /> */}
//       <div className="wrer d-flex flex-column min-vh-100 bg-light">
//         <Header />
//         <h2>{theme?.name}</h2>
//         <button onClick={() => changeTheme('light')}>light</button> |
//         <button onClick={() => changeTheme('dark')}>dark</button> |
//         <button onClick={() => changeTheme('material')}>material</button> |
//         <button onClick={() => changeTheme('sharp')}>sharp</button> |
//         <button onClick={() => changeTheme('calm')}>calm</button> |
//         <button onClick={() => changeTheme('cherryBonBon')}>cherry Bon Bon</button> |
//         <button onClick={() => changeTheme('seaWave')}>sea Wave</button>
//         <br />
//         <h2>Category {process.env.REACT_APP_SESSION_KEY}</h2>
//         <NavLink to="games">games</NavLink> | <NavLink to="gift-card">gift card</NavLink> |
//         <NavLink to="internet">internet</NavLink> | <NavLink to="top-up">mobile top-up</NavLink>
//         <br />
//         <h2>Biller</h2>
//         <NavLink to="games/mlbb">mobile legend</NavLink> |{' '}
//         <NavLink to="gift-card/i-tune">iTune</NavLink> |{' '}
//         <NavLink to="internet/hi-wifi">Hi wifi</NavLink> |{' '}
//         <NavLink to="top-up/ooredoo">Ooredoo</NavLink> |{' '}
//         <NavLink to="top-up/ooredoo/ERROR">PageNotFound</NavLink>
//         <div className="body flex-grow-1 px-3">
//           <Content />
//         </div>
//         <div>
//           <button onClick={() => getUserSession()}>Get Session</button>
//           <button onClick={() => setUserSession()}>Set Session</button>
//         </div>
//         <Footer />
//       </div>
//     </div>
//   )
// }

// // const DefaultLayout: React.FC<Props> = ({ children }) => {
// //   const { theme, setTheme } = useTheme();

// //   const style: React.CSSProperties = {
// //     backgroundColor: theme ? theme.background : '',
// //     color: theme ? theme.foreground : '',
// //   }

// //   const toggleTheme = () => {
// //     theme === THEME_NAME.light ? setTheme(THEME_NAME.dark) : setTheme(THEME_NAME.light)
// //   };

// //   return (
// //     <>
// //       <button onClick={()=> toggleTheme()}>Toggle Theme</button>
// //       <div style={style}>DefaultLayout</div>
// //     </>
// //   );
// // }

// export default TestDefaultLayout
export const test = null