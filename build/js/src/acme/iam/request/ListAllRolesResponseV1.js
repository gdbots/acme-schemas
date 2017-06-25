import Message from '@gdbots/pbj/Message';
import GdbotsIamListAllRolesResponseV1Mixin from '//ListAllRolesResponseV1Mixin';
import GdbotsPbjxResponseV1Mixin from '//ResponseV1Mixin';
import Schema from '@gdbots/pbj/Schema';

export default class ListAllRolesResponseV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:request:list-all-roles-response:1-0-0', this.name,
      [],
      [
        GdbotsPbjxResponseV1Mixin.create(),
        GdbotsIamListAllRolesResponseV1Mixin.create(),
      ]
    );
  }
}
