import { Injectable } from "@nestjs/common";
import { AppConfig } from "./configs";
@Injectable()
export class ConfigService {
  private configs: AppConfig = new AppConfig();

  public get(key: keyof AppConfig): AppConfig {
    return this.configs[key as string];
  }
}
