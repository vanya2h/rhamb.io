// @flow

import { useEffect, useState } from 'react';
import { toolRepository } from '~/domains/repositories/tool';
import { toolService } from '~/domains/entities/tool';
import { useObserver } from 'mobx-react-lite';

export const useTool = (toolId) => {
  return useObserver(() => {
    const [tool, setTool] = useState();

    const toolFromRepository = toolRepository.getEntities(
      (tool) => tool.id === toolId,
    )[0];

    useEffect(() => {
      if (toolFromRepository) {
        setTool(toolFromRepository);
      } else {
        const createdTool = toolService.createTool({
          id: toolId,
        });

        createdTool.fetch().then(() => {
          toolRepository.addElements([createdTool]);
        });
      }
    }, [toolFromRepository, toolId]);

    const isHydrating = tool && tool.process.state.status === 'processing';
    const error = tool && tool.process.state.error;

    return [tool, error, isHydrating];
  });
};
