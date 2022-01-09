import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType('model', { isAbstract: true })
export class Model {
  @Field((_) => Int)
  id: number;

  @Field((_) => Date)
  createdAt: Date;

  @Field((_) => Date)
  updatedAt: Date;

  @Field((_) => Date, { nullable: true })
  deletedAt?: Date | null;
}
