<?php

namespace Acme\Schemas\Iam\Command;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\FieldBuilder as Fb;
use Gdbots\Pbj\Schema;
use Gdbots\Pbj\Type as T;
use Gdbots\Schemas\Iam\Mixin\GrantRolesToUser\GrantRolesToUserV1 as GdbotsIamGrantRolesToUserV1;
use Gdbots\Schemas\Iam\Mixin\GrantRolesToUser\GrantRolesToUserV1Mixin;
use Gdbots\Schemas\Iam\Mixin\GrantRolesToUser\GrantRolesToUserV1Trait;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1Trait;

final class GrantRolesToUserV1 extends AbstractMessage implements
    GrantRolesToUser,
    CommandV1,
    GdbotsIamGrantRolesToUserV1
  
{
    use CommandV1Trait;
    use GrantRolesToUserV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:acme:iam:command:grant-roles-to-user:1-0-0', __CLASS__,
            [],
            [
                CommandV1Mixin::create(), 
                GrantRolesToUserV1Mixin::create()
            ]
        );
    }
}
