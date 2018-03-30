import { Headers, Http, RequestOptions, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';

import { ObjectFactoryService } from 'app/infrastructure/core-services/object-creation';
import { IParameterlessConstructor } from 'app/infrastructure/types/interfaces';
import { ObjectUtils } from 'app/infrastructure/utils';

import { ContentType } from '../enums';

export abstract class HttpBaseService {
  protected constructor(private http: Http, private objectFactoryService: ObjectFactoryService, private baseUrl: string) { }

  public getAsync<T>(relativeUrl: string, ctor: IParameterlessConstructor<T> | null = null): Promise<T> {
    const completeUrl = this.createCompleteUrl(relativeUrl);
    const requestOptions = this.createRequestOptions();
    return this.processResponse(this.http.get(completeUrl, requestOptions), ctor);
  }

  public async getArrayAsync<T>(
    relativeUrl: string,
    ctor: IParameterlessConstructor<T>): Promise<T[]> {
    const completeUrl = this.createCompleteUrl(relativeUrl);

    const requestOptions = this.createRequestOptions();
    const array = await this.processResponse<any[]>(this.http.get(completeUrl, requestOptions));

    const arrayResult = array.map(item => {
      const newObj = this.objectFactoryService.create(item, ctor);
      return newObj;
    });

    return arrayResult;
  }

  public postAsync<T>(
    relativeUrl: string,
    body: any,
    ctor: IParameterlessConstructor<T> | null = null,
    contentType: ContentType = ContentType.ApplicationJson): Promise<T> {
    const completeUrl = this.createCompleteUrl(relativeUrl);

    const requestOptions = this.createRequestOptions(contentType);
    return this.processResponse(this.http.post(completeUrl, body, requestOptions), ctor);
  }

  public deleteAsync(relativeUrl: string): Promise<void> {
    const completeUrl = this.createCompleteUrl(relativeUrl);
    const requestOptions = this.createRequestOptions();
    const result = this.processResponse<void>(this.http.delete(completeUrl, requestOptions));

    return result;
  }

  public putAsync<T>(
    relativeUrl: string,
    body: any,
    ctor: IParameterlessConstructor<T> | null = null,
    contentType: ContentType = ContentType.ApplicationJson): Promise<T> {
    const completeUrl = this.createCompleteUrl(relativeUrl);

    const requestOptions = this.createRequestOptions(contentType);
    return this.processResponse(this.http.put(completeUrl, body, requestOptions), ctor);
  }

  public patchAsync<T>(relativeUrl: string,
    body: any,
    ctor: IParameterlessConstructor<T> | null = null,
    contentType: ContentType = ContentType.ApplicationJson): Promise<T> {
    const completeUrl = this.createCompleteUrl(relativeUrl);

    const requestOptions = this.createRequestOptions(contentType);
    return this.processResponse(this.http.patch(completeUrl, body, requestOptions), ctor);
  }

  private processResponse<T>(response: Observable<Response>, ctor: IParameterlessConstructor<T> | null = null): Promise<T> {
    let mappedResult = response.map(this.extractData);

    if (ctor) {
      mappedResult = mappedResult.map(f => {
        const newObj = this.objectFactoryService.create(f, ctor);
        return newObj;
      });
    }

    const result = mappedResult.toPromise();
    return result;
  }

  private mapContentType(contentType: ContentType): string {
    switch (contentType) {
      case ContentType.ApplicationJson:
        return 'application/json';
      default:
        throw new RangeError(contentType.toString() + ' is not recognized');
    }
  }

  private createRequestOptions(contentType?: ContentType | null): RequestOptions {
    const headers = new Headers();

    if (contentType) {
      headers.append('Content-Type', this.mapContentType(contentType));
    }

    const requestOptions = new RequestOptions({
      headers: headers,
      withCredentials: true,
    });

    return requestOptions;
  }

  private extractData(res: Response): any {
    let body;
    if (res.text()) {
      body = res.json();
    }

    if (!ObjectUtils.isNullOrUndefined(body)) {
      return body;
    }

    return {};
  }

  private createCompleteUrl(relativeUrl: string) {
    const result = this.baseUrl + '/' + relativeUrl;
    return result;
  }
}
