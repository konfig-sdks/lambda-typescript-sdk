/* tslint:disable */
/* eslint-disable */
/*
Lambda Cloud API

API for interacting with the Lambda GPU Cloud

The version of the OpenAPI document: 1.5.1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { ErrorResponseBody } from '../models';
// @ts-ignore
import { FileSystemGetListResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * FileSystemApi - axios parameter creator
 * @export
 */
export const FileSystemApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Retrieve the list of file systems
         * @summary List file systems
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getList: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/file-systems`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)
            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/file-systems',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * FileSystemApi - functional programming interface
 * @export
 */
export const FileSystemApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = FileSystemApiAxiosParamCreator(configuration)
    return {
        /**
         * Retrieve the list of file systems
         * @summary List file systems
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getList(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileSystemGetListResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getList(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * FileSystemApi - factory interface
 * @export
 */
export const FileSystemApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = FileSystemApiFp(configuration)
    return {
        /**
         * Retrieve the list of file systems
         * @summary List file systems
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getList(options?: AxiosRequestConfig): AxiosPromise<FileSystemGetListResponse> {
            return localVarFp.getList(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * FileSystemApiGenerated - object-oriented interface
 * @export
 * @class FileSystemApiGenerated
 * @extends {BaseAPI}
 */
export class FileSystemApiGenerated extends BaseAPI {
    /**
     * Retrieve the list of file systems
     * @summary List file systems
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FileSystemApiGenerated
     */
    public getList(options?: AxiosRequestConfig) {
        return FileSystemApiFp(this.configuration).getList(options).then((request) => request(this.axios, this.basePath));
    }
}