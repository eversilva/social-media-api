import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Post {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field()
  text: string;

  @Field({ nullable: true })
  image_src?: string;
}
