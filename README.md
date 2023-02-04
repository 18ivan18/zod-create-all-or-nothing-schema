# Define all or nothing zod schema
This is a minimal working example of a function that defines zod schema that requires either all of the properties provided or none of them.
It's called `defineAllOrNothingSchema` and takes in an object as argument.

## But there's a bug
Everything seems to work when testing. The types get infered correctly and the schemas parse correctly.
```
npm i
npm run test
```
The problem is when we build typesript. The produced type is wrong.

## How to reproduce
```
npm i
npm run build
```

## What's the output
This is the produced output in the file `lib/typedefs/define-all-or-nothing-schema.d.ts`

```
import { z, ZodType } from "zod";
export declare function defineAllOrNothingSchema<
  T extends Record<string, ZodType>
>(
  objectWithAllProperties: T
): z.ZodUnion<
  [
    z.ZodObject<
      T,
      "strip",
      z.ZodTypeAny,
      z.objectUtil.addQuestionMarks<{
        [k_2 in keyof T]: T[k_2]["_output"];
      }> extends infer T_1
        ? {
            [k_1 in keyof T_1]: z.objectUtil.addQuestionMarks<{
              [k in keyof T]: T[k]["_output"];
            }>[k_1];
          }
        : never,
      z.objectUtil.addQuestionMarks<{
        [k_2_1 in keyof T]: T[k_2_1]["_input"];
      }> extends infer T_2
        ? {
            [k_3 in keyof T_2]: z.objectUtil.addQuestionMarks<{
              [k_2 in keyof T]: T[k_2]["_input"];
            }>[k_3];
          }
        : never
    >,
    z.ZodObject<
      { [Key in keyof T]: z.ZodUndefined },
      "strip",
      z.ZodTypeAny,
      z.objectUtil.addQuestionMarks<
        {
          [Key in keyof T]: z.ZodUndefined;
        } extends infer T_5 extends z.ZodRawShape
          ? {
              [k_5 in keyof T_5]: {
                [Key in keyof T]: z.ZodUndefined;
              }[k_5]["_output"];
            }
          : never
      > extends infer T_3
        ? {
            [k_1_1 in keyof T_3]: z.objectUtil.addQuestionMarks<
              {
                [Key in keyof T]: z.ZodUndefined;
              } extends infer T_4 extends z.ZodRawShape
                ? {
                    [k_4 in keyof T_4]: {
                      [Key in keyof T]: z.ZodUndefined;
                    }[k_4]["_output"];
                  }
                : never
            >[k_1_1];
          }
        : never,
      z.objectUtil.addQuestionMarks<
        {
          [Key in keyof T]: z.ZodUndefined;
        } extends infer T_8 extends z.ZodRawShape
          ? {
              [k_2_3 in keyof T_8]: {
                [Key in keyof T]: z.ZodUndefined;
              }[k_2_3]["_input"];
            }
          : never
      > extends infer T_6
        ? {
            [k_3_1 in keyof T_6]: z.objectUtil.addQuestionMarks<
              {
                [Key in keyof T]: z.ZodUndefined;
              } extends infer T_7 extends z.ZodRawShape
                ? {
                    [k_2_2 in keyof T_7]: {
                      [Key in keyof T]: z.ZodUndefined;
                    }[k_2_2]["_input"];
                  }
                : never
            >[k_3_1];
          }
        : never
    >
  ]
>;
export declare function defineSchemaWithRequiredTuplesOfProperties<
  T extends Record<string, ZodType>,
  U extends Record<string, ZodType>
>(
  allOrNothingProperties: T,
  otherProperties: U
): z.ZodIntersection<
  z.ZodObject<
    U,
    "strip",
    z.ZodTypeAny,
    z.objectUtil.addQuestionMarks<{
      [k_2 in keyof U]: U[k_2]["_output"];
    }> extends infer T_1
      ? {
          [k_1 in keyof T_1]: z.objectUtil.addQuestionMarks<{
            [k in keyof U]: U[k]["_output"];
          }>[k_1];
        }
      : never,
    z.objectUtil.addQuestionMarks<{
      [k_2_1 in keyof U]: U[k_2_1]["_input"];
    }> extends infer T_2
      ? {
          [k_3 in keyof T_2]: z.objectUtil.addQuestionMarks<{
            [k_2 in keyof U]: U[k_2]["_input"];
          }>[k_3];
        }
      : never
  >,
  z.ZodUnion<
    [
      z.ZodObject<
        T,
        "strip",
        z.ZodTypeAny,
        z.objectUtil.addQuestionMarks<{
          [k_5 in keyof T]: T[k_5]["_output"];
        }> extends infer T_3
          ? {
              [k_1_1 in keyof T_3]: z.objectUtil.addQuestionMarks<{
                [k_4 in keyof T]: T[k_4]["_output"];
              }>[k_1_1];
            }
          : never,
        z.objectUtil.addQuestionMarks<{
          [k_2_3 in keyof T]: T[k_2_3]["_input"];
        }> extends infer T_4
          ? {
              [k_3_1 in keyof T_4]: z.objectUtil.addQuestionMarks<{
                [k_2_2 in keyof T]: T[k_2_2]["_input"];
              }>[k_3_1];
            }
          : never
      >,
      z.ZodObject<
        { [Key in keyof T]: z.ZodUndefined },
        "strip",
        z.ZodTypeAny,
        z.objectUtil.addQuestionMarks<
          {
            [Key in keyof T]: z.ZodUndefined;
          } extends infer T_7 extends z.ZodRawShape
            ? {
                [k_7 in keyof T_7]: {
                  [Key in keyof T]: z.ZodUndefined;
                }[k_7]["_output"];
              }
            : never
        > extends infer T_5
          ? {
              [k_1_2 in keyof T_5]: z.objectUtil.addQuestionMarks<
                {
                  [Key in keyof T]: z.ZodUndefined;
                } extends infer T_6 extends z.ZodRawShape
                  ? {
                      [k_6 in keyof T_6]: {
                        [Key in keyof T]: z.ZodUndefined;
                      }[k_6]["_output"];
                    }
                  : never
              >[k_1_2];
            }
          : never,
        z.objectUtil.addQuestionMarks<
          {
            [Key in keyof T]: z.ZodUndefined;
          } extends infer T_10 extends z.ZodRawShape
            ? {
                [k_2_5 in keyof T_10]: {
                  [Key in keyof T]: z.ZodUndefined;
                }[k_2_5]["_input"];
              }
            : never
        > extends infer T_8
          ? {
              [k_3_2 in keyof T_8]: z.objectUtil.addQuestionMarks<
                {
                  [Key in keyof T]: z.ZodUndefined;
                } extends infer T_9 extends z.ZodRawShape
                  ? {
                      [k_2_4 in keyof T_9]: {
                        [Key in keyof T]: z.ZodUndefined;
                      }[k_2_4]["_input"];
                    }
                  : never
              >[k_3_2];
            }
          : never
      >
    ]
  >
>;

```

and the errors:

`Type 'k_1' cannot be used to index type 'addQuestionMarks<{ [k in keyof T]: T[k]["_output"]; }>'.` at line 17

`Type 'k_3' cannot be used to index type 'addQuestionMarks<{ [k_2 in keyof T]: T[k_2]["_input"]; }>'.` line 26 
and so on.