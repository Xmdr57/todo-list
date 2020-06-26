$(document).ready(function() {

    $("#add").click(function(e) {
        if ($("#writetodo").val() != '') {
            $("#donethings").append('<li>',
                $("#writetodo").val(), '</li>')
            $("#writetodo").val('')
        }
    })

    var mockData = {



        // start index is used when user add a new item,

        // and we will use this start index as a part of element id.

        startIndex: 0,



        // table's data array, json based.

        // [{id:,isActiveFlag:,value}],

        sortJsonData: [{

                id: 1,

                isActiveFlag: false,

                value: $("#donethings").val()

            }

        ],

        groupMode: true,



        //Make this plugin in key value mode or not.

        keyValueMode: true,


        //if this option is true, new item which you added will be enable. default is false.

        enableNewItem: false,



        //default new item's key

        defaultNewItemKey: "NK",



        //default new item's value

        defaultNewItemText: "new value",



        //table's data array, json based. [{key:,isActiveFlag:,value}].

        sortJsonData: [],



        //show active/inactive button or not, default is true.

        activeButton: true,



        //text on active button.

        activeButtonText: "Active/Inactive",



        //batch job group



        //show batch mode/normal button or not, default is true.

        batchButton: true,


        //text on batch mode button.

        batchButtonText: "Batch Mode",



        //text on normal mode button.

        normalModeButtonText: "Normal Mode",



        //edit mode group



        //show edit button or not, default is true.

        editButton: true,



        //text on edit button.

        editButtonText: "Edit Item",



        //text on save button.

        saveButtonText: "save Item",



        //text on cancel button.

        cancelButtonText: "Cancel",



        //show add item button or not, default is true.

        addButton: true,



        //text on add item button.

        addButtonText: "Add Item",



        //show delete button or not, default is true.

        deleteButton: true,



        //text on delete button.

        deleteButtonText: "Delete Item",



        //show submit button or not, default is true.

        submitButton: true,



        //text on submit button.

        submitButtonText: "Submit",



        //submit button callback.

        submitCallBack: function() {},

    }; ///ciera objeto mockdata

    $("#donethings").sortable(mockData);
    // edit item
    $("#donethings").sortable("EditItem");
    // save item

    $("#donethings").sortable("SaveItem");
    // delete item
    $("#donethings").sortable("DeleteItems");
    // cancel item

    $("#donethings").sortable("CancelEdit");
    // add item

    $("#donethings").sortable("AddItem");
    // Batch Job

    $("#donethings").sortable("BatchMode");
    // normal mode
    $("#donethings").sortable("NormalMode");
    var sortId = "sortable";

    $("#donethings").sortable(mockData);

    var alertStr = alertData(sortId);

    alert(alertStr);
    //Group active and inactive items in two groups.


});