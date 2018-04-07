<?php
// @link http://acme-schemas.gdbots.io/json-schema/acme/forms/command/unlock-form/1-0-0.json#
namespace Acme\Schemas\Forms\Command;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Ncr\Mixin\UnlockNode\UnlockNodeV1 as GdbotsNcrUnlockNodeV1;
use Gdbots\Schemas\Ncr\Mixin\UnlockNode\UnlockNodeV1Mixin as GdbotsNcrUnlockNodeV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1 as GdbotsPbjxCommandV1;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1Mixin as GdbotsPbjxCommandV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1Trait as GdbotsPbjxCommandV1Trait;

final class UnlockFormV1 extends AbstractMessage implements
    UnlockForm,
    GdbotsPbjxCommandV1,
    GdbotsNcrUnlockNodeV1
{
    use GdbotsPbjxCommandV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:acme:forms:command:unlock-form:1-0-0', __CLASS__,
            [],
            [
                GdbotsPbjxCommandV1Mixin::create(),
                GdbotsNcrUnlockNodeV1Mixin::create(),
            ]
        );
    }
}
