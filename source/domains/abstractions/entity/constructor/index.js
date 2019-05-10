// @flow

import { observable, action, computed } from 'mobx';
import { processService } from '~/domains/abstractions/process';

import type { Process } from '~/domains/abstractions/process/constructor';

export class Entity<Shape> {
  @observable
  process: Process<Shape> = processService.createProcess<Shape>({
    title: 'Fetching',
  });

  @observable
  loader: () => Promise<Shape> = null;

  @observable
  id: string;

  constructor({
    processState,
    loader,
    id,
  }: {
    id: string,
    processState?: Process<Shape>,
    loader: () => Promise<Shape>,
  }) {
    if (processState) {
      this.process = processState;
    }
    this.loader = loader;
    this.id = id;
  }

  @computed
  get data(): Shape {
    return this.process.state.result;
  }

  @action
  fetch = (): Promise<Shape> => {
    try {
      this.process.start();

      return this.loader().then((data) => {
        this.process.finish(data);
        return data;
      });
    } catch (error) {
      this.process.catch(error);
      throw error;
    }
  };
}
