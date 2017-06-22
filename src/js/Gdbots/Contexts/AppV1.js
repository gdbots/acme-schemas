'use strict';

import App from '/app';
import Schema from 'gdbots/pbj/schema';
import StringType from 'gdbots/pbj/type/string-type';
import SystemUtils from 'gdbots/common/util/system-utils';
import UuidType from 'gdbots/pbj/type/uuid-type';

export default class AppV1 extends SystemUtils.mixinClass(App)
{
  /**
   * @return Schema
   */
  static defineSchema() {
    return new Schema('pbj:gdbots:contexts::app:1-0-0', this.name,
      [
        Fb.create('_id', UuidType.create())
          .useTypeDefault(false)
          .build(),
        Fb.create('vendor', StringType.create())
          .maxLength(50)
          .pattern('^[\\w\\.-]+$')
          .build(),
        Fb.create('name', StringType.create())
          .maxLength(50)
          .pattern('^[\\w\\.-]+$')
          .build(),
        Fb.create('version', StringType.create())
          .maxLength(20)
          .pattern('^[\\w\\.-]+$')
          .build(),
        Fb.create('build', StringType.create())
          .maxLength(50)
          .pattern('^[\\w\\.-]+$')
          .build(),
        Fb.create('variant', StringType.create())
          .maxLength(20)
          .pattern('^[\\w\\.-]+$')
          .build()
      ]
    );
  }
}
