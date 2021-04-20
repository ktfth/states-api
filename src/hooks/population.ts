// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
import { Hook, HookContext } from '@feathersjs/feathers';

import got from 'got';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (options = {}): Hook => {
  return async (context: HookContext): Promise<HookContext> => {
		try {
			const response = await got(`http://localhost:3031/v1/population`);
			const population = JSON.parse(response.body);
			context.result.data = context.result.data.map((d: any) => {
				population.data.forEach((p: any) => {
					if (p.uf === d.uf) {
						d.population = p.population;
					} else if (d.population === undefined) {
						d.population = 0;
					}
				});
				return d;
			});
		} catch (err) {
			context.result.data = context.result.data.map((d: any) => {
				d.population = 0;
				return d;
			});
		}
    return context;
  };
};
