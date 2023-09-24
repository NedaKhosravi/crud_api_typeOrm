import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { FeedService } from '../services/feed.service';
import { FeedInterface } from '../models/post.interface';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';

@Controller('feed')
export class FeedController {
  constructor(private feedService: FeedService) {}

  @Post()
  create(@Body() feedPost: FeedInterface): Observable<FeedInterface> {
    return this.feedService.createPost(feedPost);
  }

  @Get()
  findAll(): Observable<FeedInterface[]> {
    return this.feedService.findAllPost();
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() feedPost: FeedInterface,
  ): Observable<UpdateResult> {
    return this.feedService.updatePost(id, feedPost);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Observable<DeleteResult> {
    return this.feedService.deletePost(id);
  }
}
