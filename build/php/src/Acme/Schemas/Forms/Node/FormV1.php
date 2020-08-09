<?php
// @link http://acme-schemas.gdbots.io/json-schema/acme/forms/node/form/1-0-0.json#
namespace Acme\Schemas\Forms\Node;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Common\Mixin\Labelable\LabelableV1 as GdbotsCommonLabelableV1;
use Gdbots\Schemas\Common\Mixin\Labelable\LabelableV1Mixin as GdbotsCommonLabelableV1Mixin;
use Gdbots\Schemas\Common\Mixin\Taggable\TaggableV1 as GdbotsCommonTaggableV1;
use Gdbots\Schemas\Common\Mixin\Taggable\TaggableV1Mixin as GdbotsCommonTaggableV1Mixin;
use Gdbots\Schemas\Forms\Mixin\Form\FormV1 as GdbotsFormsFormV1;
use Gdbots\Schemas\Forms\Mixin\Form\FormV1Mixin as GdbotsFormsFormV1Mixin;
use Gdbots\Schemas\Ncr\Mixin\Expirable\ExpirableV1 as GdbotsNcrExpirableV1;
use Gdbots\Schemas\Ncr\Mixin\Expirable\ExpirableV1Mixin as GdbotsNcrExpirableV1Mixin;
use Gdbots\Schemas\Ncr\Mixin\Indexed\IndexedV1 as GdbotsNcrIndexedV1;
use Gdbots\Schemas\Ncr\Mixin\Indexed\IndexedV1Mixin as GdbotsNcrIndexedV1Mixin;
use Gdbots\Schemas\Ncr\Mixin\Lockable\LockableV1 as GdbotsNcrLockableV1;
use Gdbots\Schemas\Ncr\Mixin\Lockable\LockableV1Mixin as GdbotsNcrLockableV1Mixin;
use Gdbots\Schemas\Ncr\Mixin\Node\NodeV1 as GdbotsNcrNodeV1;
use Gdbots\Schemas\Ncr\Mixin\Node\NodeV1Mixin as GdbotsNcrNodeV1Mixin;
use Gdbots\Schemas\Ncr\Mixin\Node\NodeV1Trait as GdbotsNcrNodeV1Trait;
use Gdbots\Schemas\Ncr\Mixin\Publishable\PublishableV1 as GdbotsNcrPublishableV1;
use Gdbots\Schemas\Ncr\Mixin\Publishable\PublishableV1Mixin as GdbotsNcrPublishableV1Mixin;
use Gdbots\Schemas\Ncr\Mixin\Sluggable\SluggableV1 as GdbotsNcrSluggableV1;
use Gdbots\Schemas\Ncr\Mixin\Sluggable\SluggableV1Mixin as GdbotsNcrSluggableV1Mixin;

final class FormV1 extends AbstractMessage implements
    Form,
    GdbotsNcrNodeV1,
    GdbotsFormsFormV1,
    GdbotsCommonLabelableV1,
    GdbotsCommonTaggableV1,
    GdbotsNcrExpirableV1,
    GdbotsNcrIndexedV1,
    GdbotsNcrLockableV1,
    GdbotsNcrPublishableV1,
    GdbotsNcrSluggableV1
{
    use GdbotsNcrNodeV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:acme:forms:node:form:1-0-0', __CLASS__,
            [],
            [
                GdbotsNcrNodeV1Mixin::create(),
                GdbotsFormsFormV1Mixin::create(),
                GdbotsCommonLabelableV1Mixin::create(),
                GdbotsCommonTaggableV1Mixin::create(),
                GdbotsNcrExpirableV1Mixin::create(),
                GdbotsNcrIndexedV1Mixin::create(),
                GdbotsNcrLockableV1Mixin::create(),
                GdbotsNcrPublishableV1Mixin::create(),
                GdbotsNcrSluggableV1Mixin::create(),
            ]
        );
    }

    /**
     * @return array
     */
    public function getUriTemplateVars()
    {
        return [
            '_id' => (string)$this->get('_id'),
            'slug' => $this->get('slug'),
        ];
    }
}
