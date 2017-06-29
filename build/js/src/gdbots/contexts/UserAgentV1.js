// @link http://acme-schemas.gdbots.io/json-schema/gdbots/contexts/user-agent/1-0-0.json#
import Fb from '@gdbots/pbj/FieldBuilder';
import Message from '@gdbots/pbj/Message';
import Schema from '@gdbots/pbj/Schema';
import T from '@gdbots/pbj/Type';

export default class UserAgentV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:gdbots:contexts::user-agent:1-0-0', UserAgentV1,
      [
        Fb.create('br_family', T.StringType.create())
          .pattern('.+')
          .build(),
        Fb.create('br_major', T.SmallIntType.create())
          .build(),
        Fb.create('br_minor', T.SmallIntType.create())
          .build(),
        Fb.create('br_patch', T.SmallIntType.create())
          .build(),
        Fb.create('os_family', T.StringType.create())
          .pattern('.+')
          .build(),
        Fb.create('os_major', T.SmallIntType.create())
          .build(),
        Fb.create('os_minor', T.SmallIntType.create())
          .build(),
        Fb.create('os_patch', T.SmallIntType.create())
          .build(),
        Fb.create('os_patch_minor', T.SmallIntType.create())
          .build(),
        Fb.create('dvce_family', T.StringType.create())
          .pattern('.+')
          .build(),
      ]
    );
  }
}
