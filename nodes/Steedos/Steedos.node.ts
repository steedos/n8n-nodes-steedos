import { INodeType, INodeTypeDescription } from 'n8n-workflow';
import { recordFields, recordOperations } from './RecordDescription';

export class Steedos implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Steedos',
		name: 'steedos',
		icon: 'file:steedos.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with Steedos API',
		defaults: {
			name: 'Steedos',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'steedosApi',
				required: false,
			},
		],
		requestDefaults: {
			baseURL: 'https://demo.steedos.cn',
			url: '',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		/**
		 * In the properties array we have two mandatory options objects required
		 *
		 * [Resource & Operation]
		 *
		 * https://docs.n8n.io/integrations/creating-nodes/code/create-first-node/#resources-and-operations
		 *
		 * In our example, the operations are separated into their own file (HTTPVerbDescription.ts)
		 * to keep this class easy to read.
		 *
		 */
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'HTTP Verb',
						value: 'httpVerb',
					},
				],
				default: 'httpVerb',
			},

			...recordOperations,
			...recordFields,
		],
	};
}
