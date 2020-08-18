"use strict";$(document).ready(function(){var e={chart:{height:350,type:"bar"},plotOptions:{bar:{horizontal:!1,endingShape:"rounded",columnWidth:"55%"}},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"],lineCap:"round"},series:[{name:"Net Profit",data:[44,55,57,56,61,58,63,60,66]},{name:"Revenue",data:[76,85,101,98,87,105,91,114,94]},{name:"Free Cash Flow",data:[35,41,36,26,45,48,52,53,41]}],xaxis:{categories:["Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct"]},yaxis:{title:{text:"$ (thousands)"}},fill:{opacity:1},tooltip:{y:{formatter:function(e){return"$ "+e+" thousands"}}}};new ApexCharts(document.querySelector("#basicColumn-chart"),e).render();e={chart:{height:350,type:"bar",toolbar:{show:!1}},plotOptions:{bar:{dataLabels:{position:"top"},endingShape:"rounded"}},colors:["#03A9F4"],dataLabels:{enabled:!0,formatter:function(e){return e+"%"},offsetY:-20,style:{fontSize:"12px",colors:["#333"]}},series:[{name:"Inflation",data:[2.3,3.1,4,10.1,4,3.6,3.2,2.3,1.4,.8,.5,.2]}],xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],position:"top",labels:{offsetY:-18},axisBorder:{show:!1},axisTicks:{show:!1},tooltip:{enabled:!0,offsetY:-35}},fill:{gradient:{shade:"light",type:"horizontal",shadeIntensity:.25,gradientToColors:"#5146d2",inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[50,0,100,100]}},yaxis:{axisBorder:{show:!1},axisTicks:{show:!1},labels:{show:!1,formatter:function(e){return e+"%"}}},title:{text:"Monthly Inflation in Argentina, 2002",floating:!0,offsetY:320,align:"center",style:{color:"#444"}}};new ApexCharts(document.querySelector("#columnDataLabel"),e).render();e={chart:{height:350,type:"bar",stacked:!0,toolbar:{show:!1},zoom:{enabled:!1}},responsive:[{breakpoint:480,options:{legend:{position:"bottom",offsetX:-10,offsetY:0}}}],plotOptions:{bar:{horizontal:!1}},series:[{name:"PRODUCT A",data:[44,55,41,67,22,43]},{name:"PRODUCT B",data:[13,23,20,8,13,27]},{name:"PRODUCT C",data:[11,17,15,15,21,14]},{name:"PRODUCT D",data:[21,7,25,13,22,8]}],xaxis:{type:"datetime",categories:["01/01/2011 GMT","01/02/2011 GMT","01/03/2011 GMT","01/04/2011 GMT","01/05/2011 GMT","01/06/2011 GMT"]},legend:{position:"top"},fill:{opacity:1}};new ApexCharts(document.querySelector("#stackedColumn"),e).render();e={chart:{height:350,type:"bar",toolbar:{show:!1}},plotOptions:{bar:{colors:{ranges:[{from:-100,to:-46,color:"#F15B46"},{from:-45,to:0,color:"#FEB019"}]},columnWidth:"80%",endingShape:"rounded"}},dataLabels:{enabled:!1},series:[{name:"Cash Flow",data:[1.45,5.42,5.9,-.42,-12.6,-18.1,-18.2,-14.16,-11.1,-6.09,.34,3.88,13.07,5.8,2,7.37,8.1,13.57,15.75,17.1,19.8,-27.03,-54.4,-47.2,-43.3,-18.6,-48.6,-41.1,-39.6,-37.6,-29.4,-21.4,-2.4]}],yaxis:{title:{text:"Growth"},labels:{formatter:function(e){return e.toFixed(0)+"%"}}},xaxis:{categories:["2011-01-01","2011-02-01","2011-03-01","2011-04-01","2011-05-01","2011-06-01","2011-07-01","2011-08-01","2011-09-01","2011-10-01","2011-11-01","2011-12-01","2012-01-01","2012-02-01","2012-03-01","2012-04-01","2012-05-01","2012-06-01","2012-07-01","2012-08-01","2012-09-01","2012-10-01","2012-11-01","2012-12-01","2013-01-01","2013-02-01","2013-03-01","2013-04-01","2013-05-01","2013-06-01","2013-07-01","2013-08-01","2013-09-01"],labels:{rotate:-90}},tooltip:{}};new ApexCharts(document.querySelector("#negetiveColumn"),e).render();var t=["#008FFB","#00E396","#FEB019","#FF4560","#775DD0","#546E7A","#26a69a","#D10CE8"];e={chart:{height:350,type:"bar",events:{click:function(e,t,o){console.log(e,t,o)}}},colors:t,plotOptions:{bar:{columnWidth:"45%",distributed:!0,endingShape:"rounded"}},dataLabels:{enabled:!1},series:[{data:[21,22,10,28,16,21,13,30]}],xaxis:{categories:["John","Joe","Jake","Amber","Peter","Mary","David","Lily"],labels:{style:{colors:t,fontSize:"14px"}}}};new ApexCharts(document.querySelector("#distributedColumnChart"),e).render()});