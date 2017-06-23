import Message from '@gdbots/pbj/Message';
import CommandV1Mixin from '/command-v1-mixin';
import Schema from '@gdbots/pbj/Schema';
import T from '@gdbots/pbj/Type';

export default class CheckHealthV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:gdbots:pbjx:command:check-health:1-0-0', this.name,
      [
        /*
         * A random string that will be validated to match after
         * the event "health-checked" is triggered. (ping-pong)
         */
        Fb.create('msg', T.StringType.create())
          .build()
      ],
      [
        CommandV1Mixin.create()
      ]
    );
  }
}