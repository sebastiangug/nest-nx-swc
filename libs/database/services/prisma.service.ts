import { Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  /**  uncomment the constructor and bellow to check the raw queries*/

  // constructor() {
  //   super({
  //     log: [
  //       {
  //         emit: 'event',
  //         level: 'query',
  //       },
  //     ],
  //   });
  // }

  async onModuleInit() {
    await this.$connect();

    /**  uncomment bellow and the constructor to check the raw queries*/

    // // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // // @ts-ignore
    // this.$on('query', async (e) => {
    //   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //   // @ts-ignore
    //   console.log(`${e.query} ${e.params}`);
    // });
  }

  async enableShutdownHooks(app) {
    process.on("beforeExit", async () => {
      await app.close();
    });
  }
}
