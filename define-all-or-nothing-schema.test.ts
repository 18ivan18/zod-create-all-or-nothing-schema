import { z } from "zod";
import { defineSchemaWithRequiredTuplesOfProperties } from "./define-all-or-nothing-schema";

const StoreSchema = defineSchemaWithRequiredTuplesOfProperties(
  { openingHours: z.date(), closingHours: z.date() },
  { storeId: z.string() }
);

type Store = z.infer<typeof StoreSchema>;

describe("All or nothing schema", () => {
  it("successfully parses schema with none of the all-or-nothing-properties", () => {
    const parse = StoreSchema.safeParse({
      storeId: "1500000364",
    });
    expect(parse.success).toEqual(true);
  });

  it("successfully parses schema with all of the all-or-nothing-properties", () => {
    const parse = StoreSchema.safeParse({
      storeId: "1500000364",
      openingHours: new Date(),
      closingHours: new Date(),
    });
    expect(parse.success).toEqual(true);
  });

  it("fails to parse schema with some of the all-or-nothing-properties", () => {
    const parse = StoreSchema.safeParse({
      storeId: "1500000364",
      openingHours: new Date(),
    });
    expect(parse.success).toEqual(false);
  });
});
