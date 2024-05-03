import { Injectable } from "@nestjs/common";
import { Secret } from "./secrets";

@Injectable()
export class SecretsService {
  /** retrieves a secret */
  public get(key: Secret): string {
    const secret = process.env[`${key.toString()}`];
    // throwing an error if we didn't find that secret anywhere
    if (!secret) {
      throw new Error(
        `Could not find secret value for ${key.toString()}. This has caused app initialisation to fail.`,
      );
    }

    return secret;
  }

  /** checkes whether a secret exists */
  public exists(key: Secret): boolean {
    return process.env[`${key.toString()}`] ? true : false;
  }
}
