import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

export abstract class GenericService<T> {

    protected abstract get path(): string;

    protected url: string;

    public constructor(protected httpClient: HttpClient) {
        this.buildUrl();
    }

    public buildUrl(): void {
        this.url = environment.CONFIGURACION_SERVICIOS['test'].protocol +
            '://' +
            environment.CONFIGURACION_SERVICIOS['test'].host +
            ':' +
            environment.CONFIGURACION_SERVICIOS['test'].port +
            '/' +
            environment.CONFIGURACION_SERVICIOS['test'].pathName +
            '/' +
            this.path;
    }

    public post(body: any, options?: {
        postfix?: string,
        queryParams?: { [key: string]: string }
    }): Observable<T> {
        let url = this.url;
        let httpParams: HttpParams = new HttpParams();

        if (options?.postfix) {
            url = `${this.url}/${options.postfix}`;
        }

        if (options?.queryParams) {
            httpParams = this.addQueryParams(httpParams, options.queryParams);
        }

        return this.httpClient.post<T>(url, body, { params: httpParams });
    }

    private addQueryParams(httpParams: HttpParams, object: object): HttpParams {
        Object.keys(object).forEach((key: string): void => {
            if (object[key]) {
                httpParams = httpParams.append(key, object[key]);
            }
        });
        return httpParams;
    }

}