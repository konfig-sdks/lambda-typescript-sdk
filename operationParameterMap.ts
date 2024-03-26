type Parameter = {
    name: string
}
type Entry = {
    parameters: Parameter[]
}
export const operationParameterMap: Record<string, Entry> = {
    '/file-systems-GET': {
        parameters: [
        ]
    },
    '/instance-operations/launch-POST': {
        parameters: [
            {
                name: 'region_name'
            },
            {
                name: 'instance_type_name'
            },
            {
                name: 'ssh_key_names'
            },
            {
                name: 'file_system_names'
            },
            {
                name: 'quantity'
            },
            {
                name: 'name'
            },
        ]
    },
    '/instances/{id}-GET': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/instances-GET': {
        parameters: [
        ]
    },
    '/instance-operations/restart-POST': {
        parameters: [
            {
                name: 'instance_ids'
            },
        ]
    },
    '/instance-operations/terminate-POST': {
        parameters: [
            {
                name: 'instance_ids'
            },
        ]
    },
    '/instance-types-GET': {
        parameters: [
        ]
    },
    '/ssh-keys-POST': {
        parameters: [
            {
                name: 'name'
            },
            {
                name: 'public_key'
            },
        ]
    },
    '/ssh-keys-GET': {
        parameters: [
        ]
    },
    '/ssh-keys/{id}-DELETE': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
}