<?php
// @link http://acme-schemas.gdbots.io/json-schema/acme/iam/command/delete-role/1-0-0.json#
namespace Acme\Schemas\Iam\Command;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Iam\Mixin\DeleteRole\DeleteRoleV1 as GdbotsIamDeleteRoleV1;
use Gdbots\Schemas\Iam\Mixin\DeleteRole\DeleteRoleV1Mixin as GdbotsIamDeleteRoleV1Mixin;
use Gdbots\Schemas\Ncr\Mixin\DeleteNode\DeleteNodeV1 as GdbotsNcrDeleteNodeV1;
use Gdbots\Schemas\Ncr\Mixin\DeleteNode\DeleteNodeV1Mixin as GdbotsNcrDeleteNodeV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1 as GdbotsPbjxCommandV1;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1Mixin as GdbotsPbjxCommandV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1Trait as GdbotsPbjxCommandV1Trait;

final class DeleteRoleV1 extends AbstractMessage implements
    DeleteRole,
    GdbotsPbjxCommandV1,
    GdbotsNcrDeleteNodeV1,
    GdbotsIamDeleteRoleV1
{
    use GdbotsPbjxCommandV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:acme:iam:command:delete-role:1-0-0', __CLASS__,
            [],
            [
                GdbotsPbjxCommandV1Mixin::create(),
                GdbotsNcrDeleteNodeV1Mixin::create(),
                GdbotsIamDeleteRoleV1Mixin::create(),
            ]
        );
    }
}
