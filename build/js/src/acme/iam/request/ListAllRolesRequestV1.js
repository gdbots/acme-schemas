import Message from '@gdbots/pbj/Message';
import GdbotsIamListAllRolesRequestV1Mixin from '@gdbots/schemas/gdbots/iam/mixin/list-all-roles-request/ListAllRolesRequestV1Mixin';
import GdbotsPbjxRequestV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/request/RequestV1Mixin';
import Schema from '@gdbots/pbj/Schema';

export default class ListAllRolesRequestV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:request:list-all-roles-request:1-0-0', ListAllRolesRequestV1,
      [],
      [
        GdbotsPbjxRequestV1Mixin.create(),
        GdbotsIamListAllRolesRequestV1Mixin.create(),
      ]
    );
  }
}

