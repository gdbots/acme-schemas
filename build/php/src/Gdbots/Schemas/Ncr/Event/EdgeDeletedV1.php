<?php

namespace Gdbots\Schemas\Ncr\Event;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\FieldBuilder as Fb;
use Gdbots\Pbj\Schema;
use Gdbots\Pbj\Type as T;
use Gdbots\Schemas\Ncr\Mixin\Edge\Edge as GdbotsNcrEdge;
use Gdbots\Schemas\Pbjx\Mixin\Event\EventV1 as GdbotsPbjxEventV1;
use Gdbots\Schemas\Pbjx\Mixin\Event\EventV1Mixin as GdbotsPbjxEventV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Event\EventV1Trait as GdbotsPbjxEventV1Trait;

final class EdgeDeletedV1 extends AbstractMessage implements
    EdgeDeleted,
    GdbotsPbjxEventV1
{
    use GdbotsPbjxEventV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:gdbots:ncr:event:edge-deleted:1-0-0', __CLASS__,
            [
                Fb::create('edge', T\MessageType::create())
                    ->required()
                    ->anyOfClassNames([
                        GdbotsNcrEdge::class,
                    ])
                    ->build(),
            ],
            [
                GdbotsPbjxEventV1Mixin::create(),
            ]
        );
    }
}