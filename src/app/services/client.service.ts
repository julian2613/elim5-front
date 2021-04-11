import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericService } from '../classes/generic-service.class';
import { IClient } from '../interfaces/client.interface';

@Injectable()
export class ClientService extends GenericService<IClient> {

  public constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }

  protected get path(): string {
    return 'client';
  }

}
