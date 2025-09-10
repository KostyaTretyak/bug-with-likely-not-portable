import '@ditsmod/core';
import { PostController } from './file3.js';

export function fn() {
  return PostController.prototype.listPosts;
}
