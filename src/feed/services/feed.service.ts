import { Injectable } from '@nestjs/common';
import { FeedPostEntity } from '../models/post.entity';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Observable, from } from 'rxjs';
import { FeedInterface } from '../models/post.interface';

@Injectable()
export class FeedService {
  constructor(
    @InjectRepository(FeedPostEntity)
    private readonly feedPostRepository: Repository<FeedPostEntity>,
  ) {}

  createPost(feedPost: FeedInterface): Observable<FeedInterface> {
    return from(this.feedPostRepository.save(feedPost));
  }

  findAllPost(): Observable<FeedInterface[]> {
    return from(this.feedPostRepository.find());
  }

  updatePost(id: number, feedPost: FeedInterface): Observable<UpdateResult> {
    return from(this.feedPostRepository.update(id, feedPost));
  }

  deletePost(id: number): Observable<DeleteResult> {
    return from(this.feedPostRepository.delete(id));
  }
}
