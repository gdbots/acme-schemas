import Message from '@gdbots/pbj/Message';
import GdbotsIamListAllRolesRequestV1Mixin from '//ListAllRolesRequestV1Mixin';
import GdbotsPbjxRequestV1Mixin from '//RequestV1Mixin';
import Schema from '@gdbots/pbj/Schema';

export default class ListAllRolesRequestV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:request:list-all-roles-request:1-0-0', this.name,
      [],
      [
        GdbotsPbjxRequestV1Mixin.create(),
        GdbotsIamListAllRolesRequestV1Mixin.create(),
      ]
    );
  }
}
