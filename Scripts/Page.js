/**
 * Created by a.ovsiannikov on 7/1/2015.
 */
var loadscriptOk = false;

$(function () {
    $.get("tableTemplate.html",function(data) {
        $.template("tableId", data);
    }).then(
        $.get("messageTemplate.html",function(data){
            $.template("messageId",data);
        }).then(
            $("<script>", {
                src: "http://pipes.yahoo.com/pipes/pipe.run?_id=e9a2e77dffb3205d035c4e311d77bbe6&_render=json&_callback=fetchData",
                onload: "checkError()",
                onerror:"checkError()"
            }).appendTo(document.body)
        )
    );

});

var addMessage = function(text)
{
    $.tmpl("messageId",{message: text}).appendTo(document.body);
};

var addNoNews = function()
{
    return addMessage("there aren't any news!");
};

var addErrorMessage = function()
{
    return addMessage("Error, script is not loaded!");
};

var showhideSummary = function(e)
{
    var tr = $(e.target).closest("tr");
    if(!tr.hasClass("description"))
    {
        tr = tr.next();
    }

    if(tr.css('display') == 'none')
    {
        tr.show();
    }
    else
    {
        tr.hide();
    }

};

var checkError = function()
{
    if(!loadscriptOk)
    {
        addErrorMessage();
    }
};

var fetchData = function(data)
{
    loadscriptOk = true;

    if(data.count == 0)
    {
        addNoNews();
    }
    else
    {
        $.tmpl("tableId",data.value.items).appendTo('#news');
        $('#news').on('click',showhideSummary);
    }
};



