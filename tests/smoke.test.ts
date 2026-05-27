import { describe, expect, it } from "vitest";

import { Configuration, DifferencesApi, ProductsApi } from "../src/index.js";

describe("sdk smoke test", () => {
  it("exposes Configuration and apis", () => {
    const config = new Configuration({
      apiKey: "test-key",
      basePath: "https://example.invalid",
    });

    expect(config).toBeInstanceOf(Configuration);
    expect(config.basePath).toBe("https://example.invalid");

    const differencesApi = new DifferencesApi(config);
    const productsApi = new ProductsApi(config);

    expect(differencesApi).toBeInstanceOf(DifferencesApi);
    expect(productsApi).toBeInstanceOf(ProductsApi);
  });
});
