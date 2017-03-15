<?php

namespace Acme\Schemas\Iam\Command;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\FieldBuilder as Fb;
use Gdbots\Pbj\Schema;
use Gdbots\Pbj\Type as T;
use Gdbots\Schemas\Iam\Mixin\DeleteUser\DeleteUserV1 as GdbotsIamDeleteUserV1;
use Gdbots\Schemas\Iam\Mixin\DeleteUser\DeleteUserV1Mixin;
use Gdbots\Schemas\Iam\Mixin\DeleteUser\DeleteUserV1Trait;
use Gdbots\Schemas\Ncr\Mixin\DeleteNode\DeleteNodeV1;
use Gdbots\Schemas\Ncr\Mixin\DeleteNode\DeleteNodeV1Mixin;
use Gdbots\Schemas\Ncr\Mixin\DeleteNode\DeleteNodeV1Trait;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1Trait;

final class DeleteUserV1 extends AbstractMessage implements
    DeleteUser,
    CommandV1,
    DeleteNodeV1,
    GdbotsIamDeleteUserV1
  
{
    use CommandV1Trait;
    use DeleteNodeV1Trait;
    use DeleteUserV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:acme:iam:command:delete-user:1-0-0', __CLASS__,
            [],
            [
                CommandV1Mixin::create(), 
                DeleteNodeV1Mixin::create(), 
                DeleteUserV1Mixin::create()
            ]
        );
    }
}