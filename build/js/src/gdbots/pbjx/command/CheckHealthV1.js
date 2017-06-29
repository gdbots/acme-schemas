// @link http://acme-schemas.gdbots.io/json-schema/gdbots/pbjx/command/check-health/1-0-0.json#
import Fb from '@gdbots/pbj/FieldBuilder';
import GdbotsPbjxCommandV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/command/CommandV1Mixin';
import Message from '@gdbots/pbj/Message';
import Schema from '@gdbots/pbj/Schema';
import T from '@gdbots/pbj/Type';

export default class CheckHealthV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:gdbots:pbjx:command:check-health:1-0-0', CheckHealthV1,
      [
        /*
         * A random string that will be validated to match after
         * the event "health-checked" is triggered. (ping-pong)
         */
        Fb.create('msg', T.StringType.create())
          .build(),
      ],
      [
        GdbotsPbjxCommandV1Mixin.create(),
      ]
    );
  }
}
