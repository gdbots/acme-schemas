// @link http://acme-schemas.gdbots.io/json-schema/acme/iam/request/list-all-roles-response/1-0-0.json#
import GdbotsIamListAllRolesResponseV1Mixin from '@gdbots/schemas/gdbots/iam/mixin/list-all-roles-response/ListAllRolesResponseV1Mixin';
import GdbotsPbjxResponseV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/response/ResponseV1Mixin';
import GdbotsPbjxResponseV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/response/ResponseV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';

export default class ListAllRolesResponseV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:request:list-all-roles-response:1-0-0', ListAllRolesResponseV1,
      [],
      [
        GdbotsPbjxResponseV1Mixin.create(),
        GdbotsIamListAllRolesResponseV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxResponseV1Trait(ListAllRolesResponseV1);
MessageResolver.register('acme:iam:request:list-all-roles-response', ListAllRolesResponseV1);
Object.freeze(ListAllRolesResponseV1);
Object.freeze(ListAllRolesResponseV1.prototype);
