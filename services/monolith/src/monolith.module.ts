import { Module } from "@nestjs/common";
import { ConfigModule } from "../../../libs/config/config.module";
import { SecretsModule } from "../../../libs/secrets/secrets.module";

@Module({ imports: [SecretsModule, ConfigModule] })
export class MonolithModule {}
