## How to check type for index.d.ts?

### Recurrence

```shell
cd project-a
yarn
yarn check-type
yarn link
```

```shell
cd project-b
yarn
yarn link project-a
yarn build
```

### Actual

Output of project-a shows everything is ok.

Output of project-b shows errors:

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

### Expect

Output of project-a shows the same errors of project-b.

