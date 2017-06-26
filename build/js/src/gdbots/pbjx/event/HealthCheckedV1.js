import Message from '@gdbots/pbj/Message';
import GdbotsPbjxEventV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/event/EventV1Mixin';
import Schema from '@gdbots/pbj/Schema';
import T from '@gdbots/pbj/Type';

export default class HealthCheckedV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:gdbots:pbjx:event:health-checked:1-0-0', HealthCheckedV1,
      [
        /*
         * A random string that is copied from the "check-health" command and
         * is later validated by whatever process initiated the health check.
         */
        Fb.create('msg', T.StringType.create())
          .build(),
      ],
      [
        GdbotsPbjxEventV1Mixin.create(),
      ]
    );
  }
}

