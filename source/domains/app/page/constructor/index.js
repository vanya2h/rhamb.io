// @flow

import { observable } from 'mobx';
import type { PageKey } from '~/domains/app/page/types';

export class Page {
  @observable
  title: String;

  @observable
  key: PageKey;

  @observable
  url: String;

  constructor({
    title,
    key,
    url,
  }: {
    title: String,
    key: PageKey,
    url: String,
  }) {
    this.title = title;
    this.key = key;
    this.url = url;
  }
}
