/*
Lambda Cloud API

API for interacting with the Lambda GPU Cloud

The version of the OpenAPI document: 1.5.1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { InstanceType } from './instance-type';
import { Region } from './region';

/**
 * 
 * @export
 * @interface InstanceTypeGetListResponseDataValue
 */
export interface InstanceTypeGetListResponseDataValue {
    /**
     * 
     * @type {InstanceType}
     * @memberof InstanceTypeGetListResponseDataValue
     */
    'instance_type': InstanceType;
    /**
     * List of regions, if any, that have this instance type available
     * @type {Array<Region>}
     * @memberof InstanceTypeGetListResponseDataValue
     */
    'regions_with_capacity_available': Array<Region>;
}

