import { db, type Drizzle } from "../db/connection";
import { appInsights, type AppInsightsInsert } from "../db/schema";

export class AppInsightService {
  constructor(private db: Drizzle) {}

  public async findAll() {
    return await this.db.select().from(appInsights).all();
  }
  public async insert(data: AppInsightsInsert) {
      return await this.db.insert(appInsights).values(data).returning();
  }
}

export default new AppInsightService(db);
