<?php

namespace Acme\Schemas\Iam\Command;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\FieldBuilder as Fb;
use Gdbots\Pbj\Schema;
use Gdbots\Pbj\Type as T;
use Gdbots\Schemas\Iam\Mixin\UpdateUser\UpdateUserV1 as GdbotsIamUpdateUserV1;
use Gdbots\Schemas\Iam\Mixin\UpdateUser\UpdateUserV1Mixin;
use Gdbots\Schemas\Iam\Mixin\UpdateUser\UpdateUserV1Trait;
use Gdbots\Schemas\Ncr\Mixin\UpdateNode\UpdateNodeV1;
use Gdbots\Schemas\Ncr\Mixin\UpdateNode\UpdateNodeV1Mixin;
use Gdbots\Schemas\Ncr\Mixin\UpdateNode\UpdateNodeV1Trait;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1Trait;

final class UpdateUserV1 extends AbstractMessage implements
    UpdateUser,
    CommandV1,
    UpdateNodeV1,
    GdbotsIamUpdateUserV1
  
{
    use CommandV1Trait;
    use UpdateNodeV1Trait;
    use UpdateUserV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:acme:iam:command:update-user:1-0-0', __CLASS__,
            [],
            [
                CommandV1Mixin::create(), 
                UpdateNodeV1Mixin::create(), 
                UpdateUserV1Mixin::create()
            ]
        );
    }
}
