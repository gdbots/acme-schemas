import Message from '@gdbots/pbj/Message';
import GdbotsNcrGetNodeBatchRequestV1Mixin from '//GetNodeBatchRequestV1Mixin';
import GdbotsPbjxRequestV1Mixin from '//RequestV1Mixin';
import Schema from '@gdbots/pbj/Schema';
import T from '@gdbots/pbj/Type';

export default class GetNodeBatchRequestV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:gdbots:ncr:request:get-node-batch-request:1-0-0', this.name,
      [
        /*
         * Context is a map of data that helps the NCR decide where to read/write data from.
         * A common use case is multi-tenant applications.
         */
        Fb.create('context', T.StringType.create())
          .asAMap()
          .pattern('^[\\w\\/\\.:-]+$')
          .build()
      ],
      [
        GdbotsPbjxRequestV1Mixin.create(),
        GdbotsNcrGetNodeBatchRequestV1Mixin.create(),
      ]
    );
  }
}
