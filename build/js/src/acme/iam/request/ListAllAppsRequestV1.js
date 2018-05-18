// @link http://acme-schemas.gdbots.io/json-schema/acme/iam/request/list-all-apps-request/1-0-0.json#
import GdbotsIamListAllAppsRequestV1Mixin from '@gdbots/schemas/gdbots/iam/mixin/list-all-apps-request/ListAllAppsRequestV1Mixin';
import GdbotsPbjxRequestV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/request/RequestV1Mixin';
import GdbotsPbjxRequestV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/request/RequestV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';

export default class ListAllAppsRequestV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:request:list-all-apps-request:1-0-0', ListAllAppsRequestV1,
      [],
      [
        GdbotsPbjxRequestV1Mixin.create(),
        GdbotsIamListAllAppsRequestV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxRequestV1Trait(ListAllAppsRequestV1);
MessageResolver.register('acme:iam:request:list-all-apps-request', ListAllAppsRequestV1);
Object.freeze(ListAllAppsRequestV1);
Object.freeze(ListAllAppsRequestV1.prototype);
