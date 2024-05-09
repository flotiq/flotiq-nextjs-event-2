/* tslint:disable */
/* eslint-disable */
/**
 * Flotiq User API
 * ## Getting started  This API Documentation reflects the endpoints defined in your [Flotiq](https://flotiq.com) account. The documentation is generated using an OpenAPI schema describing the API, which can be obtained in several flavors:  - [OAS 3.0](https://api.flotiq.com/api/v1/open-api-schema.json?auth_token=REPLACE_KEY_VALUE)   - without hydration, will not expand relations between content types (this is the default version which provides maximum compatibility with downstream systems)   - with hydration, pass [hydrate=1](https://api.flotiq.com/api/v1/open-api-schema.json?auth_token=REPLACE_KEY_VALUE&amp;hydrate=1) - use this for a better type support in exported OpenAPI schemas   - without system endpoints, pass [user_only=1](https://api.flotiq.com/api/v1/open-api-schema.json?auth_token=REPLACE_KEY_VALUE&amp;hydrate=1&amp;user_only=1) - use this to only include your endpoints, without system ones - [OAS 2.0](https://api.flotiq.com/api/v1/open-api-schema.json?auth_token=REPLACE_KEY_VALUE&amp;version=2) - provided for compatibility with several older systems  Check Flotiq documentation for more information about [Flotiq OpenAPI capabilities](https://flotiq.com/docs/API/open-api-schema/), instructions how to generate code and other useful tips.  ### Access to data  There are several methods that you can use to access your data:  * Live API docs - available via &lt;code&gt;Try it out&lt;/code&gt; button available next to each endpoint   * Copying example code on the right side of each endpoint  * By downloading the SDKs available in mulitple languages.  * By downloading the Postman collection and importing it into Postman.    Each of these methods is described in length in the [user documentation](https://flotiq.com/docs/).   ### Authorization   In order to make use of the provided documentation, example code, SDKs and so on - you will need to pull out your API key. We recommend that you start with the ReadOnly API Key which will allow you to make all the `GET` requests but will error-out when you try to modify content. Please remember to replace the key for `POST`, `PUT` and `DELETE` calls.   It&#039;s also possible to use scoped API keys - you can create those in the API keys section of the Flotiq user interface. This will allow you to create a key that only authorizes access to a specific content type (or a set of content types, if you choose so). Read more about how to use and create API keys in the [API keys documentation](https://flotiq.com/docs/API/).   ## Object access   Once you define a Content Type it will become available in your Content API as a set of endpoints that will allow you to work with objects:   * create  * list  * update  * delete  * batch create  * retrieve single object.  ### Hydration   When you build Content Types that have relation to others your objects will optionally support hydration of related entities. The endpoints that support object retrieval accept a `hydrate` parameter, which can be used to easily fetch hydrated objects. Since this breaks the standard REST concepts - it&#039;s not enabled by default, but it&#039;s a very handy feature that allows to reduce the amount of HTTP requests sent over the wire and we strongly recommend to use it.
 *
 * The version of the OpenAPI document: 2.0.1
 * Contact: hello@flotiq.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  BatchResponseError,
  BatchResponseSuccess,
  Event,
  EventBatchDelete200Response,
  EventBatchDelete400Response,
  EventCreate400Response,
  EventDelete400Response,
  EventGetRemoved400Response,
  EventList,
  EventList400Response,
  EventVersionsList,
  EventWithoutInternal,
  EventWithoutRequired,
  Model401Response,
  Model403Response,
  Model404Response,
} from '../models/index';
import {
    BatchResponseErrorFromJSON,
    BatchResponseErrorToJSON,
    BatchResponseSuccessFromJSON,
    BatchResponseSuccessToJSON,
    EventFromJSON,
    EventToJSON,
    EventBatchDelete200ResponseFromJSON,
    EventBatchDelete200ResponseToJSON,
    EventBatchDelete400ResponseFromJSON,
    EventBatchDelete400ResponseToJSON,
    EventCreate400ResponseFromJSON,
    EventCreate400ResponseToJSON,
    EventDelete400ResponseFromJSON,
    EventDelete400ResponseToJSON,
    EventGetRemoved400ResponseFromJSON,
    EventGetRemoved400ResponseToJSON,
    EventListFromJSON,
    EventListToJSON,
    EventList400ResponseFromJSON,
    EventList400ResponseToJSON,
    EventVersionsListFromJSON,
    EventVersionsListToJSON,
    EventWithoutInternalFromJSON,
    EventWithoutInternalToJSON,
    EventWithoutRequiredFromJSON,
    EventWithoutRequiredToJSON,
    Model401ResponseFromJSON,
    Model401ResponseToJSON,
    Model403ResponseFromJSON,
    Model403ResponseToJSON,
    Model404ResponseFromJSON,
    Model404ResponseToJSON,
} from '../models/index';

export interface EventAPIDeleteRequest {
    id: string;
}

export interface EventAPIBatchCreateRequest {
    updateExisting?: boolean;
    EventWithoutInternal?: Array<EventWithoutInternal>;
}

export interface EventAPIBatchDeleteRequest {
    request_body?: Array<string>;
}

export interface EventAPIBatchPatchRequest {
    EventWithoutInternal?: Array<EventWithoutInternal>;
}

export interface EventAPICreateRequest {
    EventWithoutInternal?: EventWithoutInternal;
}

export interface EventAPIGetRequest {
    id: string;
    hydrate?: number;
}

export interface EventAPIGetRemovedRequest {
    deletedAfter?: string;
}

export interface EventAPIGetVersionsRequest {
    id: string;
    versionId: string;
}

export interface EventAPIListRequest {
    page?: number;
    limit?: number;
    order_by?: string;
    order_direction?: string;
    hydrate?: number;
    filters?: string;
    ids?: Array<string>;
}

export interface EventAPIListVersionRequest {
    id: string;
    page?: number;
    limit?: number;
    order_by?: string;
    order_direction?: string;
}

export interface EventAPIPatchRequest {
    id: string;
    EventWithoutRequired?: EventWithoutRequired;
}

export interface EventAPIUpdateRequest {
    id: string;
    EventWithoutInternal?: EventWithoutInternal;
}

/**
 * 
 */
export class EventAPI extends runtime.BaseAPI {

    /**
     * Removes Event object.<br />
     * Delete a Event object
     */
    async _deleteRaw(requestParameters: EventAPIDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling _delete().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-AUTH-TOKEN"] = await this.configuration.apiKey("X-AUTH-TOKEN"); // HeaderApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/api/v1/content/event/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Removes Event object.<br />
     * Delete a Event object
     */
    async _delete(requestParameters: EventAPIDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this._deleteRaw(requestParameters, initOverrides);
    }

    /**
     * Allows you to create or create and update up to 100 objects of Event type. <br />
     * Create a batch of event objects
     */
    async batchCreateRaw(requestParameters: EventAPIBatchCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BatchResponseSuccess>> {
        const queryParameters: any = {};

        if (requestParameters['updateExisting'] != null) {
            queryParameters['updateExisting'] = requestParameters['updateExisting'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-AUTH-TOKEN"] = await this.configuration.apiKey("X-AUTH-TOKEN"); // HeaderApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/api/v1/content/event/batch`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['EventWithoutInternal']!.map(EventWithoutInternalToJSON),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BatchResponseSuccessFromJSON(jsonValue));
    }

    /**
     * Allows you to create or create and update up to 100 objects of Event type. <br />
     * Create a batch of event objects
     */
    async batchCreate(requestParameters: EventAPIBatchCreateRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BatchResponseSuccess> {
        const response = await this.batchCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Allows you to delete up to 100 objects of Event type. <br />Request body accepts an array of content object IDs that are to be deleted.<br />
     * Delete a batch of Event objects
     */
    async batchDeleteRaw(requestParameters: EventAPIBatchDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EventBatchDelete200Response>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-AUTH-TOKEN"] = await this.configuration.apiKey("X-AUTH-TOKEN"); // HeaderApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/api/v1/content/event/batch-delete`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['request_body'],
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EventBatchDelete200ResponseFromJSON(jsonValue));
    }

    /**
     * Allows you to delete up to 100 objects of Event type. <br />Request body accepts an array of content object IDs that are to be deleted.<br />
     * Delete a batch of Event objects
     */
    async batchDelete(requestParameters: EventAPIBatchDeleteRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EventBatchDelete200Response> {
        const response = await this.batchDeleteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Allows you to update up to 100 objects of Event type. <br />
     * Update selected fields of a batch of objects
     */
    async batchPatchRaw(requestParameters: EventAPIBatchPatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BatchResponseSuccess>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-AUTH-TOKEN"] = await this.configuration.apiKey("X-AUTH-TOKEN"); // HeaderApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/api/v1/content/event/batch`,
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['EventWithoutInternal']!.map(EventWithoutInternalToJSON),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BatchResponseSuccessFromJSON(jsonValue));
    }

    /**
     * Allows you to update up to 100 objects of Event type. <br />
     * Update selected fields of a batch of objects
     */
    async batchPatch(requestParameters: EventAPIBatchPatchRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BatchResponseSuccess> {
        const response = await this.batchPatchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Allows you to create object of Event type. <br />
     * Create a Event object
     */
    async createRaw(requestParameters: EventAPICreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Event>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-AUTH-TOKEN"] = await this.configuration.apiKey("X-AUTH-TOKEN"); // HeaderApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/api/v1/content/event`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: EventWithoutInternalToJSON(requestParameters['EventWithoutInternal']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EventFromJSON(jsonValue));
    }

    /**
     * Allows you to create object of Event type. <br />
     * Create a Event object
     */
    async create(requestParameters: EventAPICreateRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Event> {
        const response = await this.createRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns all information about Event object. <br />
     * Get Event object by Id
     */
    async getRaw(requestParameters: EventAPIGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Event>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling get().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['hydrate'] != null) {
            queryParameters['hydrate'] = requestParameters['hydrate'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-AUTH-TOKEN"] = await this.configuration.apiKey("X-AUTH-TOKEN"); // HeaderApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/api/v1/content/event/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EventFromJSON(jsonValue));
    }

    /**
     * Returns all information about Event object. <br />
     * Get Event object by Id
     */
    async get(requestParameters: EventAPIGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Event> {
        const response = await this.getRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get ids of removed Event objects. <br />
     * Get removed object identifiers
     */
    async getRemovedRaw(requestParameters: EventAPIGetRemovedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<string>>> {
        const queryParameters: any = {};

        if (requestParameters['deletedAfter'] != null) {
            queryParameters['deletedAfter'] = requestParameters['deletedAfter'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-AUTH-TOKEN"] = await this.configuration.apiKey("X-AUTH-TOKEN"); // HeaderApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/api/v1/content/event/removed`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Get ids of removed Event objects. <br />
     * Get removed object identifiers
     */
    async getRemoved(requestParameters: EventAPIGetRemovedRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<string>> {
        const response = await this.getRemovedRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Return version of Event object. <br />
     * Get a specific version of Event object
     */
    async getVersionsRaw(requestParameters: EventAPIGetVersionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Event>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getVersions().'
            );
        }

        if (requestParameters['versionId'] == null) {
            throw new runtime.RequiredError(
                'versionId',
                'Required parameter "versionId" was null or undefined when calling getVersions().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-AUTH-TOKEN"] = await this.configuration.apiKey("X-AUTH-TOKEN"); // HeaderApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/api/v1/content/event/{id}/version/{versionId}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))).replace(`{${"versionId"}}`, encodeURIComponent(String(requestParameters['versionId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EventFromJSON(jsonValue));
    }

    /**
     * Return version of Event object. <br />
     * Get a specific version of Event object
     */
    async getVersions(requestParameters: EventAPIGetVersionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Event> {
        const response = await this.getVersionsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List objects of Event type. <br />
     * List Event objects
     */
    async listRaw(requestParameters: EventAPIListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EventList>> {
        const queryParameters: any = {};

        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        if (requestParameters['order_by'] != null) {
            queryParameters['order_by'] = requestParameters['order_by'];
        }

        if (requestParameters['order_direction'] != null) {
            queryParameters['order_direction'] = requestParameters['order_direction'];
        }

        if (requestParameters['hydrate'] != null) {
            queryParameters['hydrate'] = requestParameters['hydrate'];
        }

        if (requestParameters['filters'] != null) {
            queryParameters['filters'] = requestParameters['filters'];
        }

        if (requestParameters['ids'] != null) {
            queryParameters['ids[]'] = requestParameters['ids'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-AUTH-TOKEN"] = await this.configuration.apiKey("X-AUTH-TOKEN"); // HeaderApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/api/v1/content/event`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EventListFromJSON(jsonValue));
    }

    /**
     * List objects of Event type. <br />
     * List Event objects
     */
    async list(requestParameters: EventAPIListRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EventList> {
        const response = await this.listRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List objects versions of Event type. <br />
     * List all versions of a Event object
     */
    async listVersionRaw(requestParameters: EventAPIListVersionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EventVersionsList>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling listVersion().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        if (requestParameters['order_by'] != null) {
            queryParameters['order_by'] = requestParameters['order_by'];
        }

        if (requestParameters['order_direction'] != null) {
            queryParameters['order_direction'] = requestParameters['order_direction'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-AUTH-TOKEN"] = await this.configuration.apiKey("X-AUTH-TOKEN"); // HeaderApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/api/v1/content/event/{id}/version`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EventVersionsListFromJSON(jsonValue));
    }

    /**
     * List objects versions of Event type. <br />
     * List all versions of a Event object
     */
    async listVersion(requestParameters: EventAPIListVersionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EventVersionsList> {
        const response = await this.listVersionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Allows update of the Event object, but it is unnecessary to specify all the object\'s properties. Properties not included in the payload will be completed with data from the database. <br />
     * Update selected fields of Event object
     */
    async patchRaw(requestParameters: EventAPIPatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Event>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling patch().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-AUTH-TOKEN"] = await this.configuration.apiKey("X-AUTH-TOKEN"); // HeaderApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/api/v1/content/event/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: EventWithoutRequiredToJSON(requestParameters['EventWithoutRequired']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EventFromJSON(jsonValue));
    }

    /**
     * Allows update of the Event object, but it is unnecessary to specify all the object\'s properties. Properties not included in the payload will be completed with data from the database. <br />
     * Update selected fields of Event object
     */
    async patch(requestParameters: EventAPIPatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Event> {
        const response = await this.patchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Allows update of the Event object, it has to have all fields, as this operation overwrites the object. All properties not included in the payload will be lost. <br />
     * Update existing Event object
     */
    async updateRaw(requestParameters: EventAPIUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Event>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling update().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-AUTH-TOKEN"] = await this.configuration.apiKey("X-AUTH-TOKEN"); // HeaderApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/api/v1/content/event/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: EventWithoutInternalToJSON(requestParameters['EventWithoutInternal']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EventFromJSON(jsonValue));
    }

    /**
     * Allows update of the Event object, it has to have all fields, as this operation overwrites the object. All properties not included in the payload will be lost. <br />
     * Update existing Event object
     */
    async update(requestParameters: EventAPIUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Event> {
        const response = await this.updateRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
