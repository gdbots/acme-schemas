// @link http://acme-schemas.gdbots.io/json-schema/gdbots/contexts/cloud/1-0-0.json#
import Fb from '@gdbots/pbj/FieldBuilder';
import Format from '@gdbots/pbj/Enum/Format';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import T from '@gdbots/pbj/Type';

export default class CloudV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:gdbots:contexts::cloud:1-0-0', CloudV1,
      [
        Fb.create('provider', T.StringType.create())
          .maxLength(20)
          .format(Format.SLUG)
          .build(),
        Fb.create('region', T.StringType.create())
          .maxLength(20)
          .format(Format.SLUG)
          .build(),
        Fb.create('zone', T.StringType.create())
          .maxLength(20)
          .format(Format.SLUG)
          .build(),
        Fb.create('instance_id', T.StringType.create())
          .maxLength(50)
          .pattern('^[\\w\\.-]+$')
          .build(),
        Fb.create('instance_type', T.StringType.create())
          .maxLength(20)
          .pattern('^[\\w\\.-]+$')
          .build(),
      ],
    );
  }
}

MessageResolver.register('gdbots:contexts::cloud', CloudV1);
