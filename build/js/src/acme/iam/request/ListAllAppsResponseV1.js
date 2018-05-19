// @link http://acme-schemas.gdbots.io/json-schema/acme/iam/request/list-all-apps-response/1-0-0.json#
import GdbotsIamListAllAppsResponseV1Mixin from '@gdbots/schemas/gdbots/iam/mixin/list-all-apps-response/ListAllAppsResponseV1Mixin';
import GdbotsPbjxResponseV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/response/ResponseV1Mixin';
import GdbotsPbjxResponseV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/response/ResponseV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';

export default class ListAllAppsResponseV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:request:list-all-apps-response:1-0-0', ListAllAppsResponseV1,
      [],
      [
        GdbotsPbjxResponseV1Mixin.create(),
        GdbotsIamListAllAppsResponseV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxResponseV1Trait(ListAllAppsResponseV1);
MessageResolver.register('acme:iam:request:list-all-apps-response', ListAllAppsResponseV1);
Object.freeze(ListAllAppsResponseV1);
Object.freeze(ListAllAppsResponseV1.prototype);
