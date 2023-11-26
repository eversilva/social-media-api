import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreatePostInput {
  @Field()
  name: string;

  @Field()
  text: string;

  @Field({ nullable: true })
  image_src?: string;
}
