// @flow

export type Status = 'idle' | 'processing' | 'failed' | 'success';

export type State<Result> =
  | {|
      status: 'idle',
    |}
  | {|
      status: 'processing',
    |}
  | {|
      status: 'processing',
      result: ?Result,
    |}
  | {|
      status: 'failed',
      error: Error,
    |};
