// @flow

import { Repository } from '~/domains/abstractions/repository/constructor';
import { processService } from '~/domains/abstractions/process';
import { toolService } from '~/domains/entities/tool';
import { api } from '~/domains/app/api-client';

import type { Tool } from '~/domains/entities/tool/constructor';

const getDefaultData = (): Tool[] => {
  return [];
};

class ToolRepository extends Repository<Tool> {
  constructor() {
    super(getDefaultData());
  }

  getTools = async (query): Promise<Tool[]> => {
    const tools = await api.tool.getTools(query);

    this.addEntities(
      tools.map((tool) =>
        toolService.createTool({
          id: tool.id,
          processState: processService.createProcess({
            title: 'Tool fetching',
            state: {
              status: 'success',
              result: tool,
            },
          }),
        }),
      ),
    );

    return tools;
  };

  getTool = async (query): Promise<Tool> => {
    const tool = await api.tool.getTool(query);

    this.addEntities([
      toolService.createTool({
        id: tool.id,
        processState: processService.createProcess({
          title: 'Tool fetching',
          state: {
            status: 'success',
            result: tool,
          },
        }),
      }),
    ]);

    return tool;
  };
}

export const toolRepository = new ToolRepository();
