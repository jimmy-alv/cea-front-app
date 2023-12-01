import { inject } from "@angular/core"
import { Router } from "@angular/router"

export const siteGuard = () => {
  const router = inject(Router)
  const token = localStorage.getItem('token')

  if(token) return true

  return router.parseUrl('auth/signin')
}