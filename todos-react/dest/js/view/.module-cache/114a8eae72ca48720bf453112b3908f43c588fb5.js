define(["require","exports","module","react"],function(e,t,n){var r=e("react"),i=r.createClass({displayName:"Todo",render:function(){return r.createElement("li",null,r.createElement("div",null,r.createElement("input",{className:"toggle",type:"checkbox"}),r.createElement("label",null),r.createElement("button",{className:"destroy"})),r.createElement("input",{className:"edit"}))}});n.exports=i});