import {
  IAuthenticateGeneric,
  ICredentialType,
  INodeProperties,
} from 'n8n-workflow';

export class GateKitApi implements ICredentialType {
  name = 'GateKitApi';
  displayName = 'GateKit API';
  documentationUrl = 'https://docs.gatekit.dev/authentication';
  properties: INodeProperties[] = [
    {
      displayName: 'API URL',
      name: 'apiUrl',
      type: 'string',
      default: 'https://api.gatekit.dev',
      description: 'GateKit API base URL',
    },
    {
      displayName: 'API Key',
      name: 'apiKey',
      type: 'string',
      typeOptions: {
        password: true,
      },
      default: '',
      description: 'GateKit API key from your project dashboard',
    },
  ];

  authenticate = {
    type: 'generic',
    properties: {
      headers: {
        'X-API-Key': '={{$credentials.apiKey}}',
      },
    },
  } as IAuthenticateGeneric;
}
