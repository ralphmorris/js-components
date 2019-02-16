/**
 *
 * Vendor Imports
 * 
 */

window.Zebra_DatePicker = require('zebra_datepicker');
window.select2 = require('select2');
window.swal = require('sweetalert2');


/**
 *
 * Helper Imports
 * 
 */

window.viewportDimensions = require('./components/viewportDimensions');
window.TokenMismatch = require('./components/TokenMismatch.js');
window.ShowValidationErrors = require('./components/ShowValidationErrors.js');
window.ClearValidationErrors = require('./components/ClearValidationErrors.js');
window.Flash = require('./components/Flash.js');

/**
 *
 * Module Imports
 * 
 */

import SelectStyles from "./components/SelectStyles";
import ScrollToId from "./components/ScrollToId";
import Confirm from "./components/Confirm";
import AjaxForm from "./components/AjaxForm";
import SubmitButtonOnClick from "./components/SubmitButtonOnClick";
import Modal from "./components/Modal";
import DatePicker from "./components/DatePicker";
import AutoSubmit from './components/AutoSubmit';
import OnPageSearch from './components/OnPageSearch';
import Graph from  './components/Graph';
import ToolTip from './components/ToolTip';
import CopyToClipboard from './components/CopyToClipboard';
import DragAndDrop from './components/DragAndDrop';
import DropzoneHandler from './components/DropzoneHandler';

(function($) {

var App = {

    // All pages
    common: {
        init: function() {

            new Flash.onLoad();
            new SelectStyles();
            new ScrollToId().onClick();
            new Confirm();
            new AjaxForm();
            new SubmitButtonOnClick();
            new Modal();
            new DatePicker();
            new AutoSubmit();
            new OnPageSearch();
            new Graph();
            new ToolTip();
            new CopyToClipboard();
            new DragAndDrop();
            new DropzoneHandler();

        }
    },

    about_us: {
        init: function() {

            // Example page

        }
    },

};

// The routing fires all common scripts, followed by the page specific scripts.
// Add additional events for more control over timing e.g. a finalize event
var UTIL = {
    fire: function(func, funcname, args) {
        var namespace = App;
        funcname = (funcname === undefined) ? 'init' : funcname;
        if (func !== '' && namespace[func] && typeof namespace[func][funcname] === 'function') {

            namespace[func][funcname](args);

        }
    },
    loadEvents: function() {
        UTIL.fire('common');

        $.each(document.body.className.replace(/-/g, '_').split(/\s+/),function(i,classnm) {
            UTIL.fire(classnm);
        });
    }
};

$(document).ready(UTIL.loadEvents());

})(jQuery); // Fully reference jQuery after this point.