/*
Lambda Cloud API

API for interacting with the Lambda GPU Cloud

The version of the OpenAPI document: 1.5.1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Information about a user in your team
 * @export
 * @interface User
 */
export interface User {
    /**
     * Unique identifier for the user
     * @type {string}
     * @memberof User
     */
    'id': string;
    /**
     * Email address of the user
     * @type {string}
     * @memberof User
     */
    'email': string;
    /**
     * Status of the user\'s account
     * @type {string}
     * @memberof User
     */
    'status': UserStatusEnum;
}

type UserStatusEnum = 'active' | 'deactivated'


