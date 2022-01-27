import { createParamDecorator, ExecutionContext, HttpException, HttpStatus } from "@nestjs/common";
import * as jwt from 'jsonwebtoken'
export const CheckUser = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest()
    
    const token = req.headers.authorization ? (req.headers.authorization as string).split(' ') : null;
    if (token) {
        const decoded: any = jwt.verify(token[1], 'SECRET');
        return decoded
    } else {
        throw new HttpException('Not authorized.', HttpStatus.UNAUTHORIZED);
    }
    
}) 