// @link http://acme-schemas.gdbots.io/json-schema/acme/iam/request/get-all-apps-response/1-0-0.json#
import GdbotsIamGetAllAppsResponseV1Mixin from '@gdbots/schemas/gdbots/iam/mixin/get-all-apps-response/GetAllAppsResponseV1Mixin';
import GdbotsPbjxResponseV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/response/ResponseV1Mixin';
import GdbotsPbjxResponseV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/response/ResponseV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';

export default class GetAllAppsResponseV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:request:get-all-apps-response:1-0-0', GetAllAppsResponseV1,
      [],
      [
        GdbotsPbjxResponseV1Mixin.create(),
        GdbotsIamGetAllAppsResponseV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxResponseV1Trait(GetAllAppsResponseV1);
MessageResolver.register('acme:iam:request:get-all-apps-response', GetAllAppsResponseV1);
Object.freeze(GetAllAppsResponseV1);
Object.freeze(GetAllAppsResponseV1.prototype);
