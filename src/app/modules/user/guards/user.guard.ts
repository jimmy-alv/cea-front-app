import { inject } from "@angular/core"
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from "@angular/router"
import { CurrentUserService } from "../../shared/services/current-user.service"

export const userGuard = (route: ActivatedRouteSnapshot) => {
  const router = inject(Router)
  const currentUserService = inject(CurrentUserService)

  // if(currentUserService.getLoggedUser && 
  //     ( currentUserService.getLoggedUser.isAdmin || 
  //       currentUserService.getLoggedUser.id == route.params['id'])){
  //       } 
  return true

  // return router.parseUrl('/home')
}