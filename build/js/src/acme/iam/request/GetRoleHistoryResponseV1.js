// @link http://acme-schemas.gdbots.io/json-schema/acme/iam/request/get-role-history-response/1-0-0.json#
import GdbotsIamGetRoleHistoryResponseV1Mixin from '@gdbots/schemas/gdbots/iam/mixin/get-role-history-response/GetRoleHistoryResponseV1Mixin';
import GdbotsPbjxGetEventsResponseV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/get-events-response/GetEventsResponseV1Mixin';
import GdbotsPbjxResponseV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/response/ResponseV1Mixin';
import GdbotsPbjxResponseV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/response/ResponseV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';

export default class GetRoleHistoryResponseV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:request:get-role-history-response:1-0-0', GetRoleHistoryResponseV1,
      [],
      [
        GdbotsPbjxResponseV1Mixin.create(),
        GdbotsPbjxGetEventsResponseV1Mixin.create(),
        GdbotsIamGetRoleHistoryResponseV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxResponseV1Trait(GetRoleHistoryResponseV1);
MessageResolver.register('acme:iam:request:get-role-history-response', GetRoleHistoryResponseV1);
Object.freeze(GetRoleHistoryResponseV1);
Object.freeze(GetRoleHistoryResponseV1.prototype);
