// @flow

import { observable, action } from 'mobx';
import { isDev } from '~/utils/is-dev';
import { logger } from '~/domains/app/logger';

import * as ProcessTypes from '~/domains/abstractions/process/types';

export class Process<Result> {
  @observable
  state: ProcessTypes.State<Result> = {
    status: 'idle',
  };

  title: string = 'unnamed';

  constructor({
    title,
    state,
  }: {
    title?: string,
    state?: ProcessTypes.State<Result>,
  }) {
    this.title = title;

    if (state) {
      if (isDev) {
        logger.logInfo(
          'process',
          `process ${this.title} injected initial state`,
          state,
        );
      }

      this.state = state;
    }
  }

  @action
  start = (): void => {
    if (isDev) {
      logger.logInfo('process', `process ${this.title} started`);
    }
    this.state = {
      status: 'processing',
    };
  };

  @action
  finish = (result: Result): void => {
    if (isDev) {
      logger.logInfo('process', `process ${this.title} finished with`, result);
    }
    this.state = {
      status: 'success',
      result,
    };
  };

  @action
  catch = (error: Error): void => {
    if (isDev) {
      logger.logError(`process ${this.title} failed`, error);
    }
    this.state = {
      error,
      status: 'failed',
    };
  };

  @action
  reset = (): void => {
    if (isDev) {
      logger.logInfo(`process ${this.title} resetted`, 'reset');
    }
    this.state = {
      status: 'idle',
    };
  };
}
