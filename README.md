# n8n-nodes-gatekit

n8n community node for GateKit - Universal messaging gateway.

> **Auto-generated from backend contracts** - Do not edit manually

## Installation

### In n8n (Recommended)

Add to your n8n instance's `package.json`:

```json
{
  "dependencies": {
    "n8n-nodes-gatekit": "latest"
  }
}
```

### For Development

```bash
npm install n8n-nodes-gatekit
```

## Features

- ✅ **Visual automation** - Drag-and-drop workflow builder
- ✅ **Auto-generated** - Always synced with GateKit API
- ✅ **300k+ n8n users** - Massive automation community
- ✅ **All operations** - Complete API coverage in visual format
- ✅ **Type-safe** - Full TypeScript support

## Available Operations

### Webhooks

- **webhooks create** - Create a new webhook for event notifications
- **webhooks list** - List all webhooks for a project
- **webhooks get** - Get a specific webhook with delivery statistics
- **webhooks update** - Update a webhook configuration
- **webhooks delete** - Delete a webhook
- **webhooks deliveries** - List webhook delivery attempts with filtering

### Members

- **members list** - List all members of a project
- **members add** - Add a member to a project
- **members update** - Update a member role in a project
- **members remove** - Remove a member from a project

### Projects

- **projects create** - Create a new project
- **projects list** - List all projects
- **projects get** - Get project details
- **projects update** - Update project name, description and settings
- **projects delete** - Delete a project

### Messages

- **messages list** - List received messages for a project
- **messages stats** - Get message statistics for a project
- **messages get** - Get a specific message by ID
- **messages cleanup** - Delete messages older than specified days
- **messages send** - Send a message to platforms
- **messages status** - Check message delivery status
- **messages retry** - Retry a failed message
- **messages sent** - List sent messages for a project
- **messages react** - Add a reaction to a message
- **messages unreact** - Remove a reaction from a message

### Platforms

- **platforms create** - Configure a new platform integration
- **platforms list** - List configured platforms for project
- **platforms get** - Get platform configuration details
- **platforms update** - Update platform configuration
- **platforms delete** - Remove platform configuration
- **platforms register-webhook** - Register webhook URL with platform provider
- **platforms qr-code** - Get QR code for WhatsApp authentication
- **platforms supported** - List supported platforms with credential requirements

### Identities

- **identities create** - Create a new identity with platform aliases
- **identities list** - List all identities for a project
- **identities lookup** - Lookup identity by platform user ID
- **identities get** - Get a specific identity by ID
- **identities update** - Update identity metadata (display name, email, metadata)
- **identities add-alias** - Add a platform alias to an existing identity
- **identities remove-alias** - Remove a platform alias from an identity
- **identities delete** - Delete an identity and all its aliases
- **identities messages** - Get all messages for an identity (across all linked platform accounts)
- **identities reactions** - Get all reactions for an identity (across all linked platform accounts)

### Auth

- **auth whoami** - Get current authentication context and permissions

### ApiKeys

- **keys create** - Generate a new API key
- **keys list** - List all API keys for project
- **keys revoke** - Revoke an API key
- **keys roll** - Roll an API key (generate new key, revoke old after 24h)

### Platform Logs

- **platforms logs list** - List platform processing logs for a project
- **platforms logs get** - List logs for a specific platform configuration
- **platforms logs stats** - Get platform logs statistics and recent errors

## Configuration

### Credentials

The node requires GateKit API credentials:

1. **API URL**: Your GateKit API endpoint (e.g., `https://api.gatekit.dev`)
2. **API Key**: Your GateKit API key (starts with `gk_`)

### Setting up Credentials in n8n

1. Go to **Credentials** in n8n
2. Click **New Credential**
3. Search for "GateKit"
4. Fill in:
   - **API URL**: `https://api.gatekit.dev`
   - **API Key**: Your API key from GateKit dashboard

## Usage Examples

### Send Message Workflow

1. Add **GateKit** node
2. Select **Messages** resource
3. Select **Send** operation
4. Configure:
   - **Project ID**: Your project identifier
   - **Targets**: Platform users to message
   - **Content**: Message text and attachments

### Platform Management

1. Add **GateKit** node
2. Select **Platforms** resource
3. Choose operation (Create, List, Update, Delete)
4. Configure platform-specific credentials

## Why n8n + GateKit?

- **No-code automation** - Build workflows without programming
- **Multi-platform messaging** - Discord, Telegram, WhatsApp in one node
- **Event-driven** - Trigger messages from any n8n event
- **Scale easily** - Handle thousands of messages with queues

## Links

- [n8n Community Nodes](https://www.npmjs.com/package/n8n-nodes-gatekit)
- [GateKit Documentation](https://docs.gatekit.dev)
- [GitHub](https://github.com/filipexyz/n8n-nodes-gatekit)
- [Discord Community](https://discord.gg/bQPsvycW)

## License

MIT
