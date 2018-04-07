<?php
// @link http://acme-schemas.gdbots.io/json-schema/acme/forms/request/search-forms-response/1-0-0.json#
namespace Acme\Schemas\Forms\Request;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Forms\Mixin\SearchFormsResponse\SearchFormsResponseV1 as GdbotsFormsSearchFormsResponseV1;
use Gdbots\Schemas\Forms\Mixin\SearchFormsResponse\SearchFormsResponseV1Mixin as GdbotsFormsSearchFormsResponseV1Mixin;
use Gdbots\Schemas\Ncr\Mixin\SearchNodesResponse\SearchNodesResponseV1 as GdbotsNcrSearchNodesResponseV1;
use Gdbots\Schemas\Ncr\Mixin\SearchNodesResponse\SearchNodesResponseV1Mixin as GdbotsNcrSearchNodesResponseV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Response\ResponseV1 as GdbotsPbjxResponseV1;
use Gdbots\Schemas\Pbjx\Mixin\Response\ResponseV1Mixin as GdbotsPbjxResponseV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Response\ResponseV1Trait as GdbotsPbjxResponseV1Trait;

final class SearchFormsResponseV1 extends AbstractMessage implements
    SearchFormsResponse,
    GdbotsPbjxResponseV1,
    GdbotsNcrSearchNodesResponseV1,
    GdbotsFormsSearchFormsResponseV1
{
    use GdbotsPbjxResponseV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:acme:forms:request:search-forms-response:1-0-0', __CLASS__,
            [],
            [
                GdbotsPbjxResponseV1Mixin::create(),
                GdbotsNcrSearchNodesResponseV1Mixin::create(),
                GdbotsFormsSearchFormsResponseV1Mixin::create(),
            ]
        );
    }
}
