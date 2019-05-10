// @flow

import { observable, computed, action } from 'mobx';
import { processService } from '~/domains/abstractions/process';
import { Process } from '~/domains/abstractions/process/constructor';
import { wait } from '~/utils/wait';

type Props = {
  entities: string[],
  loader: () => Promise<string[]>,
};

export class List {
  @observable
  loaderProcess: Process<void> = processService.createProcess({
    title: 'List fetching',
  });

  @observable
  loader: () => Promise<string[]>;

  constructor(props: Props) {
    this.entities = props.entities || [];
    this.loader = props.loader;
  }

  @computed
  get length() {
    return this.entities.length;
  }

  @action
  fetch = async (options: { delay: number } = {}): Promise<string[]> => {
    this.loaderProcess.start();

    try {
      const ids = await this.loader(this.length);

      if (options.delay) {
        await wait(options.delay);
      }

      this.entities = [...this.entities, ...ids];
      this.loaderProcess.finish();

      return this.entities;
    } catch (error) {
      this.loaderProcess.catch(error);
    }
  };
}
