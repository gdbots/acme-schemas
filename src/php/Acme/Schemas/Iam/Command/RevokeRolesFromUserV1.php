<?php

namespace Acme\Schemas\Iam\Command;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\FieldBuilder as Fb;
use Gdbots\Pbj\Schema;
use Gdbots\Pbj\Type as T;
use Gdbots\Schemas\Iam\Mixin\RevokeRolesFromUser\RevokeRolesFromUserV1 as GdbotsIamRevokeRolesFromUserV1;
use Gdbots\Schemas\Iam\Mixin\RevokeRolesFromUser\RevokeRolesFromUserV1Mixin;
use Gdbots\Schemas\Iam\Mixin\RevokeRolesFromUser\RevokeRolesFromUserV1Trait;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1Trait;

final class RevokeRolesFromUserV1 extends AbstractMessage implements
    RevokeRolesFromUser,
    CommandV1,
    GdbotsIamRevokeRolesFromUserV1
  
{
    use CommandV1Trait;
    use RevokeRolesFromUserV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:acme:iam:command:revoke-roles-from-user:1-0-0', __CLASS__,
            [],
            [
                CommandV1Mixin::create(), 
                RevokeRolesFromUserV1Mixin::create()
            ]
        );
    }
}
