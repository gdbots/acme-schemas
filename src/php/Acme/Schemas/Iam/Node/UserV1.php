<?php

namespace Acme\Schemas\Iam\Node;

use Acme\Schemas\Iam\UserId;
use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\FieldBuilder as Fb;
use Gdbots\Pbj\Schema;
use Gdbots\Pbj\Type as T;
use Gdbots\Schemas\Common\Mixin\Taggable\TaggableV1;
use Gdbots\Schemas\Common\Mixin\Taggable\TaggableV1Mixin;
use Gdbots\Schemas\Common\Mixin\Taggable\TaggableV1Trait;
use Gdbots\Schemas\Iam\Mixin\User\UserV1 as GdbotsIamUserV1;
use Gdbots\Schemas\Iam\Mixin\User\UserV1Mixin;
use Gdbots\Schemas\Iam\Mixin\User\UserV1Trait;
use Gdbots\Schemas\Ncr\Mixin\Indexed\IndexedV1;
use Gdbots\Schemas\Ncr\Mixin\Indexed\IndexedV1Mixin;
use Gdbots\Schemas\Ncr\Mixin\Indexed\IndexedV1Trait;
use Gdbots\Schemas\Ncr\Mixin\Node\NodeV1;
use Gdbots\Schemas\Ncr\Mixin\Node\NodeV1Mixin;
use Gdbots\Schemas\Ncr\Mixin\Node\NodeV1Trait;

final class UserV1 extends AbstractMessage implements
    User,
    NodeV1,
    GdbotsIamUserV1,
    IndexedV1,
    TaggableV1
  
{
    use NodeV1Trait;
    use UserV1Trait;
    use IndexedV1Trait;
    use TaggableV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:acme:iam:node:user:1-0-0', __CLASS__,
            [
                Fb::create('_id', T\IdentifierType::create())
                    ->required()
                    ->withDefault(function() { return UserId::generate(); })
                    ->className('Acme\Schemas\Iam\UserId')
                    ->build()
            ],
            [
                NodeV1Mixin::create(), 
                UserV1Mixin::create(), 
                IndexedV1Mixin::create(), 
                TaggableV1Mixin::create()
            ]
        );
    }
}
