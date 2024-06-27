import appInsightSrv from './app-insight'
import { v4 as uuid } from "uuid";

describe('AppInsightService', () => {
	// const appInsightSrv	
	it('insert data to appInsight table', async () => {
		const result = await appInsightSrv.insert({
			id: 1,
			name: 'test',
			appId: 'test',
			appKey: 'test',
			created: 'system'	
		})
	})
})