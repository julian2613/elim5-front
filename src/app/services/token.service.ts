import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericService } from '../classes/generic-service.class';
import { IToken } from '../interfaces/token.interface';

@Injectable()
export class TokenService extends GenericService<IToken> {

  public constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }

  protected get path(): string {
    return 'token';
  }

}
