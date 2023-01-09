import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TenantsModule } from './modules/public/tenants/tenants.module';
import { TenancyModule } from './modules/tenancy/tenancy.module';
import { OrderModule } from './modules/tenanted/order/order.module';

import * as ormconfig from './orm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'gagansoni',
      password: 'root',
      database: 'nestjs-multi-tenants',
      autoLoadEntities: true,
    }),
    TypeOrmModule.forRoot(ormconfig),
    TenantsModule,
    TenancyModule,
    OrderModule,
  ],
})
export class AppModule {}
