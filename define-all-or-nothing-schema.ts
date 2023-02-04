import { z, ZodType } from "zod";

export function defineAllOrNothingSchema<T extends Record<string, ZodType>>(
  objectWithAllProperties: T
) {
  const allProperties = z.object(objectWithAllProperties);
  const objectWithNoneOfTheProperties = Object.keys(
    objectWithAllProperties
  ).reduce(
    (prev, key) => ({ ...prev, [key]: z.undefined() }),
    {} as {
      [Key in keyof T]: z.ZodUndefined;
    }
  );
  const noneOfTheProperties = z.object(objectWithNoneOfTheProperties);

  return allProperties.or(noneOfTheProperties);
}

export function defineSchemaWithRequiredTuplesOfProperties<
  T extends Record<string, ZodType>,
  U extends Record<string, ZodType>
>(allOrNothingProperties: T, otherProperties: U) {
  const allOrNothingSchema = defineAllOrNothingSchema(allOrNothingProperties);
  const otherSchema = z.object(otherProperties);
  return otherSchema.and(allOrNothingSchema);
}
