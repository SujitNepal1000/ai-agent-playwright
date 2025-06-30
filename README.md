# ai-agent-playwright
This is a test ai agent create for playwright MCP server
Here i am using playwright-mpc server from the microsoft. To integrate the playwright mcp server you can look into the json configuration file available on the offical site or the github repo: https://github.com/microsoft/playwright-mcp  of the playwright mcp server.

At first we need to setup MCP server for that we can use any ide, VScode, cursor etc. For this i am using cursor due to it's inbuild ai features.

1. At first we need to setup the MPC server we can do that by going to cursor setting -> preferences -> cursor setting -> MPC -> Click on add new global MPC server -> then paste the json configuration:

{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": [
        "@playwright/mcp@latest"
      ]
    }
  }
}

start mpc server: npx @playwright/mcp@latest
