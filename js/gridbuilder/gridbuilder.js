/*
Name: gridbuilder.js
Author: Mat Ruszczycky
Version: 1.0
Date Created : 11/11/2013
Date Modified: 08/20/2014
Comments: Building a simple grid system - module pattern.
*/
(function($){
    var GridBuilder = {
        
        form     : $("#gridForm"), 
        columns  : 0,
        gutter   : 0, 
        rowWidth : 0,
        baseUnit : 0,
        output   : "",
        measures : [".one", ".two", ".three", ".four", ".five", 
                    ".six", ".seven", ".eight", ".nine", ".ten", 
                    ".eleven", ".twelve", ".thirteen", ".fourteen", ".fifteen",
                    ".sixteen", ".seventeen", ".eighteen", ".nineteen", ".twenty"],
        
        init : function(){
            GridBuilder.bindEvents();
        },
        
        bindEvents : function(){
            GridBuilder.form.submit(GridBuilder.getInfo);
        },
        
        getInfo : function(event){
            event.preventDefault();
            
            GridBuilder.rowWidth = $("#row-value").val();
            GridBuilder.columns  = $("#col-value").val();
            GridBuilder.gutter   = $("#gutter-value").val();
            
            GridBuilder.buildRow();
        },
        
        buildRow : function(){
            GridBuilder.output = "/* Row Definition and self clearing through clearfix */<br>";
            GridBuilder.output += ".row{<br/>width:" + GridBuilder.rowWidth + "px;<br>";
            GridBuilder.output +=  "margin-right:auto;<br/>margin-left:auto;}<br><br>";

            GridBuilder.output += ".row:before, .row:after { content: ''; display: table; }<br>";
            GridBuilder.output += ".row:after { clear: both; }<br/><br>";
            
            GridBuilder.buildCol();
        },
        
        buildCol : function(){
            var space = GridBuilder.gutter / 2;
            GridBuilder.output += "/* Col Definition and Gutter Space */<br>";
            GridBuilder.output += ".col{<br/>float:left;<br>margin-left:" + space + "px;<br>margin-right:" + space + "px;}<br><br>";
            
            GridBuilder.calcBaseUnit();
        },
        
        calcBaseUnit : function(){
            GridBuilder.baseUnit = GridBuilder.rowWidth / GridBuilder.columns;
            
            GridBuilder.buildMeasurements();
        },
        
        buildMeasurements : function(){
            GridBuilder.output += "/* Col Measurements */<br>";
            for(var i = 0; i < GridBuilder.columns; i++){
              GridBuilder.output += GridBuilder.measures[i] + "{width:" + ( (i + 1) * GridBuilder.baseUnit - GridBuilder.gutter) + "px;}<br><br>";
            }
            
            GridBuilder.showGrid();
        },
        
        showGrid : function(){
            $("#grid-output").html(GridBuilder.output);
        }
    };


    GridBuilder.init();
    
})(jQuery);





























