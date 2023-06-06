# n8n-nodes-steedos
The Steedos node allows you to automate work in Steedos, and integrate Steedos with other applications. 

## Getting Started

1. Install n8n using npm:

```sh
npm install n8n -g
```

When you are ready to test your node, publish it locally:

2. In your node directory

```sh
npm run build
npm link
```

Install the node into your local n8n instance:


3. In the nodes directory within your n8n installation

```sh
cd ~/.n8n/nodes/
npm link n8n-nodes-steedos
```

Check your directory

> Make sure you run npm link n8n-nodes-steedos in the nodes directory within your n8n installation. This is probably something like ~/.n8n/nodes/

Start n8n:

```sh
n8n start
```
