<?php
// @link http://acme-schemas.gdbots.io/json-schema/acme/forms/command/mark-form-as-pending/1-0-0.json#
namespace Acme\Schemas\Forms\Command;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Ncr\Mixin\MarkNodeAsPending\MarkNodeAsPendingV1 as GdbotsNcrMarkNodeAsPendingV1;
use Gdbots\Schemas\Ncr\Mixin\MarkNodeAsPending\MarkNodeAsPendingV1Mixin as GdbotsNcrMarkNodeAsPendingV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1 as GdbotsPbjxCommandV1;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1Mixin as GdbotsPbjxCommandV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1Trait as GdbotsPbjxCommandV1Trait;

final class MarkFormAsPendingV1 extends AbstractMessage implements
    MarkFormAsPending,
    GdbotsPbjxCommandV1,
    GdbotsNcrMarkNodeAsPendingV1
{
    use GdbotsPbjxCommandV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:acme:forms:command:mark-form-as-pending:1-0-0', __CLASS__,
            [],
            [
                GdbotsPbjxCommandV1Mixin::create(),
                GdbotsNcrMarkNodeAsPendingV1Mixin::create(),
            ]
        );
    }
}
