import { Module } from '@nestjs/common';
import { UsersResolver } from './users.resolver';
import { UsersService } from './usres.service';

@Module({
  providers: [UsersResolver, UsersService],
})
export class UsersModule {}
