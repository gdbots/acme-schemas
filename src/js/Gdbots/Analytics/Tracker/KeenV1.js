'use strict';

import Keen from '/keen';
import Schema from 'gdbots/pbj/schema';
import StringType from 'gdbots/pbj/type/string-type';
import SystemUtils from 'gdbots/common/util/system-utils';
import TrackerV1Mixin from '/tracker-v1-mixin';

export default class KeenV1 extends SystemUtils.mixinClass(Keen)
{
  /**
   * @return Schema
   */
  static defineSchema() {
    return new Schema('pbj:gdbots:analytics:tracker:keen:1-0-0', this.name,
      [
        Fb.create('project_id', StringType.create())
          .pattern('^\\w+$')
          .build(),
        Fb.create('read_key', StringType.create())
          .pattern('^\\w+$')
          .build(),
        Fb.create('write_key', StringType.create())
          .pattern('^\\w+$')
          .build()
      ],
      [
        TrackerV1Mixin.create()
      ]
    );
  }
}
