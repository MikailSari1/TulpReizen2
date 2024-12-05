import {Logger, Module} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {DestinationModule, GuideModule} from "@TulpReizen2/backend/features";
import {MongooseModule} from "@nestjs/mongoose";
import {environment} from "@TulpReizen2/shared/util-env";

@Module({
  imports: [DestinationModule, GuideModule,
    MongooseModule.forRoot(environment.MONGO_DB_CONNECTION_STRING, {
      connectionFactory: (connection) => {
        connection.on('connected', () => {
          // console.log('is connected');
          Logger.verbose(
            `Mongoose db connected to ${environment.MONGO_DB_CONNECTION_STRING}`
          );
        });
        connection._events.connected();
        return connection;
      }
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
