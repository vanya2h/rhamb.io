// @flow

import { observable, action, computed } from 'mobx';
import { Entity } from '~/domains/abstractions/entity/constructor';

export class Repository<Shape> {
  @observable
  entities: Entity<Shape>[];

  constructor(initialState: Entity<Shape>[]) {
    this.entities = initialState;
  }

  @computed
  get rawEntities(): Shape[] {
    return this.entities.map((element) => element.data);
  }

  has = (id: string): boolean => {
    return !!this.entities.find((element) => element.id === id);
  };

  @action
  addEntities = (entities: Entity<Shape>[]) => {
    this.entities = [...this.entities, ...entities];
  };

  @action
  removeEntities = (criteria: (element: Entity<Shape>) => boolean) => {
    this.entities = this.entities.filter(criteria);
  };

  getEntities = (
    query: (element: Entity<Shape>) => boolean,
  ): Entity<Shape>[] => {
    return this.entities.filter(query);
  };
}
