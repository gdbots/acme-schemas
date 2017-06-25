import Message from '@gdbots/pbj/Message';
import GdbotsIamGetRoleResponseV1Mixin from '//GetRoleResponseV1Mixin';
import GdbotsNcrGetNodeResponseV1Mixin from '//GetNodeResponseV1Mixin';
import GdbotsPbjxResponseV1Mixin from '//ResponseV1Mixin';
import Schema from '@gdbots/pbj/Schema';

export default class GetRoleResponseV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:request:get-role-response:1-0-0', this.name,
      [],
      [
        GdbotsPbjxResponseV1Mixin.create(),
        GdbotsNcrGetNodeResponseV1Mixin.create(),
        GdbotsIamGetRoleResponseV1Mixin.create(),
      ]
    );
  }
}
