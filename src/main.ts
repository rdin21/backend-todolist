import { AppModule } from './app.module';
import { NestFactory } from "@nestjs/core";
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger'
import { ValidationPipe } from './pipe/validation.pipe';


async function start() {
    const PORT = process.env.PORT || 3003;
    const app = await NestFactory.create(AppModule)

    const config = new DocumentBuilder()
        .setTitle("Todo NestJs App")
        .setDescription("Description Todo List App")
        .setVersion('0.0.0')
        .addTag("Todo")
        .build()
    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('/api/docs', app, document)

    app.useGlobalPipes(new ValidationPipe())

    await app.listen(PORT, () => console.log(`SERVER STARTED ON ${PORT}`)
    )
}

start()