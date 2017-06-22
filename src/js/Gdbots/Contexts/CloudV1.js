'use strict';

import Cloud from '/cloud';
import Format from 'gdbots/pbj/enum/format';
import Schema from 'gdbots/pbj/schema';
import StringType from 'gdbots/pbj/type/string-type';
import SystemUtils from 'gdbots/common/util/system-utils';

export default class CloudV1 extends SystemUtils.mixinClass(Cloud)
{
  /**
   * @return Schema
   */
  static defineSchema() {
    return new Schema('pbj:gdbots:contexts::cloud:1-0-0', this.name,
      [
        Fb.create('provider', StringType.create())
          .maxLength(20)
          .format(Format.SLUG)
          .build(),
        Fb.create('region', StringType.create())
          .maxLength(20)
          .format(Format.SLUG)
          .build(),
        Fb.create('zone', StringType.create())
          .maxLength(20)
          .format(Format.SLUG)
          .build(),
        Fb.create('instance_id', StringType.create())
          .maxLength(50)
          .pattern('^[\\w\\.-]+$')
          .build(),
        Fb.create('instance_type', StringType.create())
          .maxLength(20)
          .pattern('^[\\w\\.-]+$')
          .build()
      ]
    );
  }
}
