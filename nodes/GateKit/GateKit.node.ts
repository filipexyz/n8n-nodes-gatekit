import { INodeType, INodeTypeDescription } from 'n8n-workflow';

export class GateKit implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'GateKit',
    name: 'GateKit',
    icon: 'file:gatekit.svg',
    group: ['transform'],
    version: 1,
    subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
    description: 'Universal messaging gateway - send messages across multiple platforms',
    defaults: {
      name: 'GateKit',
    },
    inputs: ['main'],
    outputs: ['main'],
    credentials: [
      {
        name: 'GateKitApi',
        required: true,
      },
    ],
    requestDefaults: {
      baseURL: '={{$credentials.apiUrl}}',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
    properties: [
      {
      displayName: 'Resource',
      name: 'resource',
      type: 'options',
      noDataExpression: true,
      options: [
        { name: 'Members', value: 'members' },
        { name: 'Projects', value: 'projects' },
        { name: 'Platforms', value: 'platforms' },
        { name: 'Messages', value: 'messages' },
        { name: 'ApiKeys', value: 'apikeys' },
        { name: 'Platform Logs', value: 'platform logs' }
      ],
      default: 'members',
    },
      {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
          show: {
            resource: ['members'],
          },
        },
        options: [
          {
          name: 'List',
          value: 'list',
          action: 'List all members of a project',
          description: 'List all members of a project',
          routing: {
            request: {
              method: 'GET',
              url: '=/api/v1/projects/:slug/members',
              
            },
          },
        },
          {
          name: 'Add',
          value: 'add',
          action: 'Add a member to a project',
          description: 'Add a member to a project',
          routing: {
            request: {
              method: 'POST',
              url: '=/api/v1/projects/:slug/members',
              body: {},
            },
          },
        },
          {
          name: 'Update',
          value: 'update',
          action: 'Update a member role in a project',
          description: 'Update a member role in a project',
          routing: {
            request: {
              method: 'PATCH',
              url: '=/api/v1/projects/:slug/members/:userId',
              body: {},
            },
          },
        },
          {
          name: 'Remove',
          value: 'remove',
          action: 'Remove a member from a project',
          description: 'Remove a member from a project',
          routing: {
            request: {
              method: 'DELETE',
              url: '=/api/v1/projects/:slug/members/:userId',
              
            },
          },
        }
        ],
        default: 'list',
      },
      {
          displayName: 'Slug',
          name: 'slug',
          type: 'string',
          required: true,
          default: '',
          description: 'slug parameter',
          displayOptions: {
            show: {
              resource: ['members'],
              operation: ['list'],
            },
          },
        },
      {
            displayName: 'Email of user to add',
            name: 'email',
            type: 'string',
            required: true,
            default: "",
            
            displayOptions: {
              show: {
                resource: ['members'],
                operation: ['add'],
              },
            },
            routing: {
              request: {
                qs: {
                  'email': '={{$value}}',
                },
              },
            },
          },
      {
            displayName: 'Role to assign to the member',
            name: 'role',
            type: 'string',
            required: true,
            default: "",
            options: [{name: 'owner', value: 'owner'}, {name: 'admin', value: 'admin'}, {name: 'member', value: 'member'}, {name: 'viewer', value: 'viewer'}],
            displayOptions: {
              show: {
                resource: ['members'],
                operation: ['add'],
              },
            },
            routing: {
              request: {
                qs: {
                  'role': '={{$value}}',
                },
              },
            },
          },
      {
          displayName: 'Slug',
          name: 'slug',
          type: 'string',
          required: true,
          default: '',
          description: 'slug parameter',
          displayOptions: {
            show: {
              resource: ['members'],
              operation: ['add'],
            },
          },
        },
      {
            displayName: 'User ID of the member to update',
            name: 'userId',
            type: 'string',
            required: true,
            default: "",
            
            displayOptions: {
              show: {
                resource: ['members'],
                operation: ['update'],
              },
            },
            routing: {
              request: {
                qs: {
                  'userId': '={{$value}}',
                },
              },
            },
          },
      {
            displayName: 'New role to assign',
            name: 'role',
            type: 'string',
            required: true,
            default: "",
            options: [{name: 'admin', value: 'admin'}, {name: 'member', value: 'member'}, {name: 'viewer', value: 'viewer'}],
            displayOptions: {
              show: {
                resource: ['members'],
                operation: ['update'],
              },
            },
            routing: {
              request: {
                qs: {
                  'role': '={{$value}}',
                },
              },
            },
          },
      {
          displayName: 'Slug',
          name: 'slug',
          type: 'string',
          required: true,
          default: '',
          description: 'slug parameter',
          displayOptions: {
            show: {
              resource: ['members'],
              operation: ['update'],
            },
          },
        },
      {
          displayName: 'UserId',
          name: 'userId',
          type: 'string',
          required: true,
          default: '',
          description: 'userId parameter',
          displayOptions: {
            show: {
              resource: ['members'],
              operation: ['update'],
            },
          },
        },
      {
            displayName: 'User ID of the member to remove',
            name: 'userId',
            type: 'string',
            required: true,
            default: "",
            
            displayOptions: {
              show: {
                resource: ['members'],
                operation: ['remove'],
              },
            },
            routing: {
              request: {
                qs: {
                  'userId': '={{$value}}',
                },
              },
            },
          },
      {
          displayName: 'Slug',
          name: 'slug',
          type: 'string',
          required: true,
          default: '',
          description: 'slug parameter',
          displayOptions: {
            show: {
              resource: ['members'],
              operation: ['remove'],
            },
          },
        },
      {
          displayName: 'UserId',
          name: 'userId',
          type: 'string',
          required: true,
          default: '',
          description: 'userId parameter',
          displayOptions: {
            show: {
              resource: ['members'],
              operation: ['remove'],
            },
          },
        },
      {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
          show: {
            resource: ['projects'],
          },
        },
        options: [
          {
          name: 'Create',
          value: 'create',
          action: 'Create a new project',
          description: 'Create a new project',
          routing: {
            request: {
              method: 'POST',
              url: '=/api/v1/projects',
              body: {},
            },
          },
        },
          {
          name: 'List',
          value: 'list',
          action: 'List all projects',
          description: 'List all projects',
          routing: {
            request: {
              method: 'GET',
              url: '=/api/v1/projects',
              
            },
          },
        },
          {
          name: 'Update',
          value: 'update',
          action: 'Update project name, description and settings',
          description: 'Update project name, description and settings',
          routing: {
            request: {
              method: 'GET',
              url: '=/api/v1/projects/:slug',
              body: {},
            },
          },
        }
        ],
        default: 'create',
      },
      {
            displayName: 'Project name',
            name: 'name',
            type: 'string',
            required: true,
            default: "",
            
            displayOptions: {
              show: {
                resource: ['projects'],
                operation: ['create'],
              },
            },
            routing: {
              request: {
                qs: {
                  'name': '={{$value}}',
                },
              },
            },
          },
      {
            displayName: 'Project description',
            name: 'description',
            type: 'string',
            required: false,
            default: "",
            
            displayOptions: {
              show: {
                resource: ['projects'],
                operation: ['create'],
              },
            },
            routing: {
              request: {
                qs: {
                  'description': '={{$value}}',
                },
              },
            },
          },
      {
            displayName: 'Project environment',
            name: 'environment',
            type: 'string',
            required: false,
            default: "development",
            options: [{name: 'development', value: 'development'}, {name: 'staging', value: 'staging'}, {name: 'production', value: 'production'}],
            displayOptions: {
              show: {
                resource: ['projects'],
                operation: ['create'],
              },
            },
            routing: {
              request: {
                qs: {
                  'environment': '={{$value}}',
                },
              },
            },
          },
      {
            displayName: 'Project name',
            name: 'name',
            type: 'string',
            required: false,
            default: "",
            
            displayOptions: {
              show: {
                resource: ['projects'],
                operation: ['update'],
              },
            },
            routing: {
              request: {
                qs: {
                  'name': '={{$value}}',
                },
              },
            },
          },
      {
            displayName: 'Project description',
            name: 'description',
            type: 'string',
            required: false,
            default: "",
            
            displayOptions: {
              show: {
                resource: ['projects'],
                operation: ['update'],
              },
            },
            routing: {
              request: {
                qs: {
                  'description': '={{$value}}',
                },
              },
            },
          },
      {
            displayName: 'Project environment',
            name: 'environment',
            type: 'string',
            required: false,
            default: "",
            options: [{name: 'development', value: 'development'}, {name: 'staging', value: 'staging'}, {name: 'production', value: 'production'}],
            displayOptions: {
              show: {
                resource: ['projects'],
                operation: ['update'],
              },
            },
            routing: {
              request: {
                qs: {
                  'environment': '={{$value}}',
                },
              },
            },
          },
      {
            displayName: 'Set as default project',
            name: 'isDefault',
            type: 'boolean',
            required: false,
            default: "",
            
            displayOptions: {
              show: {
                resource: ['projects'],
                operation: ['update'],
              },
            },
            routing: {
              request: {
                qs: {
                  'isDefault': '={{$value}}',
                },
              },
            },
          },
      {
          displayName: 'Slug',
          name: 'slug',
          type: 'string',
          required: true,
          default: '',
          description: 'slug parameter',
          displayOptions: {
            show: {
              resource: ['projects'],
              operation: ['update'],
            },
          },
        },
      {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
          show: {
            resource: ['platforms'],
          },
        },
        options: [
          {
          name: 'Create',
          value: 'create',
          action: 'Configure a new platform integration',
          description: 'Configure a new platform integration',
          routing: {
            request: {
              method: 'POST',
              url: '=/api/v1/projects/{{ $parameter["projectSlug"] }}/platforms',
              body: {},
            },
          },
        },
          {
          name: 'List',
          value: 'list',
          action: 'List configured platforms for project',
          description: 'List configured platforms for project',
          routing: {
            request: {
              method: 'GET',
              url: '=/api/v1/projects/{{ $parameter["projectSlug"] }}/platforms',
              
            },
          },
        },
          {
          name: 'Get',
          value: 'get',
          action: 'Get platform configuration details',
          description: 'Get platform configuration details',
          routing: {
            request: {
              method: 'GET',
              url: '=/api/v1/projects/{{ $parameter["projectSlug"] }}/platforms/{{ $parameter["id"] }}',
              
            },
          },
        },
          {
          name: 'Update',
          value: 'update',
          action: 'Update platform configuration',
          description: 'Update platform configuration',
          routing: {
            request: {
              method: 'PATCH',
              url: '=/api/v1/projects/{{ $parameter["projectSlug"] }}/platforms/{{ $parameter["id"] }}',
              body: {},
            },
          },
        },
          {
          name: 'Delete',
          value: 'delete',
          action: 'Remove platform configuration',
          description: 'Remove platform configuration',
          routing: {
            request: {
              method: 'DELETE',
              url: '=/api/v1/projects/{{ $parameter["projectSlug"] }}/platforms/{{ $parameter["id"] }}',
              
            },
          },
        },
          {
          name: 'Register-webhook',
          value: 'register-webhook',
          action: 'Register webhook URL with platform provider',
          description: 'Register webhook URL with platform provider',
          routing: {
            request: {
              method: 'POST',
              url: '=/api/v1/projects/{{ $parameter["projectSlug"] }}/platforms/{{ $parameter["id"] }}/register-webhook',
              
            },
          },
        },
          {
          name: 'Qr-code',
          value: 'qr-code',
          action: 'Get QR code for WhatsApp authentication',
          description: 'Get QR code for WhatsApp authentication',
          routing: {
            request: {
              method: 'GET',
              url: '=/api/v1/projects/{{ $parameter["projectSlug"] }}/platforms/{{ $parameter["id"] }}/qr-code',
              
            },
          },
        },
          {
          name: 'Supported',
          value: 'supported',
          action: 'List supported platforms with credential requirements',
          description: 'List supported platforms with credential requirements',
          routing: {
            request: {
              method: 'GET',
              url: '=/api/v1/platforms/supported',
              
            },
          },
        }
        ],
        default: 'create',
      },
      {
            displayName: 'Platform type',
            name: 'platform',
            type: 'string',
            required: true,
            default: "",
            options: [{name: 'discord', value: 'discord'}, {name: 'telegram', value: 'telegram'}, {name: 'whatsapp-evo', value: 'whatsapp-evo'}],
            displayOptions: {
              show: {
                resource: ['platforms'],
                operation: ['create'],
              },
            },
            routing: {
              request: {
                qs: {
                  'platform': '={{$value}}',
                },
              },
            },
          },
      {
            displayName: 'Friendly name for the platform instance',
            name: 'name',
            type: 'string',
            required: true,
            default: "",
            
            displayOptions: {
              show: {
                resource: ['platforms'],
                operation: ['create'],
              },
            },
            routing: {
              request: {
                qs: {
                  'name': '={{$value}}',
                },
              },
            },
          },
      {
            displayName: 'Optional description for the platform instance',
            name: 'description',
            type: 'string',
            required: false,
            default: "",
            
            displayOptions: {
              show: {
                resource: ['platforms'],
                operation: ['create'],
              },
            },
            routing: {
              request: {
                qs: {
                  'description': '={{$value}}',
                },
              },
            },
          },
      {
            displayName: 'Platform credentials (JSON object). Use "gatekit platforms supported" to see required fields for each platform.',
            name: 'credentials',
            type: 'json',
            required: true,
            default: "",
            
            displayOptions: {
              show: {
                resource: ['platforms'],
                operation: ['create'],
              },
            },
            routing: {
              request: {
                body: {
                  'credentials': '={{$value}}',
                },
              },
            },
          },
      {
            displayName: 'Enable platform',
            name: 'isActive',
            type: 'boolean',
            required: false,
            default: true,
            
            displayOptions: {
              show: {
                resource: ['platforms'],
                operation: ['create'],
              },
            },
            routing: {
              request: {
                qs: {
                  'isActive': '={{$value}}',
                },
              },
            },
          },
      {
            displayName: 'Enable test mode',
            name: 'testMode',
            type: 'boolean',
            required: false,
            default: "",
            
            displayOptions: {
              show: {
                resource: ['platforms'],
                operation: ['create'],
              },
            },
            routing: {
              request: {
                qs: {
                  'testMode': '={{$value}}',
                },
              },
            },
          },
      {
          displayName: 'Project Slug',
          name: 'projectSlug',
          type: 'string',
          required: true,
          default: 'default',
          description: 'Project identifier to operate on',
          displayOptions: {
            show: {
              resource: ['platforms'],
              operation: ['create'],
            },
          },
        },
      {
          displayName: 'Project Slug',
          name: 'projectSlug',
          type: 'string',
          required: true,
          default: 'default',
          description: 'Project identifier to operate on',
          displayOptions: {
            show: {
              resource: ['platforms'],
              operation: ['list'],
            },
          },
        },
      {
            displayName: 'Platform ID',
            name: 'id',
            type: 'string',
            required: true,
            default: "",
            
            displayOptions: {
              show: {
                resource: ['platforms'],
                operation: ['get'],
              },
            },
            routing: {
              request: {
                qs: {
                  'id': '={{$value}}',
                },
              },
            },
          },
      {
          displayName: 'Project Slug',
          name: 'projectSlug',
          type: 'string',
          required: true,
          default: 'default',
          description: 'Project identifier to operate on',
          displayOptions: {
            show: {
              resource: ['platforms'],
              operation: ['get'],
            },
          },
        },
      {
          displayName: 'Id',
          name: 'id',
          type: 'string',
          required: true,
          default: '',
          description: 'id parameter',
          displayOptions: {
            show: {
              resource: ['platforms'],
              operation: ['get'],
            },
          },
        },
      {
            displayName: 'Updated friendly name',
            name: 'name',
            type: 'string',
            required: false,
            default: "",
            
            displayOptions: {
              show: {
                resource: ['platforms'],
                operation: ['update'],
              },
            },
            routing: {
              request: {
                qs: {
                  'name': '={{$value}}',
                },
              },
            },
          },
      {
            displayName: 'Updated description',
            name: 'description',
            type: 'string',
            required: false,
            default: "",
            
            displayOptions: {
              show: {
                resource: ['platforms'],
                operation: ['update'],
              },
            },
            routing: {
              request: {
                qs: {
                  'description': '={{$value}}',
                },
              },
            },
          },
      {
            displayName: 'Updated credentials (JSON object)',
            name: 'credentials',
            type: 'json',
            required: false,
            default: "",
            
            displayOptions: {
              show: {
                resource: ['platforms'],
                operation: ['update'],
              },
            },
            routing: {
              request: {
                body: {
                  'credentials': '={{$value}}',
                },
              },
            },
          },
      {
            displayName: 'Enable/disable platform',
            name: 'isActive',
            type: 'boolean',
            required: false,
            default: "",
            
            displayOptions: {
              show: {
                resource: ['platforms'],
                operation: ['update'],
              },
            },
            routing: {
              request: {
                qs: {
                  'isActive': '={{$value}}',
                },
              },
            },
          },
      {
            displayName: 'Enable/disable test mode',
            name: 'testMode',
            type: 'boolean',
            required: false,
            default: "",
            
            displayOptions: {
              show: {
                resource: ['platforms'],
                operation: ['update'],
              },
            },
            routing: {
              request: {
                qs: {
                  'testMode': '={{$value}}',
                },
              },
            },
          },
      {
          displayName: 'Project Slug',
          name: 'projectSlug',
          type: 'string',
          required: true,
          default: 'default',
          description: 'Project identifier to operate on',
          displayOptions: {
            show: {
              resource: ['platforms'],
              operation: ['update'],
            },
          },
        },
      {
          displayName: 'Id',
          name: 'id',
          type: 'string',
          required: true,
          default: '',
          description: 'id parameter',
          displayOptions: {
            show: {
              resource: ['platforms'],
              operation: ['update'],
            },
          },
        },
      {
            displayName: 'Platform ID',
            name: 'id',
            type: 'string',
            required: true,
            default: "",
            
            displayOptions: {
              show: {
                resource: ['platforms'],
                operation: ['delete'],
              },
            },
            routing: {
              request: {
                qs: {
                  'id': '={{$value}}',
                },
              },
            },
          },
      {
          displayName: 'Project Slug',
          name: 'projectSlug',
          type: 'string',
          required: true,
          default: 'default',
          description: 'Project identifier to operate on',
          displayOptions: {
            show: {
              resource: ['platforms'],
              operation: ['delete'],
            },
          },
        },
      {
          displayName: 'Id',
          name: 'id',
          type: 'string',
          required: true,
          default: '',
          description: 'id parameter',
          displayOptions: {
            show: {
              resource: ['platforms'],
              operation: ['delete'],
            },
          },
        },
      {
            displayName: 'Platform ID',
            name: 'id',
            type: 'string',
            required: true,
            default: "",
            
            displayOptions: {
              show: {
                resource: ['platforms'],
                operation: ['register-webhook'],
              },
            },
            routing: {
              request: {
                qs: {
                  'id': '={{$value}}',
                },
              },
            },
          },
      {
          displayName: 'Project Slug',
          name: 'projectSlug',
          type: 'string',
          required: true,
          default: 'default',
          description: 'Project identifier to operate on',
          displayOptions: {
            show: {
              resource: ['platforms'],
              operation: ['register-webhook'],
            },
          },
        },
      {
          displayName: 'Id',
          name: 'id',
          type: 'string',
          required: true,
          default: '',
          description: 'id parameter',
          displayOptions: {
            show: {
              resource: ['platforms'],
              operation: ['register-webhook'],
            },
          },
        },
      {
            displayName: 'WhatsApp Platform ID',
            name: 'id',
            type: 'string',
            required: true,
            default: "",
            
            displayOptions: {
              show: {
                resource: ['platforms'],
                operation: ['qr-code'],
              },
            },
            routing: {
              request: {
                qs: {
                  'id': '={{$value}}',
                },
              },
            },
          },
      {
          displayName: 'Project Slug',
          name: 'projectSlug',
          type: 'string',
          required: true,
          default: 'default',
          description: 'Project identifier to operate on',
          displayOptions: {
            show: {
              resource: ['platforms'],
              operation: ['qr-code'],
            },
          },
        },
      {
          displayName: 'Id',
          name: 'id',
          type: 'string',
          required: true,
          default: '',
          description: 'id parameter',
          displayOptions: {
            show: {
              resource: ['platforms'],
              operation: ['qr-code'],
            },
          },
        },
      {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
          show: {
            resource: ['messages'],
          },
        },
        options: [
          {
          name: 'List',
          value: 'list',
          action: 'List received messages for a project',
          description: 'List received messages for a project',
          routing: {
            request: {
              method: 'GET',
              url: '=/api/v1/projects/{{ $parameter["projectSlug"] }}/messages',
              body: {},
            },
          },
        },
          {
          name: 'Stats',
          value: 'stats',
          action: 'Get message statistics for a project',
          description: 'Get message statistics for a project',
          routing: {
            request: {
              method: 'GET',
              url: '=/api/v1/projects/{{ $parameter["projectSlug"] }}/messages/stats',
              
            },
          },
        },
          {
          name: 'Get',
          value: 'get',
          action: 'Get a specific message by ID',
          description: 'Get a specific message by ID',
          routing: {
            request: {
              method: 'GET',
              url: '=/api/v1/projects/{{ $parameter["projectSlug"] }}/messages/:messageId',
              
            },
          },
        },
          {
          name: 'Cleanup',
          value: 'cleanup',
          action: 'Delete messages older than specified days',
          description: 'Delete messages older than specified days',
          routing: {
            request: {
              method: 'DELETE',
              url: '=/api/v1/projects/{{ $parameter["projectSlug"] }}/messages/cleanup',
              
            },
          },
        },
          {
          name: 'Send',
          value: 'send',
          action: 'Send a message to platforms',
          description: 'Send a message to platforms',
          routing: {
            request: {
              method: 'POST',
              url: '=/api/v1/projects/{{ $parameter["projectSlug"] }}/messages/send',
              body: {},
            },
          },
        },
          {
          name: 'Status',
          value: 'status',
          action: 'Check message delivery status',
          description: 'Check message delivery status',
          routing: {
            request: {
              method: 'GET',
              url: '=/api/v1/projects/{{ $parameter["projectSlug"] }}/messages/status/{{ $parameter["jobId"] }}',
              
            },
          },
        },
          {
          name: 'Retry',
          value: 'retry',
          action: 'Retry a failed message',
          description: 'Retry a failed message',
          routing: {
            request: {
              method: 'POST',
              url: '=/api/v1/projects/{{ $parameter["projectSlug"] }}/messages/retry/{{ $parameter["jobId"] }}',
              
            },
          },
        },
          {
          name: 'Sent',
          value: 'sent',
          action: 'List sent messages for a project',
          description: 'List sent messages for a project',
          routing: {
            request: {
              method: 'GET',
              url: '=/api/v1/projects/{{ $parameter["projectSlug"] }}/messages/sent',
              
            },
          },
        }
        ],
        default: 'list',
      },
      {
            displayName: 'Filter by platform ID',
            name: 'platformId',
            type: 'string',
            required: false,
            default: "",
            
            displayOptions: {
              show: {
                resource: ['messages'],
                operation: ['list'],
              },
            },
            routing: {
              request: {
                qs: {
                  'platformId': '={{$value}}',
                },
              },
            },
          },
      {
            displayName: 'Filter by platform type (telegram, discord, whatsapp-evo)',
            name: 'platform',
            type: 'string',
            required: false,
            default: "",
            options: [{name: 'telegram', value: 'telegram'}, {name: 'discord', value: 'discord'}, {name: 'whatsapp-evo', value: 'whatsapp-evo'}],
            displayOptions: {
              show: {
                resource: ['messages'],
                operation: ['list'],
              },
            },
            routing: {
              request: {
                qs: {
                  'platform': '={{$value}}',
                },
              },
            },
          },
      {
            displayName: 'Filter by chat/channel ID',
            name: 'chatId',
            type: 'string',
            required: false,
            default: "",
            
            displayOptions: {
              show: {
                resource: ['messages'],
                operation: ['list'],
              },
            },
            routing: {
              request: {
                qs: {
                  'chatId': '={{$value}}',
                },
              },
            },
          },
      {
            displayName: 'Filter by user ID',
            name: 'userId',
            type: 'string',
            required: false,
            default: "",
            
            displayOptions: {
              show: {
                resource: ['messages'],
                operation: ['list'],
              },
            },
            routing: {
              request: {
                qs: {
                  'userId': '={{$value}}',
                },
              },
            },
          },
      {
            displayName: 'Filter messages after this date (ISO 8601)',
            name: 'startDate',
            type: 'string',
            required: false,
            default: "",
            
            displayOptions: {
              show: {
                resource: ['messages'],
                operation: ['list'],
              },
            },
            routing: {
              request: {
                qs: {
                  'startDate': '={{$value}}',
                },
              },
            },
          },
      {
            displayName: 'Filter messages before this date (ISO 8601)',
            name: 'endDate',
            type: 'string',
            required: false,
            default: "",
            
            displayOptions: {
              show: {
                resource: ['messages'],
                operation: ['list'],
              },
            },
            routing: {
              request: {
                qs: {
                  'endDate': '={{$value}}',
                },
              },
            },
          },
      {
            displayName: 'Number of messages to return (1-100)',
            name: 'limit',
            type: 'number',
            required: false,
            default: 50,
            
            displayOptions: {
              show: {
                resource: ['messages'],
                operation: ['list'],
              },
            },
            routing: {
              request: {
                qs: {
                  'limit': '={{$value}}',
                },
              },
            },
          },
      {
            displayName: 'Number of messages to skip',
            name: 'offset',
            type: 'number',
            required: false,
            default: "",
            
            displayOptions: {
              show: {
                resource: ['messages'],
                operation: ['list'],
              },
            },
            routing: {
              request: {
                qs: {
                  'offset': '={{$value}}',
                },
              },
            },
          },
      {
            displayName: 'Sort order (asc or desc)',
            name: 'order',
            type: 'string',
            required: false,
            default: "desc",
            options: [{name: 'asc', value: 'asc'}, {name: 'desc', value: 'desc'}],
            displayOptions: {
              show: {
                resource: ['messages'],
                operation: ['list'],
              },
            },
            routing: {
              request: {
                qs: {
                  'order': '={{$value}}',
                },
              },
            },
          },
      {
            displayName: 'Include raw platform message data',
            name: 'raw',
            type: 'boolean',
            required: false,
            default: "",
            
            displayOptions: {
              show: {
                resource: ['messages'],
                operation: ['list'],
              },
            },
            routing: {
              request: {
                qs: {
                  'raw': '={{$value}}',
                },
              },
            },
          },
      {
          displayName: 'Project Slug',
          name: 'projectSlug',
          type: 'string',
          required: true,
          default: 'default',
          description: 'Project identifier to operate on',
          displayOptions: {
            show: {
              resource: ['messages'],
              operation: ['list'],
            },
          },
        },
      {
          displayName: 'Project Slug',
          name: 'projectSlug',
          type: 'string',
          required: true,
          default: 'default',
          description: 'Project identifier to operate on',
          displayOptions: {
            show: {
              resource: ['messages'],
              operation: ['stats'],
            },
          },
        },
      {
            displayName: 'Message ID',
            name: 'messageId',
            type: 'string',
            required: true,
            default: "",
            
            displayOptions: {
              show: {
                resource: ['messages'],
                operation: ['get'],
              },
            },
            routing: {
              request: {
                qs: {
                  'messageId': '={{$value}}',
                },
              },
            },
          },
      {
          displayName: 'Project Slug',
          name: 'projectSlug',
          type: 'string',
          required: true,
          default: 'default',
          description: 'Project identifier to operate on',
          displayOptions: {
            show: {
              resource: ['messages'],
              operation: ['get'],
            },
          },
        },
      {
          displayName: 'MessageId',
          name: 'messageId',
          type: 'string',
          required: true,
          default: '',
          description: 'messageId parameter',
          displayOptions: {
            show: {
              resource: ['messages'],
              operation: ['get'],
            },
          },
        },
      {
            displayName: 'Delete messages older than this many days',
            name: 'daysBefore',
            type: 'number',
            required: true,
            default: "",
            
            displayOptions: {
              show: {
                resource: ['messages'],
                operation: ['cleanup'],
              },
            },
            routing: {
              request: {
                qs: {
                  'daysBefore': '={{$value}}',
                },
              },
            },
          },
      {
          displayName: 'Project Slug',
          name: 'projectSlug',
          type: 'string',
          required: true,
          default: 'default',
          description: 'Project identifier to operate on',
          displayOptions: {
            show: {
              resource: ['messages'],
              operation: ['cleanup'],
            },
          },
        },
      {
            displayName: 'Single target in format: platformId:type:id',
            name: 'target',
            type: 'string',
            required: false,
            default: "",
            
            displayOptions: {
              show: {
                resource: ['messages'],
                operation: ['send'],
              },
            },
            routing: {
              request: {
                qs: {
                  'target': '={{$value}}',
                },
              },
            },
          },
      {
            displayName: 'Multiple targets comma-separated: platformId:type:id,platformId:type:id',
            name: 'targets',
            type: 'string',
            required: false,
            default: "",
            
            displayOptions: {
              show: {
                resource: ['messages'],
                operation: ['send'],
              },
            },
            routing: {
              request: {
                qs: {
                  'targets': '={{$value}}',
                },
              },
            },
          },
      {
            displayName: 'Message text content',
            name: 'text',
            type: 'string',
            required: false,
            default: "",
            
            displayOptions: {
              show: {
                resource: ['messages'],
                operation: ['send'],
              },
            },
            routing: {
              request: {
                qs: {
                  'text': '={{$value}}',
                },
              },
            },
          },
      {
            displayName: 'Full message content object (advanced)',
            name: 'content',
            type: 'json',
            required: false,
            default: "",
            
            displayOptions: {
              show: {
                resource: ['messages'],
                operation: ['send'],
              },
            },
            routing: {
              request: {
                body: {
                  'content': '={{$value}}',
                },
              },
            },
          },
      {
            displayName: 'Message options',
            name: 'options',
            type: 'json',
            required: false,
            default: "",
            
            displayOptions: {
              show: {
                resource: ['messages'],
                operation: ['send'],
              },
            },
            routing: {
              request: {
                body: {
                  'options': '={{$value}}',
                },
              },
            },
          },
      {
            displayName: 'Message metadata',
            name: 'metadata',
            type: 'json',
            required: false,
            default: "",
            
            displayOptions: {
              show: {
                resource: ['messages'],
                operation: ['send'],
              },
            },
            routing: {
              request: {
                body: {
                  'metadata': '={{$value}}',
                },
              },
            },
          },
      {
          displayName: 'Project Slug',
          name: 'projectSlug',
          type: 'string',
          required: true,
          default: 'default',
          description: 'Project identifier to operate on',
          displayOptions: {
            show: {
              resource: ['messages'],
              operation: ['send'],
            },
          },
        },
      {
            displayName: 'Message job ID',
            name: 'jobId',
            type: 'string',
            required: true,
            default: "",
            
            displayOptions: {
              show: {
                resource: ['messages'],
                operation: ['status'],
              },
            },
            routing: {
              request: {
                qs: {
                  'jobId': '={{$value}}',
                },
              },
            },
          },
      {
          displayName: 'Project Slug',
          name: 'projectSlug',
          type: 'string',
          required: true,
          default: 'default',
          description: 'Project identifier to operate on',
          displayOptions: {
            show: {
              resource: ['messages'],
              operation: ['status'],
            },
          },
        },
      {
          displayName: 'JobId',
          name: 'jobId',
          type: 'string',
          required: true,
          default: '',
          description: 'jobId parameter',
          displayOptions: {
            show: {
              resource: ['messages'],
              operation: ['status'],
            },
          },
        },
      {
            displayName: 'Failed message job ID',
            name: 'jobId',
            type: 'string',
            required: true,
            default: "",
            
            displayOptions: {
              show: {
                resource: ['messages'],
                operation: ['retry'],
              },
            },
            routing: {
              request: {
                qs: {
                  'jobId': '={{$value}}',
                },
              },
            },
          },
      {
          displayName: 'Project Slug',
          name: 'projectSlug',
          type: 'string',
          required: true,
          default: 'default',
          description: 'Project identifier to operate on',
          displayOptions: {
            show: {
              resource: ['messages'],
              operation: ['retry'],
            },
          },
        },
      {
          displayName: 'JobId',
          name: 'jobId',
          type: 'string',
          required: true,
          default: '',
          description: 'jobId parameter',
          displayOptions: {
            show: {
              resource: ['messages'],
              operation: ['retry'],
            },
          },
        },
      {
            displayName: 'Filter by platform',
            name: 'platform',
            type: 'string',
            required: false,
            default: "",
            
            displayOptions: {
              show: {
                resource: ['messages'],
                operation: ['sent'],
              },
            },
            routing: {
              request: {
                qs: {
                  'platform': '={{$value}}',
                },
              },
            },
          },
      {
            displayName: 'Filter by status (pending, sent, failed)',
            name: 'status',
            type: 'string',
            required: false,
            default: "",
            options: [{name: 'pending', value: 'pending'}, {name: 'sent', value: 'sent'}, {name: 'failed', value: 'failed'}],
            displayOptions: {
              show: {
                resource: ['messages'],
                operation: ['sent'],
              },
            },
            routing: {
              request: {
                qs: {
                  'status': '={{$value}}',
                },
              },
            },
          },
      {
            displayName: 'Number of messages to return',
            name: 'limit',
            type: 'number',
            required: false,
            default: 50,
            
            displayOptions: {
              show: {
                resource: ['messages'],
                operation: ['sent'],
              },
            },
            routing: {
              request: {
                qs: {
                  'limit': '={{$value}}',
                },
              },
            },
          },
      {
            displayName: 'Number of messages to skip',
            name: 'offset',
            type: 'number',
            required: false,
            default: "",
            
            displayOptions: {
              show: {
                resource: ['messages'],
                operation: ['sent'],
              },
            },
            routing: {
              request: {
                qs: {
                  'offset': '={{$value}}',
                },
              },
            },
          },
      {
          displayName: 'Project Slug',
          name: 'projectSlug',
          type: 'string',
          required: true,
          default: 'default',
          description: 'Project identifier to operate on',
          displayOptions: {
            show: {
              resource: ['messages'],
              operation: ['sent'],
            },
          },
        },
      {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
          show: {
            resource: ['apikeys'],
          },
        },
        options: [
          {
          name: 'Create',
          value: 'create',
          action: 'Generate a new API key',
          description: 'Generate a new API key',
          routing: {
            request: {
              method: 'POST',
              url: '=/api/v1/projects/{{ $parameter["projectSlug"] }}/keys',
              body: {},
            },
          },
        },
          {
          name: 'List',
          value: 'list',
          action: 'List all API keys for project',
          description: 'List all API keys for project',
          routing: {
            request: {
              method: 'GET',
              url: '=/api/v1/projects/{{ $parameter["projectSlug"] }}/keys',
              
            },
          },
        },
          {
          name: 'Revoke',
          value: 'revoke',
          action: 'Revoke an API key',
          description: 'Revoke an API key',
          routing: {
            request: {
              method: 'DELETE',
              url: '=/api/v1/projects/{{ $parameter["projectSlug"] }}/keys/{{ $parameter["keyId"] }}',
              
            },
          },
        },
          {
          name: 'Roll',
          value: 'roll',
          action: 'Roll an API key (generate new key, revoke old after 24h)',
          description: 'Roll an API key (generate new key, revoke old after 24h)',
          routing: {
            request: {
              method: 'POST',
              url: '=/api/v1/projects/{{ $parameter["projectSlug"] }}/keys/{{ $parameter["keyId"] }}/roll',
              
            },
          },
        }
        ],
        default: 'create',
      },
      {
            displayName: 'API key name',
            name: 'name',
            type: 'string',
            required: true,
            default: "",
            
            displayOptions: {
              show: {
                resource: ['apikeys'],
                operation: ['create'],
              },
            },
            routing: {
              request: {
                qs: {
                  'name': '={{$value}}',
                },
              },
            },
          },
      {
            displayName: 'Comma-separated scopes',
            name: 'scopes',
            type: 'string',
            required: true,
            default: "",
            
            displayOptions: {
              show: {
                resource: ['apikeys'],
                operation: ['create'],
              },
            },
            routing: {
              request: {
                qs: {
                  'scopes': '={{$value}}',
                },
              },
            },
          },
      {
            displayName: 'Expiration in days',
            name: 'expiresInDays',
            type: 'number',
            required: false,
            default: "",
            
            displayOptions: {
              show: {
                resource: ['apikeys'],
                operation: ['create'],
              },
            },
            routing: {
              request: {
                qs: {
                  'expiresInDays': '={{$value}}',
                },
              },
            },
          },
      {
          displayName: 'Project Slug',
          name: 'projectSlug',
          type: 'string',
          required: true,
          default: 'default',
          description: 'Project identifier to operate on',
          displayOptions: {
            show: {
              resource: ['apikeys'],
              operation: ['create'],
            },
          },
        },
      {
          displayName: 'Project Slug',
          name: 'projectSlug',
          type: 'string',
          required: true,
          default: 'default',
          description: 'Project identifier to operate on',
          displayOptions: {
            show: {
              resource: ['apikeys'],
              operation: ['list'],
            },
          },
        },
      {
            displayName: 'API key ID to revoke',
            name: 'keyId',
            type: 'string',
            required: true,
            default: "",
            
            displayOptions: {
              show: {
                resource: ['apikeys'],
                operation: ['revoke'],
              },
            },
            routing: {
              request: {
                qs: {
                  'keyId': '={{$value}}',
                },
              },
            },
          },
      {
          displayName: 'Project Slug',
          name: 'projectSlug',
          type: 'string',
          required: true,
          default: 'default',
          description: 'Project identifier to operate on',
          displayOptions: {
            show: {
              resource: ['apikeys'],
              operation: ['revoke'],
            },
          },
        },
      {
          displayName: 'KeyId',
          name: 'keyId',
          type: 'string',
          required: true,
          default: '',
          description: 'keyId parameter',
          displayOptions: {
            show: {
              resource: ['apikeys'],
              operation: ['revoke'],
            },
          },
        },
      {
            displayName: 'API key ID to roll',
            name: 'keyId',
            type: 'string',
            required: true,
            default: "",
            
            displayOptions: {
              show: {
                resource: ['apikeys'],
                operation: ['roll'],
              },
            },
            routing: {
              request: {
                qs: {
                  'keyId': '={{$value}}',
                },
              },
            },
          },
      {
          displayName: 'Project Slug',
          name: 'projectSlug',
          type: 'string',
          required: true,
          default: 'default',
          description: 'Project identifier to operate on',
          displayOptions: {
            show: {
              resource: ['apikeys'],
              operation: ['roll'],
            },
          },
        },
      {
          displayName: 'KeyId',
          name: 'keyId',
          type: 'string',
          required: true,
          default: '',
          description: 'keyId parameter',
          displayOptions: {
            show: {
              resource: ['apikeys'],
              operation: ['roll'],
            },
          },
        },
      {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
          show: {
            resource: ['platform logs'],
          },
        },
        options: [
          {
          name: 'Logs',
          value: 'logs',
          action: 'List platform processing logs for a project',
          description: 'List platform processing logs for a project',
          routing: {
            request: {
              method: 'GET',
              url: '=/api/v1/projects/:slug/platforms/logs',
              
            },
          },
        },
          {
          name: 'Logs',
          value: 'logs',
          action: 'List logs for a specific platform configuration',
          description: 'List logs for a specific platform configuration',
          routing: {
            request: {
              method: 'GET',
              url: '=/api/v1/projects/:slug/platforms/:platformId/logs',
              
            },
          },
        },
          {
          name: 'Logs',
          value: 'logs',
          action: 'Get platform logs statistics and recent errors',
          description: 'Get platform logs statistics and recent errors',
          routing: {
            request: {
              method: 'GET',
              url: '=/api/v1/projects/:slug/platforms/logs/stats',
              
            },
          },
        }
        ],
        default: 'logs',
      },
      {
            displayName: 'Filter by platform (telegram, discord)',
            name: 'platform',
            type: 'string',
            required: false,
            default: "",
            
            displayOptions: {
              show: {
                resource: ['platform logs'],
                operation: ['logs'],
              },
            },
            routing: {
              request: {
                qs: {
                  'platform': '={{$value}}',
                },
              },
            },
          },
      {
            displayName: 'Filter by log level',
            name: 'level',
            type: 'string',
            required: false,
            default: "",
            options: [{name: 'info', value: 'info'}, {name: 'warn', value: 'warn'}, {name: 'error', value: 'error'}, {name: 'debug', value: 'debug'}],
            displayOptions: {
              show: {
                resource: ['platform logs'],
                operation: ['logs'],
              },
            },
            routing: {
              request: {
                qs: {
                  'level': '={{$value}}',
                },
              },
            },
          },
      {
            displayName: 'Filter by log category',
            name: 'category',
            type: 'string',
            required: false,
            default: "",
            options: [{name: 'connection', value: 'connection'}, {name: 'webhook', value: 'webhook'}, {name: 'message', value: 'message'}, {name: 'error', value: 'error'}, {name: 'auth', value: 'auth'}, {name: 'general', value: 'general'}],
            displayOptions: {
              show: {
                resource: ['platform logs'],
                operation: ['logs'],
              },
            },
            routing: {
              request: {
                qs: {
                  'category': '={{$value}}',
                },
              },
            },
          },
      {
            displayName: 'Filter logs after this date (ISO 8601)',
            name: 'startDate',
            type: 'string',
            required: false,
            default: "",
            
            displayOptions: {
              show: {
                resource: ['platform logs'],
                operation: ['logs'],
              },
            },
            routing: {
              request: {
                qs: {
                  'startDate': '={{$value}}',
                },
              },
            },
          },
      {
            displayName: 'Filter logs before this date (ISO 8601)',
            name: 'endDate',
            type: 'string',
            required: false,
            default: "",
            
            displayOptions: {
              show: {
                resource: ['platform logs'],
                operation: ['logs'],
              },
            },
            routing: {
              request: {
                qs: {
                  'endDate': '={{$value}}',
                },
              },
            },
          },
      {
            displayName: 'Number of logs to return (1-1000)',
            name: 'limit',
            type: 'number',
            required: false,
            default: "100",
            
            displayOptions: {
              show: {
                resource: ['platform logs'],
                operation: ['logs'],
              },
            },
            routing: {
              request: {
                qs: {
                  'limit': '={{$value}}',
                },
              },
            },
          },
      {
            displayName: 'Number of logs to skip',
            name: 'offset',
            type: 'number',
            required: false,
            default: "",
            
            displayOptions: {
              show: {
                resource: ['platform logs'],
                operation: ['logs'],
              },
            },
            routing: {
              request: {
                qs: {
                  'offset': '={{$value}}',
                },
              },
            },
          },
      {
          displayName: 'Slug',
          name: 'slug',
          type: 'string',
          required: true,
          default: '',
          description: 'slug parameter',
          displayOptions: {
            show: {
              resource: ['platform logs'],
              operation: ['logs'],
            },
          },
        },
      {
            displayName: 'Filter by log level',
            name: 'level',
            type: 'string',
            required: false,
            default: "",
            options: [{name: 'info', value: 'info'}, {name: 'warn', value: 'warn'}, {name: 'error', value: 'error'}, {name: 'debug', value: 'debug'}],
            displayOptions: {
              show: {
                resource: ['platform logs'],
                operation: ['logs'],
              },
            },
            routing: {
              request: {
                qs: {
                  'level': '={{$value}}',
                },
              },
            },
          },
      {
            displayName: 'Filter by log category',
            name: 'category',
            type: 'string',
            required: false,
            default: "",
            options: [{name: 'connection', value: 'connection'}, {name: 'webhook', value: 'webhook'}, {name: 'message', value: 'message'}, {name: 'error', value: 'error'}, {name: 'auth', value: 'auth'}, {name: 'general', value: 'general'}],
            displayOptions: {
              show: {
                resource: ['platform logs'],
                operation: ['logs'],
              },
            },
            routing: {
              request: {
                qs: {
                  'category': '={{$value}}',
                },
              },
            },
          },
      {
            displayName: 'Filter logs after this date (ISO 8601)',
            name: 'startDate',
            type: 'string',
            required: false,
            default: "",
            
            displayOptions: {
              show: {
                resource: ['platform logs'],
                operation: ['logs'],
              },
            },
            routing: {
              request: {
                qs: {
                  'startDate': '={{$value}}',
                },
              },
            },
          },
      {
            displayName: 'Filter logs before this date (ISO 8601)',
            name: 'endDate',
            type: 'string',
            required: false,
            default: "",
            
            displayOptions: {
              show: {
                resource: ['platform logs'],
                operation: ['logs'],
              },
            },
            routing: {
              request: {
                qs: {
                  'endDate': '={{$value}}',
                },
              },
            },
          },
      {
            displayName: 'Number of logs to return (1-1000)',
            name: 'limit',
            type: 'number',
            required: false,
            default: "100",
            
            displayOptions: {
              show: {
                resource: ['platform logs'],
                operation: ['logs'],
              },
            },
            routing: {
              request: {
                qs: {
                  'limit': '={{$value}}',
                },
              },
            },
          },
      {
            displayName: 'Number of logs to skip',
            name: 'offset',
            type: 'number',
            required: false,
            default: "",
            
            displayOptions: {
              show: {
                resource: ['platform logs'],
                operation: ['logs'],
              },
            },
            routing: {
              request: {
                qs: {
                  'offset': '={{$value}}',
                },
              },
            },
          },
      {
          displayName: 'Slug',
          name: 'slug',
          type: 'string',
          required: true,
          default: '',
          description: 'slug parameter',
          displayOptions: {
            show: {
              resource: ['platform logs'],
              operation: ['logs'],
            },
          },
        },
      {
          displayName: 'PlatformId',
          name: 'platformId',
          type: 'string',
          required: true,
          default: '',
          description: 'platformId parameter',
          displayOptions: {
            show: {
              resource: ['platform logs'],
              operation: ['logs'],
            },
          },
        },
      {
          displayName: 'Slug',
          name: 'slug',
          type: 'string',
          required: true,
          default: '',
          description: 'slug parameter',
          displayOptions: {
            show: {
              resource: ['platform logs'],
              operation: ['logs'],
            },
          },
        }
    ],
  };
}
