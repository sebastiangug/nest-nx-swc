import { INestApplication } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { Request, Response } from "express";
import { MonolithModule } from "./monolith.module";

const getApp = async (): Promise<INestApplication> => {
  const app = await NestFactory.create(MonolithModule, { cors: true });

  app.use("/health", (req: Request, res: Response) => {
    return res.status(200).send();
  });

  return app;
};

async function bootstrap(): Promise<void> {
  const app = await getApp();
  const PORT = process.env.PORT ?? 3000;
  await app.listen(PORT).then(() => {
    console.log("Monolith listening on port " + PORT);
  });
}
bootstrap();
