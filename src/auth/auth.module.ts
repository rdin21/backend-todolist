import { AuthMiddleware } from './auth.middleware';
import { UserModule } from './../user/user.module';
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
    controllers: [AuthController],
    providers: [AuthService],
    imports: [
        UserModule,
        JwtModule.register({
            secret: 'SECRET',
            signOptions: {
                expiresIn: '72h',
            },
        }),
    ],
    // exports: [AppService, JwtModule]
})
export class AuthModule implements NestModule {
    public configure(consumer: MiddlewareConsumer) {
        consumer.apply(AuthMiddleware).forRoutes({ path: 'auth/auth', method: RequestMethod.GET });
    }
}
