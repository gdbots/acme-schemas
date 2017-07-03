<?php
// @link http://acme-schemas.gdbots.io/json-schema/acme/iam/command/create-user/1-0-0.json#
namespace Acme\Schemas\Iam\Command;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Iam\Mixin\CreateUser\CreateUserV1 as GdbotsIamCreateUserV1;
use Gdbots\Schemas\Iam\Mixin\CreateUser\CreateUserV1Mixin as GdbotsIamCreateUserV1Mixin;
use Gdbots\Schemas\Ncr\Mixin\CreateNode\CreateNodeV1 as GdbotsNcrCreateNodeV1;
use Gdbots\Schemas\Ncr\Mixin\CreateNode\CreateNodeV1Mixin as GdbotsNcrCreateNodeV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1 as GdbotsPbjxCommandV1;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1Mixin as GdbotsPbjxCommandV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1Trait as GdbotsPbjxCommandV1Trait;

final class CreateUserV1 extends AbstractMessage implements
    CreateUser,
    GdbotsPbjxCommandV1,
    GdbotsNcrCreateNodeV1,
    GdbotsIamCreateUserV1
{
    use GdbotsPbjxCommandV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:acme:iam:command:create-user:1-0-0', __CLASS__,
            [],
            [
                GdbotsPbjxCommandV1Mixin::create(),
                GdbotsNcrCreateNodeV1Mixin::create(),
                GdbotsIamCreateUserV1Mixin::create(),
            ]
        );
    }
}
