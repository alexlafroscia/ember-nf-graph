import Ember from 'ember';
import GraphMouseEvent from 'ember-nf-graph/utils/nf/graph-mouse-event';
import DataGraphic from 'ember-nf-graph/mixins/graph-data-graphic';
import RequiresScaleSource from 'ember-nf-graph/mixins/graph-requires-scale-source';
import HasGraphParent from 'ember-nf-graph/mixins/graph-has-graph-parent';
import computed from 'ember-new-computed';
import GraphicWithTrackingDot from 'ember-nf-graph/mixins/graph-graphic-with-tracking-dot';

const get = Ember.get;
const { or } = Ember.computed;

/**
  A tracking graphic component used to do things like create tracking dots for nf-area or nf-line.
  @namespace components
  @class nf-tracker
  @uses mixins.graph-has-graph-parent
  @uses mixins.graph-data-graphic
  @uses mixins.graph-requires-scale-source
  */
export default Ember.Component.extend(HasGraphParent, DataGraphic, RequiresScaleSource, GraphicWithTrackingDot, {
  tagName: 'g',

  classNameBindings: [':nf-tracker'],

  attributeBindings: ['transform'],

  transform: computed('trackedData.x', 'trackedData.y', 'xScale', 'yScale', {
    get() {
      var xScale = this.get('xScale');
      var yScale = this.get('yScale');
      var x = xScale && xScale(this.get('trackedData.x') || 0);
      var y = yScale && yScale(this.get('trackedData.y') || 0);
      return 'translate(' + x + ',' + y + ')';
    }
  })
});