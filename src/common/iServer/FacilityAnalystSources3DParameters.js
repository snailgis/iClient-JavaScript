﻿/**
 * Class: SuperMap.FacilityAnalystSources3DParameters
 * 最近设施分析参数类(源查找资源)
 * 最近设施分析是指在网络上给定一个事件点和一组设施点，查找从事件点到设施点(或从设施点到事件点)以最小耗费能到达的最佳路径。
 * 设施点一般为学校、超市、加油站等服务设施；事件点为需要服务设施的事件位置。
 * 例如事件发生点是一起交通事故，要求查找在10分钟内能到达的最近医院，超过10分钟能到达的都不予考虑。此例中，事故发生地即是一个事件点，周边的医院则是设施点。
 * 最近设施查找实际上也是一种路径分析，因此对路径分析起作用的障碍边、障碍点、转向表、耗费等属性在最近设施分析时同样可设置。
 */
require('./FacilityAnalyst3DParameters');
var SuperMap = require('../SuperMap');
SuperMap.FacilityAnalystSources3DParameters = SuperMap.Class(SuperMap.FacilityAnalyst3DParameters, {

    /**
     * Constructor: SuperMap.FacilityAnalystSources3DParameters
     * 最近设施分析参数类构造函数。
     *
     * Parameters:
     * options - {Object} 可选参数。
     *
     * Allowed options properties:
     */
    initialize: function (options) {
        var me = this;
        if (!options) {
            return;
        }
        SuperMap.Util.extend(me, options);
    },

    /**
     * APIMethod: destroy
     * 释放资源，将引用资源的属性置空。
     */
    destroy: function () {
        var me = this;
        me.edgeID = null;
        me.nodeID = null;
        me.weightName = null;
        me.isUncertainDirectionValid = null;
    },

    CLASS_NAME: "SuperMap.FacilityAnalystSources3DParameters"
});

module.exports = SuperMap.FacilityAnalystSources3DParameters;