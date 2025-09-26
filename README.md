# n8n-nodes-gatekit

n8n community node for [GateKit](https://gatekit.dev) - Universal messaging gateway that provides a single API to send messages across multiple platforms.

## Installation

```bash
npm install n8n-nodes-gatekit
```

## Configuration

1. **Get your GateKit API key** from your project dashboard
2. **Add GateKit credentials** in n8n:
   - API URL: `https://api.gatekit.dev`
   - API Key: Your project API key
   - Project Slug: Your project identifier

## Supported Operations

- **projects create**: Create a new project
- **projects list**: List all projects
- **platforms create**: Configure a new platform integration
- **platforms list**: List configured platforms for project
- **platforms get**: Get platform configuration details
- **platforms update**: Update platform configuration
- **platforms delete**: Remove platform configuration
- **platforms register-webhook**: Register webhook URL with platform provider
- **messages list**: List received messages for a project
- **messages stats**: Get message statistics for a project
- **messages get**: Get a specific message by ID
- **messages cleanup**: Delete messages older than specified days
- **messages send**: Send a message to platforms
- **messages status**: Check message delivery status
- **messages retry**: Retry a failed message
- **messages sent**: List sent messages for a project
- **keys create**: Generate a new API key
- **keys list**: List all API keys for project
- **keys revoke**: Revoke an API key
- **keys roll**: Roll an API key (generate new key, revoke old after 24h)

## Usage Examples

### Send Message to Discord
1. Select **Resource**: Messages
2. Select **Operation**: Send
3. Configure **Targets**: `[{"platformId": "discord-bot-id", "type": "channel", "id": "channel-id"}]`
4. Set **Content**: `{"text": "Hello from n8n!"}`

### Create New Project
1. Select **Resource**: Projects
2. Select **Operation**: Create
3. Set **Name**: "My n8n Project"
4. Choose **Environment**: development/staging/production

### List Platforms
1. Select **Resource**: Platforms
2. Select **Operation**: List
3. View all configured messaging platforms

## Features

- **Universal messaging** - Send to Discord, Telegram, Slack, WhatsApp, and more
- **Complete API coverage** - All GateKit operations available in n8n
- **Always up-to-date** - Automatically synced with latest GateKit API
- **Enterprise-ready** - Full authentication and permission support

## Support

- 📖 [GateKit Documentation](https://docs.gatekit.dev)
- 💬 [Discord Community](https://discord.gg/gatekit)
- 🐛 [Report Issues](https://github.com/gatekit/n8n-nodes-gatekit/issues)

---

**GateKit** - Universal messaging gateway for modern applications.
