/*
Lambda Cloud API

API for interacting with the Lambda GPU Cloud

The version of the OpenAPI document: 1.5.1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Region } from './region';
import { User } from './user';

/**
 * Information about a shared file system
 * @export
 * @interface FileSystem
 */
export interface FileSystem {
    /**
     * Unique identifier (ID) of a file system
     * @type {string}
     * @memberof FileSystem
     */
    'id': string;
    /**
     * Name of a file system
     * @type {string}
     * @memberof FileSystem
     */
    'name': string;
    /**
     * A date and time, formatted as an ISO 8601 time stamp
     * @type {string}
     * @memberof FileSystem
     */
    'created': string;
    /**
     * 
     * @type {User}
     * @memberof FileSystem
     */
    'created_by': User;
    /**
     * Absolute path indicating where on instances the file system will be mounted
     * @type {string}
     * @memberof FileSystem
     */
    'mount_point': string;
    /**
     * 
     * @type {Region}
     * @memberof FileSystem
     */
    'region': Region;
    /**
     * Whether the file system is currently in use by an instance. File systems that are in use cannot be deleted.
     * @type {boolean}
     * @memberof FileSystem
     */
    'is_in_use': boolean;
    /**
     * Approximate amount of storage used by the file system, in bytes. This value is an estimate that is updated every several hours.
     * @type {number}
     * @memberof FileSystem
     */
    'bytes_used'?: number;
}

