/**
 * services for homeComponent
 */
import {Injectable} from '@angular/core';
import {AppApiEndpoints} from '../../shared/app.api.endpoints';
import {AutoiqHttpService} from '../../shared/app.http.service';

@Injectable()
export class HomeService {

  private versionURL = AppApiEndpoints.VERSIONINFO;  // URL to web api

  constructor(private aiqHttpService: AutoiqHttpService) {

  }

  getVersion() {
    return this.aiqHttpService.get(this.versionURL);
  }
}
