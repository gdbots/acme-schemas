'use strict';

import Schema from 'gdbots/pbj/schema';
import SmallIntType from 'gdbots/pbj/type/small-int-type';
import StringType from 'gdbots/pbj/type/string-type';
import SystemUtils from 'gdbots/common/util/system-utils';
import UserAgent from '/user-agent';

export default class UserAgentV1 extends SystemUtils.mixinClass(UserAgent)
{
  /**
   * @return Schema
   */
  static defineSchema() {
    return new Schema('pbj:gdbots:contexts::user-agent:1-0-0', this.name,
      [
        Fb.create('br_family', StringType.create())
          .pattern('.+')
          .build(),
        Fb.create('br_major', SmallIntType.create())
          .build(),
        Fb.create('br_minor', SmallIntType.create())
          .build(),
        Fb.create('br_patch', SmallIntType.create())
          .build(),
        Fb.create('os_family', StringType.create())
          .pattern('.+')
          .build(),
        Fb.create('os_major', SmallIntType.create())
          .build(),
        Fb.create('os_minor', SmallIntType.create())
          .build(),
        Fb.create('os_patch', SmallIntType.create())
          .build(),
        Fb.create('os_patch_minor', SmallIntType.create())
          .build(),
        Fb.create('dvce_family', StringType.create())
          .pattern('.+')
          .build()
      ]
    );
  }
}
