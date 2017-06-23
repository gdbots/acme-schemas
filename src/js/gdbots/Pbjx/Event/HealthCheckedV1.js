import Message from '@gdbots/pbj/Message';
import EventV1Mixin from '/event-v1-mixin';
import Schema from '@gdbots/pbj/Schema';
import T from '@gdbots/pbj/Type';

export default class HealthCheckedV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:gdbots:pbjx:event:health-checked:1-0-0', this.name,
      [
        /*
         * A random string that is copied from the "check-health" command and
         * is later validated by whatever process initiated the health check.
         */
        Fb.create('msg', T.StringType.create())
          .build()
      ],
      [
        EventV1Mixin.create()
      ]
    );
  }
}
