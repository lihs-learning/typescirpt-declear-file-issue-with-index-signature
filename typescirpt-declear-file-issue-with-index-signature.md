In project-a has a index.d.ts. It contains a interface with index signature like this:

```typescirpt
interface FuncOpts {
  foo?: string;
  bar?: number;
  pro?: boolean;
  [key: string]: string | number | boolean;
}
```

In project-b, which depends project-a, when run `tsc`, will get the errors:

```
../project-a/index.d.ts:2:3 - error TS2411: Property 'foo' of type 'string | undefined' is not assignable to 'string' index type 'string | number | boolean'.

2   foo?: string;
    ~~~

../project-a/index.d.ts:3:3 - error TS2411: Property 'bar' of type 'number | undefined' is not assignable to 'string' index type 'string | number | boolean'.

3   bar?: number;
    ~~~

../project-a/index.d.ts:4:3 - error TS2411: Property 'pro' of type 'boolean | undefined' is not assi
gnable to 'string' index type 'string | number | boolean'.

4   pro?: boolean;
    ~~~


Found 3 errors in the same file, starting at: ../project-a/index.d.ts:2
```