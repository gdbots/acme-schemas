<?php

namespace Gdbots\Schemas\Pbjx\Mixin\Response;

use Gdbots\Pbj\AbstractMixin;
use Gdbots\Pbj\FieldBuilder as Fb;
use Gdbots\Pbj\SchemaId;
use Gdbots\Pbj\Type as T;

final class ResponseV1Mixin extends AbstractMixin
{
    /**
     * {@inheritdoc}
     */
    public function getId()
    {
        return SchemaId::fromString('pbj:gdbots:pbjx:mixin:response:1-0-0');
    }

    /**
     * {@inheritdoc}
     */
    public function getFields()
    {
        return [
            Fb::create('response_id', T\UuidType::create())
                ->required()
                ->build(),
            Fb::create('created_at', T\MicrotimeType::create())
                ->build(),
            Fb::create('ctx_request_ref', T\MessageRefType::create())
                ->build(),
            /*
             * The "ctx_request" is the actual request object that "ctx_request_ref" refers to.
             * In some cases it's useful for request handlers to copy the request into the response
             * so the requestor has everything in one message. This will NOT always be populated.
             * A common use case is search request/response cycles where you want to know what the
             * search criteria was so you can render that along with the results.
             */
            Fb::create('ctx_request', T\MessageType::create())
                ->className(Request::class)
                ->build(),
            Fb::create('ctx_correlator_ref', T\MessageRefType::create())
                ->build()
        ];
    }
}
