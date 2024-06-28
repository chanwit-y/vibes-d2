import type { Drizzle } from "../db/connection";
import { AppInsightService } from "./app-insight";

describe("AppInsightService", () => {
  let userService: AppInsightService;
  let db: jest.Mocked<Drizzle | any>;

  beforeEach(() => {
    db = {
      insert: jest.fn().mockReturnThis(),
      values: jest.fn().mockReturnThis(),
      returning: jest.fn().mockReturnThis(),
    } as unknown as jest.Mocked<Drizzle>;;
    userService = new AppInsightService(db);
  });

  it("insert data to appInsight table", async () => {
    const mock = [
      {
        id: 1,
        name: "test",
        appId: "test",
        appKey: "test",
        created: "system",
      },
    ];
    db.returning.mockResolvedValue(mock as never);
    const result = await userService.insert(mock[0]);

    expect(result[0]).toEqual(mock[0]);

  });
});
