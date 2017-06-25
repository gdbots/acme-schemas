import Message from '@gdbots/pbj/Message';
import GdbotsIamUserUpdatedV1Mixin from '//UserUpdatedV1Mixin';
import GdbotsNcrNodeUpdatedV1Mixin from '//NodeUpdatedV1Mixin';
import GdbotsPbjxEventV1Mixin from '//EventV1Mixin';
import Schema from '@gdbots/pbj/Schema';

export default class UserUpdatedV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:event:user-updated:1-0-0', this.name,
      [],
      [
        GdbotsPbjxEventV1Mixin.create(),
        GdbotsNcrNodeUpdatedV1Mixin.create(),
        GdbotsIamUserUpdatedV1Mixin.create(),
      ]
    );
  }
}
