<?php

namespace Gdbots\Schemas\Ncr\Command;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\FieldBuilder as Fb;
use Gdbots\Pbj\Schema;
use Gdbots\Pbj\Type as T;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1 as GdbotsPbjxCommandV1;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1Mixin as GdbotsPbjxCommandV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1Trait as GdbotsPbjxCommandV1Trait;

final class DeleteEdgeV1 extends AbstractMessage implements
    DeleteEdge,
    GdbotsPbjxCommandV1
{
    use GdbotsPbjxCommandV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:gdbots:ncr:command:delete-edge:1-0-0', __CLASS__,
            [
                Fb::create('edge', T\MessageType::create())
                    ->required()
                    ->className(Edge::class)
                    ->build()
            ],
            [
                GdbotsPbjxCommandV1Mixin::create()
            ]
        );
    }
}