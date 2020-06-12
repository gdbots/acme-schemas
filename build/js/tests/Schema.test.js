import test from 'tape';
import isPlainObject from 'lodash/isPlainObject';
import Message from '@gdbots/pbj/Message';
import MessageRef from '@gdbots/pbj/well-known/MessageRef';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import '@gdbots/acme-schemas';


test('Can create all messages', async (t) => {
  for (const resolver of Object.values(MessageResolver.all())) {
    const message = (await resolver).default.create();
    const classProto = message.schema().getClassProto();
    t.true(message instanceof Message, `Unable to create [${classProto.schema().getId()}].`);

    const ref = message.generateMessageRef('tag');
    t.true(ref instanceof MessageRef, `Failed to generateMessageRef for [${classProto.schema().getId()}].`);
    t.same(`${ref}`, `${message.generateMessageRef('tag')}`);

    t.true(isPlainObject(message.getUriTemplateVars()), `getUriTemplateVars from [${classProto.schema().getId()}] is not an object.`);
  }

  t.end();
});
