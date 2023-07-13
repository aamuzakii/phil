/* ========= =========== Init function on load =========== =========== */
$(document).ready(function(){

  $('body').tooltip({
    selector: '[data-toggle=tooltip]',
  });

  // Select toggle init
  toggleSelectInit();

  // Datepicker init
  datePickerInit();

  // Datatable init
  dataTableInit();

  // Input multiple file init
  $('.jc-multipleupload-progress-with-submit').each(function(){
    $(this).bind('change', multipleUploadAction);
  })

  // Input single file init
  $('.jc-singleupload').each(function(){
    $(this).bind('change', singleUploadAction);
  })

  // Listen to add row trigger
  $('.jc-add-row').click(addNewRow);

  // Listen to delete row trigger
  $('.jc-delete-row').click(deleteThisRow);

  // Listen to helper total sum
  $('.ju-sum-input').each(function(){
    totalAmountOf($(this));
  })

  // auto text init (should be placed after listener total sum function)
  $('.jc-auto-text').each(function(){
    initAutoText($(this));
  })

  // freetier navbar
  hoverFreetierNavbarMenu();

  // enable scroll if using modal absolute
  checkAbsoluteModal();

  $('.custom-multidropdown .dropdown-menu .dropdown-item').each(function(){
    const multidrop = $(this).closest(".custom-multidropdown");
    if (!multidrop.hasClass("custom-multidropdown-vue")){
      initcustomMultiDropdown($(this));
    }
  })
  $('.custom-multidropdown').each(function(){
    adjustSelectedOptions($(this));
  })
  // shadow for table scroll
  $('.tl-table-shadow__table').each(function(){
    $(this).bind('scroll', shadowTableScroll);
  })
});

/* ========= =========== Init plugin setup =========== =========== */
// Datepicker init
const datePickerInit = () => {
  const el = $(".input-datepicker");
  // please defined date format as data attribute (eg: data-date-format="dd M yyyy") on html tag element
  el.datepicker({
    orientation: "bottom auto",
    todayHighlight: true,
    templates: {
      leftArrow: '<i class="ic ic-chevron-left"></i>',
      rightArrow: '<i class="ic ic-chevron-right"></i>'
    }
  });
  if (el.val() === '' && !el.data('empty-on-init')) {
    el.datepicker("setDate", new Date());
  }
  el.on('change', function (e) {
    $(this)[0].dispatchEvent(new Event('input'));
  });
}

// callback function for trigger v-model on datepicker vue js
const initDatePicker = (id, formatOptions) => {
  $(`#${id}`).datepicker(formatOptions).on("change", function (e) {
    document.getElementById(`${id}`).dispatchEvent(new Event("input"));
  });
  $(`#${id}`).addClass('input-datepicker');
}

// set default date
const setValDatepicker = (id, paramDate) => {
  $(`#${id}`).datepicker("setDate", paramDate);
}
// clear date
const clearValDatepicker = (id) => {
  $(`#${id}`).datepicker("clearDates");
}

/**
 * To handle event dispatched by InputDatepicker.vue.
 * When the event DatePickerInitVue is dispatched, the JS should "assign" datepicker to the predefined element.
 */
document.addEventListener('DatePickerInitVue', function (e) {
  const el = $('.v-input-datepicker');
  el.datepicker({
    orientation: 'bottom auto',
    todayHighlight: true,
    templates: {
      leftArrow: '<i class="ic ic-chevron-left"></i>',
      rightArrow: '<i class="ic ic-chevron-right"></i>',
    },
  });

  el.on('change', function () {
    $(this)[0].dispatchEvent(new Event('input'));
  });
});

const dataTableInit = () => {
  $.fn.dataTable.ext.classes.sFilter = 'tl-filter__item tl-filter__item-search';
  $.fn.dataTable.ext.classes.sFilterInput = 'form-control prepend-icon ic-search';
  $.fn.dataTable.ext.classes.sSortable = 'sort';
  $.fn.dataTable.ext.classes.sSortAsc = 'sort sorting_asc';
  $.fn.dataTable.ext.classes.sSortDesc = 'sort sorting_desc';
  $.fn.dataTable.ext.classes.sPageButton = 'btn btn-icon';

  $('.table-datatable-basic').DataTable({
    paging: false,
    searching: false,
    "info": false,
    "autoWidth": false,
  });

  $('.table-datatable').DataTable({
    "dom": 'r<"tl-table-scroll"t><"pagination"lip>',
    "pagingType": "full_numbers",
    "lengthMenu": [ [10, 25, 50, -1], [10, 25, 50, "All"] ],
    language: {
      search: '',
      searchPlaceholder: 'Search',
      oPaginate: {
        sFirst: '<i class="ic ic-chevron-first"></i>',
        sPrevious: '<i class="ic ic-chevron-left"></i>',
        sNext: '<i class="ic ic-chevron-right"></i>',
        sLast: '<i class="ic ic-chevron-last"></i>'
      }
    },
    "order": []
  });

  $('.table-datatable-search').DataTable({
    "dom": '<"tl-filter__wrapper"f>r<"tl-table-scroll"t><"pagination"lip>',
    "pagingType": "full_numbers",
    "lengthMenu": [ [10, 25, 50, -1], [10, 25, 50, "All"] ],
    language: {
      search: '',
      searchPlaceholder: 'Search',
      oPaginate: {
        sFirst: '<i class="ic ic-chevron-first"></i>',
        sPrevious: '<i class="ic ic-chevron-left"></i>',
        sNext: '<i class="ic ic-chevron-right"></i>',
        sLast: '<i class="ic ic-chevron-last"></i>'
      }
    },
    "order": []
  });

  $('.table-datatable-search-checkbox').DataTable({
    "dom": '<"tl-filter__wrapper"f>r<"tl-table-scroll"t><"pagination"lip>',
    "pagingType": "full_numbers",
    "lengthMenu": [ [10, 25, 50, -1], [10, 25, 50, "All"] ],
    language: {
      search: '',
      searchPlaceholder: 'Search',
      oPaginate: {
        sFirst: '<i class="ic ic-chevron-first"></i>',
        sPrevious: '<i class="ic ic-chevron-left"></i>',
        sNext: '<i class="ic ic-chevron-right"></i>',
        sLast: '<i class="ic ic-chevron-last"></i>'
      }
    },
    "columnDefs": [{
        "targets": 0,
        "orderable": false,
        "searchable": false
    }]
  });

  $('input[type=number]').keypress(function(key) {
    if(key.charCode < 48 || key.charCode > 57) return false;
  });
}

/* alertToastDisplay('stringtext', 'stringtype', timeshow);
  stringtext : cane be only string and can be html
  stringtype : only 3 possibility string ('warning', 'danger', 'success')
  timeshow : milisecond to display before destroy (this is optional), by default we display alert toast in 3000 ms
*/
const alertToastDisplay = ($text, $type, $duration) => {
  let $icon = $type;
  const $dur = ($duration || 3000) + 1000;
  if ($type === 'danger') {
    $icon = 'error';
  } else if ($type === 'warning') {
    $icon = 'warning-line'
  }
  const $elm = `
  <div class="alert alert-slide-top alert-${$type} hidden alert-dismissible fade show" role="alert">
    <span class="ic ic-${$icon}"></span>
    <span class="text-dark">${$text}</span>
    <button type="button" class="close d-none" data-dismiss="alert" aria-label="Close"></button>
  </div>
`
const main = $('main');
main.append($elm);
setTimeout(function(){ $('.alert-slide-top.hidden').removeClass('hidden'); }, 1000);
setTimeout(function(){ $('.alert-slide-top').alert('close'); }, $dur);
}

const openModal = (id) => {
  $(`#${id}`).on('hidden.bs.modal', function (e) {
    $(this)[0].dispatchEvent(new Event('hidden.bs.modal'));
    $(`#${id}`).off('hidden.bs.modal');
  });
  $(`#${id}`).modal('show');
}
const closeModal = (id) => {
  $(`#${id}`).modal('hide');
}
const toggleModal = (id) => {
  $(`#${id}`).modal('toggle');
}

// Intercom button
$("#needSupportButton").click(function(){Intercom("showNewMessage")});

/* ========= =========== =========== Helper Js  ========= =========== =========== */
// custom select dropdown
const initcustomMultiDropdown = (elm) => {
  const isTarget = elm.attr('data-target-id');
  if (isTarget) {
    const $targetElm = $(".dropdown-menu-wrapper[data-id-ref='"+isTarget+"']");
    elm.on('mouseover', {isTarget}, function(ev) {
      $targetElm.show();
    })
    elm.bind('mouseout', {isTarget}, function(ev) {
      $targetElm.hide();
    })
    $targetElm.on('mouseover', function(){
      $(this).show();
    });
    $targetElm.on('mouseout', function(){
      $(this).hide();
    });
    $targetElm.on('click', function(e){
      e.stopPropagation();
    })

    // search option function
    const searchElm = $targetElm.find('.dropdown-menu-content__search input');
    searchElm.on('keyup' ,function(e){
      const searchKey = $(this).val();
      const contentWrapper = $(this).closest('.dropdown-menu-content');
      const optionItem = contentWrapper.find('.dropdown-menu-content__item');
      optionItem.filter(function(){
        if ($.trim($(this).text()).toLowerCase().indexOf(searchKey.toLowerCase()) >= 0) {
          $(this).show();
          $(this).removeClass('disabled');
        } else {
          $(this).hide();
          $(this).addClass('disabled');
        }
      })

      // hide all option if key didn't match
      const disabledOption = contentWrapper.find('.dropdown-menu-content__item.disabled');
      if (disabledOption.length === optionItem.length) {
        const notFoundElm = `<p class="option-not-find text-center py-3">Data not found</p>`;
        if ( !(contentWrapper.find('.option-not-find').length) ){
          contentWrapper.append(notFoundElm);
        }
      } else {
        const notFoundElm = contentWrapper.find('.option-not-find');
        if (notFoundElm.length) {
          notFoundElm.remove();
        }
      }

      // show reset button
      if (searchKey.length) {
        contentWrapper.find('.icon--reset').show();
      } else {
        contentWrapper.find('.icon--reset').hide();
      }
    })

    // reset button function
    const iconReset = $targetElm.find('.dropdown-menu-content__search .icon--reset');
    iconReset.on('click', function(){
      const contentWrapper = $(this).closest('.dropdown-menu-content');
      const optionItem = contentWrapper.find('.dropdown-menu-content__item');
      $(this).closest('.dropdown-menu-content__search').find('input.form-control.ic-search').val("");
      $(this).hide();
      optionItem.filter(function(){
        $(this).show();
        $(this).removeClass('disabled');
      });
    })

    // select number function
    const allOption = $targetElm.find('.dropdown-menu-content__multiple-checklist .dropdown-menu-content__item');
    allOption.on('change', adjustSelectedOptions);
  }

}
/*
  original placeholder & dropdown should be like this,
  we do custom on vue component to adjust UX
  <span class="placeholder-text"
    data-default-placeholder="All employees"
    data-selected-placeholder="Specific employees">
      All employee
  </span>

  <span class="selected-options-sub"></span>
*/
const adjustSelectedOptions = function(elm) {
  let wrapperMultidropdown = $(this).closest('.custom-multidropdown');
  if (!wrapperMultidropdown.length) {
    wrapperMultidropdown = elm;
  }
  const placeholderTextElm = wrapperMultidropdown.find('.placeholder-text');
  const defaultPlaceholder = placeholderTextElm.attr('data-default-placeholder');
  const selectedPlaceholder = placeholderTextElm.attr('data-selected-placeholder');
  const totalSelectedOptions = wrapperMultidropdown.find('.total-selected-options');
  const selectedOptionsLength = wrapperMultidropdown.find('.dropdown-menu-content__item input[type="checkbox"]:checked').length;
  if (selectedOptionsLength > 0) {
    placeholderTextElm.text(selectedPlaceholder);
    totalSelectedOptions.text('('+selectedOptionsLength+')');
    totalSelectedOptions.removeClass('d-none');
  } else {
    placeholderTextElm.text(defaultPlaceholder);
    totalSelectedOptions.text("");
    totalSelectedOptions.addClass('d-none');
  }
  const groupOptions = wrapperMultidropdown.find('.dropdown-menu-wrapper');
  groupOptions.filter(function(){
    const idRef = $(this).attr('data-id-ref');
    const totalGroupOptionElm = wrapperMultidropdown.find(".dropdown-item[data-target-id='"+idRef+"'] .selected-options-sub");
    const selectedGroupOptions = $(this).find('.dropdown-menu-content__item input[type="checkbox"]:checked').length;
    if (selectedGroupOptions > 0) {
      totalGroupOptionElm.text("("+selectedGroupOptions+")");
    } else {
      totalGroupOptionElm.text("");
    }
  })
}

// Select Toggle show - hide
const setToggleChange = function() {
  const $selectedOpt = $(this).children("option:selected");
  const $el = $(this).find("option[data-link]");

  $el.each(function(){
    const $dataLink = $(this).attr('data-link');
    const $setToggle = $(this)[0] === $selectedOpt[0];
    toggleThis($dataLink, $setToggle);
  })
}

const toggleThis = ($dataLink, $isSet) => {
  const $el = $('.'+$dataLink);
  $el.each(function(){
    const $type = $(this).attr('data-type');
    if($isSet) {
      if($type === 'to-show') {
        $(this).show();
      } else if($type === 'to-hide') {
        $(this).hide();
      }
    } else {
      if($type === 'to-show') {
        $(this).hide();
      } else if($type === 'to-hide') {
        $(this).show();
      }
    }
  });
}

const toggleSelectInit = () => {
  // init toggle select on first page load
  $('.ju-toggle-l').each(setToggleChange);

  // activate toggle select on change event
  $('.ju-toggle-l').change(setToggleChange);
}

// auto currency
/*
  - on input you want to implement this function, add class 'jc-auto-text'
    and add attribute 'data-autotext-type' with value 'currency for auto currency'
    add attribute `data-autotext-duplicate` with value false to prevent element being cloned
    you can set to value minus in !input tag (ex: text) to have minus value by using attribute data-autotext-minus="true"
*/
const updateAutoText = ($this, $autoTextType) => {
  if ($autoTextType === 'currency') {
    const $minusPossible = $this.attr('data-autotext-minus') === "true" ? true : false;
    let isMinus = false;
    if ($this.prop("tagName") !== "INPUT") {
      isMinus = parseInt($this.text()) < 0 ? true : false;
      let $filterValue = $this.text().replace(/[^0-9]/g,'');
      $filterValue = $filterValue.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
      $filterValue = $filterValue === "" ? 0 : $filterValue;
      const wrapperAutoText = $this.parent();
      if ($minusPossible && isMinus) {
        if(wrapperAutoText.text().includes("Rp")) {
          wrapperAutoText.addClass("is-minus");
        } else {
          $filterValue = '-'+$filterValue;
        }
      } else if ($minusPossible && !isMinus) {
        wrapperAutoText.removeClass("is-minus");
      }
      $this.text($filterValue);
    } else {
      let $filterValue = $this.val().replace(/[^0-9]/g,'');
      $filterValue = $filterValue.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
      $filterValue = $filterValue === "" ? 0 : $filterValue;
      if ($filterValue.length > 1 && $filterValue.charAt(0) === "0") {
        $filterValue = $filterValue.substr(1);
      }
      $this.val($filterValue);
    }
  }
}

const listenerAutoText = (e) => {

  const $this = $(e.currentTarget);
  const $autoTextType = $this.attr('data-autotext-type');
  const $origName = e.currentTarget.id.split('-duplicate')[0];
  const $origElm = $this.parent().find("input[name='"+$origName+"']");

  updateAutoText($this, $autoTextType);

  const $newVal = parseInt($this.val().replace(/[^0-9]/g,''));
  $origElm.val($newVal).change();
}

const initAutoText = (elm) => {
  const $isduplicate = elm.attr('data-autotext-duplicate');
  if ($isduplicate === "false") {
    elm.bind("change", listenerAutoText);
    elm.change();
  } else {
    // clone each input with auto text, remove unused attribute
    const maxchar = parseInt(elm.attr('maxlength'));
    const maxCharDuplicate = maxchar + Math.floor((maxchar / 3));
    const $cloneElm = elm.clone();
    const $countDuplicate = $("*[id*='"+$cloneElm.attr('name') + '-duplicate'+"']").length;
    $cloneElm.attr('id', $cloneElm.attr('name') + '-duplicate-' + $countDuplicate);
    $cloneElm.removeAttr('name');
    $cloneElm.addClass('jc-autotext-duplicate');
    $cloneElm.removeClass('jc-auto-text d-none');
    $cloneElm.attr('type', 'text');
    $cloneElm.attr('maxlength', maxCharDuplicate);
    /*
      if input has attribute data-child-sum, remove the attr in duplicate elm
      unbind keyup for original input and switch to bind with change listener
    */
    if($cloneElm.attr('data-child-sum')){
      $cloneElm.removeAttr('data-child-sum');
      elm.unbind("keyup").bind("change", listenSumChanges);
    }

    elm.addClass('d-none');
    $cloneElm.insertAfter(elm);
    const $duplicateInput = elm.parent().find('.jc-autotext-duplicate');

    // set behaviour for each input with auto text
    $duplicateInput.bind("keyup", listenerAutoText);
    $duplicateInput.keyup();
  }
}

// Add new row in table
/*
  - on trigger for add new row add class `jc-add-row`
    and add attribute `data-link-addRow="uniqueName"`
  - on table you want to add row, add attribute data-link-addRow
    with value same with uniqueName you put in trigger.
*/
const addNewRow = (e) => {
  const rowId = Math.floor(Math.random() * 10000);
  const $this = $(e.currentTarget);
  const $linkTarget = $this.attr('data-link-addRow');
  const $tableTarget = $("table[data-link-addRow='"+$linkTarget+"']");
  const $countRow = $tableTarget.find('tr').length;
  const $cloneElm = $tableTarget.find('tr').last().clone();

  // renamed id, value, and selected option in clone row if any
  $cloneElm.find('input').each(function (idx) {
    $(this).attr('id', 'row-' + rowId + '-' + idx);
    $(this).val('');
  });
  // $cloneElm.find('option:selected').removeAttr('selected');

  // if any attribute 'data-child-sum' in input number, activate the js listener on it
  $cloneElm.find("input[type='number'][data-child-sum]")
            .unbind("keyup")
            .bind("keyup", listenSumChanges);

  // if any class 'jc-auto-text' found, activate autotext listener on it
  // and remove duplicate input
  const $autoText = $cloneElm.find(".jc-auto-text");
  $cloneElm.find(".jc-autotext-duplicate").remove();
  $cloneElm.find(".category-info-amount").text('');

  $autoText.each(function(){
    initAutoText($(this));
  });

  // if any modal trigger, adjust class id and behaviour
  const $modalTrigger = $cloneElm.find("[data-toggle='modal']");
  $modalTrigger.each(function(){
    const $oldAttrTarget =  $(this).attr('data-target');
    const $newAttrTarget = $oldAttrTarget.split('-duplicate-')[0] + '-duplicate-' + ($countRow-1);
    const $modaltarget = $(this).closest('td').find('.modal');
    $(this).attr('data-target', $newAttrTarget);

    $modaltarget.attr('id', $newAttrTarget.slice(1));
    $modaltarget.attr('aria-labelledby', $newAttrTarget.slice(1) + 'Label');

    const $hasTriggerTotalFiles = $(this).find('[data-totalfiles-link]');
    if ($hasTriggerTotalFiles){
      $hasTriggerTotalFiles.html("Add");
      const $triggerTotalFilesVal = $hasTriggerTotalFiles.attr('data-totalfiles-link');
      const $newValAttr = $triggerTotalFilesVal.split('-duplicate-')[0] + '-duplicate-' + ($countRow-1);
      $hasTriggerTotalFiles.attr('data-totalfiles-link', $newValAttr);
      $modaltarget.find(".custom-file-list").attr('data-totalfiles-target', $newValAttr);
    } else {
      $(this).html("Add files");
    }
  }, $countRow);

  // if any multipleInput, ajdust js behaviour on it
  const $multipleInputFiles = $cloneElm.find('.jc-multipleupload-progress-with-submit');
  $multipleInputFiles.each(function(){
    $(this).closest('.c-upload-multiple-wrapper').find('.custom-file-list').html('');
    $(this).bind('change', multipleUploadAction);
  });

  // if any button delete row, activate the js listener and show that button
  const $buttonDeleteRow = $cloneElm.find('.jc-delete-row');
  $buttonDeleteRow.attr('data-id', rowId);
  $buttonDeleteRow.attr('data-toggle', 'tooltip');
  $buttonDeleteRow.attr('data-placement', 'top');
  $buttonDeleteRow.attr('title', 'Remove');

  $buttonDeleteRow.click(function(e) {
    $buttonDeleteRow.tooltip('hide');
    deleteThisRow(e);
  });
  if($buttonDeleteRow.hasClass('d-none')){
    $buttonDeleteRow.removeClass('d-none');
  }
  $tableTarget.find('tbody').append($cloneElm);
}

// Delete selected row in table
/* on trigger for delete row add class `jc-delete-row`*/
const deleteThisRow = (e) => {
  const $this = $(e.currentTarget);
  const $thisRow = $this.closest('tr');

  // if any  attribute 'data-child-sum' in input number, re run checking sum total
  const $hasDataSum = $thisRow.find("input[type='number'][data-child-sum]");
  const $listDataSum = $hasDataSum.toArray().map(x => x.getAttribute('data-child-sum'));
  $thisRow.remove();
  $listDataSum.forEach(element => {
    checkTotalSum(element);
  });
}

// Bind total sum from some input
/*
  - on element you want to display total sum, add class 'ju-sum-input'
    and add attribute "data-parent-sum='uniqueName'"
  - on each input you want to count for total sum, add attribute "data-child-sum='uniqueName'"
*/
const checkTotalSum = (dataSum) => {
  // based on attribute data-sum, find parent and child then run checking total sum
  const parent = $(".ju-sum-input[data-parent-sum='"+dataSum+"']");
  const children = $("input[type='number'][data-child-sum='"+dataSum+"']");
  const reducer = (total, child) => total + (parseFloat(child.value) || 0);
  const $totalSum = children.toArray().reduce(reducer, 0);

  // parent might be more than 1
  parent.each(function(){
    $(this).prop("tagName") !== "INPUT" ? $(this).text($totalSum).change() : $(this).val($totalSum).change();
  })
}

const listenSumChanges = (e) => {
  const $dataSum = $(e.currentTarget).attr('data-child-sum');

  // adjust changes to sum
  checkTotalSum($dataSum);
}

const totalAmountOf = (elm) => {
  const $dataSum = elm.attr('data-parent-sum');
  const $listArrChild = $("input[type='number'][data-child-sum='"+$dataSum+"']");

  // update current total sum
  checkTotalSum($dataSum);

  // listen to changes in child
  $listArrChild.each(function(){
    $(this).unbind("keyup").bind("keyup", listenSumChanges);
  })
}

// Input file script
const activateBtnRemoveListFile = (elm) => {
  elm.find('.custom-file-list__reset').bind('click', function(){
    const $customFileList = $(this).closest('.custom-file-list');
    const $attrTotalFilesTarget = $customFileList.attr('data-totalfiles-target');
    $(this).closest('.custom-file-list__item').remove();
    if($attrTotalFilesTarget) {
      $("[data-totalfiles-link='"+$attrTotalFilesTarget+"']").html($customFileList.find('.custom-file-list__item').length);
    }
  });
}

const populateFiles = ($selectedFileEl, newFiles) => {
  const $thisWrapper = $selectedFileEl.closest('.c-upload-multiple-wrapper');
  const $multipleInput = $thisWrapper.find("input[type='file']");
  var i = 0
  for( let file of newFiles ){
    $selectedFileEl.append(`<div class="custom-file-list__item" data-file=${file.name.replace(/\s/g, '*')}>
                    <i class="ic ic-doc"></i>
                    <span class="custom-file-list__name">${file.name}</span>
                    <input name="files[]" type="hidden" data-actual-filename="${file.name}" data-type="custom">
                    <i class="custom-file-loader"></i>
                  </div>`);
    i++
  }
  const $totalUpdatedFiles = $selectedFileEl.attr('data-totalfiles-target');
  if ($totalUpdatedFiles) {
    $("[data-totalfiles-link='"+$totalUpdatedFiles+"']").html($selectedFileEl.find('.custom-file-list__item').length);
  }
}

const multipleUploadAction = (e) => {
  $this = $(e.currentTarget);
  const $fileEvent = e.target.files;
  const $thisWrapper = $this.closest('.c-upload-multiple-wrapper');
  const $selectedFileEl = $thisWrapper.find('.custom-file-list');
  const $currentLength = $selectedFileEl.find('.custom-file-list__item').length;
  const $maxFiles = parseInt($this.attr('data-max-files'));
  const $remainingFileLength = ($maxFiles - $currentLength) > 0 ? ($maxFiles - $currentLength) : 0;
  const $url = $this.attr('data-url');
  const $path = $this.attr('data-path');
  // Checking if exist in files, exclude
  let files = $selectedFileEl.find('.custom-file-list__name').map(function () {
    return $(this).text();
  }).get();
  const newFiles = Array.from($fileEvent).filter((file, index) => !files.includes(file.name) ).slice(0, $remainingFileLength);
  // Set promise file reader to each file
  const $remainingAllowed = $remainingFileLength - $fileEvent.length

  if ($fileEvent.length > 5 || $remainingAllowed < 0){
    alertToastDisplay('Cannot upload more than '+ $maxFiles +' files', 'danger', 3000)
    return
  } else {
    // prevent submit form before upload finished
    $('.btn_to_disabled[type=submit]').addClass('disabled_after').prop("type", "button");

    populateFiles($selectedFileEl, newFiles)
  }

  var promises = Array.from(newFiles, function(el, i) {
    return new Promise(function(resolve, reject) {
      var pReader = new FileReader();
      pReader.onload = function(evt){
        resolve(evt.target.result);
      };
      pReader.readAsDataURL(el);
    })
  });
  // Catch all finished promises from files
  var allPromises = Promise.all(promises)
    .then(function(e) {
      return Array.from(newFiles, function(el, i) {
        el['base64']= e[i]
        return el
      })
    })
  // Triggered if all promises done and push to array
  allPromises.then(function(newFiles) {
    if($selectedFileEl && newFiles.length){
      var filename = uploadFile($this, $url, $path, newFiles);
      let $originalFilename = newFiles.map(file => file.name.replace(/\s/g, '*'));
      let count = 0
      if (filename.length > 0){
        $.each($originalFilename, function(i, value) {
          let $fileItem = $thisWrapper.find('.custom-file-list__item[data-file="'+value+'"]');
          $fileItem.find('.custom-file-loader').remove();
          $fileItem.find('input').val(filename[count])
          $fileItem.append(`<i class="ic ic-reset custom-file-list__reset"></i>`);
          activateBtnRemoveListFile($fileItem.last())
          count++
        });
      } else {
        $.each($originalFilename, function(i, value) {
          $thisWrapper.find('.custom-file-list__item[data-file="'+value+'"]').remove();
        });
      }
    };
  });
}

const activateBtnRemoveSingleFile = (elm) => {
  elm.find('.ic-reset').bind('click', function(){
    elm.find('input[type=file]').val('');
    elm.find('input[name="file[]"]').remove();
    elm.find('.custom-file-label').html('No file selected');
    elm.find('.right-icon').removeClass('ic ic-reset');
  });
}

const singleUploadAction = (e) => {
  $originalFileName = e.currentTarget.files[0].name;
  $customFileWrapper = $(e.currentTarget).closest('.custom-file');
  $customFileNameIcon = $customFileWrapper.find('.right-icon');
  if ($originalFileName && $customFileNameIcon.hasClass("ic-reset")){
    $customFileNameIcon.removeClass("ic ic-reset");
    $customFileNameIcon.addClass("custom-file-loader");
  } else {
    $customFileNameIcon.addClass("custom-file-loader");
  }

  // prevent submit form before upload finished
  $('.btn_to_disabled[type=submit]').addClass('disabled_after').prop("type", "button");

  setTimeout(function(){
    $.when(loaderSingleFunction(e)).done(singleUploadFunction(e));
  }, 500);
}
function loaderSingleFunction(e) {
  var r = $.Deferred();
  const $originalFileName = e.currentTarget.files[0].name;
  $selectedFileElLabel = e.currentTarget.closest('.custom-file').querySelector('label');
  $selectedFileElLabel.innerHTML = $originalFileName;
  r.resolve();
  return r
}
const singleUploadFunction = (e) => {
  // added for save into db
  $this = $(e.currentTarget);
  const $selectedFileEl = $this.closest('.custom-file');
  const $fileEvent = e.currentTarget.files;
  const $url = $this.attr('data-url');
  const $path = $this.attr('data-path');
  const $name = $this.attr('data-name') || "file[]";
  let files = $selectedFileEl.find('.custom-file').map(function () {
    return $(this).text();
  }).get();
  const newFile = Array.from($fileEvent).filter((file, index) => !files.includes(file.name) );
  if($selectedFileEl && newFile.length)
  {
    if($url){
      var filename = uploadFile($this,$url, $path, newFile)
    } else {
      var filename = $this.val();
    }

    if (filename.length > 0)
    {
      for( let file of newFile )
      {
        $customFileWrapper = $this.closest('.custom-file');
        $customFileWrapper.find('input[type=hidden]').remove();
        $selectedFileEl.append(`<input name="${$name}" type="hidden" value="${filename}" data-actual-filename="${file.name}" data-type="custom">`);
        $customFileNameIcon = $customFileWrapper.find('.custom-file-loader');
        if ($customFileNameIcon.hasClass("custom-file-loader")) {
          $customFileNameIcon.removeClass("custom-file-loader");
          $customFileNameIcon.addClass("ic ic-reset");
          activateBtnRemoveSingleFile($customFileWrapper);
        }
      }
    }
    else
    {
      $selectedFileEl.find('input[type=file]').val('');
      $this.closest('.custom-file').find('input[type=hidden]').remove();
      if ($customFileNameIcon.hasClass("custom-file-loader")) {
        $customFileNameIcon.removeClass("custom-file-loader");
      }
      $selectedFileEl.find('label').text('No file selected');
    }
  }
}

const uploadFile = (el, url, path, data) => {
  var formData = new FormData();
  var filename = [];
  var wrapper = el.closest('.custom-file');
  $.each(data, function(key, value){
    formData.append('files['+key+']', value)
  })
  formData.append('count', data.length)
  $.ajax({
    type:'POST',
    url:url+'?path='+path,
    data:formData,
    async:false,
    dataType:'JSON',
    processData: false,
    contentType: false,
    success: function(response){
      if (response.status == 'error'){
        alertToastDisplay(response.message, 'danger', 3000);
        return;
      } else {
        filename = response
      }
    }
  });
  // prevent submit form before upload finished
  setTimeout(function(){
    $('.btn_to_disabled').removeClass('disabled_after').prop("type", "submit");
    if($('.btn_to_disabled').hasClass('disabled')){
      $('.btn_to_disabled').removeClass('disabled')
    }
  }, 500);
  return filename
}

// freetier navbar
const hoverFreetierNavbarMenu = function()
{
  // hover in freetier menu
  $('.isFreeTierMenu').hover(function() {
    $('#needUpgradeFreetierModal').show();

    // set the modal position
    var leftPos = $(this).position().left - 100 + 'px';
    $('#needUpgradeFreetierModal').css('left', leftPos);

    // set the modal content
    var modalContent = $(this).data('freetier');
    $('#needUpgradeFreetierContent').text(modalContent);
  });

  // close modal if hover end
  $('.isFreeTierMenu').mouseleave(function(e) {
    $('#needUpgradeFreetierModal').mouseover(function() {
      $('#needUpgradeFreetierModal').show();
      e.preventDefault();
    });
    $('#needUpgradeFreetierModal').hide();
  });

  // close modal if hover outside modal
  $('#needUpgradeFreetierModal').mouseout(function() {
    $('#needUpgradeFreetierModal').hide();
  });
};

// enable scroll if using modal absolute
const checkAbsoluteModal = function()
{
  $('.modal-absolute').on('shown.bs.modal', function () {
    $('body').addClass('is-absolute');
    $('.modal-backdrop').on('click', function() {
      $('.modal-absolute').modal('hide')
    })
  });
  $('.modal-absolute').on('hidden.bs.modal', function () {
    $('body').removeClass('is-absolute');
  });
};

// shadow for table scroll
const shadowTableScrollHorizontal = function()
{
  $table = $(this);
  $table_wrapper = $table.closest('.tl-table-shadow__wrapper');
  $scrollLeft = $table.scrollLeft();
  $scrollLeftMax = $table[0].scrollWidth - $table[0].clientWidth;

  if($scrollLeft == 0){
    $table_wrapper.removeClass('is-left');
  } else if($scrollLeft == $scrollLeftMax) {
    $table_wrapper.removeClass('is-right');
  } else {
    $table_wrapper.addClass('is-left is-right');
  }
};

// to be copied to specific script files

const setAmountReturn = (e) => {
  const $amtRet = $('.amount-return-total');
  const $totalRequestVal = parseInt($('.amount-request-total').text().split('.').join(''));
  const $totalReportVal = parseInt($('.amount-report-total').text().split('.').join(''));
  const $amtRetRes = $totalRequestVal - $totalReportVal;
  $amtRet.text($amtRetRes).change();
}

const switchElm = (e) => {
  const $wrapperSwitch = $(".jc-switch-elm-wrapper");
  $wrapperSwitch.each(function(){
    const $btnTrigger = $('.jc-switch-trigger');
    $btnTrigger.bind('click', function(e){
      const $activeElm = $(this).closest('.jc-switch-elm-wrapper').find('.switch-elm-on');
      const $inactiveElm = $(this).closest('.jc-switch-elm-wrapper').find('.switch-elm-off');
      $activeElm.each(function() {
        $(this).removeClass("switch-elm-on").addClass("switch-elm-off");
      })
      $inactiveElm.each(function() {
        $(this).removeClass("switch-elm-off").addClass("switch-elm-on");
      })
    })
  });
}

$(document).ready(function(){
  setAmountReturn();
  $('.amount-request-total').bind("DOMNodeInserted", setAmountReturn);
  $('.amount-report-total').bind("DOMNodeInserted", setAmountReturn);

  $('#importPayrollTemplate').on('change', function(){
    $('#submitImportPayroll').prop("disabled", false);
    $('#submitImportPayroll').prop("type", "submit");
  });
});

// NPS Score Modal
$(document).ready(function(){
	function getCookie(a) {
		for (var t = a + "=", e = document.cookie.split(";"), i = 0; i < e.length; i++) {
				for (var o = e[i];
						" " == o.charAt(0);) o = o.substring(1);
				if (0 == o.indexOf(t)) return o.substring(t.length, o.length)
		}
		return ""
	}

	function setCookie(a, t, e) {
		var i = new Date;
		i.setTime(i.getTime() + 24 * e * 60 * 60 * 1e3);
		var o = "expires=" + i.toUTCString();
		document.cookie = a + "=" + t + "; " + o
	}

  //Dashboard for Showing NPS
  if($('#showNPS').val() == 1) {
    zsShowPopup();
  }

  setTimeout(function(){$('#zsitc_container').on('click', '#zsitc_close', function() {
    var csrfToken = $('meta[name="csrf-token"]').attr("content");

    $.ajax({
      type: 'POST',
      url : $('#NPSUrl').val(),
      data: {
        source:'zoho',
        _csrf:csrfToken
      },
      dataType:'JSON',
      success: function (data) {
      },
      error: function (data) {
      }
    });
  });}, 1000);
})