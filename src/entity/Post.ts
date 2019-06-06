import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('posts')
class Post {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ type: 'string', length: 50})
  public title: string;

  @Column({ type: 'text'})
  public content: string;
}

export default Post;
