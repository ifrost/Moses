define(function(require) {

    var handjs = require("../node_modules/handjs/hand.min");
    var DefaultMosesAlgorithm = require('../js/algorithm/default-moses-algorithm');
    var MosesFit = require('../js/algorithm/moses-fit');
    var PatternCollectionAlgorithm = require('../js/algorithm/pattern-collection-algorithm');
    var PolygonalLineAlgorithm = require('../js/algorithm/polygonal-line-algorithm');
    var ReversedMosesAlgorithm = require('../js/algorithm/reversed-moses-algorithm');
    var ShiftedPointsMosesAlgorithm = require('../js/algorithm/shifted-points-moses-algorithm');
    var StraightLineAlgorithm = require('../js/algorithm/straight-line-algorithm');
    var Directions = require('../js/model/directions');
    var Match = require('../js/model/match');
    var PatternCollection = require('../js/model/pattern-collection');
    var DefaultRecogniser = require('../js/recogniser/default-recogniser');
    var PatternFactory = require('../js/model/pattern-factory');
    var Point = require('../js/model/point');
    var Pattern = require('../js/model/pattern');
    var Direction = require('../js/util/direction');
    var RecognitionData = require('../js/model/recognition-data');
    var Math = require('../js/util/math');
    var DistanceSampler = require('../js/sampler/distance-sampler');
    var MosesPatterns = require('../js/model/moses-patterns');
    var DomSampler = require('../js/sampler/dom-sampler');
    var Sampler = require('../js/sampler/sampler');
    var TimeSampler = require('../js/sampler/time-sampler');

    return {"algorithm":{"DefaultMosesAlgorithm":DefaultMosesAlgorithm,"MosesFit":MosesFit,"PatternCollectionAlgorithm":PatternCollectionAlgorithm,"PolygonalLineAlgorithm":PolygonalLineAlgorithm,"ReversedMosesAlgorithm":ReversedMosesAlgorithm,"ShiftedPointsMosesAlgorithm":ShiftedPointsMosesAlgorithm,"StraightLineAlgorithm":StraightLineAlgorithm},"model":{"Directions":Directions,"Match":Match,"PatternCollection":PatternCollection,"PatternFactory":PatternFactory,"Point":Point,"Pattern":Pattern,"RecognitionData":RecognitionData,"MosesPatterns":MosesPatterns},"recogniser":{"DefaultRecogniser":DefaultRecogniser},"util":{"Direction":Direction,"Math":Math},"sampler":{"DistanceSampler":DistanceSampler,"DomSampler":DomSampler,"Sampler":Sampler,"TimeSampler":TimeSampler}}

});