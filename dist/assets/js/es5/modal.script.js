"use strict";$(document).ready(function(){$("#verifyModalContent").on("show.bs.modal",function(t){var e=$(t.relatedTarget).data("whatever"),a=$(this);a.find(".modal-title").text("New message to "+e),a.find(".modal-body input").val(e)}),$("#verifyModalContent1").on("show.bs.modal",function(t){var e=$(t.relatedTarget).data("whatever"),a=$(this);a.find(".modal-title").text("New message to "+e),a.find(".modal-body input").val(e)}),$("#verifyModalContent2").on("show.bs.modal",function(t){var e=$(t.relatedTarget).data("whatever"),a=$(this);a.find(".modal-title").text("New message to "+e),a.find(".modal-body input").val(e)})});