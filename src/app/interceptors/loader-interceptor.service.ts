import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoaderService } from "../modules/shared/services/loader.service";
import { Observable, finalize } from "rxjs";

@Injectable()
export class LoaderInterceptorService implements HttpInterceptor {
  constructor(public loaderService: LoaderService){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.show()
    return next.handle(req).pipe(
      finalize( () => this.loaderService.hide())
    )
  }
}
