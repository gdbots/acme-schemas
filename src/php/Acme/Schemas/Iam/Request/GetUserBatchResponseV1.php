<?php

namespace Acme\Schemas\Iam\Request;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\FieldBuilder as Fb;
use Gdbots\Pbj\Schema;
use Gdbots\Pbj\Type as T;
use Gdbots\Schemas\Iam\Mixin\GetUserBatchResponse\GetUserBatchResponseV1 as GdbotsIamGetUserBatchResponseV1;
use Gdbots\Schemas\Iam\Mixin\GetUserBatchResponse\GetUserBatchResponseV1Mixin;
use Gdbots\Schemas\Iam\Mixin\GetUserBatchResponse\GetUserBatchResponseV1Trait;
use Gdbots\Schemas\Ncr\Mixin\GetNodeBatchResponse\GetNodeBatchResponseV1;
use Gdbots\Schemas\Ncr\Mixin\GetNodeBatchResponse\GetNodeBatchResponseV1Mixin;
use Gdbots\Schemas\Ncr\Mixin\GetNodeBatchResponse\GetNodeBatchResponseV1Trait;
use Gdbots\Schemas\Pbjx\Mixin\Response\ResponseV1;
use Gdbots\Schemas\Pbjx\Mixin\Response\ResponseV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Response\ResponseV1Trait;

final class GetUserBatchResponseV1 extends AbstractMessage implements
    GetUserBatchResponse,
    ResponseV1,
    GetNodeBatchResponseV1,
    GdbotsIamGetUserBatchResponseV1
  
{
    use ResponseV1Trait;
    use GetNodeBatchResponseV1Trait;
    use GetUserBatchResponseV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:acme:iam:request:get-user-batch-response:1-0-0', __CLASS__,
            [],
            [
                ResponseV1Mixin::create(), 
                GetNodeBatchResponseV1Mixin::create(), 
                GetUserBatchResponseV1Mixin::create()
            ]
        );
    }
}
