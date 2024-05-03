import { Module, DynamicModule } from "@nestjs/common";
import { SecretsService } from "./secrets.service";
import * as fs from "fs";
import * as path from "path";

@Module({})
export class SecretsRootModule {
  static register(
    preload?: boolean,
    local_config_file_name?: string,
  ): DynamicModule {
    if (preload && local_config_file_name && !process.env.ENVIRONMENT) {
      try {
        const config = JSON.parse(
          fs
            .readFileSync(path.resolve(".", local_config_file_name))
            .toString() as any,
        );

        for (const secret in config) {
          process.env[`${secret}`] = config[secret];
        }
      } catch (err) {
        console.error(
          "Could not load secrets from file into environment.",
          err,
        );
      }
    }

    return {
      module: SecretsRootModule,
      providers: [SecretsService],
      exports: [SecretsService],
      global: true,
    };
  }
}
