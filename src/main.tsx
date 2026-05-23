import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter, RootRoute, Route } from '@tanstack/react-router'
import App from './App'
import Home from './pages/index'
import './styles.css'

const rootRoute = new RootRoute({
  component: App,
})

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
})

const routeTree = rootRoute.addChildren([indexRoute])

const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
