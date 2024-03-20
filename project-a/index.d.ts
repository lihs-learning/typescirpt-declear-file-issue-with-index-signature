interface FuncOpts {
  foo?: string;
  bar?: number;
  pro?: boolean;
  [key: string]: string | number | boolean;
}

export declare function func(opt: FuncOpts): void

