import { Command, CommandRunner } from 'nest-commander';
import { Injectable } from '@nestjs/common';

import { BiosService } from '../../src/bios/bios.service';

@Injectable()
@Command({ name: 'createBio', description: 'Create a bio' })
export class CreateBioCommand extends CommandRunner {
  constructor(private biosService: BiosService) {
    super();
  }

  async run(): Promise<void> {
    await this.createBio();
  }

  async createBio(): Promise<void> {
    await this.biosService.create({
      displayName: 'Nick Coffey',
      title: 'Sr. Software Engineer',
      info: `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis massa et diam blandit rutrum. Ut ac justo quam. Nam tincidunt ullamcorper imperdiet. Curabitur dignissim sodales nulla, sed blandit sapien maximus eget. Aenean ac fringilla sapien, id pellentesque felis. Praesent et interdum nulla. Mauris eget justo sit amet turpis finibus ornare.

Duis accumsan tincidunt aliquet. Vestibulum rhoncus eleifend tellus, at facilisis leo vestibulum eu. In blandit, arcu sed suscipit efficitur, metus sem vehicula lorem, sit amet maximus est est vitae mauris. Proin in quam eget ligula volutpat aliquet. Duis sagittis feugiat enim non lobortis. Mauris aliquam sagittis posuere. Duis id eros ultricies, consectetur magna id, ultricies lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In efficitur nunc nunc, in porta arcu ullamcorper vel. Integer sed leo nisi.
      `,
      picture: 'https://picsum.photos/id/0/400/500',
    });
  }
}
