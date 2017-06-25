import test from 'tape';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import GdbotsNcrNodeV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/node/NodeV1Mixin';

test('Can create all messages', (t) => {
  t.same('a', GdbotsNcrNodeV1Mixin.create().getId().toString());
  MessageResolver.all().forEach((classProto) => {
    const message = classProto.create();
    t.true(message instanceof Message, `Unable to create [${classProto.schema().getId()}]`);
  });

  t.end();
});
